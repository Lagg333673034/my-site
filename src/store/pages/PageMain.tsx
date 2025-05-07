import React from 'react';
import { Email, Language, LocationOn, Person, Phone, School, Telegram, WhatsApp, Work } from '@mui/icons-material';
import { Avatar,Chip, Divider} from '@mui/material';
import MyPhotoImg  from '../img/my-photo.jpg';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


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
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={3}>
                                    <Avatar src={MyPhotoImg} sx={{ width: 200, height: 200 }}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <div style={{fontSize:'1.4rem'}}>
                                        Alexander Guridov
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td><Person className='myIcons' sx={{borderColor:'black',background:'white',color:'black'}}/></td>
                                <td>{age}&nbsp;years old</td>
                            </tr>
                            <tr>
                                <td>Locationon</td>
                                <td>
                                    <LocationOn className='myIcons' sx={{borderColor:'black',background:'white',color:'black'}}/>
                                </td>
                                <td>Armenia, Erevan</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><Email className='myIcons' sx={{borderColor:'blue',background:'white',color:'blue'}}/></td>
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
                                <td>+7 963 316 42 36 (@guridov_ag)</td>
                            </tr>
                        </tbody>
                    </table>

                    <Divider>
                        <Chip label={`Languages `} color="primary"/> 
                    </Divider>

                    <table>
                        <tbody>
                            <tr>
                                <td><Language /></td>
                                <td>Russian</td>
                                <td>Native</td>
                            </tr>
                            <tr>
                                <td><Language /></td>
                                <td>English</td>
                                <td>A2-B1</td>
                            </tr>
                        </tbody>
                    </table>

                    <Divider>
                        <Chip label={'Skills'} color="primary"/>
                    </Divider>

                    <table>
                        <tbody>
                            <tr>
                                <td>Mail skills</td>
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
                                <td>Secondary skills</td>
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
                <div className='block1Right'>
                    <Divider>
                        <Chip label={'Timeline'} color="primary"/>
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

            <div style={{width:'100%', display:'flex',}}>
                Other:<br/>
                //Drawer<br/>
                //Speed Dial<br/>
                //Transitions<br/>

                //dialog-window https://mui.com/toolpad/core/react-use-dialogs/<br/>


                //https://mui.com/material-ui/react-timeline/<br/>
                опыт показывать <br/>

                &nbsp;<br/>
            </div>
        </div>
    )
};
export default PageMain;