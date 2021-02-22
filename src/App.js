import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from "./components/About"

// #Local Storage handle:
const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || '{ "tasks": [] }'
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const App = () => {

  // #Local Storage handle:
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );

  const [showAddTask, setShowAddTask] = useState (false) // false by default

  const [tasks, setTasks] = useState ([])

  useEffect(() => {
    const getTasks = async () => {
      let tasksFromServer = (localStorage.getItem('myValueInLocalStorage')) 
      tasksFromServer = JSON.parse(tasksFromServer)
      setTasks(( tasksFromServer.tasks ) )
    }
    getTasks()
  }, [])

  // Fetch Tasks:
  const fetchTasks = () => {
    const res = localStorage.getItem('myValueInLocalStorage')
    const data = res.jon()

    return(data.tasks)
  }

  // Add Task:
  const addTask = async (task) => {
    const id = Date.now() // number of miliseconds elapsed since January 1, 1970.
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    localStorage.setItem('myValueInLocalStorage', JSON.stringify({ tasks: [...tasks, newTask]}) )
    setShowAddTask(false) // close.
  }

  // Delete Task:
  const deleteTask = async (id) => {
    setTasks( tasks.filter( (task) => task.id !== id ) )
    localStorage.setItem('myValueInLocalStorage', JSON.stringify({ tasks: tasks.filter( (task) => task.id !== id ) }) )
  }
  
  // Toggle Reminder:
  const toggleReminder = (id) => {
   // console.log(`toggle ${id}`)

    const tasksToggled = tasks.map(t =>
      t.id === id ? { ...t, reminder: ! t.reminder } : t
    );

    localStorage.setItem('myValueInLocalStorage', JSON.stringify({ tasks: tasksToggled }) )
   
    // UI:
    setTasks(
      tasks.map(
        (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
        )
      )
  }

  return (
    <Router>

    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
      />

      <Route path="/" exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask} />}

          {
            tasks.length > 0 
            ? 
            (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
            : 
            (<p style={{'textAlign':'center', 'color':'darkgray', 'fontStyle':'italic'}}>No Tasks To Show...</p>)
          }
        </>
      )} />

      <Route path='/about' component={About} />

      <Footer />
    </div>

    </Router>
  )

}

export default App;
