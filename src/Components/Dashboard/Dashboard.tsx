import React from 'react';
import './dashboard.css';
import WorkoutWidget from "./Widgets/WorkoutWidget";
import {RaceWidget} from "./Widgets/RaceWidget";
import {MapWidget} from "./Widgets/MapWidget";

const widgetList = [
  <WorkoutWidget />,
  <MapWidget />,
  <RaceWidget />
];

export function Dashboard() {
  
  return (
    <div className='dashboard'>
      <h1>Compete</h1>
      
      <div className='widgets'>        
        {
          widgetList.map((widget) => {
            return (
              <div className='widget'>
                {widget}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

