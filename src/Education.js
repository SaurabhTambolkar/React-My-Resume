import './styles.css';
import React from 'react';

function Education(){
	return(
	<React.Fragment>
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">State University of New York at Buffalo</h3>
                            <div className="subheading mb-3">MS in Computer Science</div>
							<p>Subjects</p>
								<ul className="fa-ul mb-0">
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Analysis of Algorithms
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Computer Vision and Image Processing
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Computer Security
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Machine Learning
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Modern Network Concepts
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Robotics Algorithms
									</li>									
								</ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2021 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Vishwakarma Institute of Technology, Pune</h3>
                            <div className="subheading mb-3">B.Tech in Computer Science</div>
                            <p>GPA: 3.6</p>
							<p>Subjects</p>
								<ul className="fa-ul mb-0">
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Advanced Java
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Database Management
									</li>
									<li>
										<span className="fa-li"><i className="fas fa-check"></i></span>
										Object Oriented Programming
									</li>
								</ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2015 - May 2019</span></div>
                    </div>
                </div>
	</React.Fragment>
	);
}
export default Education;