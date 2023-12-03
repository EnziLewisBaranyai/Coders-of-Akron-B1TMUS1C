import "@/styles/styles.css"
import React from "react"
import { useState, useEffect } from 'react';
import { prisma } from '@/lib/prisma'
import User from "@/components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Home() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return { props: { user: null } };
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email
    }
  })

  return (
    <main>
        <div className="flex justify-center mt-20 px-8">
        <form className="max-w-2xl">
          <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
            <h2 className="text-xl text-orange-400 dark:text-orange-300 pb-2">Profile settings:</h2>

            <div className="flex flex-col gap-2 w-full border-black">

              <div>
                <label className="text-orange-400 dark:text-orange-300">Username</label>
                <input
                  className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
                  type="text"
                  name="username"
                  value={user.username}
                />
              </div>

              <div>
                <label className="text-orange-400 dark:text-orange-300">Password</label>
                <input
                  className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
                  type="text"
                  name="password"
                />
              </div>

              <div>
                <label className="text-orange-400 dark:text-orange-300">Email</label>
                <input
                  className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
                  type="text"
                  name="email"
                  value={user.email}
                />
              </div>

              <div>
                <label className="text-orange-400 dark:text-orange-300">Favorite Music</label>
                <input
                  className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
                  type="text"
                  name="favoriteMusic"
                  value={user.favoriteMusic}
                />
              </div>

              <div>
                <label className="text-orange-400 dark:text-orange-300">Bio</label>
                <textarea
                  className="w-full py-3 border border-black rounded-lg px-3 focus:outline-none focus:border-black hover:shadow bg-gray text-black"
                  name="bio"
                  value={user.bio}
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  className="py-1.5 px-3 m-1 text-center bg-orange-400 border rounded-md text-black hover:bg-orange-500 hover:text-black dark:text-orange-200 dark:bg-orange-400"
                  type="submit"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}


