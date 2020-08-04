import React from 'react';

import {
    Container,
    Header,
    Label,
    Image,
} from 'semantic-ui-react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

import AuralAidLogo from '../../assets/images/auralaid_logo.png';
import OVTLogo from '../../assets/images/ovt_logo.png';

function Experience() {
    return (
        <Container>
            <Header
                size="large"
            >
                <Header.Content>
                    Experience
                </Header.Content>
            </Header>

            <VerticalTimeline className="VerticalTimeline">
                <VerticalTimelineElement
                className="VerticalTimelineElement"
                    contentStyle={{ background: 'dodgerblue', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid dodgerblue' }}
                    date="May 2020 - Jul 2020"
                    dateClassName="TimelineDate"
                    icon={<Image src={AuralAidLogo} circular />}
                    iconClassName="TimelineIcon"
                >
                    <h3 className="TimelineText">Aural-Aid</h3>
                    <h4 className="TimelineText">Software Development Intern</h4>
                    <ul>
                        <li>
                            Contributed to full-stack development of a web-scraping website
                        </li>
                        <li>
                            Developed mobile app front-end that serves as a remote control for iris doors
                        </li>
                    </ul>

                    <Label.Group>
                        <Label>Django</Label>
                        <Label>Bootstrap</Label>
                        <Label>Scrapy</Label>
                        <Label>Pyppeteer</Label>
                        <Label>Flutter</Label>
                        <Label>AWS</Label>
                    </Label.Group>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: '#EA1102', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #EA1102' }}
                    date="Aug 2019 - Dec 2019"
                    dateClassName="TimelineDate"
                    icon={<Image src={OVTLogo} circular />}
                >
                    <h3 className="TimelineText">Omnivision Technologies</h3>
                    <h4 className="TimelineText">Computer Vision Intern</h4>
                    <ul>
                        <li>
                            Developed a data visualisation website that aids engineers in qualitative analysis of object detection models
                        </li>
                        <li>
                            Collected and cleaned more than 10000 images with the help of scripts
                        </li>
                    </ul>

                    <Label.Group>
                        <Label>Django</Label>
                        <Label>Bootstrap</Label>
                        <Label>D3.js</Label>
                        <Label>Nginx</Label>
                        <Label>uWSGI</Label>
                    </Label.Group>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    );
}

export default Experience;