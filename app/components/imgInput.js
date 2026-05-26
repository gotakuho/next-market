"use client"

import { useState } from "react"

const ImgInput = (props) => {

    const [imageFile, setImageFile] = useState(null)

    const handleClick = async () => {

        try {

            const data = new FormData()

            data.append("file", imageFile)
            data.append("upload_preset", "upclpe2")

            const response = await fetch(
                "https://api.cloudinary.com/v1_1/6fs9n32/image/upload",
                {
                    method: "POST",
                    body: data,
                }
            )

            const jsonData = await response.json()

            console.log(jsonData)

            props.setImage(jsonData.secure_url)

            alert("画像アップロード成功")

        } catch (error) {

            console.log(error)

            alert("画像アップロード失敗")
        }
    }

    return (
        <div className="img-input">

            <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
                accept="image/png, image/jpeg"
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