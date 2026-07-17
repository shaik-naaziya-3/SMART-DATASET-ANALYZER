import os
import json
import pandas as pd

try:

    dataset_folder = os.path.join(
        os.path.dirname(__file__),
        "..",
        "datasets",
        "classification"
    )

    datasets = []

    if not os.path.exists(dataset_folder):

        print(json.dumps({
            "error": "Dataset folder not found."
        }))

        exit()

    for file in os.listdir(dataset_folder):

        if file.endswith(".csv"):

            file_path = os.path.join(dataset_folder, file)

            try:

                df = pd.read_csv(file_path)

                datasets.append({

                    "name": file,

                    "rows": int(df.shape[0]),

                    "columns": int(df.shape[1]),

                    "missing_values": int(df.isnull().sum().sum()),

                    "duplicates": int(df.duplicated().sum())

                })

            except Exception:

                continue

    print(json.dumps(datasets))

except Exception as e:

    print(json.dumps({

        "error": str(e)

    }))