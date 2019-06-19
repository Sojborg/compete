import React, {useEffect} from 'react';
import './App.css';
import Workouts from "./Components/Workouts";
import {Dashboard} from "./Components/Dashboard/Dashboard";
import {connect} from "react-redux";
import {loedWorkouts} from "./Actions";

const App: React.FC = (props: any) => {
  
  useEffect(() => {
    props.loadWorkouts();    
  }, []);
  
  return (
    <div>
      <Dashboard/>
      <Workouts/>
    </div>
  );
};

function mapState(state: any) {
  return state;
}

function mapDispath(dispacth: any) {
  return {
    loadWorkouts: () => dispacth(loedWorkouts())
  }
}

export default connect(mapState, mapDispath)(App);

