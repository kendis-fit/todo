import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import { TextField, IconButton, Grid, InputAdornment } from "@material-ui/core";

import IAddTodo from "./Interfaces/IAddTodo";

const AddTodo = (props: IAddTodo) => {

    const [todo, setTodo] = useState("");

    const addTodo = () => {
        props.onAdd(todo);
        setTodo("");
    }

    return(
        <TextField
            label="Todo"
            value={todo}
            fullWidth
            onChange={e => setTodo(e.currentTarget.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={addTodo}>
                            <Add />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            />
    );
}

export default AddTodo;