import "./App.css";

import DatasetUpload from "./components/DatasetUpload";
import DatasetComparison from "./components/DatasetComparison";

function App() {

    return (

        <div className="container">

            <div className="heading">

                <h1>

                    SMART DATASET ANALYZER

                </h1>

                <p>

                    AI-Powered Dataset Analysis, Machine Learning Model Recommendation and Performance Comparison

                </p>

            </div>

            <DatasetUpload />

            <DatasetComparison />

            <br />

            <div className="card center">

                <h2>

                    PROJECT FEATURES

                </h2>

                <h3>✔ Upload Any CSV Dataset</h3>

                <h3>✔ Dataset Analysis</h3>

                <h3>✔ Missing Value Detection</h3>

                <h3>✔ Duplicate Detection</h3>

                <h3>✔ Automatic Dataset Type Detection</h3>

                <h3>✔ AI Model Recommendation</h3>

                <h3>✔ Machine Learning Model Training</h3>

                <h3>✔ Model Accuracy Comparison</h3>

                <h3>✔ Graph Visualization</h3>

                <h3>✔ PDF Report Generation</h3>

            </div>

        </div>

    );

}

export default App;