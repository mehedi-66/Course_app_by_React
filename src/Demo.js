/* =============== Dynamic CSS add =================
    

    1) we have to use state ture or false value
    
    const [isValid, setIsValid] = useState(true);

    check and based on condition true and flase value change 
   
    inline CSS
    style = {{obj}};

    style={{color: !isValid ? 'red' : 'white' }}
    style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}}

    Or outside CSS style (.invalid)
    
    CSS{
        .Form-main.invalid input{
            border-color: red;
            background: #ffd7d7;
        }
        .Form-main.invalid label{
            color: red;
        }

    }

    This how Dynamic CSS Class add and use them

    className={`Form-main ${ !isValid ? 'invalid' : ''}`}

    // One intersting thing is .... For the reson is 
    1) The file name  => CourseItem.module.css
    2) then import the CSS file 
        import styles from './CourseForm.module.css';
    3) to use inside the Class name use  
        < p className={styles.yourCSSclassName}>  </p>

        < p className={styles[from-control]}> Another way (-) for this </p>
       
        < p className={` ${styles['form-control']} ${ !isValid && styles.isValid}`}>  </p>

    4) @media (max-width: 768px){
        .button{
            width: auto;
        }
    }
 */

// ==================== App.js ===============
import './App.css'
import React, { useState } from 'react';
import CourseForm from './component/CourseFrom/CourseForm';
import CourseList from './component/CourseList/CourseList';

function App() {
    let defaultArr = [

        {
            id: 'e1',
            title: "Math",
        },
        {
            id: 'e2',
            title: "History",
        }

    ];

    const [courseArr, setCourseArr] = useState(defaultArr);

    function addTitleHandler(getTitle) {
        //console.log("App Title" + getTitle);
        let NewObj = {
            id: Math.random().toString(),
            title: getTitle,
        };

        //courseArr = [...courseArr, NewObj]
        // console.log(courseArr);

        setCourseArr(() => {
            return [NewObj, ...courseArr];
        });
    }
    return (
        <div>
            < CourseForm onAddTitle={addTitleHandler} />
            {
                courseArr.map((element) =>
                    < CourseList
                        key={element.id}
                        title={element.title}
                    />
                )
            }

        </div>

    );

}
export default App;
//*********************** END ****************** */


// ==================== CourseForm.js ===============
import './CourseForm.css';
import React, { useState } from 'react'

import styles from './CourseForm.module.css';

function CourseForm(props) {

    const [title, setTitle] = useState('');
    const [isValid, setIsValid] = useState(true);
    function courseAddHandler(event) {
        // console.log(event.target.value);
        if (title.trim().length > 0) {
            setIsValid(true);
        }
        setTitle(event.target.value);
    };
    function submitHandler(event) {
        event.preventDefault();
        if (title.trim().length === 0) {

            setIsValid(false);

            setTitle('');
            return;

        }
        props.onAddTitle(title);
        setTitle('');




    };
    return (
       // < p className={` ${styles['form-control']} ${ !isValid && styles.isValid}`}>  </p>

        // String leteral `` back tick
        <div className={`Form-main ${!isValid ? 'invalid' : ''}`}>
            <form>
                <label className="Form-label">Course</label> <br />
                <input type="text" value={title} onChange={courseAddHandler} /> <br />
                <button className="Form-btn" onClick={submitHandler}>Add Course</button>

            </form>
        </div>

    );
};
export default CourseForm;
//*********************** END ****************** */


// ==================== CourseForm.css ===============
.Form - main{
    width: 400px;
    margin: 0 auto;
    background - color: #96558e;
    height: 135px;
    overflow: hidden;
}
.Form - label{
    font - size: 20px;
    font - weight: bold;
    padding: 15px 1px 0px 11px;
    margin: 0px;
    display: block;
    color: white;

}
.Form - main input{
    width: 90 %;
    display: block;
    margin: -12px 0px 0px 9px;
    box - sizing: border - box;
    padding: 5px;
    outline: none;
}
.Form - main input: hover{
    background - color: #ffeeee;
}
.Form - btn{
    box - sizing: border - box;
    padding: 5px;
    margin: -4px 0px 0px 10px;
    outline: none;
    border: 2px solid #cbcec8;
    background - color: #f7f7f7;

}

.Form - main.invalid input{
    border - color: red;
    background: #ffd7d7;
}
.Form - main.invalid label{
    color: red;
}
//*********************** END ****************** */


// ==================== CourseList.js ===============

import './CourseList.css'

function CourseList(props) {

    return (
        <div className="course-list">
            <ul>
                <li>{props.title}</li>
            </ul>
        </div>

    );

};
export default CourseList;
//*********************** END ****************** */


// ==================== CourseList.css ===============
.course - list{
    width: 400px;
    margin: 10px auto;
    background - color: #96558e;
    box - sizing: border - box;
    padding: 10px;
    color: white;
    font - weight: bold;
    border: 1px solid #3a3a3a;
    border - radius: 3px;
}
//*********************** END ****************** */