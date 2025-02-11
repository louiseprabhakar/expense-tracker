import {mailtrapclient,sender} from "../mailtrap.config.js"
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]
    try {
        const response = await mailtrapclient.send({
            from:sender, 
            to:recipient,
            subject:"verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category: "Email Verification"
        })
        console.log('Email sent successfully', response)
    }catch(error)
    {
        console.error('Error sending verfication email: ',error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email,username) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapclient.send({
            from:sender,
            to: recipient,
            template_uuid:"0df537fd-1f74-44c4-96b3-6a753b737b07",
            template_variables:{
                "name": username,
                "company_info_name": "Equischool"
            }
        })
        console.log('Welcome Email sent successfully',response);
    }catch(error){
        console.error(`Error sending welcome email`,email);
        throw new Error(`Error sending welcome email:, ${error}`);
    }

}

export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapclient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapclient.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};