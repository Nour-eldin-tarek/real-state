import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKeb9tY-d69Zujh1DVKOwOMyRZiUZZWKXnpZMQMWvMbKjygQPM',
      tag: 'Business',
      title: 'Skills That You Can Learn In The Real Estate Market',
      date: '📅 7 August 2022',
      description: 'Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol',
    },
    {
      imgSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQS9BYGN8rLi8AFsuMXCUWcVLrljj-B1xM8W3M6P880SmneDVIr',
      tag: 'Construction',
      title: 'Bedroom Colors You will Never this Regret',
      date: '📅 7 August 2022',
      description: 'Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol',
    },
    {
      imgSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQazb9ccwIyCRs8GojqHmF3LELMTBzRpJiO7jXEdbgzCz_VQSr7',
      tag: 'Business',
      title: '5 Essential Steps for Buying everyone Investment',
      date: '📅 7 August 2022',
      description: 'Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLgk-tLf6eTAaYOZdPw-lGhziu-cefRX4ApoFB_Gq_9OrJqad',
      tag: 'Construction',
      title: 'Redfin Ranks the Most Competitive Neighborhoods of 2022',
      date: '📅 7 August 2022',
      description: 'Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpVAwtowK-BcjPDCXZqpzUdBRU9YzZecgEUZNXlh3sWOxI7TN',
      tag: 'Construction',
      title: 'Redfin Ranks the Most Competitive Neighborhoods of 2022',
      date: '📅 7 August 2022',
      description: 'Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol',
    },
    {
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcCu9RgU0sagJaDyDiLikcz0APpO4416Mt5DVi6KyR4tIV2tH',
      tag: 'Construction',
      title: 'Redfin Ranks the Most Competitive Neighborhoods of 2022',
      date: '📅 7 August 2022',
      description: 'Lorem lpsum Dolor sit Amet, Consectetur Adipiscing Elit. Duis Mol',
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h5>
        <Link to='/' className="blog-home">Home</Link> / <span className="blog-text">Our Blog</span>
        </h5>
        <h2>Blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <img src={post.imgSrc} alt="Blog Post" />
              <div className="post-content">
                <span className={`tag ${post.tag.toLowerCase()}`}>{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <p>{post.description}</p>
                <Link className="read-more" to="/blogdetails">Read More &gt;</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <a href="#" className="prev">&laquo;</a>
          <span className="page-number">1</span>
          <span className="page-number active">2</span>
          <span className="page-number">3</span>
          <span className="page-number">...</span>
          <span className="page-number">29</span>
          <a href="#" className="next">&raquo;</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
