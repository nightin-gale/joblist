import { unstable_noStore as noStore } from 'next/cache';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';

const apiRoutes = { 
  job_list_preview: '/api/job_entry/get/list',
}

async function fetchJobListPreview() {
  noStore();
  const response = await fetch(`${BACKEND_URL}${apiRoutes.job_list_preview}`);
  const data = await response.json();
  return data;
}

export { fetchJobListPreview };
