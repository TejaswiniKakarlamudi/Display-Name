import styles from './Display.module.css';
import React, { useState } from 'react';

function Display() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [funame, setFuname] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setFuname(`${fname} ${lname}`);
    }

    return (
        <div className={styles.set}>
            <h1 className={styles.heading}>Full Name Display</h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {funame && <h3>{funame}</h3>}
        </div>
    );
}

export default Display;
