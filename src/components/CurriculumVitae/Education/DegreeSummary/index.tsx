import Link from "components/shared/Link";
import { Grid, Item } from "semantic-ui-react";

interface DegreeSummaryProps {
  testId: string;
  university: string;
  degree: string;
  date: string;
  grades?: string;
  certificate?: CertificateProps;
}

const DegreeSummary = ({
  testId,
  university,
  degree,
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
            <Item.Meta>{degree}</Item.Meta>
            <Item.Description>{date}</Item.Description>
            {grades && <Item.Description>{grades}</Item.Description>}
            {certificate && <Certificate {...certificate} />}
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Column>
  </Grid.Row>
);

export default DegreeSummary;

export interface CertificateProps {
  label: string;
  certificateLink: string;
  verify?: string;
  verificationLink?: string;
}

const Certificate = ({
  label,
  certificateLink,
  verify,
  verificationLink,
}: CertificateProps): JSX.Element => (
  <Item.Extra data-testid="certificate">
    <Link content={label} href={certificateLink} />
    {verify && verificationLink && (
      <Link content={`(${verify})`} href={verificationLink} />
    )}
  </Item.Extra>
);
