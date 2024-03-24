// app/page.tsx

import { JobListAccordian } from "../components/JobListAccordion";
export default function Page() {
  return (
    <div className="flex flex-row justify-center overflow-auto">
      <div className="w-[900px] pt-10">
        <JobListAccordian />
      </div>
    </div>
  );
}
