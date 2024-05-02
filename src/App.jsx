import "./App.css";
import ContactForm from "./compenent/ContactForm/ContactForm";
import Navigation from "./compenent/Navigation/Navigation";
import Contact from "./compenent/contactholder/Contact";


function App() {
  return (
    <div>
    <Navigation />
    <main className="main_container">
      <Contact />
       <ContactForm />
    </main>
  </div>
  );
}

export default App;
