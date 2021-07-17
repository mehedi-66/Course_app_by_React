import './App.css'
import React, {useState} from 'react';
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
         courseArr.map( (element) => 
           < CourseList 
            key = {element.id}
            title = {element.title} 
          />
         )
       }

    </div>
   
  );

}
export default App;