import { Footer } from "./components/Footer/Footer";
import Pathway from "./components/Pathway/Pathway";


function App() {
  return (
    <div className="container">
   
    {/* //all links are passed through the routes page inside the Pathway function which is then passed to here */}
    <Pathway />
    <Footer />
    </div>
  )
};

export default App;

