import "./JobListings.scss";
import jobsData from "../../data/data.json";
import { Job } from "../../types";
import JobListing from "../JobListing/JobListing";
import { Dispatch, SetStateAction } from "react";

type JobListingsProps = {
  filteredTools: string[];
  setFilteredTools: Dispatch<SetStateAction<string[]>>;
};

export default function JobListings(props: JobListingsProps) {
  const { filteredTools, setFilteredTools } = props;
  const jobsToDisplay = filteredTools.length
    ? jobsData?.filter((job) => job.tools.some((jobTool) => filteredTools.includes(jobTool)))
    : jobsData;

  return (
    <div className="job-listings">
      {jobsToDisplay?.map((job: Job) => (
        <JobListing job={job} filteredTools={filteredTools} setFilteredTools={setFilteredTools} key={job.id} />
      ))}
    </div>
  );
}
