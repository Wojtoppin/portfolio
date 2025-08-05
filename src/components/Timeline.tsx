import React from "react";

interface TimelineProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  const items = React.Children.toArray(children);
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto pb-6 pt-20 relative">
      <div className="absolute left-1 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-800 opacity-60" />
        
      {items.map((item: any, i) => (
        <div key={i} className="my-8 mx-2">
          <div className="z-2 mr-6 flex items-center min-w-[120px]">
            <div className="w-4 h-4 -ml-2 rounded-full bg-cyan-400 border-2 border-blue-900 shadow-md mr-2" />
            {item.props.timelineText && (
              <span className="text-cyan-200 font-semibold text-base whitespace-nowrap drop-shadow-sm">{item.props.timelineText}</span>
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