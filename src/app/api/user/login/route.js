import connection from "@/database/config";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

connection();

export const POST = async (NextRequest) => {
  try {
    const data = await NextRequest.json();
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      return new Response("user not exist", { status: 401 });
    }
    const tokenData = {
      email: user.email,
      id: user._id,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({ message: "login successfull" });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    console.log(error);
  }
};
