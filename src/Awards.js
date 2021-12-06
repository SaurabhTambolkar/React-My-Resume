import './styles.css';
import React from 'react';


function Awards(){
	return(
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            place in Java in HackerRank Online Coding Platform.
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - in India in CodinGame (Coding Platform, where performances are analyzed on the number of lines and time of Coding) (Sept 2018 – Nov 2018)
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Won First Prize in Firodiya Karandak for Flip Animation. (2016)
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Worked as Light Secretary in VIT Student Council (2017 – 2018)
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            President of VIT Coding Club (2018 - 2019)
                        </li>
                    </ul>
                </div>
	);
}

export default Awards;