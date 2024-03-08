import mongoose, { now } from 'mongoose';
const { Schema } = mongoose;


const projectSchema = new Schema({
    team : [{
        ref:'users',
        type     : mongoose.Schema.Types.ObjectId,
        unique: true,
    }],
    name: {type: String,  required:'un nom est obligatoire:)', unique:true },
    
    startDate:{type:Date,default: Date.now},
    finishDate:{type:Date,default: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30))},
    },{ timestamps: true }
);

const projectModel = mongoose.model('projects',projectSchema)

export default projectModel