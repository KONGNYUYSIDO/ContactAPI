import todo from "../models/todoModel.js";


export async function getTodos ( req, res ) {
    const userId = req.user._id;
    try {
        const todos = await todo.find( { userId }, { _id: 0, userId: 0 } );
        if ( todos.length === 0 ) {
            res.status( 200 ).json( { status: "Success", message: "No task(s) available in your list" } );
        }
        res.status( 200 ).json( { status: "Success", message: "Your list of different tasks", data: todos } );
    } catch (error) {
        
    }
}