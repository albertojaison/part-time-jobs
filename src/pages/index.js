import { Inter } from "next/font/google";
import Login from "../components/Login";
import MainPage from "../components/MainPage";
import { useAuth } from "../context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainPage />
    </main>
  );
}