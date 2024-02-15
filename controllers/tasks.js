const Tasks = require('../models/task')

module.exports = {
    createTask: async (req, res) =>{
        console.log(`create task`);
        try{
            const {taskName} = req.body;
            const newTask = new Tasks({taskName});
            await newTask.save(); // Ensure you await the save operation
            console.log(newTask);
            res.json(newTask);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    listTasks: async (req, res) => {
        try {
            const tasks = await Tasks.find();
            res.json(tasks);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    listTask: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Tasks.findById(id);
            res.json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};