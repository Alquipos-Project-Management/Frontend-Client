import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Nuevo Mensaje de Contacto</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Nombre:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Teléfono:</strong> ${data.phone || 'No proporcionado'}</p>
          <p><strong>Asunto:</strong> ${data.subject}</p>
          <div style="margin-top: 20px;">
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'luiscf1226@gmail.com',
      subject: `Nuevo Contacto: ${data.subject}`,
      html: htmlContent,
      replyTo: data.email
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 