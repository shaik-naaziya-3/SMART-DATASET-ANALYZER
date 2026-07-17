import pandas as pd
import sys
import json
import os

from sklearn.preprocessing import LabelEncoder


try:

    if len(sys.argv) < 2:

        print(json.dumps({
            "error": "Dataset path not provided."
        }))
        sys.exit()

    file_path = sys.argv[1]

    if not os.path.exists(file_path):

        print(json.dumps({
            "error": "Dataset not found."
        }))
        sys.exit()

    df = pd.read_csv(file_path)

    original_rows = len(df)

    duplicate_count = int(df.duplicated().sum())

    df = df.drop_duplicates()

    missing_values = int(df.isnull().sum().sum())

    encoder = LabelEncoder()

    encoded_columns = []


    for column in df.columns:

        # Numeric columns
        if pd.api.types.is_numeric_dtype(df[column]):

            df[column] = df[column].fillna(df[column].mean())

        # Object/String columns
        else:

            mode = df[column].mode()

            if len(mode) > 0:

                df[column] = df[column].fillna(mode.iloc[0])

            else:

                df[column] = df[column].fillna("Unknown")

            df[column] = encoder.fit_transform(df[column].astype(str))

            encoded_columns.append(column)


    output_file = "cleaned_dataset.csv"

    df.to_csv(output_file, index=False)


    result = {

        "status": "Cleaning Completed",

        "original_rows": original_rows,

        "final_rows": len(df),

        "duplicates_removed": duplicate_count,

        "missing_values_handled": missing_values,

        "encoded_columns": encoded_columns,

        "cleaned_file": output_file

    }

    print(json.dumps(result))


except Exception as e:

    print(json.dumps({

        "error": str(e)

    }))