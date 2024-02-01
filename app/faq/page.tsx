import React from 'react';
import FAQQuestion from '../components/FAQQuestion';
import FAQAnswer from '../components/FAQAnswer';

const faqs = [
    {
      question: "Will you use your phone while caring for my child?",
      answer: "Absolutely not! I prioritize your child's care and only use my phone for emergencies. Ensuring your child's safety and engagement is my top priority."
    },
    {
      question: "How do you handle discipline?",
      answer: "I believe in redirection rather than discipline. My approach is to guide the child gently and align with the methods you prefer as parents. It's about creating a positive and nurturing environment for your child."
    },
    {
      question: "What is your approach to comforting children?",
      answer: "I follow your lead as parents. Whether it’s immediate comfort or letting your child cry it out, I respect your parenting style and adapt my care to match it. Your child's emotional well-being is important to me."
    },
    {
      question: "Can I receive updates and photos of my child?",
      answer: "Certainly! I'm happy to provide updates on your child's day. Photos can also be sent upon your specific request, ensuring you're connected and informed."
    },
    {
      question: "Are you equipped to care for non-verbal children?",
      answer: "Yes, I am. I have experience and training in caring for non-verbal children, including those on the autism spectrum or infants. I'm committed to understanding and meeting their unique needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "For your convenience, I accept electronic payments through the website. This process is secure and easy, ensuring hassle-free transactions."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Life is unpredictable, so I offer flexible cancellation policies. Just give me advance notice if you need to cancel, and I'll do the same for any changes on my end."
    },
    {
      question: "Do you support all forms of child expression, such as color preferences?",
      answer: "Absolutely! I encourage all forms of expression in children. Whether it's a favorite color or a unique interest, I believe in nurturing their individuality."
    },
    {
      question: "Do you offer tutoring or homework help?",
      answer: "Yes, I do! Drawing from my academic background and experience, I offer tutoring and homework assistance to support your child's educational journey."
    }
  ];
  

export default function FAQPage() {
    return (
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div>
          {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                  <FAQQuestion question={faq.question} />
                  <FAQAnswer answer={faq.answer} />
              </div>
          ))}
      </div>
  </div>
    );
}
