import {connect} from "react-redux";
import React from "react";
import {Workout} from "../../Workout";

function WorkoutWidget(props: any) {

  return (
    <div className='workout-widget'>
      <h3>Workout Widget</h3>
      {props.items.map((item: any) => <Workout {...item} key={item.id}/>)}
    </div>
  )
}

function mapState(state: any) {
  return state;
}

function mapDispatch(dispatch: any) {
  return {

  }
}

export default connect(mapState, mapDispatch)(WorkoutWidget);