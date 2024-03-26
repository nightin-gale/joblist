import { title } from "@/components/primitives";


export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full py-10 ">
      <h1 className={title(
      )}>
        About Us
      </h1>
      <p className="my-5 w-full">
        Joblist.org.uk is made by the students for the students.
        We are tired of LinkedIn&apos;s flamboyance, and every other job board&apos;s &quot;always wanting you to subscribe&quot;.
        So here it is: a job listing that is simple and straight to the point.
      </p>

      <p className="">
        Currently we are based in Edinburgh. If you are interested to join us: send us an email at 
        <a href="mailto:contact@yetin.net" className="underline"> contact@yetin.net</a>
      </p>
    </div>
  );
}
