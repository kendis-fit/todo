export default interface ITodo {
    name: string;
    deleted: boolean;
    onRemove: () => void;
    onUpdate: (name: string) => void;
}