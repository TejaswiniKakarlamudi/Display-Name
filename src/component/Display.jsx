import styles from './Display.module.css';
import React, { useState } from 'react'

function Display() {
    const [fname,setfname] = useState('');
    const [lname,setlname] = useState('');
    const [funame,setfuname] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setfuname(fname + ' '+ lname);
        // return <h3>{funame}</h3>
    }
  return (

    <div className={styles.set}>
      <h1 className="heading">Full Name Display</h1>
      <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        value={fname} 
                        onChange={(e) => setfname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        value={lname} 
                        onChange={(e) => setlname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
       
        {funame && <h3>Full Name: {funame}</h3>}

      


    </div>
  )
}

export default Display
