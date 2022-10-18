import React from 'react';
// Context
import { useAnotherContext } from '../context/AnotherContext';

const LaserShot = () => {
  const anotherContext = useAnotherContext();

  console.log('Render LaserShot');
  console.log(anotherContext.anotherState);

  // React.useEffect(() => {
  //   console.log('Lasershot fired!');
  //   console.log(laserShotContext)
  // }, [laserShotContext]);

  return <p>LaserShot</p>;
};

// React Memo important!!!
export default React.memo(LaserShot);
