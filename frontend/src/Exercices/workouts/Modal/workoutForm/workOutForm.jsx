import React, { Fragment, useState } from "react";
import axios from 'axios'; // Import Axios
import './workOutForm.css';

export default function WorkOutForm(){

    const [workoutName, setWorkoutName] = useState('');
    const [level, setLevel] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [alarm, setAlarm] = useState('');
    const [message, setMessage] = useState('');

    const handleWorkoutSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/workouts', {
                name: workoutName,
                level_id: level,
                membre_id : 1,
                date: date,
                time: time,
                alarm: alarm,
                message: message
            });

            if (response.status === 201) {
                console.log('Workout added successfully');
            } else {
                // Handle error response
                console.error('Failed to add workout');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <Fragment>
            <div className="parentWorkOutForm">
                <h2>Custom workout</h2>
                <p>Record every completed workout to track your fitness program</p>
                <input type="text" placeholder="Workout name" value={workoutName} onChange={(e) => setWorkoutName(e.target.value)} />
                <h4>Choose Level</h4>
                <select value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="1">Beginner</option>
                    <option value="2">Medium</option>
                    <option value="3">Advanced</option>
                </select>
                <h4>Choose Date</h4>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <h4>Choose Time</h4>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                <h4>Choose Alarm</h4>
                <input type="time" value={alarm} onChange={(e) => setAlarm(e.target.value)} />
                <h4>Message</h4>
                <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleWorkoutSubmit}>Submit</button>
            </div>
        </Fragment>
    )
}
