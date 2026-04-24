import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />}/>
        <Route path="/addTask" element={<AddTask />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App