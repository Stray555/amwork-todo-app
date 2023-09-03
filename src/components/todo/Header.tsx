import React from "react";
import { observer } from "mobx-react";
import { Flex, Text } from "@mantine/core";
import TodoStore from "../../stores/TodoStore";
import { ReactComponent as PlusIcon } from "@assets/plus-icon.svg";
import SquareChip from "./SquareChip";

const Header: React.FC = observer(() => {
  return (
    <Flex sx={{ width: "320px" }} gap="sm">
      <Text color="primary-green.0">Today</Text>
      <Flex gap="sm" sx={{ marginLeft: "auto" }}>
        <PlusIcon />
        <SquareChip number={TodoStore.loadedTasks} />
      </Flex>
    </Flex>
  );
});

export default Header;
