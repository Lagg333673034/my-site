import React from 'react';
import { Email, Language, LocationOn, Phone, School, Telegram, WhatsApp, Work } from '@mui/icons-material';
import { Avatar,Chip, Divider} from '@mui/material';
import MyPhotoImg  from '../img/my-photo.jpg';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const PageMain = () => {
    /*---------- AGE ----------*/
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dob = new Date(1990, 6, 30);
    var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    var age;
    age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
      age = age-1;
    }
    /*---------- AGE ----------*/
    
    return(
        <div>
            <div className='block1Container'>
                <div className='block1Left'>

                    <div className='block2Container'>
                        <div className='block2Left'>
                            <div className='myAvatar'>
                                <Avatar src={MyPhotoImg}/>
                            </div>
                            <div className='myName'>
                                Alexander Guridov<br />({age}&nbsp;years old)
                            </div>
                        </div>
                        <div className='block2Right'>
                            <table>
                            <tbody>
                                <tr>
                                    <td>Locationon</td>
                                    <td>
                                        <LocationOn className='myIcons' sx={{borderColor:'black',background:'white',color:'black'}}/>
                                    </td>
                                    <td>Armenia, Erevan</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><Email className='myIcons' sx={{borderColor:'blue',background:'white',color:'#4135bd'}}/></td>
                                    <td>Lagg333673034@yandex.ru</td>
                                </tr>
                                <tr>
                                    <td>Mobile</td>
                                    <td><Phone className='myIcons' sx={{borderColor:'blue',background:'white',color:'blue'}}/></td>
                                    <td>+374 41 382 032</td>
                                </tr>
                                <tr>
                                    <td>WhatsApp</td>
                                    <td><WhatsApp className='myIcons' sx={{borderColor:'#2bb11c',background:'#2bb11c',color:'white'}}/></td>
                                    <td>+374 41 382 032</td>
                                </tr>
                                <tr>
                                    <td>Viber</td>
                                    <td><WhatsApp className='myIcons' sx={{borderColor:'#885bef',background:'#885bef',color:'white'}}/></td>
                                    <td>+374 41 382 032</td>
                                </tr>
                                <tr>
                                    <td>Telegram</td>
                                    <td><Telegram className='myIcons' sx={{borderColor:'#00a8ff',background:'#00a8ff',color:'white'}}/></td>
                                    <td>+7 963 316 42 36<br/>(@guridov_ag)</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <Divider>
                        <p className='myDivider'>&nbsp;Languages&nbsp;</p>
                    </Divider>

                    <div className='blockLanguages'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><Language/></td>
                                    <td>Russian</td>
                                    <td>Native</td>
                                </tr>
                                <tr>
                                    <td><Language/></td>
                                    <td>English</td>
                                    <td>A2-B1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Divider>
                        <p className='myDivider'>&nbsp;Skills&nbsp;</p>
                    </Divider>

                    <div className='blockSkills'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Main</td>
                                    <td>
                                        <div className='mainSkills'>
                                            <Chip label={'HTML'}/>
                                            <Chip label={'CSS'} />
                                            <Chip label={'JavaScript'} />
                                            <Chip label={'TypeScript'} />
                                            <Chip label={'PHP'} />
                                            <Chip label={'React.js'} />
                                            <Chip label={'Node.js'} />
                                            <Chip label={'MySQL'} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Secondary</td>
                                    <td>
                                        <div className='secondarySkills'>
                                            <Chip label={'Git'}/>
                                            <Chip label={'Yii2'}/>
                                            <Chip label={'WordPress'} />
                                            <Chip label={'C#'} />
                                            <Chip label={'MongoDB'} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Divider>
                        <p className='myDivider'>&nbsp;About me&nbsp;</p>
                    </Divider>

                    <div className='blockAboutMe'>
                        <p>I am sociable, responsible, punctual, stress-resistant. No bad habits.</p>
                        <p>Study React.js (+typescript) and Node.js. Also study Laravel.</p>
                    </div>
                    
                </div>
                <div className='block1Right'>
                    <Divider>
                        <p className='myDivider'>&nbsp;Timeline&nbsp;</p>
                    </Divider>

                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2023 - 2025<br/>Yerevan, Armenia
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparWork'>
                                <TimelineConnector/>
                                    <TimelineDot >
                                        <Work/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>Sperasoft Company</div>
                                <div className='tlPostName'>NOC operator</div>
                                <div className='tlDescription'>
                                    <p>– monitoring the health and condition of the IT infrastructure (network components, servers, applications, services) and detection of system failures (using: Zabbix, Datadog).</p>
                                    <p>– prompt provision of important information about system failures to on-call personnel (using: PagerDuty, Slack, Jira).</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2017 – 2023<br/>Ukraine, Donetsk
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparWork'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <Work/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>Service for control and supervision in the Field of Education and Science</div>
                                <div className='tlPostName'>Web developer (full stack)</div>
                                <div className='tlDescription'>
                                    <p>– development and maintenance of specialized web information systems using: HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, PHP, MySQL. (about 5 years; main work)</p>
                                    <p>– modernization of the system on Yii2. (about 1 year)</p>
                                    <p>– writing a windows application on C#. (about 1 year)</p>
                                    <p>– maintaining organization's website on WordPress. (about 1 years)</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2014 - 2017<br/>Russia, Murmansk
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparWork'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <Work/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>Murmansk Shipping Company</div>
                                <div className='tlPostName'>Service engineer</div>
                                <div className='tlDescription'>
                                    <p>– configuration of computers and office equipment.</p>
                                    <p>– setting up a local network.</p>
                                    <p>– minor equipment repairs (if possible).</p>
                                    <p>– service of Inmarsat Fleet and Iridium satellite stations.</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2012 – 2013<br/>Ukraine, Donetsk
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparSchool'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <School/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>Specialist.</div>
                                <div className='tlPostName'>Information management systems and technologies.</div>
                                <div className='tlDescription'>
                                    <p>Donetsk National Technical University</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2009 – 2012<br/>Ukraine, Donetsk
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparSchool'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <School/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>Bachelor.</div>
                                <div className='tlPostName'>Computer Science.</div>
                                <div className='tlDescription'>
                                    <p>Donetsk National Technical University</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>

            <div className='block3Container'>
                <Divider>
                    <p className='myDivider'>&nbsp;My projects&nbsp;</p>
                </Divider>
                <div className='block3First'>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={2}>1. Application for testing (Full stack):</td>
                            </tr>
                            <tr>
                                <td>Deploy</td>
                                <td> 
                                    <a href="https://lagg333673034-my-test-app.netlify.app" target="_blank">
                                        https://lagg333673034-my-test-app.netlify.app
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Frontend</td>
                                <td>React.js (JS+TS)</td>
                            </tr>
                            <tr>
                                <td>Upload to</td>
                                <td>
                                    <a href="https://www.netlify.com/" target="_blank">
                                        https://www.netlify.com/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Github</td>
                                <td>
                                    <a href="https://github.com/Lagg333673034/my-react-ts-app3-frontend" target="_blank">
                                        https://github.com/Lagg333673034/my-react-ts-app3-frontend
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>npm</td>
                                <td>React, Redux Toolkit (RTK Query), react-router-dom, MUI, @react-oauth/google</td>
                            </tr>
                            <tr>
                                <td>Backend</td>
                                <td>Node.js</td>
                            </tr>
                            <tr>
                                <td>Upload to</td>
                                <td>
                                    <a href="https://render.com/" target="_blank">
                                        https://render.com/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Github</td>
                                <td>
                                    <a href="https://github.com/Lagg333673034/my-react-ts-app3-backend" target="_blank">
                                        https://github.com/Lagg333673034/my-react-ts-app3-backend
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>npm</td>
                                <td>express, mysql2, jsonwebtoken, bcrypt, nodemailer, dotenv, cors, cron</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>MySQL</td>
                            </tr>
                            <tr>
                                <td>Upload to</td>
                                <td>
                                    <a href="https://freedb.tech/" target="_blank">
                                        https://freedb.tech/
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='block3Second'>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={2}>2. Todo application (Full stack):</td>
                            </tr>
                            <tr>
                                <td>Deploy</td>
                                <td>
                                    <a href="https://silver-cucurucho-d41282.netlify.app" target="_blank">
                                        https://silver-cucurucho-d41282.netlify.app
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Frontend</td>
                                <td>React.js (JS)</td>
                            </tr>
                            <tr>
                                <td>Upload to</td>
                                <td>
                                    <a href="https://www.netlify.com/" target="_blank">
                                        https://www.netlify.com/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Github</td>
                                <td>
                                    <a href="https://github.com/Lagg333673034/my-react-todo-client" target="_blank">
                                        https://github.com/Lagg333673034/my-react-todo-client
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>npm</td>
                                <td>React, Redux, axios, react-router-dom, moment, MUI</td>
                            </tr>
                            <tr>
                                <td>Backend</td>
                                <td>Node.js</td>
                            </tr>
                            <tr>
                                <td>Upload to</td>
                                <td>
                                    <a href="https://render.com/" target="_blank">
                                        https://render.com/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>Github</td>
                                <td>
                                    <a href="https://github.com/Lagg333673034/my-react-todo-server" target="_blank">
                                        https://github.com/Lagg333673034/my-react-todo-server
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>npm</td>
                                <td>express, express-fileupload, express-validator, jsonwebtoken, bcrypt, mongoose, nodemailer, cors, dotenv</td>
                            </tr>
                            <tr>
                                <td>Database</td>
                                <td>MongoDB</td>
                            </tr>
                            <tr>
                                <td>Upload to</td>
                                <td>
                                    <a href="https://www.mongodb.com/" target="_blank">
                                        https://www.mongodb.com/
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='block4Container'>
                <Divider>
                    <p className='myDivider'>&nbsp;Other works&nbsp;</p>
                </Divider>

                <div className='block4First'>
                    <p>1) Html, css</p>
                    <p>Github:&nbsp;
                        <a href="https://github.com/Lagg333673034/project-mercedes" target="_blank">
                        https://github.com/Lagg333673034/project-mercedes</a>
                    </p>
                    <p>Deploy:&nbsp;
                        <a href="https://lagg333673034.github.io/project-mercedes/" target="_blank">
                        https://lagg333673034.github.io/project-mercedes/</a>
                    </p>
                    <br/>

                    <p>2) Html, css, javascript, svg</p>
                    <p>Github:&nbsp;
                        <a href="https://github.com/Lagg333673034/project-svg-js" target="_blank">
                        https://github.com/Lagg333673034/project-svg-js</a>
                    </p>
                    <p>Deploy:&nbsp;
                        <a href="https://lagg333673034.github.io/project-svg-js/" target="_blank">
                        https://lagg333673034.github.io/project-svg-js/</a>
                    </p>
                    <br/>
                </div>
            </div>

        </div>
    )
};
export default PageMain;