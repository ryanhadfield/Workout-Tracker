const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate()),
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter a name for your workout"
            },
            type: {
                type: String,
                trim: true,
                required: "What type of workout is this?"
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]

},opts);

workoutSchema.virtual('totalDuration').
  get(function() {  
    const exercisesArray = this.exercises
    let total = 0
    for (let i = 0; i < exercisesArray.length; i++) {
    total = total+exercisesArray[i].duration
    }
    return total
  })

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
