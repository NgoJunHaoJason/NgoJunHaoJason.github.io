import { Label } from "semantic-ui-react";

interface LabelsProps {
  labels: Array<string>;
}

const Labels = ({ labels }: LabelsProps): JSX.Element => {
  return (
    <Label.Group data-testid="labels">
      {labels?.map((text: string, index: number) => (
        <Label className="Label" key={index}>
          {text}
        </Label>
      ))}
    </Label.Group>
  );
};

export default Labels;
