import Topbar from "./components/layout/Topbar";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Topbar />
      <main className="flex flex-col gap-16 px-4 md:px-32 py-12 pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
