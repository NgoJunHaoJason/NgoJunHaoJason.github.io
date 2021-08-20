import React from 'react';

import {
    Container,
    Header,
    Label,
    Image,
} from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

import DBSLogo from '../../assets/images/dbs_logo.png';
import AuralAidLogo from '../../assets/images/auralaid_logo.png';
import OVTLogo from '../../assets/images/ovt_logo.png';

function Experience(props) {
    const { t } = props;

    return (
        <Container>
            <Header
                size='large'
            >
                <Header.Content>
                    <FontAwesomeIcon icon={faBriefcase} />
                    &nbsp;
                    {t('experience.header')}
                </Header.Content>
            </Header>

            <VerticalTimeline className='VerticalTimeline'>
            <VerticalTimelineElement
                    className='VerticalTimelineElement'
                    contentStyle={{ background: '#ee2f2f', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid #ee2f2f' }}
                    date={t('experience.dbs.date')}
                    dateClassName='TimelineDate'
                    icon={<Image src={DBSLogo} circular />}
                >
                    <h3 className='TimelineText'>{t('experience.dbs.company-name')}</h3>
                    <h4 className='TimelineText'>{t('experience.dbs.job-title')}</h4>
                    <ul>
                        <li>
                            {t('experience.dbs.point1')}
                        </li>
                    </ul>

                    <Label.Group>
                        <Label>Spring Boot</Label>
                    </Label.Group>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='VerticalTimelineElement'
                    contentStyle={{ background: 'dodgerblue', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid dodgerblue' }}
                    date={t('experience.aural-aid.date')}
                    dateClassName='TimelineDate'
                    icon={<Image src={AuralAidLogo} circular />}
                    iconClassName='AuralAidIcon'
                >
                    <h3 className='TimelineText'>{t('experience.aural-aid.company-name')}</h3>
                    <h4 className='TimelineText'>{t('experience.aural-aid.job-title')}</h4>
                    <ul>
                        <li>
                            {t('experience.aural-aid.point1')} (<a
                                className='AutoscrapeLink'
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://autoscrape.com'
                            >
                                <u>autoscrape.com</u>
                            </a>)
                        </li>
                        <li>
                            {t('experience.aural-aid.point2')}
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
                    contentStyle={{ background: '#EA1102', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid #EA1102' }}
                    date={t('experience.omnivision.date')}
                    dateClassName='TimelineDate'
                    icon={<Image src={OVTLogo} circular />}
                >
                    <h3 className='TimelineText'>{t('experience.omnivision.company-name')}</h3>
                    <h4 className='TimelineText'>{t('experience.omnivision.job-title')}</h4>
                    <ul>
                        <li>
                        {t('experience.omnivision.point1')}
                        </li>
                        <li>
                        {t('experience.omnivision.point2')}
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