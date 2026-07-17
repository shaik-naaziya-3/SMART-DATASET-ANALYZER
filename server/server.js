const express = require("express");
const cors = require("cors");

const datasetRoutes = require("./datasetRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", datasetRoutes);

app.get("/", (req, res) => {

    res.json({

        message: "SMART DATASET ANALYZER API",

        status: "Running"

    });

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`🚀 Server Running on Port ${PORT}`);

});