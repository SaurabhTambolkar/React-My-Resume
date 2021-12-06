import './styles.css';
import React from 'react';

function Experience(){
	return(
	<React.Fragment>
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Software Engineer I </h3>
                            <div className="subheading mb-3">Quick Heal</div>
                            <p>Technologies used: C, C++, C#, Java, Python, Golang, Shell Script, MySQL, SQLite, JMeter, Orca, Jenkins, JIRA, Wireshark</p>
							<ul className="fa-ul mb-0">
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Designed an Active Directory tool (Client) for Seqrite Endpoint Security Next Generation (EPSNG).
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Built MSI Installer, Uninstaller for EPSNG Active Directory Tool.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Delivered development stories and worked on customer escalations for Seqrite Endpoint Security 7.6 (EPS) and EPSNG Client.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Created uninstaller for EPS and EPSNG which uninstall Client Agent, Update Agent and other dependencies related to the product.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Generated Employee Activity Tracker Tool in Python for tracking stories, bugs and activities from JIRA and return bulk data in CSV file.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Helped in creation and customer escalations of Seqrite Encryption Manager (SEM) Client.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Worked on customer escalations and updates for Seqrite Patch and Vulnerability Management Client and Server.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									<p>POCs:</p> <ul><li>1. Use Server Sent Events (SSE) over WebSocket for one way transmission.</li><li> 2. Replace current Kafka Messaging System by NATS Streaming.</li></ul>
								</li>						
							</ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">July 2019 - August 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Research & Development Intern</h3>
                            <div className="subheading mb-3">Quick Heal</div>
                            <p>Technologies used: C, C++, WinDbg, AES Encryption</p>
							<ul className="fa-ul mb-0">
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									<p>POC: Container Encryption (OS: Windows)</p>
In this POC, you can create a virtual disk by container creation and mount it as a disk and it is encrypted by AES
Encryption, the disk is password protected and the plain text password is also encrypted using AES. You can use the tool to encrypt the USB, you can create multiple virtual disks in USB, Local Disk. You can transfer the Encrypted Container file by LAN, E-mail and you can create a new disk for the transferred encrypted file using the tool on any Windows OS.
								</li>
								<li>
									<span className="fa-li"><i className="fas fa-check"></i></span>
									Built MSI Installer, Uninstaller for EPSNG Active Directory Tool.
								</li>
							</ul>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2018 - January 2019</span></div>
                    </div>
                </div>
	</React.Fragment>
	);
}

export default Experience;
