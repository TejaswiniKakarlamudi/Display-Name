import styles from './Display.module.css';
import React, { useState } from 'react';

function Display() {
    const [fname, setfname] = useState('');
    const [lname, setLname] = useState('');
    const [funame, setFuname] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setFuname(`${fname} ${lname}`);
        setfname('');
        setLname('');
    }

    return (
        <div className={styles.set}>
            <h1 className={styles.heading}>Full Name Display</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label>First Name : </label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            value={fname} 
                            onChange={(e) => setfname(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Last Name : </label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            value={lname} 
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {funame && <div className={styles.result}>Full Name : {funame}</div>}
        </div>
    );
}

export default Display;
