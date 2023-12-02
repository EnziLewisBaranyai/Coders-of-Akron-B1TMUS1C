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
      <div className="p-16">
        <div className="p-8 bg-black text-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-orange-400 text-xl">0</p>
                <p className="text-orange-300">Friends</p>
              </div>
              <div>
                <p className="font-bold text-orange-400 text-xl">0</p>
                <p className="text-orange-300">Posts</p>
              </div>
              <div>
                <p className="font-bold text-orange-400 text-xl">0</p>
                <p className="text-orange-300">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-orange-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button
                className="text-black py-2 px-4 uppercase rounded bg-orange-400 hover:bg-orange-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-orange-400">{user.name}</h1>
            <p className="font-light text-orange-300 mt-3">Favorite music:</p>

            <p className="mt-8 text-orange-300">Bio:</p>
          </div>
        </div>
      </div>

    </main>
  )
}


