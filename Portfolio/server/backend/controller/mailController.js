// import nodemailer from "nodemailer";

// export const sendMail = async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `${name} <${email}>`,
//       to: process.env.EMAIL_USER,
//       subject: `📬 New Message from ${name} — Portfolio Inquiry`,
//       html: `
//         <div style="font-family: 'Poppins', Arial, sans-serif; background: #f5f7fa; padding: 20px;">
//           <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">

//             <div style="background: linear-gradient(90deg, #3a86ff, #8338ec); color: #ffffff; padding: 16px 24px; text-align: center;">
//               <h2 style="margin: 0; font-weight: 600;">New Portfolio Message</h2>
//             </div>

//             <div style="padding: 24px; color: #333;">
//               <p style="font-size: 16px;">You have received a new message from your portfolio contact form:</p>

//               <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
//                 <tr>
//                   <td style="font-weight: 600; padding: 8px 0;">👤 Name:</td>
//                   <td style="padding: 8px 0;">${name}</td>
//                 </tr>
//                 <tr>
//                   <td style="font-weight: 600; padding: 8px 0;">📧 Email:</td>
//                   <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3a86ff; text-decoration: none;">${email}</a></td>
//                 </tr>
//               </table>

//               <div style="margin-top: 20px; padding: 16px; background: #f0f4ff; border-left: 4px solid #3a86ff; border-radius: 6px;">
//                 <p style="margin: 0; white-space: pre-line; line-height: 1.6;">${message}</p>
//               </div>

//               <p style="margin-top: 24px; font-size: 14px; color: #666;">Reply directly to this email to respond to ${name}.</p>
//             </div>

//             <div style="background: #0a1929; color: #ffffff; text-align: center; padding: 12px; font-size: 13px;">
//               <p style="margin: 0;">&copy; ${new Date().getFullYear()} Abhishek Namdev | Portfolio Mail Service</p>
//             </div>

//           </div>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     res.json({ success: true, message: "Email sent successfully " });
//   } catch (error) {
//     console.error("Email Error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to send email check controller",
//     });
//   }
// };

import { Resend } from "resend";

export const sendMail = async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      subject: `📬 New Message from ${name} — Portfolio Inquiry`,
      html: `<div style="font-family: 'Poppins', Arial, sans-serif; background: #f5f7fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
          
          <div style="background: linear-gradient(90deg,#3a86ff,#8338ec); color: #ffffff; padding: 16px 24px; text-align: center;">
            <h2 style="margin: 0; font-weight: 600;">New Portfolio Message</h2>
          </div>

          <div style="padding: 24px; color: #333;">
            <p style="font-size: 16px;">You have received a new message from your portfolio contact form:</p>
            
            <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
              <tr>
                <td style="font-weight: 600; padding: 8px 0;">👤 Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 8px 0;">📧 Email:</td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #3a86ff; text-decoration: none;">
                    ${email}
                  </a>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background: #f0f4ff; border-left: 4px solid #3a86ff; border-radius: 6px;">
              <p style="margin: 0; white-space: pre-line; line-height: 1.6;">
                ${message}
              </p>
            </div>

            <p style="margin-top: 24px; font-size: 14px; color: #666;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>

          <div style="background: #0a1929; color: #ffffff; text-align: center; padding: 12px; font-size: 13px;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Abhishek Namdev | Portfolio Mail Service</p>
          </div>

        </div>
      </div>`
    });

    res.json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("Resend Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
};
