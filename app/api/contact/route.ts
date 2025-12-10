import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
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

// Schema validation ensures data integrity

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

  const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY or SMTP_PASS environment variable.");
    return NextResponse.json(
      {
        error:
          "Email configuration is incomplete. Please try again later.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, phone, company, message } = parsed.data;

  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL || "mpho66@icloud.com";

  // Use the verified domain email or the testing domain
  const from = process.env.SMTP_FROM || "nkuna@imperiumlinguistics.com";

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `New enquiry from ${name}`,
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

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
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
