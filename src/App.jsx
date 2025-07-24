
//import TodoList from './Components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";

function App() {

  return (
    <>
      {/* <div className='container mt-5 text-center text-primary  '>
          <TodoList/>  
        </div>  */}
      <Nav />
      <Index/>
    </>
  )
}

export default App
