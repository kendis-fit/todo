import { UPDATE_TODO } from "../../../Constants/actions";

export default interface ITodoAdd {
    type: typeof UPDATE_TODO,
    value: {
        id: number;
        name: string;
    };
}