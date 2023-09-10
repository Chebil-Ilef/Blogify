import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"; // Import the Post model


export const GET = async (req, res) => {
    //fetch
    try {
        await connect()

        const posts= await Post.find()

        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (err) {
        console.error("Database Error:", err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
    

   
}