import nodemailer from "nodemailer";

interface ISender {
  mailTo: string;
  subject: string;
  html: string;
}
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GAMIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const send = async (
  { mailTo, subject, html }: ISender,
  callback: (err: any, data: any) => void
): Promise<void> => {
  const mailOption = {
    name: "Admin",
    address: "thenoderproxy@gmail.com",
    to: mailTo,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, data);
    }
  });
};

export default { send };
