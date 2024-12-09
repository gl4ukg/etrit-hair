import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailProps {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailProps) {
  try {
    const data = await resend.emails.send({
      from: 'Etrit Hair <no-reply@etrithair.com>',
      to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}

export function getBookingConfirmationEmail(booking: any) {
  return {
    subject: 'Booking Confirmation - Etrit Hair',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Booking Confirmation</h1>
        <p>Dear ${booking.name},</p>
        <p>Thank you for booking with Etrit Hair. Here are your booking details:</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Service:</strong> ${booking.service.name}</p>
          <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
        </div>
        
        <p>If you need to modify or cancel your booking, please contact us at:</p>
        <p>Phone: +38345680679</p>
        <p>Email: info@etrithair.com</p>
        
        <p style="margin-top: 30px;">We look forward to seeing you!</p>
        <p>Best regards,<br>Etrit Hair Team</p>
      </div>
    `
  };
}

export function getAdminBookingNotificationEmail(booking: any) {
  return {
    subject: 'New Booking Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">New Booking Received</h1>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Client:</strong> ${booking.name}</p>
          <p><strong>Email:</strong> ${booking.email}</p>
          <p><strong>Phone:</strong> ${booking.phone}</p>
          <p><strong>Service:</strong> ${booking.service.name}</p>
          <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
          ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
        </div>
        
        <p>View all bookings in your <a href="${process.env.NEXT_PUBLIC_URL}/admin">admin dashboard</a>.</p>
      </div>
    `
  };
}

export function getContactFormEmail(contact: any) {
  return {
    subject: 'New Contact Form Message',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">New Contact Message</h1>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>From:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${contact.message}</p>
        </div>
        
        <p>Reply to this message in your <a href="${process.env.NEXT_PUBLIC_URL}/admin">admin dashboard</a>.</p>
      </div>
    `
  };
}

interface BookingConfirmationProps {
  to: string;
  name: string;
  date: string;
  time: string;
  service: string;
  bookingId: string;
}

export async function sendBookingConfirmation(props: BookingConfirmationProps) {
  const booking = {
    name: props.name,
    date: props.date,
    time: props.time,
    service: { name: props.service },
    id: props.bookingId
  };

  // Send confirmation to customer
  await sendEmail({
    to: props.to,
    ...getBookingConfirmationEmail(booking)
  });

  // Send notification to admin
  if (process.env.ADMIN_EMAIL) {
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      ...getAdminBookingNotificationEmail({
        ...booking,
        email: props.to
      })
    });
  }
}
