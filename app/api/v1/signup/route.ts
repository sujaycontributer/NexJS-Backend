import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

    // how get the body req.body? const body = await req.json()
    const data = await req.json();
    // send data to database
    console.log(data)

    return NextResponse.json({
        message: "You have been signed up"
    })
}
