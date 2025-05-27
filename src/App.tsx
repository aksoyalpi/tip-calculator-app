import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import './App.css'

function App() {
  const [money, setMoney]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip]: [number | undefined, Dispatch<SetStateAction<number | undefined>>] = useState();
  const [customTip, setCustomTip]: [number | undefined, Dispatch<SetStateAction<number | undefined>>] = useState();


  const handleCalculation = async () => {
    if(customTip !== undefined){
      await setTip(customTip);
    }
    setTotal(money * tip!/100);
    setTipAmount(money * tip!/100/people);
  }

  const handleTipClick = (tip: number) => {
    if(tip > 0){
      setTip(tip);
      setCustomTip(undefined);
    }
  }

  const handleCustom = (customTip: number) => {
    if(customTip > 0){
      setTip(undefined);
      setCustomTip(customTip);
    }
  }

  const handleReset = () => {
    setMoney(0);
    setTipAmount(0);
    setTotal(0);
    setPeople(1);
    setCustomTip(undefined);
    setTip(undefined);
  }

  useEffect(() => {
    if((tip || customTip) !== undefined && money !== 0 && people !== 0)
    handleCalculation();
  }, [money, tip, customTip, people])

  return (
    <div className='grid bg-grey-200 place-content-center w-full h-dvh gap-10 justify-center content-center'>
      <h1 className='text-center text-grey-500 font-bold text-2xl'>S P L I<br/>T T E R</h1>
      <div className='rounded-t-2xl p-5 h-full grid gap-5 bg-white'>
        <div>
          <h5 className='text-grey-200'>Bill</h5>
          <div className='input-container'>
            <i className="fa fa-dollar icon"></i>
            <input className='form-input' value={money.toString()} type='number' 
            onChange={(e) => {
              console.log(Number(e.target.value));
              setMoney(Number(e.target.value));
            }}/>
          </div>
        </div>

        <div>
          <h5>Select Tip %</h5>
          <div className='grid grid-cols-2 gap-4'>
            <button className={'tip ' + (tip === 5 ? "bg-green-400 text-black" : "")} id='5' 
            onClick={() => handleTipClick(5)}>5%</button>
            <button className={'tip ' + (tip === 10 ? "bg-green-400 text-black" : "")} id='10' 
            onClick={() => handleTipClick(10)}>10%</button>
            <button className={'tip ' + (tip === 15 ? "bg-green-400 text-black" : "")} id='15' 
            onClick={() => handleTipClick(15)}>15%</button>
            <button className={'tip ' + (tip === 25 ? "bg-green-400 text-black" : "")} id='25' 
            onClick={() => handleTipClick(25)}>25%</button>
            <button className={'tip ' + (tip === 50 ? "bg-green-400 text-black" : "")} id='50' 
            onClick={() => handleTipClick(50)}>50%</button>
            <input placeholder='Custom' className='form-input' value={customTip === undefined ? "":customTip.toString()} onChange={(e) => handleCustom(Number(e.target.value))} type='number'/>
          </div>
        </div>

        <div>
          <h5>Number of People</h5>
          <div className='input-container'>
            <i className="fa fa-user icon"></i>
            <input className='form-input' value={people} type='number' onChange={(e) => setPeople(Number(e.target.value))}/>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 bg-green-900 text-white rounded-2xl p-6 justify-around'>
          <div>
            <p>Tip Amount</p>
            <p className='text-grey-200 text-sm'>/ person</p>
          </div>
          <p className='text-end text-green-400 font-bold text-3xl'>${tipAmount}</p>

          <div>
            <p>Total</p>
            <p className='text-grey-200 text-sm'>/ person</p>
          </div>
          <p className='text-end text-green-400 font-bold text-3xl'>${total}</p>

          <button className='w-full bg-green-400 hover:bg-green-200 rounded-lg text-lg font-bold text-green-900 col-span-2 p-3' 
                  onClick={handleReset}
          >RESET</button>
        </div>
      </div>
    </div>
  )
}

export default App

