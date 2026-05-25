"use client"

import { useState } from "react"

const Register = () => {
    const [name, setName] = useState("吉田")
    console.log(name)

    const handlesubmit = () => {
        try {
            fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: "ダミーデータ"
            })
        } catch {
        }
    }

    return (
        <div>
            <h1>ユーザー登録</h1>

            <form onSubmit={handlesubmit}>
                <input type="text" name="name" placeholder="名前" required />
                <input type="text" name="email" placeholder="メールアドレス" required />
                <input type="text" name="password" placeholder="パスワード" required />
                <button>登録</button>
            </form>
        </div>
    )
}

export default Register