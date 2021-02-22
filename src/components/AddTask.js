import { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'

// Component:
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState( new Date()); // default
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please enter a task name !')
            return
        }  
        
        onAdd({ text, day, reminder }) 
        setText('')
        setDay( (new Date()) )
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task Name' 
                    value={text} onChange={(e) => setText(e.target.value)} 
                />
            </div>

            <div className='form-control'>
                <label>Day &amp; Time</label>
                <DateTimePicker 
                    value={day} onChange={ setDay } 
                />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder} 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)} 
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
     
            </form>
        
    )
}

export default AddTask
