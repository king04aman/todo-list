import React from 'react'
import classes from './PreviewTasks.module.css'
import PreviewCard from './PreviewCard'


const PreviewTasks = (props) => {
    const todos = props.loadTasks;


    return (
        <div className={classes.container}>
            {todos.map((todo) => {
                return (
                    <PreviewCard
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        isCompleted={todo.completed}
                        onTitleUpdate={props.titleHandler}
                        onDeleteHandler={props.onDelete}
                        onStatusUpdate={props.statusHandler}
                    />
                )
            })}
        </div>
    )
}

export default PreviewTasks
