import React from 'react'
import classes from './Newtasks.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


const NewTasks = (props) => {
    const [todo, setTodo] = React.useState("");

    const todoChangeHandler = (event) => {
        setTodo(event.target.value);
    }

    const createTodo = (event) => {
        event.preventDefault();

        if (todo.trim().length < 3) {
            alert("Please enter a valid task");
            return;
        }

        props.onSaveHandler(todo);
        setTodo("");
    }

    return (
        <div className={classes.container}>
            <form
                className={classes.new_task_form}>
                <input
                    type="text"
                    className={classes.new_task_input}
                    placeholder="What plan do you have for today ?"
                    onChange={todoChangeHandler}
                    value={todo}
                    autoFocus
                />
                <button
                    type="submit"
                    className={classes.new_task_submit}
                    onClick={createTodo}
                >
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={classes.icon} />
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default NewTasks