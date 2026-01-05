import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real production app, you would integrate with a service like Resend, SendGrid, or Mailgun here.
    // For now, we will simulate a successful background process and log the data.
    
    console.log("--- New Contact Form Submission ---");
    console.log(`From: ${name} (${email})`);
    console.log(`Message: ${message}`);
    console.log("-----------------------------------");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
