"use client" 
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import { useState } from "react"


const page = () => {

    const [user, setUser] = useState()

    return (
        <div className="flex flex-col gap-8">dashboard page
            {/* {!user ? <SignUp /> : <Page />} */}
            <Login />
        </div>
    )
}

export default page
