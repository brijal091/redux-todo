export const addTodo = (data) => {
    return{
        type: "ADD",
        payload: {
            id: new Date().getTime().toString(),
            data:data,
            checked: false
        }
    }
}
export const deleteTodo = (id) => {
    return{
        type: "DELETE",
        payload: id
    }
}
export const updateTodo = (item_id, todo_content) => {
    return{
        type: "UPDATE",
        payload: {
            id: item_id,
            text: todo_content
        }
    }
}
