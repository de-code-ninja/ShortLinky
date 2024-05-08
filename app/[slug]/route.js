import { NextResponse } from "next/server";
import urlModel from "@/models/urlModel";
import mongoConnect from "@/app/utils/mongoConnect";

export async function GET(request,{params}){

    try {
        // Find the URL based on the new slug
        const result = await urlModel.findOne({ newUrl: params.slug });

        if (result) {
            // Redirect to the old URL
            return NextResponse.redirect(new URL(result.oldUrl, request.url));
        } else {
            // Handle case when URL is not found
            return NextResponse.json({ url: "URL not found" });
        }
    } catch (err) {
        // Handle database query errors
        console.error("Error fetching URL:", err);
        return NextResponse.json({ url: "Some error occurred" });
    }
} 