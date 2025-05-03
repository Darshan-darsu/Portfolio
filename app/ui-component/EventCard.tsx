"use client";
import { useState, useEffect, useRef } from "react";

interface EventCardProps {
  name: string;
  designation: string;
  period: string;
  roles: string[];
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  designation,
  period,
  roles,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLUListElement>(null);
  const [contentHeight, setContentHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [expanded]);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="flex flex-col gap-y-3 border shadow-2xl bg-background opacity-90 rounded-2xl p-6 mx-2 max-w-3xl border-foreground  transition hover:shadow-lg">
      <div className="text-xl font-semibold text-lightcolor">{name}</div>
      <div className="text-lg text-foreground">{designation}</div>
      <div className="text-sm  text-foreground italic">{period}</div>

      <div
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{ maxHeight: expanded ? contentHeight : "120px" }}
      >
        <ul
          ref={contentRef}
          className="list-disc list-inside text-fontcolor text-sm space-y-2"
        >
          {roles.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        className="text-lightcolor text-sm hover:underline self-start mt-1"
        onClick={toggleExpanded}
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default EventCard;
