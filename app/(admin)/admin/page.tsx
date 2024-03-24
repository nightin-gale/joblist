import React from 'react'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { fetchJobListPreviewNoStore } from '@/lib/api'
import { DataTable } from './ui/DataTable/DataTable'
import { columns } from './ui/DataTable/Columns'
import type { Job_Entry } from '@/lib/types'

async function page() {
  const session = await getServerSession(options)
  if (!session) {
    return (<>404 Not Found</>)
  }

  const jobList: Job_Entry[] = await fetchJobListPreviewNoStore()

  return (
    <>
      <div className="flex justify-center items-center py-20">
        <DataTable columns={columns} data={jobList} />
      </div>
    </>
  )
}

export default page 
