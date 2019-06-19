import React from "react";

interface IProps {
  type: string;
}

export function Workout(props: IProps) {
  return (
    <div>
      {props.type}
    </div>
  )
}