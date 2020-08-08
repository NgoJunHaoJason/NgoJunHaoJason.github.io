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
                    contentStyle={{ background: 'dodgerblue', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid dodgerblue' }}
                    date={t('experience.aural-aid.date')}
                    dateClassName='TimelineDate'
                    icon={<Image src={AuralAidLogo} circular />}
                    iconClassName='TimelineIcon'
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
                        <li>
                            {t('experience.aural-aid.point3')}
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