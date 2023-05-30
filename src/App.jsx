import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { store } from './components/store';
// import CounterApp from './components/CounterApp';
import {store} from './cartStoreComp/store';
import CartStore from './cartStoreComp/CartStore';

function App() {

  return (
    <Provider store={store}>
      {/* <CounterApp /> */}
      <CartStore />
    </Provider>
  );
}

export default App;
