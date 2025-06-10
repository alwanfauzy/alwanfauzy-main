import { useState } from "react";

function App() {
  return (
    <div class="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-16">
      <div className="text-black text-4xl font-semibold">@alwanfauzy</div>
      <div class="relative w-full max-w-lg">
        {/* <!-- Top Left Blob - Large and slightly off screen --> */}
        <div class="absolute -top-16 -left-24 w-[28rem] h-[28rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>

        {/* <!-- Top Right Blob - Medium size, lighter opacity --> */}
        <div class="absolute -top-16 -right-16 w-[22rem] h-[22rem] bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

        {/* <!-- Bottom Left Blob - Smaller and higher for layering depth --> */}
        <div class="absolute -bottom-4 -left-20 w-[20rem] h-[20rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-65 animate-blob animation-delay-2000"></div>

        {/* <!-- Bottom Right Blob - Slightly larger, further inset --> */}
        <div class="absolute -bottom-16 -right-16 w-[24rem] h-[24rem] bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-3000"></div>

        <div class="m-8 relative space-y-4">
          <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="h-4 w-48 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="h-4 w-56 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
            </div>
          </div>
          <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="h-4 w-44 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
            </div>
          </div>
          <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="h-4 w-48 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="h-4 w-56 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
            </div>
          </div>
          <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="h-4 w-44 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
