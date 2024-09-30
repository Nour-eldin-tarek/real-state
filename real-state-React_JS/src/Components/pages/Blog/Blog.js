import React from 'react';
import './styles.css'; // Import your CSS file

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2>Why Choose Us</h2>
            <p>Here are some reasons why you should choose us.</p>
            <div className="features">
                <div className="feature">
                    <div className="circle-background">
                        <img src="path/to/icon1.png" alt="Feature 1" />
                    </div>
                    <h3>Feature 1</h3>
                    <p>Description of Feature 1.</p>
                </div>
                <div className="feature">
                    <div className="circle-background">
                        <img src="path/to/icon2.png" alt="Feature 2" />
                    </div>
                    <h3>Feature 2</h3>
                    <p>Description of Feature 2.</p>
                </div>
                <div className="feature">
                    <div className="circle-background">
                        <img src="path/to/icon3.png" alt="Feature 3" />
                    </div>
                    <h3>Feature 3</h3>
                    <p>Description of Feature 3.</p>
                </div>
            </div>
        </div>
    );
};

const ArticlesTips = () => {
    return (
        <div className="articles-tips">
            <h2>Articles & Tips</h2>
            <p>Check out our latest articles and tips.</p>
            <div className="articles">
                <div className="article">
                    <img src="path/to/article-image1.jpg" alt="Article 1" />
                    <h3>Article Title 1</h3>
                    <h4>Author Name</h4>
                    <p>Summary of the article goes here.</p>
                    <div className="article-footer">
                        <img src="path/to/author-image1.jpg" alt="Author" />
                        <span>Published on [Date]</span>
                    </div>
                </div>
                <div className="article">
                    <img src="path/to/article-image2.jpg" alt="Article 2" />
                    <h3>Article Title 2</h3>
                    <h4>Author Name</h4>
                    <p>Summary of the article goes here.</p>
                    <div className="article-footer">
                        <img src="path/to/author-image2.jpg" alt="Author" />
                        <span>Published on [Date]</span>
                    </div>
                </div>
                <div className="article">
                    <img src="path/to/article-image3.jpg" alt="Article 3" />
                    <h3>Article Title 3</h3>
                    <h4>Author Name</h4>
                    <p>Summary of the article goes here.</p>
                    <div className="article-footer">
                        <img src="path/to/author-image3.jpg" alt="Author" />
                        <span>Published on [Date]</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <WhyChooseUs />
            <ArticlesTips />
        </div>
    );
};

export default App;
