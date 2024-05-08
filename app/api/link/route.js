import { NextResponse } from "next/server";
import urlModel from "@/models/urlModel";
import mongoConnect from "@/app/utils/mongoConnect";


export async function POST(request){
    let string = "";
    let data = await request.json();
   
    console.log(data.link);
    let url = "https://shortlinky.onrender.com/"
    let words=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9]
    for (let i= 0; i < 5; i++) {
        let random = Math.floor(Math.random()* words.length);
        string+= words[random];
    }
    await mongoConnect();
    const newUrl = new urlModel({
        oldUrl: data.link,
        newUrl: string
    });
    await newUrl.save();
    
    url+=string;
    console.log(string)
return NextResponse.json({shortUrl:url})
}
