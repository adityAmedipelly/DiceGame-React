import {Button} from './button'


export const Main = ({toggle}) => {
    return(
        <div className="w-full h-screen flex items-center justify-evenly flex-wrap">
            <div className="w-1/2 h-auto">
                <img src="./images/dices 1.png" alt="dices"/>
            </div>
            <div>
                <div>
                    <h1 className="font-extrabold text-7xl size-auto">DICE GAME</h1>
                </div>
                <div className='ml-72 mt-5 size-auto'>
                    <Button label={ "Play Now "} onClick={toggle}/>
                </div>
            </div>
        </div>
    )

}