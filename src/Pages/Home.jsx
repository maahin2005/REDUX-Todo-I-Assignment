import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Input,
  Checkbox,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { addTodo } from "../Redux/TodoRedux/actions";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../components/TodoItem";
import EditTodo from "../components/EditTodo";

function Home() {
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState({
    modeStatus: false,
    modeId: null,
  });

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.floor(Math.random() * 3000), title, checked };

    dispatch(addTodo(newTodo));
    setTitle(""); // Clear the input field after adding todo
    setChecked(false); // Reset the checkbox after adding todo
  };

  return (
    <Box p={5}>
      <Heading my={5}>Task Manager</Heading>
      <form onSubmit={handleAddTodo}>
        <SimpleGrid width="50%" gap={5}>
          <Flex gap={5}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Checkbox
              width="10%"
              margin="auto"
              isChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            >
              Status
            </Checkbox>
            <Button width={"20%"} type="submit">
              Add
            </Button>
          </Flex>
        </SimpleGrid>
      </form>
      {isEditMode.modeStatus ? (
        <EditTodo setIsEditMode={setIsEditMode} isEditMode={isEditMode} />
      ) : null}
      <SimpleGrid p={5} columns={3} gap={5}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} setIsEditMode={setIsEditMode} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
