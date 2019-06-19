import {IWorkout} from "../Reducers";

export const LOAD_WORKOUTS = 'LOAD_WORKOUTS';
export const CLEAR_WORKOUTS = 'CLEAR_WORKOUTS';
export const ADD_WORKOUT = 'ADD_WORKOUT';

export function loedWorkouts() {
    return {
        type: LOAD_WORKOUTS        
    }
}

export function clearWorkouts() {
    return {
        type: CLEAR_WORKOUTS
    }
}

export function addWorkout(workout: IWorkout) {
    return {
        type: ADD_WORKOUT,
        payload: workout
    }
}
