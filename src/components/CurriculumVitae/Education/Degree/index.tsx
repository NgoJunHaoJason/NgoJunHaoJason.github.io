import DegreeDetails, {
  DegreeDetailsSectionProps,
} from "components/CurriculumVitae/Education/DegreeDetails";
import DegreeSummary, {
  CertificateProps,
} from "components/CurriculumVitae/Education/DegreeSummary";
import { Grid } from "semantic-ui-react";

interface DegreeProps {
  testId: string;
  university: string;
  degreeName: string;
  date: string;
  grades?: string;
  certificate?: CertificateProps;
  sections: DegreeDetailsSectionProps[];
}

const Degree = (props: DegreeProps): JSX.Element => {
  const { testId, sections } = props;
  return (
    <Grid data-testid={testId} stackable doubling padded="horizontally">
      <DegreeSummary
        {...props}
        testId={`${testId}-${degreeSummaryTestIdSuffix}`}
      />
      <DegreeDetails
        testId={`${testId}-${degreeDetailsTestIdSuffix}`}
        sections={sections}
      />
    </Grid>
  );
};

export default Degree;

export const degreeSummaryTestIdSuffix = "summary";
export const degreeDetailsTestIdSuffix = "details";
