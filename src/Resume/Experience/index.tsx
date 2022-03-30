import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import {
    Container,
    Image,
} from 'semantic-ui-react';
import BulletedList from '../../utils/BulletedList';
import IconHeader from '../../utils/IconHeader';
import Labels from '../../utils/Labels';

import 'react-vertical-timeline-component/style.min.css';
import './index.css';

import auralaidLogo from '../../assets/images/auralaid_logo.png';
import dbsLogo from '../../assets/images/dbs_logo.png';
import ovtLogo from '../../assets/images/ovt_logo.png';

export default function Experience() {
    const { t } = useTranslation('experience');
    return (
        <Container>
            <IconHeader icon={faBriefcase} text={t('header')} />
            <Jobs />
        </Container>
    );
}

function Jobs() {
    const { t } = useTranslation('experience');
    return (
        <VerticalTimeline className='VerticalTimeline'>
            {(t('jobs', { returnObjects: true }) as Array<JobProps>).map(
                (job, index) => <Job {...job} key={index} />
            )}
        </VerticalTimeline>
    );
}

interface JobProps {
    contentStyle: CSSProperties,
    contentArrowStyle: CSSProperties,
    date: string,
    iconName: string,
    companyName: string,
    jobTitle: string,
    description: Array<string>,
    technologies: Array<string>,
}

function Job({
    contentStyle,
    contentArrowStyle,
    date,
    iconName,
    companyName,
    jobTitle,
    description,
    technologies,
}: JobProps) {

    const companyLogos: { [key: string]: string } = {
        'DBSLogo': dbsLogo,
        'AuralAidLogo': auralaidLogo,
        'OVTLogo': ovtLogo,
    };

    return (
        <VerticalTimelineElement
            className='VerticalTimelineElement'
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={date}
            dateClassName='TimelineDate'
            icon={<Image src={companyLogos[iconName]} circular />}
            iconClassName={iconName}>

            <h3 className='TimelineText'>{companyName}</h3>
            <h4 className='TimelineText'>{jobTitle}</h4>

            <BulletedList list={description} />
            <Labels labels={technologies} />

        </VerticalTimelineElement>
    );
}
