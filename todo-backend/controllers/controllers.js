const Todo = require('../models/todoModel'); // ✅ Correct casing
const logger = require('../utils/logger'); // ✅ Correct casing
exports.getTodos = async (req, res) => {
    logger.info("Fetching todos from DB");
    try {
        const todos = await Todo.find();
        // log.debug();
        logger.info("Fetched todos:", todos);
        res.status(200).json(todos);
    } catch (error) {
        logger.error("Error fetching todos:", error);
        res.status(500).json({ message: "Error fetching todos" });
    }
};

exports.addTodo = async (req, res) => {
    try {
        const title = req.body.title;
        logger.info("Received todo title:", title);
    
        const newTodo = new Todo({
            title: title
        });
    
        logger.info("New Todo to DB:", newTodo);
        const saveTodo = await newTodo.save();
        logger.info("Saved Todo to DB:", saveTodo);
    
        res.status(200).json(saveTodo);
        
    } catch (error) {
        logger.error("Error adding todo:", error);
        res.status(500).json({ message: "Error adding todo" });
        
    }

};
