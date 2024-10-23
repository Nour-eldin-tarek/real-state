import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../../APIs/coursesApis'; // Your thunk to fetch courses
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faTags, faDollarSign, faUser, faClock } from '@fortawesome/free-solid-svg-icons'; // Added faClock icon for time
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns'; // Import date-fns function
import './Courses.css';

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);

  // Fetch courses every time this component is mounted or rendered
  useEffect(() => {
    dispatch(fetchCourses()); // Always fetch courses when the component loads
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="courses-list">
      {courses.map((course) => {
        const createdAtFormatted = formatDistanceToNow(new Date(course.date), { addSuffix: true });
        
        return (
          <div key={course._id} className="course-card">
            {/* Course Cover */}
            <div className="course-cover">
              <img
                src={`${process.env.REACT_APP_API_URL}/${course.courseCover}`}
                alt={course.name}
              />
            </div>

            {/* Course Details */}
            <div className="course-info">
              <h3>
                <FontAwesomeIcon icon={faBook} /> {course.name}
              </h3>
              <p>{course.desc}</p>
              <p>
                <FontAwesomeIcon icon={faTags} /> Tags: {course.tags.join(', ')}
              </p>
              <p>
                <FontAwesomeIcon icon={faDollarSign} /> Price: ${course.price}
              </p>
              <p>
                <FontAwesomeIcon icon={faUser} /> Author: {course.author?.name || 'Unknown'}
              </p>
              {/* Human-readable created date */}
              <p>
                <FontAwesomeIcon icon={faClock} /> Created: {createdAtFormatted}
              </p>
              <Link to={`/courses/${course._id}`} className="details-link">
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
