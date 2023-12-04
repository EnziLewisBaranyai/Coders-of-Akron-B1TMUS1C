import { prisma } from "@/lib/prisma";
import "@/styles/styles.css"
import Link from "next/link";
import React from "react"



export default async function feed() {
  
  const posts = await prisma.post.findMany()
  
  return(
  <div className="flex flex-col items-center justify-center space-y-4">      
    <h1 className="text-4xl font-semibold text-center mb-4">B1tMus1c</h1>
      <ul className="space-y-2">
  {posts.map((post, index) => (
    <li key={index}>
      <div className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
            <div className="relative bg-gray-800 dark:bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h1 className="text-3xl font-semibold overflow-hidden overflow-ellipsis">{post.title}</h1>
              <p className="flex-1 pt-2 overflow-hidden overflow-ellipsis">{post.content}</p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="self-center text-sm overflow-hidden overflow-ellipsis">uploaded by: {post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>
<div className="text-center">
        <button className="py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"><Link href="/add-post">Post</Link></button>
  </div>
</div>



  )
}