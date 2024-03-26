// app/page.tsx

import { JobListAccordian } from "../components/JobListAccordion";
export default function Page() {
  return (
    <div className="flex flex-row justify-center overflow-auto px-10 md:px-0">
      <div className="w-[900px] pt-10">
        <JobListAccordian />
      </div>
    </div>
  );
}
