import React from "react";
import ListItem from '@mui/material/ListItem';
import { ListItemText, Typography } from "@mui/material";


const Todo = ({ todo, i }) => {
  console.log(todo);
  return (
    <ListItem>
      <ListItemText key={i} sx={{ textAlign: 'left' }}>
        <Typography sx={{}} variant="h6" component="div">
          {todo}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
