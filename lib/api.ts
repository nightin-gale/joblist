"use server"
import { unstable_noStore as noStore } from 'next/cache';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

const apiRoutes = {
  job_list_preview: '/api/job_entry/get/list',
  job_entry_delete_by_id: '/api/job_entry/delete/',
}

async function fetchJobListPreview() {
  noStore();
  const response = await fetch(`${BACKEND_URL}${apiRoutes.job_list_preview}`);
  const data = await response.json();
  // console.log('data', data);
  return data;
}

async function deleteJobEntryById(id: string) {
  noStore();
  const response = await fetch(`${BACKEND_URL}${apiRoutes.job_entry_delete_by_id}${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export { fetchJobListPreview, deleteJobEntryById};
