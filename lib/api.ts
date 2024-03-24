"use server"
import { unstable_noStore as noStore } from 'next/cache';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

const apiRoutes = {
  job_list_preview: '/job_entry/get/list',
  job_entry_get_by_id: '/job_entry/get/',
  job_entry_delete_by_id: '/job_entry/delete/',
}

import type { Job_Entry } from '@/lib/types';

function dataBaseEntryToJob_Entry(job: any): Job_Entry {
  var location = job.location
  var keywords = job.keywords
  var DDL = job.DDL
  if (job.location != null) {
    if (job.location.length >= 1) {
      location = job.location.join(", ")
    }
  }
  if (job.keywords != null) {
    if (job.keywords.length > 1) {
      keywords = job.keywords.join(", ")
    } else if (job.keywords.length === 0) {
      keywords = null
    }
  }
  if (job.DDL != null) {
    if (job.DDL.length > 1) {
      DDL = job.DDL
    }
  }

  return {
    uid: job.listing_id,
    modified: new Date(job.modified).toDateString(),
    company_name: job.company_name,
    job_title: job.job_title,
    apply_link: job.apply_link,
    job_type_time: job.job_type_time === 'f' ? 'Full-time' : 'Part-time',
    is_rolling: job.is_rolling,
    location: location,
    DDL: DDL,
    start_time: job.start_time,
    duration: job.duration,
    salary: job.salary,
    description: job.job_description,
    keywords: keywords,
  }
}

async function fetchJobById(id: string): Promise<Job_Entry|null> {
  try {
    const response = await fetch(`${BACKEND_URL}${apiRoutes.job_entry_get_by_id}${id}`);
    const data = await response.json();
    return dataBaseEntryToJob_Entry(data);
  } catch (error) {
    console.error('error', error);
    return null;
  }
}

async function fetchJobListPreview(): Promise<Job_Entry[]> {
  try {

    const response = await fetch(`${BACKEND_URL}${apiRoutes.job_list_preview}`);

    const data = await response.json();

    // console.log('data', data);
    const jobList = data.map((job: any) => {
      return dataBaseEntryToJob_Entry(job);
   })
    return jobList
  } catch (error) {
    console.error('error', error);
    return [];
  }
}

async function fetchJobListPreviewNoStore(): Promise<Job_Entry[]> {
  noStore();
  return fetchJobListPreview();
}

async function deleteJobEntryById(id: string) {
  // noStore();
  // try {
  //   const response = await fetch(`${BACKEND_URL}${apiRoutes.job_entry_delete_by_id}${id}`, {
  //     method: 'DELETE',
  //   });
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('error', error);
  //   return [];
  // }
}

export { fetchJobListPreview, fetchJobListPreviewNoStore, deleteJobEntryById, fetchJobById};
