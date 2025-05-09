import React, { useState } from 'react';
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
import FlagEN from '../img/flagEN.svg';
import FlagRU from '../img/flagRU.svg';
import MyLocalization from '../languages/index'


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
    const [langIndex,setLangIndex] = useState<number>(0);

    return(
        <div>
            <div className='block1Container'>
                <div className='block1Left'>

                    <div className='block2Container'>
                        <div className='block2Left'>
                            <img src={FlagEN} className='flagEN' onClick={()=>{setLangIndex(0)}}/>
                            <div className='myAvatar'>
                                <Avatar src={MyPhotoImg}/>
                                <div className='myName'>
                                    {MyLocalization[langIndex].block_1_1}<br />({age}&nbsp;{MyLocalization[langIndex].block_1_2})
                                </div>
                            </div>
                            <img src={FlagRU} className='flagRU' onClick={()=>{setLangIndex(1)}}/>
                        </div>
                        <div className='block2Right'>
                            <table>
                            <tbody>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_2_1}</td>
                                    <td>
                                        <LocationOn className='myIcons' sx={{borderColor:'black',background:'white',color:'black'}}/>
                                    </td>
                                    <td>{MyLocalization[langIndex].block_2_7}</td>
                                </tr>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_2_2}</td>
                                    <td><Email className='myIcons' sx={{borderColor:'blue',background:'white',color:'#4135bd'}}/></td>
                                    <td>Lagg333673034@yandex.ru</td>
                                </tr>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_2_3}</td>
                                    <td><Phone className='myIcons' sx={{borderColor:'blue',background:'white',color:'blue'}}/></td>
                                    <td>+374 41 382 032</td>
                                </tr>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_2_4}</td>
                                    <td><WhatsApp className='myIcons' sx={{borderColor:'#2bb11c',background:'#2bb11c',color:'white'}}/></td>
                                    <td>+374 41 382 032</td>
                                </tr>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_2_5}</td>
                                    <td><WhatsApp className='myIcons' sx={{borderColor:'#885bef',background:'#885bef',color:'white'}}/></td>
                                    <td>+374 41 382 032</td>
                                </tr>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_2_6}</td>
                                    <td><Telegram className='myIcons' sx={{borderColor:'#00a8ff',background:'#00a8ff',color:'white'}}/></td>
                                    <td>+7 963 316 42 36<br/>(@guridov_ag)</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <Divider>
                        <p className='myDivider'>&nbsp;{MyLocalization[langIndex].block_3_0}&nbsp;</p>
                    </Divider>

                    <div className='blockLanguages'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><Language/></td>
                                    <td>{MyLocalization[langIndex].block_3_1}</td>
                                    <td>{MyLocalization[langIndex].block_3_3}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><Language/></td>
                                    <td>{MyLocalization[langIndex].block_3_2}</td>
                                    <td>{MyLocalization[langIndex].block_3_4}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Divider>
                        <p className='myDivider'>&nbsp;{MyLocalization[langIndex].block_4_0}&nbsp;</p>
                    </Divider>

                    <div className='blockSkills'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{MyLocalization[langIndex].block_4_1}</td>
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
                                    <td>{MyLocalization[langIndex].block_4_2}</td>
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
                        <p className='myDivider'>&nbsp;{MyLocalization[langIndex].block_5_0}&nbsp;</p>
                    </Divider>

                    <div className='blockAboutMe'>
                        <p>{MyLocalization[langIndex].block_5_1}</p>
                        <p>{MyLocalization[langIndex].block_5_2}</p>
                    </div>
                    
                </div>
                <div className='block1Right'>
                    <Divider>
                        <p className='myDivider'>&nbsp;{MyLocalization[langIndex].block_6_0}&nbsp;</p>
                    </Divider>

                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2023 - 2025<br/>{MyLocalization[langIndex].block_6_51}
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparWork'>
                                <TimelineConnector/>
                                    <TimelineDot >
                                        <Work/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>{MyLocalization[langIndex].block_6_52}</div>
                                <div className='tlPostName'>{MyLocalization[langIndex].block_6_53}</div>
                                <div className='tlDescription'>
                                    <p>{MyLocalization[langIndex].block_6_54}</p>
                                    <p>{MyLocalization[langIndex].block_6_55}</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2017 – 2023<br/>{MyLocalization[langIndex].block_6_41}
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparWork'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <Work/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>{MyLocalization[langIndex].block_6_42}</div>
                                <div className='tlPostName'>{MyLocalization[langIndex].block_6_43}</div>
                                <div className='tlDescription'>
                                    <p>{MyLocalization[langIndex].block_6_44}</p>
                                    <p>{MyLocalization[langIndex].block_6_45}</p>
                                    <p>{MyLocalization[langIndex].block_6_46}</p>
                                    <p>{MyLocalization[langIndex].block_6_47}</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2014 - 2017<br/>{MyLocalization[langIndex].block_6_31}
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparWork'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <Work/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>{MyLocalization[langIndex].block_6_32}</div>
                                <div className='tlPostName'>{MyLocalization[langIndex].block_6_33}</div>
                                <div className='tlDescription'>
                                    <p>{MyLocalization[langIndex].block_6_34}</p>
                                    <p>{MyLocalization[langIndex].block_6_35}</p>
                                    <p>{MyLocalization[langIndex].block_6_36}</p>
                                    <p>{MyLocalization[langIndex].block_6_37}</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2012 – 2013<br/>{MyLocalization[langIndex].block_6_21}
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparSchool'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <School/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>{MyLocalization[langIndex].block_6_22}</div>
                                <div className='tlPostName'>{MyLocalization[langIndex].block_6_23}</div>
                                <div className='tlDescription'>
                                    <p>{MyLocalization[langIndex].block_6_24}</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent className='tlOppositeContent'>
                                2009 – 2012<br/>{MyLocalization[langIndex].block_6_11}
                            </TimelineOppositeContent>
                            <TimelineSeparator className='tlSeparSchool'>
                                <TimelineConnector />
                                    <TimelineDot>
                                        <School/>
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent className='tlContent'>
                                <div className='tlCompanyName'>{MyLocalization[langIndex].block_6_12}</div>
                                <div className='tlPostName'>{MyLocalization[langIndex].block_6_13}</div>
                                <div className='tlDescription'>
                                    <p>{MyLocalization[langIndex].block_6_14}</p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>

            <div className='block3Container'>
                <Divider>
                    <p className='myDivider'>&nbsp;{MyLocalization[langIndex].block_7_0}&nbsp;</p>
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
                    <p className='myDivider'>&nbsp;{MyLocalization[langIndex].block_8_0}&nbsp;</p>
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