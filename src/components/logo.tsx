import React from "react";

const styles = {
  paddingLeft: "3em",
  paddingRight: "3em",
};

export interface LogoProps {
  height?: string;
  width?: string;
}

export function Logo({ height = "100%", width = "100%" }: LogoProps) {
  return (
    <div style={styles}>
      <img
        height={height}
        width={width}
        src={require("../assets/images/gdsc-logo-and-text.png")}
        alt="GDSC logo"
      />
    </div>
  );
}
