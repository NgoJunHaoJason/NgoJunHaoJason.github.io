import { Label } from "semantic-ui-react";

interface LabelsProps {
    labels: Array<string>;
};

export default function Labels({ labels }: LabelsProps) {
    return (
        <Label.Group>
            {labels.map(
                (text: string, index: number) => (
                    <Label className='Label' key={index}>{text}</Label>
                )
            )}
        </Label.Group>
    );
};