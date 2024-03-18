import React from 'react'
import SingOut from '@/app/api/auth/components/SignOut'
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import Link from 'next/link'

const WarningBar = () => {
  return (
    <div className="w-full flex justify-around sticky top-0 py-4 bg-default z-50">
      {/*  TODO: STYLING */}
      <div className="flex">
        <ThemeSwitch className="px-10"/>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <p className="font-extrabold text-destructive text-2xl">
        You are in Privilaged <a>DANGER</a> Zone!
      </p>
      <p className="font-extrabold text-warning-900 text-xl">
        TESTING: ONLY DUMMY DATA
      </p>
      <SingOut />
    </div>
  )
}

export default WarningBar
