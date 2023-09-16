import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {name, email, password} = await request.json();
    
    await connect();
    
    const hashedPassword= await bcrypt.hash(password, 5);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    })
    console.log(newUser);

    try{
        await newUser.save();
        console.log(newUser.toObject());

        return new NextResponse("User has been created", { status: 201 });

    }catch(err){
        return new NextResponse(err.message, { status: 500 });
    }
}
