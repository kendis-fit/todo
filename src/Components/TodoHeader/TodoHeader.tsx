import React from "react";
import { Card, Typography, styled } from "@material-ui/core";

const HeaderBox = styled(Card)({
    background: "#9cf99c",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

const TodoHeader = () => {
    return <HeaderBox>
        <Typography variant="h3">Todo list</Typography>
    </HeaderBox>
}

export default TodoHeader;