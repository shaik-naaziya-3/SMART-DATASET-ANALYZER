const { PythonShell } = require("python-shell");
const path = require("path");


// ================= ANALYZE DATASET =================

const analyzeDataset = async (datasetPath) => {

    const options = {

        mode: "text",

        pythonOptions: ["-u"],

        scriptPath: path.join(__dirname, "../ml-models"),

        args: [datasetPath]

    };

    const result = await PythonShell.run(

        "analysis.py",

        options

    );

    console.log("========== ANALYSIS ==========");
    console.log(result);

    return JSON.parse(result.join(""));

};


// ================= TRAIN DATASET =================

const trainDataset = async (datasetPath) => {

    const options = {

        mode: "text",

        pythonOptions: ["-u"],

        scriptPath: path.join(__dirname, "../ml-models"),

        args: [datasetPath]

    };

    const result = await PythonShell.run(

        "training.py",

        options

    );

    console.log("========== TRAINING ==========");
    console.log(result);

    return JSON.parse(result.join(""));

};


module.exports = {

    analyzeDataset,
    trainDataset

};