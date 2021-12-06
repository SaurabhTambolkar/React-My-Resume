import './styles.css';
import React from 'react';

function Projects(){
	return(
              <div className="resume-section-content">
                    <h2 className="mb-5">Personal Projects</h2>
					<div className="flex-grow-1">
                            <h4 className="mb-0">Online Data Structure Learning Platform</h4>
                            <p>Technologies used: Java Servlet, HTML, CSS, JavaScript</p>
							<p>It is a website developed using Java Servlet, it explains all concepts - sorting, linked list, stacks and Queues and Trees by animation. For example, if you give a list for Merge Sorting, it will show every step and how it happens through animations and it also shows its time complexity.</p>
                    </div>
					<div className="flex-grow-1">
                            <h4 className="mb-0">Crypto Currency Purchase and Sale Decision Automation Tool</h4>
                            <p>Technologies used: Python</p>
							<p>It is a Python Automation Tool which gives you the best purchase and sell value for a particular crypto currency and it also provides the details of the website where you can find it.</p>
                    </div>
					<div className="flex-grow-1">
                            <h4 className="mb-0">Resume Webpage</h4>
                            <p>Technologies used: React, HTML, Javascript, CSS</p>
							<p>I designed this webpage to check my self learned react skills</p>
                    </div>
					<div className="flex-grow-1">
                            <h4 className="mb-0">Robotics : Find perfect path for a Robot</h4>
                            <p>Technologies used: Python, ROS, RVIZ</p>
							<p><ul><li>The robot follow from source to destination using BUG2 Algorithm and find obstacle using RANSAC.</li>
							<li><a href = "https://github.com/SaurabhTambolkar/Robotics-ROS-Programming-Projects/tree/main/lab2">Path to github Project</a></li></ul></p>
                    </div>
					<div className="flex-grow-1">
                            <h4 className="mb-0">Image Processing : Image Colorization using SSD and NCC</h4>
                            <p>Technologies used: MATLAB</p>
							<p> <ul><li>The application uses SSD and NCC to create Color Image from given black and white images.</li>
							<li><a href = "https://github.com/SaurabhTambolkar/Computer-Vision-and-Image-Processing/tree/main/Image%20Colorization%20Using%20SSD%20and%20NCC">Path to github Project</a></li></ul></p>
                    </div>
					<div className="flex-grow-1">
                            <h4 className="mb-0">Networking : Text Chat Application</h4>
                            <p>Technologies used: C</p>
							<p><ul><li> With this application you can create multiple servers and clients, it manages operations between clients to clients, Clients to Server.</li><li>For more details go through project report.</li><li>
							<a href = "https://github.com/SaurabhTambolkar/Modern-Networking-Projects/tree/main/stambolk">Path to github Project</a></li></ul></p>
                    </div>
                </div>
	);
}
export default Projects;