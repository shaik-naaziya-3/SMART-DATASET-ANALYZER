import json
import sys

import matplotlib.pyplot as plt


data=json.loads(

sys.argv[1]

)


models=list(data.keys())

accuracies=list(data.values())


plt.figure(figsize=(8,5))

plt.bar(

models,

accuracies

)


plt.xlabel(

"Algorithms"

)


plt.ylabel(

"Accuracy"

)


plt.title(

"Model Comparison"

)


plt.savefig(

"accuracy.png"

)


print(

"GRAPH GENERATED"

)