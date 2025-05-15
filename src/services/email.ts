import { Resend } from 'resend';

const resend = new Resend('re_dpUxkkdE_JJZ9jSSQjXmkEC1o3MCuuCYo');

interface ContactEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  dateOfBirth: string;
}

export const emailService = {
  sendContactEmail: async (data: ContactEmailData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}; 