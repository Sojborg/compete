import {ADD_WORKOUT, CLEAR_WORKOUTS, LOAD_WORKOUTS} from "../Actions";

export interface IWorkout {
    id: number,
    type: string,
    length: number
    
}

export const workouts = [
    {
        id: 1,
        type: "run",
        length: 5.2,
    } as IWorkout,
    {
        id: 2,
        type: "cycling",
        length: 40.8
    } as IWorkout
];

const initialState = { items: new Array<IWorkout>()};

export function workoutReducer(state = initialState, action: any) {
    switch(action.type) {
        case LOAD_WORKOUTS:
            return {
                items: workouts.slice()
            };
        case CLEAR_WORKOUTS:
            return {
                items: []
            };
        case ADD_WORKOUT: {
            return { items: [...state.items, action.payload as IWorkout] }            
        }            
        default:
            return state;
    }    
}

export default workoutReducer;

