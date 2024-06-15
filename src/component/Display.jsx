import styles from './Display.module.css';
import React, { useState } from 'react';

function Display() {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [funame, setfuname] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (fname.trim() !== '' && lname.trim() !== '') {
           
            setfuname(`${fname} ${lname}`);
        } else {
            
            setfuname('');
        }
        setfname('');
        setlname('');
    }
    function handleClick(){
        if (fname.trim() !== '' && lname.trim() !== '') {
           
            setfuname(`${fname} ${lname}`);
        } else {
            
            setfuname('');
        }
    }
    return (
        <div className={styles.set}>
            <h1 className={styles.heading}>Full Name Display</h1>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.inputContainer}>
                    <label>First Name: </label>
                    <input 
                        type="text" 
                        placeholder=" " 
                        value={fname} 
                        onChange={(e) => setfname(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label>Last Name: </label>
                    <input 
                        type="text" 
                        placeholder=" " 
                        value={lname} 
                        onChange={(e) => setlname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleClick}>Submit</button>
                </div>
            </form>
            {funame && <h3>Full Name: {funame}</h3>}
        </div>
    );
}

export default Display;
