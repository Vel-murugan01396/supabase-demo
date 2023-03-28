import React from "react";
import Form from "./form";

function SignInPageComponent() {
  return (
    <>
      <div className="min-h-full flex flex-1">
        <div className="absolute z-10 top-0 pt-6 px-4 w-full flex justify-between">
          <div>
            <a className="text-white text-xl">Supabase</a>
          </div>
          <div>
            <button className="text-white p-2 bg-gray-700 rounded-xl text-sm">
              Documentation
            </button>
          </div>
        </div>
        <div className="flex flex-1">
          <main className="bg-gray-800">
            <div className="w-96 pt-20 px-12 pb-8">
              <div className="mb-10">
                <h1 className="text-white text-2xl">Welcome back</h1>
                <p className="text-white">Sign in to your account</p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="p-2 bg-gray-700 text-white rounded-xl border-2 border-gray-600 border-solid">
                  Continue with GitHub
                </button>
                <button className="p-2 text-white rounded-xl border-2 border-gray-600 border-solid">
                  Continue with SSO
                </button>
                <div className="flex justify-center items-center relative">
                  <div className="relative w-full">
                    <div className="w-full absolute border-gray-600 border-b-solid border-b-2"></div>
                  </div>
                  <div className="flex justify-center bg-gray-800 absolute text-white px-2">
                    or
                  </div>
                </div>
                <Form />
              </div>
            </div>
          </main>
          <aside className="flex flex-1 justify-center items-center bg-gray-900">
            <div className="w-full px-24">
              <blockquote className="text-3xl text-white">
                Did a website with @supabase last week with no prior experience
                with it. Up and running in 20 minutes. It's awesome to use.
                Thumbs up
              </blockquote>
              <p className="mt-1 text-white">@michael_webdev</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default SignInPageComponent;
