import Login from "../components/Login"
import SignUp from "../components/SignUp"

const page = () => {
    return (
        <div className="flex flex-col gap-8">dashboard page
            <SignUp />
            <Login />
        </div>
    )
}

export default page
