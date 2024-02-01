"use client"
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { MessageData } from "../components/Context/context"
import Button from "../components/Button"
export default function DashboardPage() {
  const messageContext = useContext(MessageData);

  // Accessing message and setMessage from context
  const { message, setMessage } = messageContext || {};
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/home_page')
      const data = await response.json();
      // console.log("Output", data.home_page[0]);
      // @ts-ignore: Suppress the warning for the next line

      setMessage(data.home_page[0])

    }

    fetchData()
  }, [])
  const handleSubmit = async (event: React.FormEvent) => {
    // Handle the Book Jada button click
    event.preventDefault();
    setSuccess(false)
    setErrors([])
    const formData = {};

    try {
      const response = await fetch("/api/home_page/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ ...message }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSuccess(true)

      } else {
        const errorData = await response.json();
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }

  }
  console.log("Message", message)

  const changeValues = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedMessage = {
      ...message,
      [e.target.name]: e.target.value,
    };
    // @ts-ignore: Suppress the warning for the next line
    setMessage(updatedMessage);
  }

  return (
    <div className="flex h-screen bg-gray-100">



      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6">Home Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label htmlFor="siteTitle" className="block text-lg font-medium text-gray-700">Site Title</label>
              <input name="site_title" value={message ? message.site_title : null} onChange={changeValues} type="text" id="siteTitle" className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" placeholder="Jada Last-Name" />
            </div>
            <div>
              <label htmlFor="siteSubtitle" className="block text-lg font-medium text-gray-700">Site Subtitle</label>
              <input name="site_subtitle" value={message ? message.site_subtitle : null} onChange={changeValues} type="text" id="siteSubtitle" className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" placeholder="A Great Nanny" />
            </div>
            <div>
              <label htmlFor="homePageText" className="block text-lg font-medium text-gray-700">Home Page Text</label>
              <textarea name="page_text" value={message ? message.page_text : null} onChange={changeValues} id="homePageText" rows={4} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" placeholder="Lorem ipsum"></textarea>
            </div>
            <div>
              <div className="flex gap-8">
                <Button text='Submit' />
                {success && <p className="text-green-600 font-bold">Hero Card updated successfully</p>}
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  );
}
