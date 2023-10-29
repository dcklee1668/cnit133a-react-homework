// CourseList.js
import React, { useState } from 'react';
import OtherCourses from "./OtherCourses.json";

const initialCourses = [
   { id: "103", name: 'CNIT 103 - Hardware', units: 3, core: true },
   { id: "131", name: 'CNIT 131 - Internet & Intro to HTML, CSS', units: 3, core: true },
   { id: "106", name: 'CNIT 106 - Introduction to Networks', units: 3, core: true },
   { id: "120", name: 'CNIT 120 - Network Security', units: 3, core: true },
];

const CourseList = () => {
   const [courses, setCourses] = useState(initialCourses);
   const [selectedCourse, setSelectedCourse] = useState('');
   const [msg, setMsg] = useState("");

   const addCourse = () => {
      if (selectedCourse?.id) {
         const { id, name, units } = selectedCourse;
         const matches = courses.filter((course) => course.id === id);
         if (matches.length === 0) {
            setCourses([...courses, { id, name, units }]);
            setMsg(`Added ${name}`);
         } else {
            setMsg(`"${name}" was added previously.`);
         }
         setSelectedCourse({ id: "" });   
      }
   };

   const deleteCourse = (id) => {
      setCourses(courses.filter((course) => course.id !== id));
   };

   const findCourse = (id) => {
      return OtherCourses.find((course) => course.id === id);
   };

   return (
      <div>
         <h1>Courses for AS Degree in CNIT</h1>
         <div>
            <select value={selectedCourse.id} onChange={(e) => setSelectedCourse(findCourse(e.target.value))}>
               <option value="">Select a course</option>
               {
                  OtherCourses.map((course) => <option key={course.id} value={course.id}>{course.name} - {course.units} {course.units > 1 ? "units" : "unit"}</option>)
               }
            </select>
            <button onClick={addCourse}>Add Course</button>
         </div>
         {msg ? <div className='msg'>{msg}</div> : ""}
         <ol>
            {courses.map((course) => (
               <li key={course.id}>
                  {course.name} - {course.units} {course.units > 1 ? "units" : "unit"}{' '}
                  {!course.core && <button onClick={() => deleteCourse(course.id)}>Delete</button>}
               </li>
            ))}
         </ol>
      </div>
   );
};

export default CourseList;
