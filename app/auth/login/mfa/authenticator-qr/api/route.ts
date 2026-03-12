import { getAuthenticatorQR } from "@/dal/auth"
import { NextResponse } from "next/server"

export async function GET() {
    const { buffer, contentType } = await getAuthenticatorQR()
    return new NextResponse(buffer, {
        headers: {
            "Content-Type": contentType || 'image/png'
        }
    })
}