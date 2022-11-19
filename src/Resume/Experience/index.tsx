import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Container, Image } from "semantic-ui-react";
import BulletedList from "components/BulletedList";
import IconHeader from "components/IconHeader";
import Labels from "components/Labels";

import "react-vertical-timeline-component/style.min.css";
import "Resume/Experience/index.css";

import auralaidLogo from "assets/images/companies/auralaid_logo.png";
import dbsLogo from "assets/images/companies/dbs_logo.png";
import ovtLogo from "assets/images/companies/ovt_logo.png";

const Experience = (): JSX.Element => {
  const { t } = useTranslation("experience");
  return (
    <Container data-testid="experience">
      <IconHeader icon={faBriefcase} text={t("header")} />
      <Jobs />
    </Container>
  );
};

export default Experience;

export const Jobs = (): JSX.Element => {
  const { t } = useTranslation("experience");
  return (
    <Container data-testid="jobs">
      <VerticalTimeline className="VerticalTimeline">
        {t<any, JobProps[]>("jobs", { returnObjects: true }).map(
          (job: JobProps, index: number) => (
            <Job {...job} key={index} />
          )
        )}
      </VerticalTimeline>
    </Container>
  );
};

interface JobProps {
  contentStyle: CSSProperties;
  contentArrowStyle: CSSProperties;
  date: string;
  iconName: string;
  companyName: string;
  jobTitle: string;
  description: Array<string>;
  technologies: Array<string>;
}

const Job = ({
  contentStyle,
  contentArrowStyle,
  date,
  iconName,
  companyName,
  jobTitle,
  description,
  technologies,
}: JobProps): JSX.Element => {
  const companyLogos: { [key: string]: string } = {
    DBSLogo: dbsLogo,
    AuralAidLogo: auralaidLogo,
    OVTLogo: ovtLogo,
  };

  return (
    <VerticalTimelineElement
      className="VerticalTimelineElement"
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={date}
      dateClassName="TimelineDate"
      icon={<Image src={companyLogos[iconName]} circular />}
      iconClassName={iconName}
    >
      <h3 className="TimelineText">{companyName}</h3>
      <h4 className="TimelineText">{jobTitle}</h4>

      <BulletedList list={description} />
      <Labels labels={technologies} />
    </VerticalTimelineElement>
  );
};
