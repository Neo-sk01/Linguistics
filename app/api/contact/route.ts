import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name is required." }),
  email: z
    .string()
    .trim()
    .email({ message: "A valid email is required." }),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? "")
    .refine(
      (value) => value.length === 0 || value.replace(/\D/g, "").length >= 7,
      { message: "Enter a valid phone number." },
    ),
  company: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? ""),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message is required." }),
});

const missingEnvVars = () => {
  const requiredVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  return requiredVars.filter((key) => !process.env[key]);
};

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid form submission.",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const missing = missingEnvVars();

  if (missing.length > 0) {
    console.error(
      `Contact form email could not be sent. Missing environment variables: ${missing.join(", ")}`,
    );
    return NextResponse.json(
      {
        error:
          "Email configuration is incomplete. Please try again later or use an alternate contact method.",
      },
      { status: 500 },
    );
  }

  const { name, email, phone, company, message } = parsed.data;

  const port = Number(process.env.SMTP_PORT);

  if (Number.isNaN(port)) {
    console.error("Invalid SMTP_PORT value.");
    return NextResponse.json(
      { error: "Email configuration is invalid." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure:
      process.env.SMTP_SECURE?.toLowerCase() === "true" || Number(port) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL || "nkuna@imperiumlinguistics.com";

  try {
    await transporter.sendMail({
      to: recipient,
      from:
        process.env.SMTP_FROM ||
        `"Imperium Linguistics Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin-bottom: 12px;">New enquiry from Imperium Linguistics website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      {
        error:
          "We could not send your message right now. Please try again later or email nkuna@imperiumlinguistics.com.",
      },
      { status: 500 },
    );
  }
}
