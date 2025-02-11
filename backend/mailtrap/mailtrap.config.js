//node backend/mailtrap/mailtrap.config.js


import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();


export const mailtrapclient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Equischool Team",
};


