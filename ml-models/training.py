import pandas as pd
import json
import sys
import os

from sklearn.model_selection import train_test_split

from sklearn.ensemble import (
    RandomForestClassifier,
    RandomForestRegressor
)

from sklearn.tree import (
    DecisionTreeClassifier,
    DecisionTreeRegressor
)

from sklearn.neighbors import KNeighborsClassifier

from sklearn.linear_model import (
    LogisticRegression,
    LinearRegression
)

from sklearn.metrics import (
    accuracy_score,
    r2_score
)


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

    df = df.dropna()

    target = df.columns[-1]

    X = df.drop(columns=[target])

    y = df[target]

    dataset_type = "Classification"

    if y.dtype == "object":

        y = pd.factorize(y)[0]

    elif y.nunique() > 15:

        dataset_type = "Regression"

    X = pd.get_dummies(X)

    X_train, X_test, y_train, y_test = train_test_split(

        X,
        y,
        test_size=0.30,
        random_state=42

    )

    if dataset_type == "Classification":

        models = {

            "Random Forest": RandomForestClassifier(random_state=42),

            "Decision Tree": DecisionTreeClassifier(random_state=42),

            "KNN": KNeighborsClassifier(),

            "Logistic Regression": LogisticRegression(max_iter=1000)

        }

        scores = {}

        for name, model in models.items():

            model.fit(X_train, y_train)

            prediction = model.predict(X_test)

            scores[name] = round(

                accuracy_score(y_test, prediction) * 100,
                2

            )

    else:

        models = {

            "Linear Regression": LinearRegression(),

            "Decision Tree": DecisionTreeRegressor(random_state=42),

            "Random Forest": RandomForestRegressor(random_state=42)

        }

        scores = {}

        for name, model in models.items():

            model.fit(X_train, y_train)

            prediction = model.predict(X_test)

            scores[name] = round(

                r2_score(y_test, prediction) * 100,
                2

            )

    best_model = max(scores, key=scores.get)

    output = {

        "dataset_type": dataset_type,

        "target_column": target,

        "number_of_models": len(models),

        "accuracies": scores,

        "best_model": best_model,

        "best_accuracy": scores[best_model]

    }

    print(json.dumps(output))

except Exception as e:

    print(json.dumps({

        "error": str(e)

    }))