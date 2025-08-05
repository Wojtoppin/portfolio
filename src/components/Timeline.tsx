import React from "react";

interface TimelineProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  const items = React.Children.toArray(children);
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto pb-12 pt-30 relative">
      <div className="absolute left-1 top-0 h-full w-1 bg-gradient-to-b to-[#BFA181] from-[#BFA181] opacity-40" />
        
      {items.map((item: any, i) => (
        <div key={i} className="my-8 mx-2">
          <div className="z-2 mr-6 flex items-center min-w-[120px]">
            <div className="w-4 h-4 -ml-2 rounded-full bg-[#BFA181] border-2 border-[#BFA181] shadow-md mr-2 opacity-100" />
            {item.props.timelineText && (
              <span className="text-[#BFA181] font-semibold text-base whitespace-nowrap drop-shadow-sm">{item.props.timelineText}</span>
            )}
          </div>
          <div className="flex-1">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;