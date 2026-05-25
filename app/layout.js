import "./globals.css"

import Header from "./components/header"
import Footer from "./components/footer"

export const metadata = {
    title: "Next Market",
    description: "Next Market App",
}

export default function RootLayout({ children }) {

    return (

        <html lang="ja">

            <body>

                <Header />

                {children}

                <Footer />

            </body>

        </html>

    )
}