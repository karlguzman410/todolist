import React from 'react';
import Todo from './Todo';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { palette } from '@mui/system';

const Todolist = ({ todos }) => {
    return (
        <>
            <Box sx={{ p: 4, width: '50%', m: 'auto' }}>
                <List>
                    {todos.map((todo, i) => {
                        return <Todo todo={todo} key={i} />;
                    })}
                </List>
            </Box>
        </>

    )
};

export default Todolist;
