import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// NOTE: You need to set the RESEND_API_KEY in your .env file for this to work.

// The email address to send the contact form submissions to.
// Replace this with your own email address.
const TO_EMAIL = 'your-email@example.com';

// The 'from' address must be a verified domain on Resend.
// For testing, Resend allows 'onboarding@resend.dev'.
const FROM_EMAIL = 'Portfolio Form <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // If RESEND_API_KEY is not configured, we can't send an email.
    // We'll log it and return a successful response to not break the UI.
    // The user will be notified in the terminal about the missing key.
    if (!process.env.RESEND_API_KEY) {
      console.warn(
        'RESEND_API_KEY is not set. Email not sent. Returning success to client.'
      );
      return NextResponse.json(
        { message: 'Form submitted successfully (email sending disabled).' },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New portfolio message: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (e) {
    const error = e as Error;
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.', details: error.message },
      { status: 500 }
    );
  }
}
