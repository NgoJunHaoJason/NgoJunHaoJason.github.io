import { Label } from "semantic-ui-react";

interface LabelsProps {
  labels: Array<string>;
};

export default ({ labels }: LabelsProps): JSX.Element => {
  return (
    <Label.Group data-testid='labels'>
      {labels.map((text, index) => <Label className='Label' key={index}>{text}</Label>)}
    </Label.Group>
  );
};
