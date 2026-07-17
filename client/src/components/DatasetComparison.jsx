import { useState } from "react";
import axios from "axios";

function DatasetComparison() {

    const [datasets, setDatasets] = useState([]);
    const [loading, setLoading] = useState(false);

    const compare = async () => {

        try {

            setLoading(true);

            const response = await axios.get(
                "https://name-smart-dataset-analyzer-api.onrender.com/api/compare"
            );

            console.log(response.data);

            setDatasets(response.data);

        }

        catch (error) {

            console.log(error);
            alert("Unable to Compare Datasets");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="card">

            <h2>DATASET COMPARISON</h2>

            <button onClick={compare}>

                {loading ? "LOADING..." : "COMPARE DATASETS"}

            </button>

            <br /><br />

            {datasets.length > 0 && (

                <table border="1">

                    <thead>

                        <tr>

                            <th>Dataset</th>
                            <th>Rows</th>
                            <th>Columns</th>
                            <th>Missing Values</th>
                            <th>Duplicates</th>

                        </tr>

                    </thead>

                    <tbody>

                        {datasets.map((dataset, index) => (

                            <tr key={index}>

                                <td>{dataset.name}</td>
                                <td>{dataset.rows}</td>
                                <td>{dataset.columns}</td>
                                <td>{dataset.missing_values}</td>
                                <td>{dataset.duplicates}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default DatasetComparison;