"use client";

function Label({ name, res }: { name: string; res: string }) {
  return (
    <p className="flex justify-between py-4">
      {name}{" "}
      <span
        className={`${
          res === "1" ? "bg-red-500" : "bg-green-500"
        } px-3 py-1 rounded-lg bg-opacity-75 hover:bg-opacity-100 cursor-default w-32 text-center`}
      >
        {res === "1" ? "POSITIVE" : "NEGATIVE"}
      </span>
    </p>
  );
}

export default function Result({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data?: any;
}) {
  // console.log(data);
  if (isLoading) return <p className=" text-center">isLoading...</p>;
  const { dt, knn, logistic, rf, svm, nb } = data;
  return (
    <div className="flex flex-col  px-8 py-4 text-xl ">
      <Label name="Decision Tree" res={dt} />
      <Label name="KNN" res={knn} />
      <Label name="Logistic Regression" res={logistic} />
      <Label name="Random Forest" res={rf} />
      <Label name="SVM" res={svm} />
      <Label name="Naive Bayes" res={nb} />
    </div>
  );
}
