import './styles.css';
import React from 'react';

function About()
{
	return(
	<React.Fragment>
	<div className="resume-section-content">
		<h1 className="mb-0">
			Saurabh
			<span className="text-primary">Tambolkar</span>
		</h1>
		<div className="subheading mb-5">
			1154 Kenmore Ave · Buffalo, NY 14216 · (716) 341-8803 ·
			<a href="mailto:stambolk@buffalo.edu">stambolk@buffalo.edu</a>
		</div>
		<p className="lead mb-5"> Ambitious, determined Computer Science graduate student with solid foundation in Algorithms, Mathematics and Programming. Seeking a Summer internship opportunity to enhance my abilities and contribute to the organization.</p>
		<div className="social-icons">
			<a className="social-icon" href="https://www.linkedin.com/in/saurabh-tambolkar-996514116/"><i className="fab fa-linkedin-in"></i></a>
			<a className="social-icon" href="https://github.com/SaurabhTambolkar"><i className="fab fa-github"></i></a>
			<a className="social-icon" href="https://www.hackerrank.com/saurabh_tambolk1"><i className="fab fa-hackerrank"></i></a>
		</div>
	</div>	
	</React.Fragment>
	);
}

export default About;