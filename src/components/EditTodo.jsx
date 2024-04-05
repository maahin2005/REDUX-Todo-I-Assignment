import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Checkbox, Button, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../Redux/TodoRedux/actions";

function EditTodo({ setIsEditMode, isEditMode }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const data = todos.find((todo) => todo.id === isEditMode.modeId);

  const [title, setTitle] = useState(data ? data.title : "");
  const [checked, setChecked] = useState(data ? data.checked : false);

  const handleEditing = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: isEditMode.modeId, title, checked }));
    setIsEditMode({
      modeStatus: false,
      modeId: null,
    });
  };

  useEffect(() => {
    setTitle(data ? data.title : "");
    setChecked(data ? data.checked : false);
  }, [isEditMode.modeId, todos]);

  return (
    <Box>
      <form onSubmit={handleEditing}>
        <Box display="flex" width="50%" p={5} gap={5}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Checkbox
            width="25%"
            isChecked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            Edit Status
          </Checkbox>
          <Button width="20%" type="submit">
            Done Edit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default EditTodo;
