import Link from "components/shared/Link";
import { Grid, Item } from "semantic-ui-react";

interface DegreeSummaryProps {
  testId: string;
  university: string;
  degreeName: string;
  date: string;
  grades?: string;
  certificate?: CertificateProps;
}

const DegreeSummary = ({
  testId,
  university,
  degreeName,
  date,
  grades,
  certificate,
}: DegreeSummaryProps): JSX.Element => (
  <Grid.Row data-testid={testId} columns={1}>
    <Grid.Column>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>{university}</Item.Header>
            <Item.Meta>{degreeName}</Item.Meta>
            <Item.Description>{date}</Item.Description>
            {grades && (
              <Item.Description data-testid={gradesTestId}>
                {grades}
              </Item.Description>
            )}
            {certificate && <Certificate {...certificate} />}
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Column>
  </Grid.Row>
);

export default DegreeSummary;

export const gradesTestId = "grades";

export interface CertificateProps {
  label: string;
  certificateLink: string;
  verify?: string;
  verificationLink?: string;
}

export const Certificate = ({
  label,
  certificateLink,
  verify,
  verificationLink,
}: CertificateProps): JSX.Element => (
  <Item.Extra data-testid={certificateTestId}>
    <Link content={label} href={certificateLink} />
    {verify && verificationLink && (
      <Link
        testId={certificateVerificationLinkTestId}
        content={`(${verify})`}
        href={verificationLink}
      />
    )}
  </Item.Extra>
);

export const certificateTestId = "certificate";
export const certificateVerificationLinkTestId =
  "certificate-verification-link";
