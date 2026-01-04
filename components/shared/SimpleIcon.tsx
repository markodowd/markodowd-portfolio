import React from "react";
import * as SimpleIcons from "simple-icons";

interface SimpleIconProps extends React.SVGProps<SVGSVGElement> {
  icon: keyof typeof SimpleIcons;
}

export function SimpleIcon({ icon, className, ...props }: SimpleIconProps) {
  const iconData = SimpleIcons[icon];
  
  if (!iconData) {
    return null;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      {...props}
      dangerouslySetInnerHTML={{ __html: iconData.svg }}
    />
  );
}

