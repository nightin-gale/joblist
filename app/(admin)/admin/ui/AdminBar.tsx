import React from 'react'
import SingOut from '@/app/api/auth/components/SignOut'

const WarningBar = () => {
  return (
    <div className="font-extrabold text-destructive text-2xl w-full flex justify-around sticky top-0 py-10">
      <p>
        You are in Privilaged <a>DANGER</a> Zone!
      </p>
      <SingOut />
    </div>
  )
}

export default WarningBar
