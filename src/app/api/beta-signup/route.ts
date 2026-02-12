import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email, platform } = await request.json();

        console.log('--- Beta Signup Request ---');
        console.log('Email:', email);
        console.log('Platform:', platform);

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error('CRITICAL: Environment variables missing!');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email to the user (Plain text for now to fix build error)
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Welcome to Voxtrona Beta!',
            text: 'You have successfully joined the waitlist. We will notify you when your access is ready.',
        });

        // Admin notification
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER,
            subject: 'New Beta Signup',
            text: `New beta signup: ${email} for platform: ${platform}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Beta signup error:', error);
        return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 });
    }
}
