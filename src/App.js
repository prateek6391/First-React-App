// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

// let name = "Prateek";
function App() {
  return (
    <>
    
{/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
{/* <Navbar /> */}
<Navbar title="TextUtils"/>
<div className="container my-3">
  {/* <TextForm heading="Enter The text to analyze below"/> */}
  <About/>
</div>
</>
  );
}

export default App;