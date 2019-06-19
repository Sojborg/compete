import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addWorkout} from "../Actions";
import {IWorkout} from "../Reducers";

function AddWorkout(props: any) {
  const [inputValue, setInputValue] = useState('');
  
  const saveWorkout = () => {
    const workout = {
      length: parseFloat(inputValue),
      type: 'run'
    } as IWorkout;
    
    props.addWorkout(workout);
  };
  
  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <button onClick={saveWorkout}>Save</button>
    </div>
  )
}

function mapState(state: any) {
  return state;
}

function mapDispatch(dispatch: any) {
  return {
    addWorkout: (workout: IWorkout) => {
      dispatch(addWorkout((workout)));
    }
  }
}

export default connect(mapState, mapDispatch)(AddWorkout);