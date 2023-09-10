import { Routes,Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import MainPage from "./pages/MainPage";
import UnstitchedPage from "./pages/UnstitchedPage";
import UnstitchedProductDetail from "./pages/UnstitchedProductDetail"
import KurtiPage from "./pages/KurtiPage";
import KurtiProductDetail from "./pages/KurtiProductDetail"
import StitchedPage from "./pages/StitchedPage";
import StitchedProductDetail from "./pages/StitchedProductDetail"
import KurtaMen from "./pages/KurtaMen"
import KurtaProductDetail from "./pages/KurtaProductDetail"
import WaistcoatPage from "./pages/WaistcoatPage"
import WaistcoatProductDetail from "./pages/WaistcoatProductDetail"
import KameezPage from "./pages/KameezPage"
import KameezProductDetail from "./pages/KameezProductDetail"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/MainPage" element={<MainPage/>}/>
      <Route path="/UnstitchedPage" element={<UnstitchedPage/>}/>
      <Route path="/UnstitchedPage/:id" element={<UnstitchedProductDetail/>}/>
      <Route path="/KurtiPage" element={<KurtiPage/>}/>
      <Route path="/KurtiPage/:id" element={<KurtiProductDetail/>}/>
      <Route path="/StitchedPage" element={<StitchedPage/>}/>
      <Route path="/StitchedPage/:id" element={<StitchedProductDetail/>}/>
      <Route path="/KurtaMen" element={<KurtaMen/>}/>
      <Route path="/KurtaMen/:id" element={<KurtaProductDetail/>}/>
      <Route path="/WaistcoatPage" element={<WaistcoatPage/>}/>
      <Route path="/WaistcoatPage/:id" element={<WaistcoatProductDetail/>}/>
      <Route path="/KameezPage" element={<KameezPage/>}/>
      <Route path="/KameezPage/:id" element={<KameezProductDetail/>}/>
    </Routes>
  </>
 
  );
}

export default App;
