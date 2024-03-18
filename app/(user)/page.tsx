// app/page.tsx
import { Counter } from "@/components/counter";
import Joblist from "@/app/components/Joblist";
import DeleteEntryDialogue from "../(admin)/admin/ui/DeleteEntryDialogue";

export default function Page() {
  return (
    <div className="flex flex-row justify-center overflow-auto">
      <div className="w-[900px] pt-10">
        <Joblist />
      </div>
    </div>
  );
}
