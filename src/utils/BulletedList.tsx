import { List } from "semantic-ui-react";

interface BulletedListProps {
    list: Array<string>;
};

export default function BulletedList({ list }: BulletedListProps) {
    return (
        <List bulleted>
            {list.map((text, index) => <List.Item key={index}>{text}</List.Item>)}
        </List>
    );
}
