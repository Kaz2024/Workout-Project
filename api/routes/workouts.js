const express = require('express')
const {createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout} = require('../controllers/workoutController')
const router = express.Router();


//get all workouts
router.get('/', getWorkouts);

//GET a sngle workout
router.get('/:id', getWorkout)

//POST a new workout --create
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout) 

//UPDATE a workout
router.patch('/:id', updateWorkout)  



module.exports = router;