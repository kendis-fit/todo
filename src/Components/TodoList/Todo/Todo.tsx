import React, { useState } from "react";
import { Edit, Done, DeleteForever } from "@material-ui/icons";
import { ListItem, IconButton, TextField, Typography, styled, Grid, InputAdornment } from "@material-ui/core";

import ITodo from "./Interfaces/ITodo";

const TodoBox = styled(Grid)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80px",
    width: "100%",
    overflowX: "auto",
    justifyContent: "space-between"
});

const Todo = (props: ITodo) => {

    const [name, setName] = useState("");
    const [updated, setUpdated] = useState(false);

    const startUpdate = () => {
        setName(props.name);
        setUpdated(true);
    }

    const finishUpdate = () => {
        if (name) {
            props.onUpdate(name);
            setUpdated(false);
        }
    }

    return(
        <ListItem>
            {
                updated ? <TodoBox>
                    <TextField 
                        label="New name"
                        value={name}
                        error={!name}
                        helperText={name ? " " : "Name must be filled"}
                        fullWidth
                        onChange={e => setName(e.currentTarget.value)}
                        InputProps={{
                            endAdornment: (
                                name && <InputAdornment position="end">
                                    <IconButton onClick={() => finishUpdate()}>
                                        <Done />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        />
                </TodoBox>
                : 
                <TodoBox>
                    <Grid style={{ overflowX: "auto", width: "300px" }}>
                        <Typography style={{ textDecoration: props.deleted ? "line-through" : "" }}>{props.name}</Typography>
                    </Grid>
                    <Grid>
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
                    </Grid>
                </TodoBox>
            }
        </ListItem>
    );
}

export default Todo;