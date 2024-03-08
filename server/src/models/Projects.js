import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const projectSchema = new Schema({
    team : [{
        ref:'users',
        type     : mongoose.Schema.Types.ObjectId,
    }],
    name: {type: String,  required:'un nom est obligatoire:)', unique:true }
    },
    { timestamps: true }
);

const projectModel = mongoose.model('projects',projectSchema)

export default projectModel