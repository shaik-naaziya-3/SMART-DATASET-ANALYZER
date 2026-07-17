const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { PythonShell } = require("python-shell");

const {
    analyzeDataset,
    trainDataset
} = require("./pythonService");

const router = express.Router();


// Create uploads folder automatically
const uploadFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadFolder)) {

    fs.mkdirSync(uploadFolder);

}


// Multer Storage

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, uploadFolder);

    },

    filename: (req, file, cb) => {

        cb(null, Date.now() + "_" + file.originalname);

    }

});


const upload = multer({

    storage

});


// ================= ANALYZE =================

router.post("/analyze", upload.single("dataset"), async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                error: "Dataset not uploaded."

            });

        }

        const filePath = req.file.path;

        const result = await analyzeDataset(filePath);

        res.json(result);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

});


// ================= TRAIN =================

router.post("/train", upload.single("dataset"), async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                error: "Dataset not uploaded."

            });

        }

        const filePath = req.file.path;

        const result = await trainDataset(filePath);

        res.json(result);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

});


// ================= DOWNLOAD REPORT =================

router.get("/download", (req, res) => {

    const reportPath = path.join(__dirname, "../report.pdf");

    if (!fs.existsSync(reportPath)) {

        return res.status(404).json({

            error: "Report not found."

        });

    }

    res.download(reportPath);

});


// ================= COMPARE MODELS =================

router.get("/compare", async (req, res) => {

    try {

        const result = await PythonShell.run(

            path.join(__dirname, "../ml-models/compare.py")

        );

        res.json(

            JSON.parse(result[0])

        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

});


module.exports = router;