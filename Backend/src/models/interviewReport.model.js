const mongoose = require ("mongoose");

const technicalQuestionsSchema = new mongoose.Schema({
    question:{
        type: String,
        required : [true,"technical Question is required"]
    },
    intention:{
        type: String,
        required:[true,"intention is required"]
    },
    answer:{
        type: String,
        required:[true,"aanswer is required"]
    }
},{
    _id: false
})

const behaviouralQuestionSchema = new mongoose.Schema({
     question:{
        type: String,
        required : [true,"technical Question is required"]
    },
    intention:{
        type: String,
        required:[true,"intention is required"]
    },
    answer:{
        type: String,
        required:[true,"aanswer is required"]
    }
},{
    _id:false
})
const skillGapSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"Skill is required"]
    },
    severity:{
        type:String,
        enum:["low","medium","high"],
        required: [true, "severity is required"]
    }
},{
    _id:false
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type: Number,
        required: [true, "Day is required"]

    },
    focus:{
        type:String,
        required: [true , "Focus is required"]
    },
    tasks:{
        type: String,
        required: [true , "Task is required"]
    }
})
const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type: String,
        required: [true,"Job Description is required"]
    },
    resume:{
        type: String,
    },
    selfDescription:{
        type: String,
    },
    matchScore:{
        type: Number,
        min:0,
        max:100,
    },
    technicalQuestions: [technicalQuestionsSchema],
    behavioralQuestions: [behaviouralQuestionSchema],
    skillGaps: [skillGapSchema],
    perparationPlan: [preparationPlanSchema]
},{
    timestamps: true
})

const interviewReportModel  = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;