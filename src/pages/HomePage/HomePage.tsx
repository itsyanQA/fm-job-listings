import CodedBy from "../../components/CodedBy/CodedBy";
import JobFilter from "../../components/JobFilter/JobFilter";
import JobListings from "../../components/JobListings/JobListings";
import { useJobFilter } from "../../hooks/use-job-filter";
import "./HomePage.scss";

export default function HomePage() {
  const { filteredTools, setFilteredTools } = useJobFilter();

  return (
    <>
      <header>
        <img />
      </header>
      <div className="content-container">
        <JobFilter filteredTools={filteredTools} setFilteredTools={setFilteredTools} />
        <JobListings filteredTools={filteredTools} setFilteredTools={setFilteredTools} />
      </div>
      <CodedBy />
    </>
  );
}
