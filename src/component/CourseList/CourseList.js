
import './CourseList.css'
 
function CourseList(props){

    return (
        <div className="course-list">
            <ul>
                <li>{props.title}</li>
            </ul>
        </div>

    );

};
export default CourseList;