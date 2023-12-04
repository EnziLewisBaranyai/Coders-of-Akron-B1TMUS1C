import { prisma } from "@/lib/prisma";
import "@/styles/styles.css";
import React from "react";
import Link from "next/link";

async function addPost(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()
  const content = data.get("content")?.valueOf()
  const author = data.get("author")?.valueOf()

  const user = 

  await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: author,

    },
  })
}


export default async function posts() {  
  
  return(
    <main>
    <div className="flex justify-center mt-20 px-8">
    <form action={addPost} className="max-w-2xl">
      <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
        <h2 className="text-xl text-orange-400 dark:text-orange-300 pb-2">Add Post:</h2>

        <div className="flex flex-col gap-2 w-full border-black">

          <div>
            <label className="text-orange-400 dark:text-orange-300">Title</label>
            <input
              className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
              type="text"
              name="title"
            />
          </div>

          <div>
            <label className="text-orange-400 dark:text-orange-300">Content</label>
            <textarea
              className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
              name="content"
            />
          </div>

          <div>
            <label className="text-orange-400 dark:text-orange-300">Author</label>
            <input
              className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
              type="text"
              name="author"
            ></input>
          </div>

          <div className="flex justify-end">
            <button
                className="py-1.5 px-3 m-1 text-center bg-orange-400 border rounded-md text-black hover:bg-orange-500 hover:text-black dark::text-black dark:bg-orange-400">
                <Link href="/feed">
                  Back
                </Link>
            </button>
            <button
              className="py-1.5 px-3 m-1 text-center bg-orange-400 border rounded-md text-black hover:bg-orange-500 hover:text-black dark:text-orange-200 dark:bg-orange-400"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</main>



  )
}