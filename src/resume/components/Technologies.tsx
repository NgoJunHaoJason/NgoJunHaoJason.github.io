import { Label } from "semantic-ui-react";

interface LabelsProps {
    labels: Array<string>;
};

export default function Labels({ labels }: LabelsProps) {
    return (
        <Label.Group>
            {labels.map(
                (item: any, index: number) => (
                    <Label className='Label' key={index}>{item}</Label>
                )
            )}
        </Label.Group>
    );
};
