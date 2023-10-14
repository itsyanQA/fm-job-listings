import { SetStateAction, Dispatch } from "react";
import JobTool from "../JobTool/JobTool";
import "./JobFilter.scss";

type JobFilterProps = {
  filteredTools: string[];
  setFilteredTools: Dispatch<SetStateAction<string[]>>;
};

export default function JobFilter(props: JobFilterProps) {
  const { filteredTools, setFilteredTools } = props;

  return (
    <div className={`job-filters ${filteredTools.length ? "filled" : ""}`}>
      <div className="job-filters__filter-items">
        {filteredTools.length
          ? filteredTools.map((tool) => <JobTool tool={tool} setFilteredTools={setFilteredTools} origin="FILTER" />)
          : null}
      </div>
      {!!filteredTools?.length && <button onClick={() => setFilteredTools([])}>clear</button>}
    </div>
  );
}
