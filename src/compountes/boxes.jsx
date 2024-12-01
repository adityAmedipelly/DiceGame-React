

const Boxes = ({ seterror, error,valuecount,setvaluecount}) => {
  const boxesArray = [1, 2, 3, 4, 5, 6];


  const selectError = (v) => {
    setvaluecount(v)
    seterror('')

  }
 

  return (
    <div>
      <p className="mt-3 text-red-500 font-semibold text-lg">{error}</p>
    <div className="flex gap-5 mr-12 mt-12">
      {boxesArray.map((v, i) => (
        <div
          key={i}
          onClick={()=>selectError(v)}
          className={`font-bold text-xl w-16 h-16 border-2 border-solid border-black flex items-center justify-center cursor-pointer' ${
            v == valuecount
              ? "bg-blue-500 text-white border-blue-700 cursor-pointer"
              : "bg-white text-black border-gray-500 hover:bg-gray-200 cursor-pointer"
          }`}
        >
          {v}
        </div>
      ))}
    </div>
    <div>
    <p className="mt-5 ml-80 text-xl font-bold "> Select Number</p>
    </div>
    </div>
  );
};

export default Boxes;
