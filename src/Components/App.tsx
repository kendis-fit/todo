import React from "react";
import { Grid, styled } from "@material-ui/core";

import "../root.css";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";

const MainGrid = styled(Grid)({
    maxWidth: "800px"
});

const App = () => (
    <Grid container justify="center">
        <MainGrid container direction="column">
            <TodoHeader />
            <TodoList />
        </MainGrid>
    </Grid>
);

export default App;