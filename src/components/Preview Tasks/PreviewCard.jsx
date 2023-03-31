import React, { useState } from 'react'
import classes from './PreviewTasks.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSquareCheck, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const PreviewCard = (props) => {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [status, setStatus] = useState(props.isCompleted);


    const editHandler = () => {
        setEditing(true);
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onBlurHandler = () => {
        setEditing(false);
        props.onTitleUpdate(props.id, title);
    };

    const onDelete = () => props.onDeleteHandler(props.id);

    const statusHandler = (event) => {
        const updatedStatus = !status;
        setStatus(updatedStatus);
        props.onStatusUpdate(props.id, updatedStatus);
    };

    const checkboxIcon = status ? faSquareCheck : faSquare;
    const toggleButton = status ? true : false;

    return (
        <div className={`${classes.item} ${status && classes.complete}`}>
            <div className={classes.list}>
                <FontAwesomeIcon icon={checkboxIcon} className={classes.checkbox} onClick={statusHandler} />
                <input type="text" className={classes.text} value={title} onChange={titleChangeHandler} disabled={!editing} onBlur={onBlurHandler} />
            </div>

            <div className={classes.actions}>
                <button className={classes.edit} onClick={editHandler} disabled={toggleButton}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className={classes.removeBtn} onClick={onDelete} disabled={toggleButton}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}

export default PreviewCard;
