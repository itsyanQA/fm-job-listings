import "./JobTool.scss";
import { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";

type JobToolProps = {
  tool: string;
  filteredTools?: string[];
  setFilteredTools: Dispatch<SetStateAction<string[]>>;
  origin: "FILTER" | "JOB_TOOL";
};

export default function JobTool(props: JobToolProps) {
  const { tool, filteredTools, setFilteredTools, origin } = props;

  const renderJobTool = (): JSX.Element | null => {
    if (origin === "JOB_TOOL") {
      return (
        <span
          className={`job-tool ${filteredTools?.includes(tool) ? "disabled" : ""}`}
          onClick={() =>
            setFilteredTools((prevTools) => {
              if (!prevTools.includes(tool)) {
                return [...prevTools, tool];
              }
              return prevTools;
            })
          }
        >
          {tool}
        </span>
      );
    } else if (origin === "FILTER") {
      return (
        <div className="job-tool-container">
          <span className={`job-tool filter`}>{tool}</span>
          <div
            className="job-tool-close-container"
            onClick={() =>
              setFilteredTools((prevTools) => {
                return prevTools.filter((prevTool) => prevTool !== tool);
              })
            }
          >
            <CloseIcon />
          </div>
        </div>
      );
    }
    return null;
  };

  return renderJobTool();
}
