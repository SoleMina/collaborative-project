import "./App.css";
import Contenedor from "./components/Contenedor";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  let greeting = "";
  const fecha = new Date();
  const currentTime = fecha.getHours();
  const customStyle = {
    color: ""
  };
  if (currentTime < 12) {
    greeting = "Good morning";
    customStyle.color = "blue";
  } else if (currentTime < 18) {
    greeting = "Good afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good evening";
    customStyle.color = "red";
  }

  return (
    <div className="App">
      {/* <h1 className={"text-center" + currentTime < 12 ? "heading" : "heyy"}>{greeting}</h1> */}
      <h1 className="text-center" style={{ color: customStyle.color }}>
        {greeting}
      </h1>
      <Header></Header>
      <Contenedor></Contenedor>
      <Footer></Footer>
    </div>
  );
};

export default App;
