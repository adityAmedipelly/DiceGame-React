import React from "react";
import Boxes from "./boxes";
import Rollcompount from "./Rollcompount";
import { useState } from "react";
import { Button } from "./button";
import ShowRules from "./ShowRules";


const PlayGame = () => {
  const [score,setscore] = useState(0)
  const [valuecount, setvaluecount] = useState();
  const [count,setcound] = useState(1)
  const [error,seterror] = useState()
  const [rules,setrules] = useState(false)

  const Roll = (min,max) =>{
    return Math.floor(Math.random() * (max-min)+ min);
    
}

const RollDice = () =>{
    if(!valuecount){
      seterror("You have not selected any number")
      return 
    }
   
    const number = Roll(1,7)

    setcound ((prev)=> number)

    if(valuecount === number){
      setscore((prev)=> prev + number)
    } else {
      setscore((prev)=>prev - 1)
    }
    setvaluecount(undefined)
    
}
 const resetStart = () =>{
  setscore(0)
 }

 const gameRules = () => {

 setrules((prev)=>!prev)
   
 }


  return (
    <main>
      <div className="flex justify-between">
        <div className="ml-40 mt-7">
          <h1 className="text-8xl ml-4">{score}</h1>
          <p1 className="text-xl mt-2 ">Total Score</p1>
        </div>
        <Boxes valuecount={valuecount} setvaluecount={setvaluecount}  error={error} seterror={seterror}/>
      </div>
      <Rollcompount count={count} RollDice={RollDice}/>
      <div className="flex items-center justify-center mt-5 ">
         <Button  label={"Reset now"} onClick={resetStart} />
      </div>
      <div className="flex items-center justify-center mt-5 ">
         <Button label={" Rules"} onClick={gameRules} />
      </div>
      <div className="flex items-center justify-center mt-5 ">
      {rules && <ShowRules/>}
      </div>
    </main>
  );
};

export default PlayGame;
