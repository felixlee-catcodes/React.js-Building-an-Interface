import { VscCalendar } from "react-icons/vsc";

function App() {
  return (
    <div className='App container mx-auto mt-3 font-thin'>
      <h1 className='text-5xl'>
        <VscCalendar className='inline-block text-yellow-400 align-top' />
        Your Appointments
      </h1>
    </div>
  );
}

export default App;
