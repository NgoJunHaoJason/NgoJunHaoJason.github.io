import {
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Container,
    Image,
} from 'semantic-ui-react';
import auralaidLogo from '../../assets/images/auralaid_logo.png';
import dbsLogo from '../../assets/images/dbs_logo.png';
import ovtLogo from '../../assets/images/ovt_logo.png';
import BulletedList from '../utils/Description';
import IconHeader from '../utils/IconHeader';
import Labels from '../utils/Technologies';
import './Experience.css';

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
            {(t('jobs', { returnObjects: true }) as []).map(
                (job, index) => <Job job={job} key={index} />
            )}
        </VerticalTimeline>
    );
}

interface JobProps {
    job: any,
    key: number,
}

function Job({ job, key }: JobProps) {

    const companyLogos: { [key: string]: string } = {
        'dbsLogo': dbsLogo,
        'auralaidLogo': auralaidLogo,
        'ovtLogo': ovtLogo,
    };

    return (
        <VerticalTimelineElement
            className='VerticalTimelineElement'
            contentStyle={job.contentStyle}
            contentArrowStyle={job.contentArrowStyle}
            date={job.date}
            dateClassName='TimelineDate'
            icon={<Image src={companyLogos[job.logo]} circular />}
            iconClassName={job.iconClassName}
            key={key}>

            <h3 className='TimelineText'>{job.companyName}</h3>
            <h4 className='TimelineText'>{job.jobTitle}</h4>

            <BulletedList list={job.description} />
            <Labels labels={job.technologies} />

        </VerticalTimelineElement>
    );
}
