
import dotenv from "dotenv";
import { Resend } from "resend";
import path from "path";

// Load environment variables from .env.local file (Next.js convention)
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function main() {
    console.log("📧 Testing Email Configuration with Resend SDK...");

    // Support both variable names for backward compatibility during migration
    const apiKey = process.env.RESEND_API_KEY || process.env.SMTP_PASS;

    if (!apiKey) {
        console.error("❌ Missing environment variable: RESEND_API_KEY (or SMTP_PASS)");
        console.log("Please update your .env file with your Resend API Key.");
        process.exit(1);
    }

    // Mask password for display
    const maskedKey = `${apiKey.substring(0, 3)}...${apiKey.substring(apiKey.length - 3)}`;
    console.log(`Using API Key: ${maskedKey}`);

    const resend = new Resend(apiKey);

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "neosekaleli@gmail.com";
    const from = process.env.SMTP_FROM || "onboarding@resend.dev";

    console.log(`\nAttempting to send email...`);
    console.log(`- From: ${from}`);
    console.log(`- To: ${recipient}`);

    try {
        const { data, error } = await resend.emails.send({
            from,
            to: recipient,
            subject: "Test Email from imperium linguistics Website (SDK)",
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2>Test Email Success! 🚀</h2>
          <p>Your imperium linguistics website is now successfully configured with the Resend SDK.</p>
          <hr />
          <p style="color: #666; font-size: 12px;">Timestamp: ${new Date().toISOString()}</p>
        </div>
      `,
        });

        if (error) {
            console.error("\n❌ Failed to send email via Resend API:");
            console.error(error);
            return;
        }

        console.log(`\n✅ Email sent successfully!`);
        console.log(`Response Data:`, data);
    } catch (error) {
        console.error("\n❌ Unexpected error:");
        console.error(error);
    }
}

main().catch(console.error);
