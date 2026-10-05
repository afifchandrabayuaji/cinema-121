import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./views/homePage";
import LoginPage from "./views/loginPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={LoginPage} />
          <Route path="/user/add-user" element={RegisterPage} />
          <Route element={<BaseLayout />}>
            <Route path="/movie" index element={<HomePage />} />
            <Route path="/movie" index element={<AddMoviePage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
            <Route path="/movie/:id" element={<DeletePage />} />
            <Route path="/movie/:id" element={<EditPage />} />
            <Route path="/movie/:id" element={<PatchPage />} />
            <Route path="/genre" element={<GenrePage />} />
            <Route path="/genre" element={<AddGenrePage />} />
            <Route path="/genre/:id" element={<EditGenrePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
