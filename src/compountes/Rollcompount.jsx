


const Rollcompount = ({count,RollDice}) => {
 

    


  return (
    <div>
      <div className=" flex items-center justify-center mt-16">
        <img src={`./images/dice_${count}.png`} alt="dice_1 "  className="w-48 cursor-pointer "  onClick={RollDice} />
      </div>
        <p className=" flex items-center justify-center mt-5 font-bold text-lg cursor-default">
        Click on Dice to roll
        </p>
    </div>
  )
}

export default Rollcompount
