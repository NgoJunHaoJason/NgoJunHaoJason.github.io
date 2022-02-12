import { List } from "semantic-ui-react";

interface BulletedListProps {
    list: Array<string>;
};

export default function BulletedList({ list }: BulletedListProps) {
    return (
        <List bulleted>
            {list.map(
                (item: any, index: number) => (
                    <List.Item key={index}>{item}</List.Item>
                )
            )}
        </List>
    );
}
