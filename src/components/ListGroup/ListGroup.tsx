import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  // event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>sheher tapilmadi</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
