import React from 'react';

it('renders without crashing', async () => {
  const result = await fetchData();
  
  console.log(result)
  if (!result) {
    throw new Error("test failed!")
  }
});


export const fetchData = async () : Promise<boolean> => {
  return Promise.resolve(true);
}
