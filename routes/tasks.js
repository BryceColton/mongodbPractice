
const express = require('express')
const router = express.Router();
const TaskController = require('../controllers/tasks')


router.post('/task', TaskController.createTask);
router.get('/tasks', TaskController.listTasks);
router.get('/task/:id', TaskController.listTask);

module.exports = router;