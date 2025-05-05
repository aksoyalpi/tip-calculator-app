import './App.css'

function App() {

  return (
    <div className='grid bg-grey-200 place-content-center w-full h-dvh gap-10 justify-center content-center'>
      <h1 className='text-center text-grey-500 font-bold text-2xl'>S P L I<br/>T T E R</h1>
      <div className='rounded-t-2xl p-5 h-full grid gap-5 bg-white'>
        <div>
          <h5 className='text-grey-200'>Bill</h5>
          <input className='form-input'/>
        </div>

        <div>
          <h5>Select Tip %</h5>
          <div className='grid grid-cols-2 gap-4'>
            <button className='tip'>5%</button>
            <button className='tip'>10%</button>
            <button className='tip'>15%</button>
            <button className='tip'>25%</button>
            <button className='tip'>50%</button>
            <input placeholder='Custom' className='form-input'/>
          </div>
        </div>

        <div>
          <h5>Number of People</h5>
          <input className='form-input'/>
        </div>

        <div className='grid grid-cols-2 gap-5 bg-green-900 text-white rounded-2xl p-6 justify-around'>
          <div>
            <p>Tip Amount</p>
            <p className='text-grey-200 text-sm'>/ person</p>
          </div>
          <p className='text-end text-green-400 font-bold text-3xl'>$4.27</p>

          <div>
            <p>Total</p>
            <p className='text-grey-200 text-sm'>/ person</p>
          </div>
          <p className='text-end text-green-400 font-bold text-3xl'>$32.79</p>

          <button className='w-full bg-green-400 rounded-lg text-lg font-bold text-green-900 col-span-2 p-3'>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default App

