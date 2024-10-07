import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { select } from "framer-motion/client";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectsortOrder: (sortOrder: string) => void;
  selectedSort: string;
}

export const SortSelector = ({ onSelectsortOrder, selectedSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const current = sortOrders.find((order) => order.value === selectedSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {current?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectsortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
