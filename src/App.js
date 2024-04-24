import './App.css';
import MainComponent from './components/MainComponent';
import { store } from './redux/reducer';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
      <MainComponent/>
      </Provider>
      
    </div>
  );
}

export default App;
