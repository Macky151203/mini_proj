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
      console.log(data.result)
    }
    getdata()
  }


  // useEffect(() => {
  //   getdata()
  // })
  return (
    <>
      <div>Hello</div>
      <input className="text-black" type="text" placeholder="preg" onChange={(e) => setpregnancies(e.target.value)} />
      <input className="text-black" type="text" placeholder="glu" onChange={(e) => setglucose(e.target.value)} />
      <input className="text-black" type="text" placeholder="bp" onChange={(e) => setbloodp(e.target.value)} />
      <input className="text-black" type="text" placeholder="st" onChange={(e) => setskinthick(e.target.value)} />
      <input className="text-black" type="text" placeholder="insu" onChange={(e) => setinsulin(e.target.value)} />
      <input className="text-black" type="text" placeholder="bmi" onChange={(e) => setbmi(e.target.value)} />
      <input className="text-black" type="text" placeholder="diabe" onChange={(e) => setdiabefunc(e.target.value)} />
      <input className="text-black" type="text" placeholder="age" onChange={(e) => setage(e.target.value)} />

      <button onClick={() => predict()} className="bg-green-500 rounded-md p-2 m-1">Predict</button>
    </>
  );
}
