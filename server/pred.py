import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import QuantileTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier


def predictresult(input_data):
    
    input=[float(val) for val in input_data.values()]
    print(input)
    data=[]
    data.append(input)
    df=pd.read_csv('diabetes.csv')
    # #replacing missing values
    zero_features=['Glucose','BloodPressure','SkinThickness','Insulin','BMI','Age']
    diabetes_mean = df[zero_features].mean()
    df[zero_features]=df[zero_features].replace(0, diabetes_mean)
    
    x=df.iloc[:,:-1].values
    y=df.iloc[:,-1].values
    
    scaler = QuantileTransformer(n_quantiles=100, random_state=0, output_distribution='normal')
    X = scaler.fit_transform(x)
    sample_input=scaler.fit_transform(data)
    # print(x)
    x_train,x_test,y_train,y_test=train_test_split(X,y,random_state=0,test_size=0.20)
    
    logistic_reg = LogisticRegression()
    logistic_reg.fit(x_train, y_train)
    print(sample_input)
    y_pred_lr=logistic_reg.predict(sample_input)
    # y_pred=logistic_reg.predict(x_test)
    # print(x_test)
    # print(y_pred)
    print(y_pred_lr)
    
    
    
    # print("innside pred")
    # print(input_data)
    return y_pred_lr