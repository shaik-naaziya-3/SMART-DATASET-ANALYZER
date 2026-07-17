import { useState } from "react";
import axios from "axios";

import AccuracyTable from "./AccuracyTable";
import Graph from "./Graph";

function DatasetUpload() {

    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFile(e.target.files[0]);

        setAnalysis(null);

        setResult(null);

    };


    const handleAnalysis = async () => {

        if (!file) {

            alert("Please upload a CSV dataset.");

            return;

        }

        const formData = new FormData();

        formData.append("dataset", file);

        try {

            const response = await axios.post(

                "http://localhost:5000/api/analyze",

                formData

            );

            if (response.data.error) {

                alert(response.data.error);

                return;

            }

            setAnalysis(response.data);

        }

        catch (error) {

            console.log(error);

            alert("Analysis Failed");

        }

    };


    const handleTraining = async () => {

        if (!file) {

            alert("Please upload a CSV dataset.");

            return;

        }

        setLoading(true);

        const formData = new FormData();

        formData.append("dataset", file);

        try {

            const response = await axios.post(

                "http://localhost:5000/api/train",

                formData

            );

            if (response.data.error) {

                alert(response.data.error);

                return;

            }

            setResult(response.data);

        }

        catch (error) {

            console.log(error);

            alert("Training Failed");

        }

        finally {

            setLoading(false);

        }

    };


    const downloadReport = () => {

        window.open(

            "http://localhost:5000/api/download",

            "_blank"

        );

    };


    return (

        <div className="card">

            <h1>SMART DATASET ANALYZER</h1>

            <p>

                Upload any CSV dataset to perform automatic analysis, AI model recommendation and machine learning training.

            </p>

            <br />

            <input

                type="file"

                accept=".csv"

                onChange={handleChange}

            />

            {

                file && (

                    <div>

                        <br />

                        <h3>✅ Dataset Uploaded Successfully</h3>

                        <h3>Dataset : {file.name}</h3>

                    </div>

                )

            }

            <br />

            <button onClick={handleAnalysis}>

                ANALYZE DATASET

            </button>

            <br />

            <button onClick={handleTraining}>

                {

                    loading

                        ? "TRAINING..."

                        : "TRAIN AI MODEL"

                }

            </button>

            <br />

            <button onClick={downloadReport}>

                DOWNLOAD REPORT

            </button>

            {

                analysis && (

                    <div className="card">

                        <h2>DATASET OVERVIEW</h2>

                        <h3>Dataset : {analysis.dataset_name}</h3>

                        <h3>Rows : {analysis.rows}</h3>

                        <h3>Columns : {analysis.columns}</h3>

                        <h3>Missing Values : {analysis.missing_values}</h3>

                        <h3>Duplicates : {analysis.duplicates}</h3>

                        <h3>Memory Usage : {analysis.memory_usage} bytes</h3>

                    </div>

                )

            }

            {

                result && (

                    <div className="card">

                        <h2>AI RECOMMENDATION</h2>

                        <h3>Dataset Type : {result.dataset_type}</h3>

                        <h3>Target Column : {result.target_column}</h3>

                        <h3>Models Compared : {result.number_of_models}</h3>

                        <h3>Best Model : {result.best_model}</h3>

                        <h3>Best Accuracy : {result.best_accuracy}%</h3>

                    </div>

                )

            }

            {

                result?.accuracies && (

                    <AccuracyTable

                        data={result.accuracies}

                    />

                )

            }

            {

                result?.accuracies && (

                    <Graph

                        data={result.accuracies}

                    />

                )

            }

        </div>

    );

}

export default DatasetUpload;