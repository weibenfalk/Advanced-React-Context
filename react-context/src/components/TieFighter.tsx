// Components
import LaserShot from './LaserShot';
// Context
import { useAwesomeContext } from '../context/AwesomeContext';
import { AnotherContextProvider } from '../context/AnotherContext';

const TieFighter = () => {
  const awesomeContext = useAwesomeContext();

  console.log('Render TieFighter');
  console.log(awesomeContext.awesomeState);

  return (
    <AnotherContextProvider>
      <p>TieFighter</p>
      <LaserShot />
      <button onClick={() => awesomeContext.setAwesomeState(Math.random())}>Click me!</button>
    </AnotherContextProvider>
  );
};

export default TieFighter;
