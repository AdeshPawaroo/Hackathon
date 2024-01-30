"use client"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import { useContext, useEffect, useState } from "react"
import { MessageData } from "../components/Context/context"
export default function DashboardPage() {
  const messageContext = useContext(MessageData);

  // Accessing message and setMessage from context
  const { message, setMessage } = messageContext || {};
  useEffect(() => {
    async function fetchData(params:any) {
      const response = await fetch('/api/home_page')
      const data = await response.json();
      message.homepage = data.home
      
      console.log(data);

    }

    fetchData()
  })
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <nav className="flex flex-col p-4">
          <a href="#" className="py-2 text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="py-2 text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="py-2 text-gray-700 hover:text-gray-900">Services</a>
          <a href="#" className="py-2 text-gray-700 hover:text-gray-900">Resources</a>
          <a href="#" className="py-2 text-gray-700 hover:text-gray-900">Testimonials</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <div className="space-y-6">
          <div>
            <label htmlFor="siteTitle" className="block text-lg font-medium text-gray-700">Site Title</label>
            <input type="text" id="siteTitle" className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" placeholder="Jada Last-Name" />
          </div>
          <div>
            <label htmlFor="siteSubtitle" className="block text-lg font-medium text-gray-700">Site Subtitle</label>
            <input type="text" id="siteSubtitle" className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" placeholder="A Great Nanny" />
          </div>
          <div>
            <label htmlFor="homePageText" className="block text-lg font-medium text-gray-700">Home Page Text</label>
            <textarea id="homePageText" rows={4} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" placeholder="Lorem ipsum"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

// const page = () => {

//     const [user, setUser] = useState()

//     return (
//         <div className="flex flex-col gap-8">dashboard page
//             {/* {!user ? <SignUp /> : <Page />} */}
//             <Login />
//         </div>
//     )
// }

// export default page
