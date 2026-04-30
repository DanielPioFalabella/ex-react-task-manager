import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import TaskDetail from "./pages/TaskDetail"
import { GlobalProvider } from "./context/GlobalContext"

const App = () => {
  return (
    <>
    <GlobalProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}/>
          <Route path="/task/:id" element={<TaskDetail />}/>
          <Route path="/addTask" element={<AddTask />}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App