import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email template for you (recipient)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 16px;">From:</h3>
              <p style="background: #f1f3f4; padding: 15px; border-radius: 5px; margin: 0; font-size: 18px; font-weight: bold; color: #667eea;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 16px;">Email:</h3>
              <p style="background: #f1f3f4; padding: 15px; border-radius: 5px; margin: 0;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: bold;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 16px;">Project Type:</h3>
              <p style="background: #f1f3f4; padding: 15px; border-radius: 5px; margin: 0; text-transform: capitalize;">${subject.replace('-', ' ')}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-bottom: 5px; font-size: 16px;">Message:</h3>
              <div style="background: #f1f3f4; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea;">
                <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f1f3f4; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                Sent from your portfolio contact form at ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
          
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">Thank You!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Hi ${name},</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out! I've received your message about <strong>"${subject.replace('-', ' ')}"</strong> and I'm excited to learn more about your project.
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              I'll review your requirements and get back to you within <strong>24 hours</strong> with my thoughts and next steps.
            </p>
            
            <div style="background: #f1f3f4; padding: 20px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0; margin-bottom: 10px;">Your Message:</h3>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to check out my latest projects on my portfolio or connect with me on social media.
            </p>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
              Best regards,<br>
              <strong style="color: #667eea;">Syed Omer Ali</strong><br>
              Full-Stack Developer
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #f1f3f4; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(autoReply);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}