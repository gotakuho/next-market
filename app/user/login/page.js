"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// import Header from "../../components/header"
// import Footer from "../../components/footer"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const jsonData = await response.json()
            console.log(jsonData)

            if (jsonData.token) {
                localStorage.setItem("token", jsonData.token)
                alert("ログイン成功")
                router.push("/")
            } else {
                alert(jsonData.message)
            }

        } catch {
            alert("ログイン失敗")
        }
    }

    return (
        <>
            <Header />

            <div>
                <h1 className="page-title">ログイン</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="メールアドレス"
                        required
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="パスワード"
                        required
                    />

                    <button>ログイン</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Login