import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, platform, version, steps, expected, actual } = body;

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            return NextResponse.json({ error: 'Server config error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Admin notification
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.SMTP_USER, // Send to admin
            subject: `Bug Report from ${name}: ${platform}`,
            text: `
Bug Report Details:
------------------
Submitter: ${name} (${email})
Platform: ${platform}
Version: ${version}

Steps to Reproduce:
${steps}

Expected Behavior:
${expected}

Actual Behavior:
${actual}
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Bug report error:', error);
        return NextResponse.json({ error: 'Failed to send report' }, { status: 500 });
    }
}
