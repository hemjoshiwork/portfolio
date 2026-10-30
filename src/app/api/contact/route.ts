import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, details } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!details || typeof details !== 'string' || details.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details (at least 10 characters).' },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'hemjoshiwork@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const apiKey = process.env.RESEND_API_KEY;

    // Construct clean pre-filled mailto URL for transparent fallback
    const subject = encodeURIComponent(`Project Enquiry: ${service || 'General'} - from ${name.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company?.trim() || 'N/A'}\nService: ${service || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nProject Details:\n${details.trim()}`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${mailtoBody}`;

    // If Resend API Key is missing or empty, gracefully notify client with mailto fallback
    if (!apiKey || !apiKey.trim()) {
      return NextResponse.json({
        success: false,
        code: 'PROVIDER_NOT_CONFIGURED',
        error: 'Direct email delivery API is not configured on this environment (RESEND_API_KEY is missing).',
        message: 'Your inquiry details are ready. Please use the pre-filled direct mail link below to send your request directly to hemjoshiwork@gmail.com.',
        mailtoUrl,
      });
    }

    // Initialize the official Resend SDK client securely on the server
    const resend = new Resend(apiKey);

    // Modern HTML formatted email template
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E7EB; border-radius: 12px; background-color: #FAFAFC; color: #171923;">
        <div style="border-bottom: 2px solid #2563EB; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="margin: 0; color: #171923; font-size: 20px;">New Freelance Project Inquiry</h2>
          <p style="margin: 4px 0 0 0; color: #64748B; font-size: 13px;">Received via hemjoshi.dev portfolio contact form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748B; width: 140px; font-weight: 600;">Client Name:</td>
            <td style="padding: 8px 0; color: #171923; font-weight: 500;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Client Email:</td>
            <td style="padding: 8px 0; color: #2563EB; font-weight: 500;"><a href="mailto:${email.trim()}" style="color: #2563EB; text-decoration: none;">${email.trim()}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Company:</td>
            <td style="padding: 8px 0; color: #171923;">${company?.trim() || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Service Required:</td>
            <td style="padding: 8px 0; color: #171923; font-weight: 600;">${service || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Estimated Budget:</td>
            <td style="padding: 8px 0; color: #171923;">${budget || 'Not specified'}</td>
          </tr>
        </table>

        <div style="background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B;">Project Details & Scope:</h3>
          <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #171923;">${details.trim()}</p>
        </div>

        <div style="border-top: 1px solid #E5E7EB; padding-top: 16px; font-size: 12px; color: #64748B;">
          <p style="margin: 0;">Reply directly to this email to contact <strong>${name.trim()}</strong> at <em>${email.trim()}</em>.</p>
        </div>
      </div>
    `;

    const textContent = `New Project Inquiry from ${name.trim()}\n\nClient: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company?.trim() || 'N/A'}\nService: ${service || 'N/A'}\nBudget: ${budget || 'N/A'}\n\nProject Details:\n${details.trim()}`;

    // Send email via Resend SDK
    const { data, error } = await resend.emails.send({
      from: `Portfolio Inquiry <${fromEmail}>`,
      to: [recipient],
      replyTo: email.trim(),
      subject: `Portfolio Inquiry from ${name.trim()} (${service || 'New Lead'})`,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error('[Resend Error]:', error);
      return NextResponse.json(
        {
          success: false,
          code: error.name || 'DELIVERY_ERROR',
          error: error.message || 'Failed to dispatch email via Resend.',
          mailtoUrl,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been forwarded directly to Hem Joshi. You will receive a response within 24–48 hours.',
      id: data?.id,
    });
  } catch (err: any) {
    console.error('[API Route Exception]:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
