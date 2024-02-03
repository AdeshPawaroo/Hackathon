'use client';
import { useContext, useEffect, useState } from "react"
import { MessageData } from '../../components/Context/context';
import FAQForm from '../components/FAQForm';

// const initialFaqs = [
//   {
//     question: "Will you use your phone while caring for my child?",
//     answer: "Absolutely not! I prioritize your child's care and only use my phone for emergencies. Ensuring your child's safety and engagement is my top priority."
//   },
//   {
//     question: "How do you handle discipline?",
//     answer: "I believe in redirection rather than discipline. My approach is to guide the child gently and align with the methods you prefer as parents. It's about creating a positive and nurturing environment for your child."
//   },
//   {
//     question: "What is your approach to comforting children?",
//     answer: "I follow your lead as parents. Whether it’s immediate comfort or letting your child cry it out, I respect your parenting style and adapt my care to match it. Your child's emotional well-being is important to me."
//   },
//   {
//     question: "Can I receive updates and photos of my child?",
//     answer: "Certainly! I'm happy to provide updates on your child's day. Photos can also be sent upon your specific request, ensuring you're connected and informed."
//   },
//   {
//     question: "Are you equipped to care for non-verbal children?",
//     answer: "Yes, I am. I have experience and training in caring for non-verbal children, including those on the autism spectrum or infants. I'm committed to understanding and meeting their unique needs."
//   },
//   {
//     question: "What payment methods do you accept?",
//     answer: "For your convenience, I accept electronic payments through the website. This process is secure and easy, ensuring hassle-free transactions."
//   },
//   {
//     question: "What is your cancellation policy?",
//     answer: "Life is unpredictable, so I offer flexible cancellation policies. Just give me advance notice if you need to cancel, and I'll do the same for any changes on my end."
//   },
//   {
//     question: "Do you support all forms of child expression, such as color preferences?",
//     answer: "Absolutely! I encourage all forms of expression in children. Whether it's a favorite color or a unique interest, I believe in nurturing their individuality."
//   },
//   {
//     question: "Do you offer tutoring or homework help?",
//     answer: "Yes, I do! Drawing from my academic background and experience, I offer tutoring and homework assistance to support your child's educational journey."
//   }
// ];

const DashboardFAQPage = () => {
  const [faqs, setFaqs] = useState();
  const [editingFaq, setEditingFaq] = useState(null);

  const messageContext = useContext(MessageData);
  const { message, setMessage } = messageContext || {};
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    async function fetchData(params:any) {
      const response = await fetch('/api/faq_page')
      const data = await response.json();
      console.log("Output",data);
      // @ts-ignore: Suppress the warning for the next line
      setMessage(data?.faq_pages)

    }
    fetchData()
  },[])

  console.log("message", message)

  const handleEdit = (faq) => {
    setEditingFaq(faq);
  };

  // const handleDelete = (faqQuestion) => {
  //   setFaqs(message.filter(f => f.question !== faqQuestion));
  // };

  const handleDelete = async (index: number) => {
    // Handle the Book Jada button click
    //event.preventDefault();
    setSuccess(false)
    setErrors([])
    const formData = {};
    console.log("index",index)

    try {
      const response = await fetch(`/api/faq_page/${index}`, {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json", // Set the content type to JSON
        // },
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

  const handleSave = (newFaq) => {
    if (editingFaq) {
      setFaqs(faqs.map(f => f.question === editingFaq.question ? newFaq : f));
    } else {
      setFaqs([...faqs, newFaq]);
    }
    setEditingFaq(null);
  };

  return (
    <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">FAQ</h1>
        {editingFaq ? (
          <FAQForm onSave={handleSave} initialFAQ={editingFaq} />
        ) : (
          <button
            onClick={() => setEditingFaq({ question: '', answer: '' })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
          >
            Add New FAQ
          </button>
        )}

        <div className="space-y-4">
          { !message ? null : message?.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded px-4 py-3">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
              <p>{faq.answer}</p>
              <div className="flex justify-end space-x-2 mt-2">
                <button onClick={() => handleEdit(index)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(index)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>

  );
};

export default DashboardFAQPage;
