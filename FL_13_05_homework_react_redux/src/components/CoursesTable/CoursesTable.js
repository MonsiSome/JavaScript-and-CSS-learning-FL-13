import React from 'react';
import classes from './CoursesTable.module.css';
import CoursesRow from '../CoursesRow/CoursesRow'

const CoursesTable = props => {
  // console.log(props)
  let rows = [];
  props.courses.forEach((course, index) => {
    rows.push(
      <CoursesRow 
        courses={course} 
        key={course.name + index}
        index={index} />
    )
  })
  return (
    <div className={classes.CoursesTable}>
      {rows}
    </div>
  )
}

export default CoursesTable;