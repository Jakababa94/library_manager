import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="books" element={<BooksPage />} />
                    <Route path="books/:id" element={<BookDetailsPage />} />
                    <Route path="members" element={<div className="p-4">Members Page (Under Construction)</div>} />
                    <Route path="settings" element={<div className="p-4">Settings Page (Under Construction)</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
