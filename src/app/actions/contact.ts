'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactState {
  success?: boolean
  error?: string
}

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !message) {
    return { error: 'Please fill in all fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  if (!process.env.RESEND_API_KEY) {
    return { error: 'Email service is not configured yet. Please reach out directly.' }
  }

  const safeMessage = message
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
  const safeName = name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const safeEmail = email.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'huda.s.nasih@gmail.com',
      subject: `New message from ${safeName} — huda.dev`,
      replyTo: email,
      html: buildEmailHtml({ name: safeName, email: safeEmail, message: safeMessage }),
    })

    return { success: true }
  } catch {
    return { error: 'Failed to send message. Please try again or email me directly.' }
  }
}

function buildEmailHtml({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0a0a0a;border-radius:12px 12px 0 0;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family:monospace;font-size:15px;color:#ffffff;letter-spacing:0.05em;">
                      huda<span style="color:#8b5cf6;">.</span>dev
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-family:monospace;font-size:10px;color:#ffffff44;letter-spacing:0.2em;text-transform:uppercase;">
                      portfolio contact
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Pink accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#db2777,#9333ea);height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;">

              <!-- Title -->
              <h1 style="margin:0 0 6px 0;font-size:22px;font-weight:700;color:#09090b;letter-spacing:-0.02em;">
                New message
              </h1>
              <p style="margin:0 0 32px 0;font-size:13px;color:#71717a;">
                Someone reached out through your portfolio contact form.
              </p>

              <!-- Sender card -->
              <table width="100%" cellpadding="0" cellspacing="0"
                style="background-color:#fafafa;border:1px solid #e4e4e7;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">

                    <!-- Avatar row -->
                    <table cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="vertical-align:middle;">
                          <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#db2777,#9333ea);
                            display:inline-flex;align-items:center;justify-content:center;
                            font-size:16px;font-weight:700;color:#fff;text-align:center;line-height:40px;">
                            ${name.charAt(0).toUpperCase()}
                          </div>
                        </td>
                        <td style="padding-left:12px;vertical-align:middle;">
                          <div style="font-size:15px;font-weight:600;color:#09090b;">${name}</div>
                          <div style="font-size:13px;color:#71717a;margin-top:2px;">
                            <a href="mailto:${email}" style="color:#db2777;text-decoration:none;">${email}</a>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <div style="height:1px;background-color:#e4e4e7;margin-bottom:16px;"></div>

                    <!-- Meta labels -->
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:24px;">
                          <div style="font-family:monospace;font-size:9px;color:#a1a1aa;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:4px;">From</div>
                          <div style="font-size:13px;color:#3f3f46;font-weight:500;">${name}</div>
                        </td>
                        <td>
                          <div style="font-family:monospace;font-size:9px;color:#a1a1aa;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:4px;">Reply to</div>
                          <div style="font-size:13px;color:#3f3f46;font-weight:500;">${email}</div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Message section -->
              <div style="margin-bottom:28px;">
                <div style="font-family:monospace;font-size:9px;color:#a1a1aa;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:10px;">
                  Message
                </div>
                <div style="background-color:#fafafa;border:1px solid #e4e4e7;border-left:3px solid #db2777;
                  border-radius:0 8px 8px 0;padding:18px 20px;
                  font-size:14px;line-height:1.75;color:#27272a;">
                  ${message}
                </div>
              </div>

              <!-- CTA button -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:8px;background-color:#db2777;">
                    <a href="mailto:${email}?subject=Re: Portfolio enquiry"
                      style="display:inline-block;padding:12px 28px;font-size:13px;font-weight:600;
                        color:#ffffff;text-decoration:none;font-family:monospace;letter-spacing:0.05em;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fafafa;border:1px solid #e4e4e7;border-top:none;
              border-radius:0 0 12px 12px;padding:20px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family:monospace;font-size:10px;color:#a1a1aa;">
                      Sent from your portfolio at huda.dev
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-family:monospace;font-size:10px;color:#d4d4d8;">
                      huda sarkawt nasih
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}
