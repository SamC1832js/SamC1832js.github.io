import React, { useEffect, Fragment } from "react";
import "./Timeline.css";
import { ReactComponent as EducationIcon } from "../icon/graduation-cap-line.svg";
import { ReactComponent as WorkIcon } from "../icon/briefcase-4-fill.svg";
import timelineElements from "./TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  let workIconStyles = { background: "#03D3A0" };
  let educationIconStyles = { background: "#f9c74f" };
  useEffect(() => {
    import("react-vertical-timeline-component/style.min.css");
  }, []);
  return (
    <div className="timeline">
      <h1>Timeline</h1>
      <VerticalTimeline>
        {timelineElements
          .sort((a, b) => b.id - a.id)
          .map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : educationIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <EducationIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">
                  {element.description.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
