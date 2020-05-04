import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import { TextField, IconButton } from "@material-ui/core";

import IAddTodo from "./Interfaces/IAddTodo";

const AddTodo = (props: IAddTodo) => {

    const [todo, setTodo] = useState("");

    const addTodo = () => {
        props.onAdd(todo);
        setTodo("");
    }

    return(
        <div>
            <TextField
                label="Todo"
                value={todo}
                onChange={e => setTodo(e.currentTarget.value)}
                />
            <IconButton onClick={addTodo}>
                <Add />
            </IconButton>
        </div>
    );
}

export default AddTodo;