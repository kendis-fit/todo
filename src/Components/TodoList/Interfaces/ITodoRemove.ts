import { REMOVE_TODO } from "../../../Constants/actions";

export default interface ITodoRemove {
    type: typeof REMOVE_TODO,
    value: number;
}