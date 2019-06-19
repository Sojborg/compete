import React from "react";
import {Workout} from "./Workout";

export function WorkoutList(props :any) {
  if (props.items.length === 0) return null;

  return (
    <div>
      {props.items.map((item: any) => <Workout {...item} key={item.id}/>)}
    </div>
  )
}