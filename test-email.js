const nodemailer = require('nodemailer');

const user = 'mrhyperionai@gmail.com';
const pass = 'eylb tuip wdcw aijp'; // Hardcoded for this test to ensure env var isn't the issue

async function main() {
    console.log('Testing email send...');
    console.log('User:', user);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: user,
            to: user, // Send to self
            subject: 'Test Email from Script',
            text: 'If you see this, nodemailer works!',
        });
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

main();
