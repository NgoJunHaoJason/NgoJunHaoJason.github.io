import {
    faBriefcase
} from '@fortawesome/free-solid-svg-icons';
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
import BulletedList from '../components/Description';
import IconHeader from '../components/IconHeader';
import Labels from '../components/Technologies';
import './Experience.css';

export default function Experience({ t }: any) {

    const companyLogos: { [key: string]: string } = {
        'dbsLogo': dbsLogo,
        'auralaidLogo': auralaidLogo,
        'ovtLogo': ovtLogo,
    };

    return (
        <Container>
            <IconHeader icon={faBriefcase} text={t('experience.header')} />

            <VerticalTimeline className='VerticalTimeline'>
                {t('experience.jobs', { returnObjects: true }).map((job: any, index: number) => (
                    <VerticalTimelineElement
                        className='VerticalTimelineElement'
                        contentStyle={job.contentStyle}
                        contentArrowStyle={job.contentArrowStyle}
                        date={job.date}
                        dateClassName='TimelineDate'
                        icon={<Image src={companyLogos[job.logo]} circular />}
                        iconClassName={job.iconClassName}
                        key={index}>

                        <h3 className='TimelineText'>{job.companyName}</h3>
                        <h4 className='TimelineText'>{job.jobTitle}</h4>

                        <BulletedList list={job.description} />
                        <Labels labels={job.technologies} />

                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Container>
    );
}
