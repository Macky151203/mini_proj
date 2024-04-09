'use client'
import { useState, useEffect } from "react";

export default function Home() {

  const [pregnancies, setpregnancies] = useState('')
  const [glucose, setglucose] = useState('')
  const [bloodp, setbloodp] = useState('')
  const [skinthick, setskinthick] = useState('')
  const [insulin, setinsulin] = useState('')
  const [bmi, setbmi] = useState('')
  const [diabefunc, setdiabefunc] = useState('')
  const [age, setage] = useState('')
  const [logi, setlogi] = useState('')
  const [svm, setsvm] = useState('')
  const [knn, setknn] = useState('')
  const [dt, setdt] = useState('')
  const [rf, setrf] = useState('')




  const predict = () => {
    const getdata = async () => {
      const res = await fetch("http://127.0.0.1:5000/api/helo", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pregnancies: pregnancies, glucose: glucose, bloodp: bloodp, skinthick: skinthick, insulin: insulin, bmi: bmi, diabefunc: diabefunc, age: age })
      })
      const data = await res.json()
      console.log(data)
      setlogi(data.logistic)
      setsvm(data.svm)
      setknn(data.knn)
      setdt(data.dt)
      setrf(data.rf)
    }
    getdata()
  }


  // useEffect(() => {
  //   getdata()
  // })
  return (
    <>

      <div className="text-4xl font-semibold text-center p-2 mb-12 bg-slate-800">Diabetes Prediction</div>
      <div className="m-2 p-2 flex flex-col justify-center items-center gap-2">

        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex flex-row items-center">
            <label className="m-1">Pregnancies:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="preg" onChange={(e) => setpregnancies(e.target.value)} />
          </div>
          <div className="flex flex-row items-center">
            <label className="m-1">Glucose:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="glu" onChange={(e) => setglucose(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-row items-center">
            <label className="m-1">BloodPress:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="bp" onChange={(e) => setbloodp(e.target.value)} />
          </div>
          <div className="flex flex-row items-center">
            <label className="m-1">SkinThick:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="st" onChange={(e) => setskinthick(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-row items-center">
            <label className="m-1">Insulin:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="insu" onChange={(e) => setinsulin(e.target.value)} />
          </div>
          <div className="flex flex-row items-center">
            <label className="m-1">Bmi:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="bmi" onChange={(e) => setbmi(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-row items-center">
            <label className="m-1">Diabefunction:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="diabe" onChange={(e) => setdiabefunc(e.target.value)} />
          </div>
          <div className="flex flex-row items-center">
            <label className="m-1">Age:</label>
            <input className="text-black p-1 rounded-md" type="text" placeholder="age" onChange={(e) => setage(e.target.value)} />
          </div>
        </div>

        <button onClick={() => predict()} className="bg-green-500 rounded-md p-2 m-1">Predict</button>
      </div>


      <div>{logi}</div>
      <div>{svm}</div>
      <div>{knn}</div>
      <div>{dt}</div>
      <div>{rf}</div>
    </>
  );
}
