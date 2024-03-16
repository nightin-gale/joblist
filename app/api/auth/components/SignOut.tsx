"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const SignOut = () => {
  return (
    <Button
      variant="destructive"
      className="text-[black] font-extrabold"
      onClick={() => { signOut() }}>
      Sign Out
    </Button>
  )
}

export default SignOut
