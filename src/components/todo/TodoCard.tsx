import React from "react";
import { Checkbox, Card, Box, Flex, Text, Badge, Avatar } from "@mantine/core";
import { ReactComponent as Triangle } from "@assets/triangle.svg";
import { observer } from "mobx-react";
import avatarUrl from "@assets/avatar.png";
import { Todo } from "@interfaces/todo/TodoTypes";
import TodoStore from "@stores/TodoStore";
import { format } from "date-fns";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = observer(({ todo }) => {
  const { id, title, tags, startDate, endDate, description, completed } = todo;
  const [firstTag, secondTag] = tags;

  const handleCheckboxChange = () => TodoStore.toggleTodoCompleted(id);

  return (
    <Card
      aria-label="Todo card"
      padding="sm"
      sx={{
        width: "320px",
        borderRadius: "7px",
        margin: "0.5rem 1rem",
        flexShrink: 0,
        boxShadow:
          "0px 1px 2px 0px #D0DAEB, 0px 0px 0px 5px rgba(238,244,254, 0.7)"
      }}
    >
      <Flex sx={{ marginBottom: "0.5rem" }}>
        <Checkbox
          checked={completed}
          onChange={handleCheckboxChange}
          label={
            // ellipsis after third line
            <Text
              sx={{ width: "260px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical"
             }}
              size="14px"
              transform="capitalize"
              weight="600"
              color="primary-blue.0"
            >
              {title}
            </Text>
          }
        />
      </Flex>
      <Flex justify="space-between" gap="sm" sx={{ marginBottom: "0.5rem" }}>
        <Text size="13px" color="primary-green.0">
          {format(startDate, "MMM, p")}
        </Text>
        <Text size="13px" color="primary-green.0">
          {format(endDate, "MMM, p")}
        </Text>
      </Flex>
      <Box sx={{ marginBottom: "0.5rem" }}>
        <Text size="13px" color="primary-black.0" truncate>
          {description}
        </Text>
      </Box>
      <Flex align="center" gap="sm">
        <Badge color="primary-purple.0" variant="filled" radius="sm">
          <Text size="12px" transform="capitalize">
            {firstTag}
          </Text>
        </Badge>
        <Flex wrap="nowrap" gap="0" sx={{ height: "20px" }}>
          <Badge color="primary-gray.0" variant="filled" radius="sm">
            <Text size="12px" transform="capitalize" color="primary-black.0">
              {secondTag}
            </Text>
          </Badge>
          <Box sx={{ marginLeft: "-3px" }}>
            <Triangle />
          </Box>
        </Flex>
        <Box sx={{ marginLeft: "auto" }}>
          <Avatar size="25px" radius="xl" src={avatarUrl} alt="avatar" />
        </Box>
      </Flex>
    </Card>
  );
});

export default TodoCard;
