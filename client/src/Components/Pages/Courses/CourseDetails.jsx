import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '../../../APIs/coursesApis';
import { formatDistanceToNow } from 'date-fns'; // Import the date-fns function
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const course = useSelector((state) => state.courses.selectedCourse);
  const status = useSelector((state) => state.courses.status);
  const error = useSelector((state) => state.courses.error);

  useEffect(() => {
    dispatch(fetchCourseById(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  const tags = Array.isArray(course.tags) ? course.tags.join(', ') : 'No tags available';
  const imageUrl = `${process.env.REACT_APP_API_URL}/${course.courseCover}`;

  // Calculate human-readable date for createdAt
  const createdAtFormatted = formatDistanceToNow(new Date(course.date), { addSuffix: true });

  return (
    <div className="course-details">
      <div className="course-image">
        <img src={imageUrl} alt={course.name} />
      </div>

      <div className="course-info">
        <h2>{course.name}</h2>
        <p className="course-desc">{course.desc}</p>

        <div className="course-tags">
          <span>Tags: {tags}</span>
        </div>

        <div className="course-price">
          <strong>Price: ${course.price}</strong>
        </div>

        <div className="course-published">
          <span>Published: {course.isPublished ? 'Yes' : 'No'}</span>
        </div>

        <div className="course-author">
          <span>Author: {course.author?.name || 'Unknown'}</span>
        </div>

        {/* Human-readable created date */}
        <div className="course-created">
          <span>Created: {createdAtFormatted}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
