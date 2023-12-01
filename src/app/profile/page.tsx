import "@/styles/styles.css"
import React from "react"
import { useState, useEffect } from 'react';
import { prisma } from '@/lib/prisma'

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'nickreichlin@gmail.com'
    }
  })

  return (
    <main>
      <div>Hello, {user?.name}</div>
      <div>Email: {user?.email}</div>
    </main>
  )
}