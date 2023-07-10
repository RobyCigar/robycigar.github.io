import React, { useState } from "react";

const useTooltip = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const Tooltip = ({ children, content }: {
    children: React.ReactNode,
    content: any
  }) => {
    return (
      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {isTooltipVisible && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded p-2 whitespace-nowrap">
            {content}
          </div>
        )}
      </div>
    );
  };

  return { Tooltip };
};

export default useTooltip;
