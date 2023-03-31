import React from 'react'
import classes from './Home.module.css'
import NewTasks from '../New Tasks/NewTasks'
import PreviewTasks from '../Preview Tasks/PreviewTasks'

const Home = () => {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem("TODO")) || []);

  React.useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(tasks));
  }, [tasks]);


  function updateTasks(updatedTasks) {
    setTasks(updatedTasks);
  }

  function saveHandler(todoTitle) {
    const newTodo = {
      id: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
      title: todoTitle,
      completed: false,
    }
    updateTasks([newTodo, ...tasks]);
  }

  function onDeleteHandler(id) {
    const update = tasks.filter(item => item.id !== id);
    updateTasks(update);
  }

  function updateTitle(updatedId, updatedTitle) {
    const update = tasks.map(item => {
      if (item.id === updatedId) {
        item.title = updatedTitle;
      }
      return item;
    });
    updateTasks(update);
  }

  function updateStatus(updatedId, status) {
    const update = tasks.map(item => {
      if (item.id === updatedId) {
        item.completed = status;
      }
      return item;
    });
    updateTasks(update);
  }

  return (
    <div className={classes.container}>
      <div className={classes.newTasks}>
        <h1>New Tasks</h1>
        <NewTasks onSaveHandler={saveHandler} />
      </div>
      <div className={classes.previewTasks}>
        <div className={classes.heading}>
          <h1>Today's Tasks</h1>
          <h3>{new Date().toLocaleDateString()}</h3>
        </div>
        <PreviewTasks loadTasks={tasks} titleHandler={updateTitle} onDelete={onDeleteHandler} statusHandler={updateStatus} />
      </div>
    </div>
  )
}

export default Home;
