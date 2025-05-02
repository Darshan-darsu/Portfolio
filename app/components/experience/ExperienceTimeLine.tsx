import { Fragment } from "react";
import EventCard from "@/app/ui-component/EventCard";
import Pillar from "@/app/ui-component/Pillar";
import Circle from "@/app/ui-component/Circle";
import { CompanyEvents } from "@/app/data/ExpEvents";

const ExpereinceTimeLine = () => {
  return (
    <>
      <h1 className="text-fontcolor  text-2xl font-extrabold">Experience</h1>
      <Circle />
      {CompanyEvents.map((item, idx) => (
        <Fragment key={item.name}>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-2 mx-auto items-center">
            {item.direction === "left" ? (
              <EventCard
                name={item.name}
                designation={item.designation}
                period={item.period}
                roles={item.roles}
              />
            ) : (
              <div className="hidden md:block" />
            )}
            <Pillar />
            {item.direction === "right" ? (
              <EventCard
                name={item.name}
                designation={item.designation}
                period={item.period}
                roles={item.roles}
              />
            ) : (
              <div className="hidden md:block" />
            )}
          </div>
          {CompanyEvents.length - 1 == idx ? "" : <Circle />}
          <Pillar />
        </Fragment>
      ))}
    </>
  );
};

export default ExpereinceTimeLine;
