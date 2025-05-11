
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store";
import BookList from './features/BookList';
import UseStateHooks from './features/UseStateHooks';

function App() {


  return (
    <>
      <Provider store={store}>
        {/* <BookList /> */}
        <UseStateHooks />
      </Provider>
    </>
  )
}

export default App
