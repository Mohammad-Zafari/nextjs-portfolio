import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendContactEmailParams {
  name: string
  email: string
  message: string
}

/**
 * Sends an email notification when a contact form is submitted
 */
export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured",
      }
    }

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.RESEND_FROM_EMAIL

    if (!recipientEmail) {
      console.error("CONTACT_EMAIL or RESEND_FROM_EMAIL is not configured")
      return {
        success: false,
        error: "Recipient email is not configured",
      }
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || `onboarding@resend.dev`

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Message</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Message</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #111827; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                  Contact Details
                </h2>
                <p style="margin: 10px 0;">
                  <strong style="color: #6b7280;">Name:</strong><br>
                  <span style="color: #111827;">${escapeHtml(name)}</span>
                </p>
                <p style="margin: 10px 0;">
                  <strong style="color: #6b7280;">Email:</strong><br>
                  <a href="mailto:${escapeHtml(email)}" style="color: #667eea; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </p>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #111827; font-size: 18px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                  Message
                </h2>
                <div style="color: #374151; white-space: pre-wrap; line-height: 1.8;">
                  ${escapeHtml(message).replace(/\n/g, "<br>")}
                </div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <a href="mailto:${escapeHtml(email)}" style="display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">
                  Reply to ${escapeHtml(name)}
                </a>
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
              <p>This email was sent from your portfolio contact form.</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Message

Contact Details:
Name: ${name}
Email: ${email}

Message:
${message}

---
Reply to: ${email}
      `.trim(),
    })

    if (error) {
      console.error("Resend API error:", error)
      return {
        success: false,
        error: "Failed to send email notification",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: "Failed to send email notification",
    }
  }
}

/**
 * Escapes HTML to prevent XSS attacks
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

