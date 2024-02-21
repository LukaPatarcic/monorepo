"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  console.log('change2')
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app! :D`)}
    >
      {children}
    </button>
  );
};
