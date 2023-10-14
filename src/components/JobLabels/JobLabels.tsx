import "./JobLabels.scss";

type JobLabelsProps = {
  postedAt: string;
  contract: string;
  location: string;
};
export default function JobLabels({ postedAt, contract, location }: JobLabelsProps) {
  return (
    <div className="job-labels">
      <span>{postedAt}</span>
      <span>{contract}</span>
      <span>{location}</span>
    </div>
  );
}
