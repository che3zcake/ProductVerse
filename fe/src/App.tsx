import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Home from "./pages/Home.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import AddProduct from "./pages/AddProduct.tsx"; // example path

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/product" element={<AddProduct />}/>
            </Routes>
        </Router>
    );
}

export default App;
