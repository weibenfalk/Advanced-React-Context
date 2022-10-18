// Components
import TieFighter from './components/TieFighter';
// Context
import { AwesomeContextProvider } from './context/AwesomeContext';

const App = () => (
  <AwesomeContextProvider>
    <h2>React Context</h2>
    <TieFighter />
  </AwesomeContextProvider>
);

export default App;
