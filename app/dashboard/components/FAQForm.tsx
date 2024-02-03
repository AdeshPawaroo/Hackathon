"use client"
import React, { useEffect, useState } from 'react';
//import { MessageData } from "../../components/Context/context"

const FAQForm = ({ onSave, initialFAQ = { question: '', answer: '' } }) => {
  //const messageContext = useContext(MessageData);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  //const [faq, setFaq] = useState(initialFAQ);

  useEffect(() => {
    // Fetch CSRF token from your server
    fetch("/api/get_csrf_token")
      .then((response) => response.json())
      .then((data) => setCsrfToken(data.csrf_token))
      .catch((error) => console.error("Error fetching CSRF token:", error));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    // Handle the Book Jada button click
    event.preventDefault();
    setIsLoading(true);
    setErrors([])
    const formData = new FormData();
    console.log("question",question)
    console.log("csrf",csrfToken)
    console.log("answer",answer)
    formData.append("csrf_token", csrfToken);
    console.log("form data",formData)
    formData.append("question", question);
    console.log("form data",formData)
    formData.append("answer", answer);
    console.log("form data",formData)
    // const requestBody = {
    //   csrf_token: csrfToken,
    //   question: question,
    //   answer: answer,
    // };
    //console.log("request body",JSON.stringify(requestBody))


    try {
      const response = await fetch("/api/faq_page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body:formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
       

      } else {
        const errorData = await response.json();
        setErrors(errorData.errors);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }
    setIsLoading(false);
  }
  //console.log("Message", message)



  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFaq({ ...faq, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSave(faq);
  // };
  console.log("input values",question, answer,csrfToken)
  return (
  <div>
    <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
    </ul>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="question" className="block text-lg font-medium text-gray-700">Question</label>
        <input
          type="text"
          name="question"
          id="question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="answer" className="block text-lg font-medium text-gray-700">Answer</label>
        <textarea
          name="answer"
          id="answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          className="mt-1 block w-full border-gray-300 shadow-sm rounded-md"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save FAQ
      </button>
      {/* {success && <p className="text-green-600 font-bold">FAQ Page created successfully</p>} */}
    </form>
  </div>
  );
};

export default FAQForm;
