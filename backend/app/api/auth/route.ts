import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    // Dummy authentication logic (replace with real logic)
    if (username === 'admin' && password === 'password123') {
        // Set a cookie or return a token as needed
        return NextResponse.json({ success: true, message: 'Authenticated' });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}