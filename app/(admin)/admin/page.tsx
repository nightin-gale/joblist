import React from 'react'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { fetchJobListPreview } from '@/lib/api'
import { DataTable } from './ui/DataTable/DataTable'
import { Payment, columns } from './ui/DataTable/Columns'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "u28ed52f",
      amount: 120,
      status: "pending",
      email: "ma@example.com",
    },
    { 
      id: "u28ed52f", 
      amount: 120,
      status: "pending",
      email: "ap@example.com",
    }
    // ...
  ]
}

async function page() {
  const session = await getServerSession(options)
  if (!session) {
    return (<>404 Not Found</>)
  }

  const data = await getData()
  
  const jobList = await fetchJobListPreview()

  console.log(jobList)

  return (
    <>
      <div className="flex justify-center items-center py-20">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}

export default page 
