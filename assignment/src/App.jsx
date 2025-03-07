import {MoodInput} from './components/emotion-tracker';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="app bg-green-300 min-h-screen flex flex-col items-center">
      
      <Navbar className="navbar fixed top-0 w-full bg-white shadow-md p-4 text-center" />

     
      <div className="avatar flex flex-col items-center mt-20">
        <div className="w-24 rounded-full ring ring-primary ring-offset-2">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <p className="ayush font-bold uppercase text-red-300 p-2 mt-2 rounded-lg border-doulbe border-4 border-white">  
          Hinata
        </p>
        <p className='email font-bold text-pink-200'>email: abc@gmail.com</p>
      </div>
      <MoodInput/>
    </div>
  );
}

export default App;



