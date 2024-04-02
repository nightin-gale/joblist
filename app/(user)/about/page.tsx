import { title } from "@/components/primitives";


export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full py-10">
      <div className="px-10 md:w-[1000px] text-lg pt-10 break-all">
        <h3 className = "text-2xl text-center">
          Joblist.org.uk is made by the job-seekers and for the job-seekers.
        </h3>
        <p className="mt-5  ">
          Here you find listing is simple, pragmatic, and straight to the point.
          <br />
          Currently we are based in Edinburgh. If you are interested to join us: send us an email at
          <a href="mailto:contact@joblist.org.uk" className="underline"> contact@joblist.org.uk</a>
        </p>
      </div>
    </div>
  );
}
