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

import dbsLogo from '../../assets/images/dbs_logo.png';
import auralaidLogo from '../../assets/images/auralaid_logo.png';
import ovtLogo from '../../assets/images/ovt_logo.png';

const companyLogos: { [key: string]: string } = {
    'dbsLogo': dbsLogo,
    'auralaidLogo': auralaidLogo,
    'ovtLogo': ovtLogo,
};

function Experience(props: any) {
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
                {t('experience.jobs', { returnObjects: true }).map((job: any) => (
                    <VerticalTimelineElement
                        className='VerticalTimelineElement'
                        contentStyle={job.contentStyle}
                        contentArrowStyle={job.contentArrowStyle}
                        date={job.date}
                        dateClassName='TimelineDate'
                        icon={<Image src={companyLogos[job.logo]} circular />}
                        iconClassName={job.iconClassName}
                    >
                        <h3 className='TimelineText'>{job.companyName}</h3>
                        <h4 className='TimelineText'>{job.jobTitle}</h4>
                        <ul>
                            {job.description.map((item: any) => (<li>{item}</li>))}
                        </ul>

                        <Label.Group>
                            {job.technologies.map((item: any) => (<Label>{item}</Label>))}
                        </Label.Group>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Container>
    );
}

export default Experience;