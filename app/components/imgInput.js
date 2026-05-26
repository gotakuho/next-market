"use client"

import { useState } from "react"

const ImgInput = (props) => {

    const [imageFile, setImageFile] = useState("")

    const handleClick = async () => {

        try {

            const data = new FormData()

            data.append("file", imageFile)

            // Cloudinary Upload Preset
            data.append("upload_preset", "你的upload_preset")

            // Cloudinary Cloud Name
            data.append("cloud_name", "你的cloud_name")

            const response = await fetch(
                "https://api.cloudinary.com/v1_1/你的cloud_name/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            )

            const jsonData = await response.json()

            alert("画像アップロード成功")

            // 把图片URL传给父组件
            props.setImage(jsonData.url)

        } catch (error) {

            alert("画像アップロード失敗")

            console.log(error)

        }
    }

    return (

        <div className="img-input">

            <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
                accept="image/png, image/jpg"
            />

            <button
                onClick={handleClick}
                disabled={!imageFile}
            >
                画像Upload
            </button>

        </div>

    )
}

export default ImgInput