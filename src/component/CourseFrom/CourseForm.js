import './CourseForm.css';
import React, {useState} from 'react'
import { getByTitle } from '@testing-library/react';

function CourseForm(props){

    const [title, setTitle] = useState('');

    function courseAddHandler(event){
        // console.log(event.target.value);
       
        setTitle(event.target.value);
    };
    function submitHandler(event) {
        event.preventDefault();
        if(title.length !== 0) {
            props.onAddTitle(title);
        
            setTitle('');
        }
        
        
    };
    return (

        <div className="Form-main"> 
            <form>
                <label className="Form-label">Course</label> <br/>
                <input type="text" value={title} onChange={courseAddHandler}/> <br />
                <button className="Form-btn" onClick={submitHandler}>Add Course</button>

            </form>
        </div>

    );
};
export default CourseForm;