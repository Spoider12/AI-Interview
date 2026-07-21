const pdfParse = require ("pdf-parse")
const interviewReportModel = require("../models/interviewReport.model")
const generateInterviewReport = require("../services/ai.service")

async  function generateInterviewReportController(req,res){
    const resumeFile = req.file

    const resumeContent = await (new pdfParse.PDFParse( Uint8Array.from(req.file.buffer))).getText()
    const {selfDescription , jobDescription} = req.body

    const interviewReportByAi = await generateInterviewReport({
        resume : resumeContent.text,
        selfDescription,
        jobDescription
    })
    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume:resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    res.status(201).json({
        message: "Interview eport generated Successfully",
        interviewReport
    })
}
/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {

    const { interviewId } = req.params

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found." 
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully.",
        interviewReport
    })
}
/**
 * @description Controller to get all interview reports of the logged-in user.
 */
async function getAllInterviewReportsController(req, res) {
     const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    res.status(200).json({
        message: "Interview reports fetched successfully.",
        interviewReports
    })
}
    



module.exports = {generateInterviewReportController,getInterviewReportByIdController,getAllInterviewReportsController};