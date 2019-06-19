import React from 'react';
import {connect} from "react-redux";
import {clearWorkouts, loedWorkouts} from "../Actions";
import {WorkoutList} from "./WorkoutList";
import AddWorkout from "./AddWorkout";

function Workouts(props: any) {
    return (
        <div>
            <button type="button" onClick={props.loadWorkouts}>Load workouts</button>
            <button type="button" onClick={props.clearWorkouts}>Clear</button>
            <AddWorkout/>
            <WorkoutList {...props} />
        </div>
    )
}

function mapState(state: any) {
    return state;    
}

function mapDispath(dispacth: any) {
    return {
        loadWorkouts: () => dispacth(loedWorkouts()),
        clearWorkouts: () => dispacth(clearWorkouts())
    }
}

export default connect(mapState, mapDispath)(Workouts);