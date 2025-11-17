import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);

    // ✅ Replace with verified sender (from Resend dashboard)
    const FROM_EMAIL = process.env.EMAIL_FROM as string;
    const TO_EMAIL = email;

    // -------------------------------
    // 📩 1️⃣ Send email to YOU
    // -------------------------------
    const { error: mailToYouError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">From:</h3>
              <p style="background: #f1f3f4; padding: 12px; border-radius: 5px; font-weight: bold;">${name}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">Email:</h3>
              <p style="background: #f1f3f4; padding: 12px; border-radius: 5px;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">Project Type:</h3>
              <p style="background: #f1f3f4; padding: 12px; border-radius: 5px; text-transform: capitalize;">${subject.replace("-", " ")}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px;">Message:</h3>
              <div style="background: #f1f3f4; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; text-align: center;">
              <p style="color: #666; font-size: 14px;">
                Sent from your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (mailToYouError) {
      console.error("Error sending to you:", mailToYouError);
      throw new Error(mailToYouError.message);
    }

    // -------------------------------
    // 📩 2️⃣ Auto-reply email to sender
    // -------------------------------
    const { error: autoReplyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">Thank You!</h1>
          </div>

          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2>Hi ${name},</h2>
            <p style="color: #555;">Thank you for reaching out! I've received your message about <strong>"${subject.replace("-", " ")}"</strong>.</p>
            <p style="color: #555;">I'll get back to you within <strong>24 hours</strong> with the next steps.</p>

            <div style="background: #f1f3f4; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0;">
              <h3>Your Message:</h3>
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="color: #555;">Best regards,<br><strong style="color: #667eea;">Syed Omer Ali</strong><br>Full-Stack Developer</p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f1f3f4; text-align: center;">
              <p style="margin: 0; color: #888; font-size: 13px;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (autoReplyError) {
      console.error("Error sending auto-reply:", autoReplyError);
      throw new Error(autoReplyError.message);
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
