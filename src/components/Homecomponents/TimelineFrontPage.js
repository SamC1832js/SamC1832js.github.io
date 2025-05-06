import React, { useEffect, Fragment } from "react";
import "./Timeline.css";
import { ReactComponent as EducationIcon } from "../../icon/graduation-cap-line.svg";
import { ReactComponent as WorkIcon } from "../../icon/briefcase-4-fill.svg";
import timelineElements from "./TimelineElementsFrontPage";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimelineFrontPage() {
  let workIconStyles = { background: "#03D3A0" };
  let educationIconStyles = { background: "#f9c74f" };
  useEffect(() => {
    import("react-vertical-timeline-component/style.min.css");
  }, []);

  function boldKeywords(text) {
    // Define patterns for numbers and tech stacks
    const patterns = [
      /\b\d{1,3}(?:,\d{3})*(?:\.\d+)?\b/g,
      /\b(CS Magna Cum Laude|Robothon|Hackathons|ACM|JIRA|Confluence|Kanban|JUnit|Mockito|Kafka|Agile|React JS|Spring Boot|WebSocket|WebRTC|Stripe|PostgreSQL|JPA|C#|Selenium WebDriver|TeamCity|XML|Excel|Java|Python|JavaScript|Adobe Premiere|Photoshop|LLM)\b/g, // Tech stacks
    ];

    // Replace patterns with bolded versions
    patterns.forEach((pattern) => {
      text = text.replace(pattern, (match) => `<strong>${match}</strong>`);
    });

    // Return as JSX to render the bolded content safely
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  }
  return (
    <div className="timeline">
      <h1>My Experience</h1>
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
                <div className="summary">
                  <img
                    src={element.image}
                    className="vertical-timeline-element-image"
                  ></img>
                  <p className="vertical-timeline-element-boldtitle">
                    {element.boldTitle}
                  </p>
                </div>
                <p id="description">
                  {element.description.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {boldKeywords(line)}
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

export default TimelineFrontPage;
