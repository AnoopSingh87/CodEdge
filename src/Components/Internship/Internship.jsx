import React, { useState } from "react";
import "./Internship.css";
import { Link } from 'react-router-dom';


const internshipPositions = [
    {
        title: "Web Development",
        img: "src/assets/webD.gif",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Gain hands-on experience with modern web technologies and work on real-world projects to enhance your skills in front-end and back-end web development. Learn how to design user-friendly interfaces and interact with databases."
    },
    {
        title: "Android Development",
        img: "src/assets/appDev.gif",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Learn how to build mobile applications from the ground up, focusing on UI/UX design, functionality, and performance optimization. Work on projects that will be used by real users and impact millions of people."
    },
    {
        title: "Data Science",
        img: "src/assets/ds.webp",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Apply data analysis techniques to real business problems, working with large datasets to derive actionable insights. Learn to use tools like pandas, NumPy, and visualize data using Matplotlib and Seaborn."
    },
    {
        title: "Java Programming",
        img: "src/assets/java.avif",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Work on enterprise-level applications and gain deep knowledge in backend development. Learn how to integrate databases, handle authentication, and scale Java-based applications."
    },
    {
        title: "C++ Programming",
        img: "src/assets/c++.webp",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Dive deep into the world of low-level programming, memory management, and performance optimization. Work on projects like games, real-time systems, and applications requiring high computational power."
    },
    {
        title: "Python Programming",
        img: "src/assets/pyhton.avif",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "From building web applications to automating tasks and analyzing data, Python is an extremely versatile language that you will master. Work on real-world projects to build robust and scalable systems."
    },
    {
        title: "Artificial Intelligence",
        img: "src/assets/AI.gif",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Learn the foundations of AI, from search algorithms to neural networks. Work on projects involving computer vision, natural language processing, and more."
    },
    {
        title: "Machine Learning",
        img: "src/assets/ML.png",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Gain practical experience in training models, fine-tuning algorithms, and creating systems that learn from data. Apply machine learning techniques to real-world business problems."
    },
    {
        title: "Data Analyst",
        img: "src/assets/data_analyst-transformed.png",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSequXgJ1ZGpXbfuF9mZOyCDhvb911RwJi1Q5F5BJ9ntFi3k0w/viewform?pli=1",
        moreInfo: "Transform raw data into actionable insights, using tools like Excel, SQL, and Tableau. Work on projects that support key business decisions and improve processes."
    },
];


const InternshipPage = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="internship-page">
            {/* Parallax Section 1 */}
            <section className="parallax-section parallax-1">
                <div className="parallax-bg"></div>
                <div className="parallax-overlay">
                    <h1 className="parallax-heading">
                        Unlock Your Future with Our Internship Program
                    </h1>
                    <p className="parallax-description">
                        Elevate your career by working alongside industry experts, gaining hands-on experience, and building a strong professional network.
                    </p>
                    <div className="cta-container">
                        <p className="cta-text">
                            Join our exclusive internship program and take the first step towards a successful career. Whether you’re looking to enhance your technical skills or expand your professional portfolio, we’ve got you covered.
                        </p>
                        <Link to="http://linkedin.com/company/codedge22 " target="blank" className="cta-button">Explore For More Opportunities ...</Link>
                    </div>
                </div>

            </section>

            {/* Internship Positions Section */}
            <section className="positions-section">
                <h2 className="section-title">Internship Positions</h2>
                <div className="positions-grid">
                    {internshipPositions.slice(0, showAll ? internshipPositions.length : 6).map((position, index) => (
                        <div className="position-card" key={index}>
                            <img src={position.img} alt={position.title} />
                            <h3>{position.title}</h3>
                            <p>{position.description}</p>
                            <p className="more-info">{position.moreInfo}</p>
                            <a
                                href={position.formLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="apply-button"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
                <div className="see-more-container">
                    <button className="see-more-button" onClick={toggleShowAll}>
                        {showAll ? "Show Less" : "See More"}
                    </button>
                </div>
            </section>

            {/* Parallax Section 2 */}
            <section className="parallax-section bg-blur parallax-2">
                <div className="parallax-bg"></div>
                <div className="parallax-overlay">
                    <h1 className="parallax-heading">Shape Your Future</h1>
                    <p className="parallax-description">
                        Join our internships and step confidently into the professional world.
                    </p>
                    <a href="https://t.me/codege1" target="_blank" className="cta-button join-button">Join our community</a>
                </div>
            </section>

        </div>
    );
};

export default InternshipPage;
