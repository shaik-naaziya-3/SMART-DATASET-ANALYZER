import pandas as pd
import json
import sys
import os

try:

    if len(sys.argv) < 2:

        print(json.dumps({
            "error": "Dataset path not provided."
        }))
        sys.exit()

    file_path = sys.argv[1]

    if not os.path.exists(file_path):

        print(json.dumps({
            "error": "Dataset file not found."
        }))
        sys.exit()

    df = pd.read_csv(file_path)

    numerical_columns = list(
        df.select_dtypes(include=["number"]).columns
    )

    categorical_columns = list(
        df.select_dtypes(exclude=["number"]).columns
    )

    target_column = df.columns[-1]

    target_dtype = str(df[target_column].dtype)

    if target_dtype == "object":

        dataset_type = "Classification"

        recommended_models = [
            "Random Forest",
            "Decision Tree",
            "KNN",
            "Logistic Regression"
        ]

    else:

        dataset_type = "Regression"

        recommended_models = [
            "Linear Regression",
            "Decision Tree Regressor",
            "Random Forest Regressor"
        ]


    analysis = {

        "dataset_name": os.path.basename(file_path),

        "rows": int(df.shape[0]),

        "columns": int(df.shape[1]),

        "missing_values": int(df.isnull().sum().sum()),

        "duplicates": int(df.duplicated().sum()),

        "memory_usage": int(df.memory_usage(deep=True).sum()),

        "target_column": target_column,

        "dataset_type": dataset_type,

        "numerical_columns": len(numerical_columns),

        "categorical_columns": len(categorical_columns),

        "recommended_models": recommended_models

    }

    print(json.dumps(analysis))

except Exception as e:

    print(json.dumps({

        "error": str(e)

    }))