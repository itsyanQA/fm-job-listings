import { Job } from "../../types";
import JobLabels from "../JobLabels/JobLabels";
import JobTag from "../JobTag/JobTag";
import "./JobDetails.scss";

type JobDetailsProps = {
  job: Job;
};

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <div className="job-details">
      <div className="job-details__company-container">
        <span className="job-details__company-name">{job.company}</span>
        {(job.new || job.featured) && (
          <div className="job-details__tags">
            {job.new && <JobTag jobTagType="NEW" />}
            {job.featured && <JobTag jobTagType="FEATURED" />}
          </div>
        )}
      </div>
      <span className="job-details__position">{job.position}</span>
      <JobLabels postedAt={job.postedAt} contract={job.contract} location={job.location} />
    </div>
  );
}
