import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Home</h1>
        <button className="btn btn-primary">Hello daisyUI</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
