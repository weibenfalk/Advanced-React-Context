import React from 'react';
// Context
import { useAnotherContext } from '../context/AnotherContext';

const LaserShot = () => {
  const anotherContext = useAnotherContext();

  console.log('Render LaserShot');
  // console.log(anotherContext.anotherState);

  React.useEffect(() => {
    console.log(anotherContext);
  }, [anotherContext]);

  return <p>LaserShot</p>;
};

// React Memo important!!!
export default LaserShot;
