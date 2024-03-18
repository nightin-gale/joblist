import React from 'react'
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { fetchJobListPreview } from '@/lib/api'
import { DataTable } from './ui/DataTable/DataTable'
import { Job_Entry, columns} from './ui/DataTable/Columns'

async function getData(): Promise<Job_Entry[]> {
  const data = await fetchJobListPreview()
  const jobList = data.map((job: any) => {

    var location = job.location
    var keywords = job.keywords
    if (job.location != null) {
      if (job.location.length > 1) {
        location = job.location.join(", ")
      }
    }
    if (job.keywords != null) {
      if (job.keywords.length > 1) {
        keywords = job.keywords.join(", ")
      }
    }

    return {
      uid: job.listing_id,
      modified: new Date(job.modified).toDateString(),
      company_name: job.company_name,
      job_title: job.job_title,
      location: location,
      DDL: job.DDL,
      keywords: keywords
    }
  })
  // console.log(jobList)
  // console.log(jobList[0].position)
  return jobList
}

async function page() {
  const session = await getServerSession(options)
  if (!session) {
    return (<>404 Not Found</>)
  }

  const jobList = await getData()

  return (
    <>
      <div className="flex justify-center items-center py-20">
        <DataTable columns={columns} data={jobList} />
      </div>
    </>
  )
}

export default page 
