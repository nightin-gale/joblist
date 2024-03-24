import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { fetchJobListPreview, fetchJobById } from "@/lib/api";
import JobListButton from "./JoblistButton"

function JobEntryTOAccordianItem(job: any, index: any) {
  // filter out null values
  let subheader: Array<string> = [job.location, job.job_type_time, job.keywords, job.DDL].filter(x => !!x)
  let subheader_str = subheader.join(" | ")
  var Deadline: any = ""

  if (job.Rolling === true) {
    Deadline = (
      <span className="font-black text-slate-500">Deadline:
        <span className="font-normal text-success">Rolling Basis</span>
      </span>
    )
  } else if (job.DDL != null) {
    Deadline = (
      <span className="font-black text-slate-500">Deadline:
        <span className="text-danger">{job.DDL}</span>
      </span>
    )
  }

  const header = (
    <div className="w-full flex justify-between ">
      <div className="text-left">
        {job.job_title} <span className="text-sm font-bold">{job.company_name}</span>
        <p className="font-light text-sm text-left">
          {subheader_str} {Deadline}
        </p>
      </div>
      {job.apply_link ? <JobListButton className="" Url={job.apply_link} /> : null}
    </div>
  )
  return (
    <div key={index}>
      <AccordionItem value={`item-${index}`} key={`${index}`}>
        <AccordionTrigger>
          {header}
        </AccordionTrigger>
        <AccordionContent>
          <div>
            {job.description}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  )

}

export async function JobListAccordian() {
  const joblist = await fetchJobListPreview();
  const YetinEntry = await fetchJobById("2");

  return (
    <Accordion type="multiple" className="w-full">
      {JobEntryTOAccordianItem(YetinEntry, 1000)}
      {joblist.map((job: any, index: any) => {
        if (job.uid=== 2){
          return null
        }
        return JobEntryTOAccordianItem(job, index)
      })}
    </Accordion>
  )
}

