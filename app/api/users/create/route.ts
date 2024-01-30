import { NextResponse, } from 'next/server'
import User from '@/models/user';
import { connectToDb } from '@/lib/database';

export const POST = async (req:Request) => {
    const {name,email,avatarUrl} = await req.json();

    if(!name || !email || !avatarUrl){
        return NextResponse.json({message:"Enter Valid Details"},{status:400})
    }

    try {
        await connectToDb();
        const user = await User.create({name,email,avatarUrl});
        // const result = await user.save();

        return new Response(JSON.stringify(user),{status:200});
    } catch (error) {
        return new Response(JSON.stringify({message:"Failed to create user"}),{status:500})

    }
}