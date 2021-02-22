import { FaTimesCircle } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => { // catch the prop.
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
             onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {task.text}{' '}
                <FaTimesCircle style={{ color: 'red', cursor: 'crosshair' }} 
                    onClick={ () => onDelete(task.id) } />
            </h3>
            <p>{ (new Date (task.day)).toLocaleString() }</p>
        </div>
    )
}

export default Task
