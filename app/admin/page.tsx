import React from 'react'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

async function page() {
  const session = await getServerSession(options)
  if (!session) {
    return (<>404 Not Found</>)
  }

  return (
    <>
      <div className="flex justify-center items-center py-20">
        aha
      </div>
    </>
  )
}

export default page 
