import "./JobTag.scss";

type JobTagProps = {
  jobTagType: "NEW" | "FEATURED";
};

export default function JobTag({ jobTagType }: JobTagProps) {
  const jobTagText = jobTagType === "NEW" ? "new!" : "featured";

  return (
    <div className={`job-tag ${jobTagType === "NEW" ? "new" : "featured"}`} style={{ width: jobTagType === "NEW" ? "45px" : "75px" }}>
      <span>{jobTagText}</span>
    </div>
  );
}
