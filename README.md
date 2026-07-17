# 📊 SMART DATASET ANALYZER

An AI-powered web application that allows users to upload CSV datasets, analyze dataset characteristics, compare multiple machine learning models, and recommend the best-performing model based on accuracy.

---

## 🚀 Features

- 📁 Upload CSV datasets
- 📊 Dataset analysis
  - Number of rows
  - Number of columns
  - Missing values
  - Duplicate records
  - Memory usage
- 🤖 Automatic AI model training
- 📈 Machine Learning model comparison
- 🏆 Best model recommendation
- 📋 Accuracy comparison table
- 📊 Interactive bar chart visualization
- 📄 Download PDF report

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Axios
- Chart.js
- React ChartJS 2
- CSS

### Backend
- Node.js
- Express.js
- Multer
- Python Shell

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn

### Report Generation
- ReportLab

---

## 📂 Project Structure

```
SMART-DATASET-ANALYZER
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── uploads
│   ├── datasetRoutes.js
│   ├── pythonService.js
│   ├── server.js
│   └── package.json
│
├── ml-models
│   ├── analysis.py
│   ├── training.py
│   ├── cleaning.py
│   ├── compare.py
│   └── report.py
│
├── datasets
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Machine Learning Models

- Random Forest Classifier
- Decision Tree Classifier
- K-Nearest Neighbors (KNN)
- Logistic Regression

The application compares all models and recommends the one with the highest accuracy.

---

## 📈 Workflow

1. Upload CSV dataset
2. Analyze dataset statistics
3. Train multiple machine learning models
4. Compare model accuracies
5. Recommend the best-performing model
6. Display graphical visualization
7. Download analysis report

---

## 📸 Screenshots

### Home Page

(Add Screenshot Here)

### Dataset Analysis

(Add Screenshot Here)

### Model Comparison

(Add Screenshot Here)

### Accuracy Graph

(Add Screenshot Here)

---

## ▶️ Installation

### Clone Repository

```bash
git clone https://github.com/shaik-naaziya-3/SMART-DATASET-ANALYZER.git
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
node server.js
```

### Install Python Packages

```bash
pip install -r requirements.txt
```

---

## 📊 Sample Output

- Dataset Overview
- AI Recommendation
- Accuracy Table
- Bar Chart
- PDF Report

---

## 👩‍💻 Author

**Shaik Naaziya**

GitHub:
https://github.com/shaik-naaziya-3

---

## ⭐ Future Enhancements

- Deep Learning Model Support
- Regression Dataset Support
- Feature Importance Visualization
- Confusion Matrix
- ROC Curve
- Dataset Cleaning Dashboard
- Model Export
- Cloud Deployment

---

## 📜 License

This project is developed for educational and learning purposes.