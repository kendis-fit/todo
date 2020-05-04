import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import { TextField, IconButton, InputAdornment } from "@material-ui/core";

import IAddTodo from "./Interfaces/IAddTodo";

const AddTodo = (props: IAddTodo) => {

    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");

    const addTodo = () => {
        if (todo) {
            props.onAdd(todo);
            setTodo("");
            setError("");
        } else {
            setError("Todo must be filled");
        }
    }

    return(
        <TextField
            label="Todo"
            value={todo}
            error={!!error}
            helperText={error || " "}
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