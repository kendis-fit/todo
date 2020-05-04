import React, { useState } from "react";
import { Edit, Done, DeleteForever } from "@material-ui/icons";
import { ListItem, IconButton, TextField, Typography } from "@material-ui/core";

import ITodo from "./Interfaces/ITodo";

const Todo = (props: ITodo) => {

    const [name, setName] = useState("");
    const [updated, setUpdated] = useState(false);

    const startUpdate = () => {
        setName(props.name);
        setUpdated(true);
    }

    const finishUpdate = () => {
        props.onUpdate(name);
        setUpdated(false);
    }

    return(
        <ListItem>
            {
                updated ? <div>
                    <TextField 
                        label="New name"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                        />
                    <IconButton onClick={() => finishUpdate()}>
                        <Done />
                    </IconButton>
                </div>
                : 
                <div>
                    <Typography style={{ textDecoration: props.deleted ? "line-through" : "" }}>{props.name}</Typography>
                    {
                        !props.deleted && <>
                            <IconButton onClick={() => startUpdate()}>
                                <Edit />
                            </IconButton>
                            <IconButton onClick={() => props.onRemove()}>
                                <DeleteForever />
                            </IconButton>
                        </>
                    }
                </div>
            }
        </ListItem>
    );
}

export default Todo;