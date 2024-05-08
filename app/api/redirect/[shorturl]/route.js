import { NextResponse } from "next/server";


export async function GET(request,{params}){
   
console.log(params.shorturl);

    return NextResponse.redirect(new URL(`https://www.youtube.com/`,request.url))
}