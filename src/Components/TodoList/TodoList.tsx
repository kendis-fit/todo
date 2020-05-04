import React, { useState, useReducer } from "react";
import { List, FormControlLabel, Checkbox } from "@material-ui/core";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import ITodo from "./Interfaces/ITodo";
import { TodoActions } from "../../Constants/types";
import { UPDATE_TODO, REMOVE_TODO, ADD_TODO } from "../../Constants/actions";

const store = (state: ITodo[], action: TodoActions) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo: ITodo = {
                id: new Date().getTime(),
                deleted: false,
                name: action.value
            }
            return [...state, newTodo];
        case REMOVE_TODO:
            return state.map(item => {
                if (item.id === action.value) {
                    item.deleted = true;
                }
                return item;
            });
        case UPDATE_TODO:
            return state.map(item => {
                if (action.value.id === item.id) {
                    item.name = action.value.name;
                }
                return item;
            });
        default:
            return state;
    }
}

const TodoList = () => {

    const [showAll, setShowAll] = useState(true);
    const [todos, dispatch] = useReducer(store, []);

    return(
        <div>
            <FormControlLabel label="Show archive" control={<Checkbox checked={showAll} onChange={() => setShowAll(!showAll)} />} />
            <AddTodo onAdd={name => dispatch({ type: ADD_TODO, value: name })} />
            <List>
                {
                    todos.map(todo => {
                        if ((showAll && todo.deleted) || (!todo.deleted)) {
                            return <Todo 
                                    key={todo.id}
                                    {...todo}
                                    onRemove={() => dispatch({ type: REMOVE_TODO, value: todo.id })}
                                    onUpdate={name => dispatch({ type: UPDATE_TODO, value: { ...todo, name } })}
                                    />
                        }
                        return null;
                    })
                }
            </List>
        </div>
    );
}

export default TodoList;