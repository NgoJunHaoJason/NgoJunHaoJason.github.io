import { List } from "semantic-ui-react";

interface BulletedListProps {
  list: Array<string>;
};

const BulletedProps = ({ list }: BulletedListProps): JSX.Element => {
  return (
    <List
      data-testid='bulleted-list'
      bulleted>
      {list.map(
        (text: string, index: number) => <List.Item key={index}>{text}</List.Item>
      )}
    </List>
  );
}

export default BulletedProps;
