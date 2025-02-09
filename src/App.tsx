
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store";
import BookList from './features/BookList';

function App() {


  return (
    <>
      <Provider store={store}>
        <BookList />
      </Provider>
    </>
  )
}

export default App
