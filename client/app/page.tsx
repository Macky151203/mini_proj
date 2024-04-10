"use client";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Result from "./result";

export default function Home() {
  const [pregnancies, setpregnancies] = useState("6");
  const [glucose, setglucose] = useState("148");
  const [bloodp, setbloodp] = useState("72");
  const [skinthick, setskinthick] = useState("35");
  const [insulin, setinsulin] = useState("94");
  const [bmi, setbmi] = useState("33.6");
  const [diabefunc, setdiabefunc] = useState("0.627");
  const [age, setage] = useState("52");
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const predict = async () => {
    const getdata = async () => {
      const res = await fetch("http://127.0.0.1:5000/api/helo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pregnancies: pregnancies,
          glucose: glucose,
          bloodp: bloodp,
          skinthick: skinthick,
          insulin: insulin,
          bmi: bmi,
          diabefunc: diabefunc,
          age: age,
        }),
      });
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    setisLoading(true);
    await getdata();
    setisLoading(false);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    predict();
    handleOpen();
  }

  return (
    <>
      <div className="text-4xl font-semibold text-center p-2 mb-12 bg-slate-800">
        Diabetes Prediction
      </div>

      <form
        className="flex flex-col gap-y-3 max-w-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-x-5 justify-center items-center">
          <div className="mb-5">
            <label
              htmlFor="preg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pregnancies
            </label>
            <input
              type="text"
              id="preg"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="pregnancies"
              onChange={(e) => setpregnancies(e.target.value)}
              value={pregnancies}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="glu"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Glucose
            </label>
            <input
              type="text"
              id="glu"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Glucose"
              value={glucose}
              onChange={(e) => setglucose(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex gap-x-5 justify-center items-center">
          <div className="mb-5">
            <label
              htmlFor="bp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blood pressure
            </label>
            <input
              type="text"
              id="bp"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Blood pressure"
              value={bloodp}
              onChange={(e) => setbloodp(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="st"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Skin thickness
            </label>
            <input
              type="text"
              id="st"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Skin thickness"
              value={skinthick}
              onChange={(e) => setskinthick(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex gap-x-5 justify-center items-center">
          <div className="mb-5">
            <label
              htmlFor="ins"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Insulin
            </label>
            <input
              type="text"
              id="ins"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Insulin"
              value={insulin}
              onChange={(e) => setinsulin(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="bmi"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              BMI
            </label>
            <input
              type="text"
              id="bmi"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="BMI"
              value={bmi}
              onChange={(e) => setbmi(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex gap-x-5 justify-center items-center">
          <div className="mb-5">
            <label
              htmlFor="df"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Diabetes Function
            </label>
            <input
              type="text"
              id="df"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Diabetes Function"
              value={diabefunc}
              onChange={(e) => setdiabefunc(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enter Details
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-black border border-1 border-white p-4 rounded-2xl">
            <Result isLoading={isLoading} data={data} />
          </div>
        </Modal>
      </form>
    </>
  );
}
