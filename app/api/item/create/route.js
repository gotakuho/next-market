import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

export async function POST(request) {
    try {
        await connectDB()

        const reqBody = await request.json()

        console.log(reqBody)

        await ItemModel.create({
            title: reqBody.title,
            image: reqBody.image,
            price: reqBody.price,
            description: reqBody.description,
            email: reqBody.email
        })

        return NextResponse.json({
            message: "アイテム作成成功"
        })
    } catch (error) {
        return NextResponse.json({
            message: "アイテム作成失敗",
            error: error.message
        })
    }
}