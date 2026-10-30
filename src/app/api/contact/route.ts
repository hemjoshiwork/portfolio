import { NextResponse } from 'next/server';

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
    const apiKey = process.env.RESEND_API_KEY;

    // Construct clean pre-filled mailto URL for transparent fallback
    const subject = encodeURIComponent(`Project Enquiry: ${service || 'General'} - from ${name.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company?.trim() || 'N/A'}\nService: ${service || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nProject Details:\n${details.trim()}`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${mailtoBody}`;

    // If Resend API Key is configured in environment variables, dispatch email
    if (apiKey) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Inquiry <onboarding@resend.dev>',
          to: [recipient],
          reply_to: email.trim(),
          subject: `Portfolio Inquiry from ${name.trim()} (${service || 'New Lead'})`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company?.trim() || 'N/A'}\nService: ${service || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nProject Details:\n${details.trim()}`,
        }),
      });

      if (resendResponse.ok) {
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your enquiry has been forwarded directly to Hem Joshi. You will receive a response within 24–48 hours.',
        });
      } else {
        const errorData = await resendResponse.json().catch(() => ({}));
        return NextResponse.json(
          {
            success: false,
            code: 'DELIVERY_ERROR',
            error: 'External email delivery returned an error.',
            details: errorData,
            mailtoUrl,
          },
          { status: 502 }
        );
      }
    }

    // Honest fallback: If no API key is configured, return clear instructions without lying
    return NextResponse.json({
      success: false,
      code: 'PROVIDER_NOT_CONFIGURED',
      error: 'Direct email delivery API is not configured on this environment (RESEND_API_KEY is missing).',
      message: 'Your inquiry details are ready. Please use the pre-filled direct mail link below to send your request directly to hemjoshiwork@gmail.com.',
      mailtoUrl,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
