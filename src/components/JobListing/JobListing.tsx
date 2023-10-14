import { Job } from "../../types";
import JobDetails from "../JobDetails/JobDetails";
import JobTool from "../JobTool/JobTool";
import "./JobListing.scss";
import { SetStateAction, Dispatch } from "react";

type JobListingProps = {
  job: Job;
  filteredTools: string[];
  setFilteredTools: Dispatch<SetStateAction<string[]>>;
};

export default function JobListing(props: JobListingProps) {
  const { job, filteredTools, setFilteredTools } = props;
  const featuredClass = job.featured ? "featured" : "";

  return (
    <div className={`job ${featuredClass}`}>
      <div className="job__details-container">
        <img src={require(`../../assets/svgs/${job.logo}`)} alt="" />
        <JobDetails job={job} />
      </div>
      {!!job.tools.length && (
        <div className="job__tools">
          {job.tools.map((tool) => (
            <JobTool filteredTools={filteredTools} setFilteredTools={setFilteredTools} tool={tool} origin="JOB_TOOL" />
          ))}
        </div>
      )}
    </div>
  );
}
