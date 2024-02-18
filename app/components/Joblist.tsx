"use client";

import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link, Button } from "@nextui-org/react";
import { joblist } from "@/public/joblisting";

const Joblist = () => {
  return (
    <Accordion selectionMode="multiple" isCompact={true}>
      {joblist.map((job, index) => {
        const title = (
          <div className="flex">
            <span>
            {job.Company + ", " + job.Position}
            </span>
            <Button
              className="ml-auto relative top-2"
              size="sm"
              href={job.ApplyLink?.href || "#"}
              target="_blank"
              as={Link}
              showAnchorIcon
              variant="light"
            >
              Link
            </Button>
          </div>
        );
        const label = job.Company + ", " + job.Position;
        const locations = job.Location.join(", ");
        const descriptors = [locations, job.Type, job.Salary, job.Length];
        const subtitle = (
          <div>
            {locations + " | " + job.Type + " | " + job.Salary + " | " + job.Length }.{" "}
            <span className="font-black">Deadline: </span>{" "}
            <span
              className={`
              ${job.DDL === "Rolling Basis" ? "text-success" : "text-danger"}`}
            >
              {job.DDL}
            </span>
          </div>
        );
        return (
          <AccordionItem
            onFocus={() => console.log("Focused")}
            key={index}
            aria-label={label}
            title={title}
            subtitle={subtitle}
          >
            {job.Description}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Joblist;
