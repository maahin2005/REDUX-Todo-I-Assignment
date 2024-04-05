import React, { useState } from "react";
import { Box, Heading, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { DELETE_TODO } from "../Redux/TodoRedux/actionItem";
import { useDispatch } from "react-redux";

function TodoItem({ id, title, checked, setIsEditMode }) {
  const dispatch = useDispatch();

  const handleDeleteOp = () => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const handleEdit = () => {
    setIsEditMode({ modeStatus: true, modeId: id });
  };

  return (
    <>
      <Box
        p={5}
        display={"flex"}
        boxShadow={"lg"}
        justifyContent={"space-between"}
        background={checked ? "green.200" : "red.200"}
      >
        <Box>
          <Heading size="md">{title}</Heading>
          <Text>{checked ? "ho gaya bhai" : "karle beta"}</Text>
        </Box>
        <SimpleGrid gap={2}>
          <Button colorScheme="purple" onClick={handleEdit}>
            Edit
          </Button>
          <Button colorScheme="red" onClick={handleDeleteOp}>
            Delete
          </Button>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default TodoItem;
