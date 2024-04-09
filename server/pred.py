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
    
    result=[]
    input=[float(val) for val in input_data.values()]
    data=[]
    data.append(input)
    data2=np.array(data)
    df=pd.read_csv('diabetes.csv')
    # #replacing missing values
    zero_features=['Glucose','BloodPressure','SkinThickness','Insulin','BMI','Age']
    diabetes_mean = df[zero_features].mean()
    df[zero_features]=df[zero_features].replace(0, diabetes_mean)
    
    x=df.iloc[:,:-1].values
    y=df.iloc[:,-1].values
    
    scaler = QuantileTransformer(n_quantiles=100, random_state=0, output_distribution='normal')
    X = scaler.fit_transform(x)
    sample_input=scaler.transform(data2)
    
    x_train,x_test,y_train,y_test=train_test_split(X,y,random_state=0,test_size=0.20)
    
    #Logistic reg
    logistic_reg = LogisticRegression()
    logistic_reg.fit(x_train, y_train)
    y_pred_lr=logistic_reg.predict(sample_input)
    result.append(y_pred_lr[0])
    print("logist",y_pred_lr)
    
    #SVM
    svm_model = SVC(kernel='rbf', C=1.0, gamma='scale')
    svm_model.fit(x_train, y_train)
    y_pred_svm=svm_model.predict(sample_input)
    result.append(y_pred_svm[0])
    print("svm-",y_pred_svm)
    
    #KNN
    knn_model = KNeighborsClassifier(n_neighbors=12)
    knn_model.fit(x_train, y_train)
    y_pred_knn = knn_model.predict(sample_input)
    result.append(y_pred_knn[0])
    print("knn-",y_pred_knn)
    
    #For decision tree and random forest
    x_train2,x_test2,y_train2,y_test2=train_test_split(x,y,random_state=0,test_size=0.20)
    
    #Decision tree
    DTclassifier = DecisionTreeClassifier(random_state = 0)
    DTclassifier.fit(x_train2, y_train2)
    y_pred_dt=DTclassifier.predict(sample_input)
    result.append(y_pred_dt[0])
    print("Dt--",y_pred_dt)
    
    #Random forest
    RFclassifier = RandomForestClassifier(n_estimators = 39, random_state = 0)
    RFclassifier.fit(x_train2, y_train2)
    y_pred_rf=RFclassifier.predict(sample_input)
    result.append(y_pred_rf[0])
    print("Random forest-",y_pred_rf)
    
    print(result)
    
    
    return result
