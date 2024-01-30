'use client' 
import React from 'react';
import Button from '../components/Button';

export default function SignInPage() {

    // Define the function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the submit action here
  };

  // Define the function to handle the cancel action
  const handleCancel = () => {
    // Handle the cancel action here
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-jada-cyan">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-center mb-6">Sign In</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="flex items-center justify-between">
          <Button
              text="Sign In"
              onClick={handleSubmit} 
              additionalClasses="bg-jada-purple hover:bg-jada-pink text-white"
            />
            <Button
              text="Cancel"
              onClick={handleCancel}
              additionalClasses="text-jada-pink border border-jada-pink bg-white hover:bg-jada-pink hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}