function AccuracyTable({ data }) {

    if (!data) {

        return null;

    }

    const bestAccuracy = Math.max(...Object.values(data));

    return (

        <div className="card">

            <h2>

                MODEL ACCURACY COMPARISON

            </h2>

            <table>

                <thead>

                    <tr>

                        <th>Machine Learning Model</th>

                        <th>Accuracy (%)</th>

                        <th>Performance</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        Object.entries(data).map(

                            ([model, accuracy]) => (

                                <tr key={model}>

                                    <td>

                                        {model}

                                    </td>

                                    <td>

                                        {accuracy} %

                                    </td>

                                    <td>

                                        {

                                            accuracy === bestAccuracy

                                                ? "🏆 Best Model"

                                                : "✔ Tested"

                                        }

                                    </td>

                                </tr>

                            )

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default AccuracyTable;