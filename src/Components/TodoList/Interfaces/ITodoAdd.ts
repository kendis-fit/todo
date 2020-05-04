import ITodo from "./ITodo";
import { ADD_TODO } from "../../../Constants/actions";

export default interface ITodoAdd {
    type: typeof ADD_TODO,
    value: string;
}