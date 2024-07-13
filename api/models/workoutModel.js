const mongoose = require('mongoose');

const Schema = mongoose.Schema

//passing in as argument an object where we define this schema 
const workoutSchema = new Schema ({
    title: {type: String, required: true},
    reps: {type: Number, required: true},
    load: {type: Number, required: true},
}, {timestamps: true})

// schema define a struture of the particular document inside the database 
// a model is to apply that schema to a particular model and then we use the model to interact with a collection of that name
const Workout = mongoose.model('Workout', workoutSchema);
module.exports=Workout;

Workout.find()



