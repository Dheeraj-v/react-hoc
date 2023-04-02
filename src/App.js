import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
function App() {
  return (
    <div className="App">
     <ClickCounter name = 'btncomponent' otherProps = 'dsad'/>
     <HoverCounter/>
    </div>
  );
}

export default App;
