import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import NavBar from "./components/NavBar";
import Home from "./mainComponents/Home";
import List from "./mainComponents/List";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <BrowserRouter basename="/shopping-cart-react">
      <ShoppingCartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<List />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
