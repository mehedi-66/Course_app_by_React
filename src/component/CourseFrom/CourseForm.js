import './CourseForm.css';
import React, {useState} from 'react'
import { getByTitle } from '@testing-library/react';

function CourseForm(props){

    const [title, setTitle] = useState('');
    const [isValid, setIsValid] = useState(true);
    function courseAddHandler(event){
        // console.log(event.target.value);
       if(title.trim().length > 0){
           setIsValid(true);
       }
        setTitle(event.target.value);
    };
    function submitHandler(event) {
        event.preventDefault();
        if(title.trim().length === 0) {
            
            setIsValid(false);

            setTitle('');
            return ;
           
        }
        props.onAddTitle(title);
        setTitle('');
        
       
        
        
    };
    return (

        // String leteral `` back tick
        <div className={`Form-main ${ !isValid ? 'invalid' : ''}`}> 
            <form>
                <label  className="Form-label">Course</label> <br/>
                <input type="text" value={title} onChange={courseAddHandler}/> <br />
                <button className="Form-btn" onClick={submitHandler}>Add Course</button>

            </form>
        </div>

    );
};
export default CourseForm;