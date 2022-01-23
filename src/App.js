import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { CategoryPage } from "./pages/CategoryPage";
import { GuildPrefixPage } from "./pages/GuildPrefixPage";
import { LoginPage } from "./pages/LoginPage";
import { MenuPage } from "./pages/MenuPage";
import { WelcomeMessagePage } from "./pages/WelcomeMessagePage";
import { GuildContext } from "./utils/contexts/GuildContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";

function App() {
  const [ guildId, setGuildId ] = useState('')
  const [ user, error, loading ] = useFetchUser();
  return (
    <GuildContext.Provider value={{guildId, setGuildId }}>
      { user ? (
        <>
          <Routes>
            <Route path="/dashboard/*" element={<AppBar />} />
          </Routes>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard/servers" element={<MenuPage />} />
            <Route path="/dashboard/categories" element={<CategoryPage />} />
            <Route path="/dashboard/prefix" element={<GuildPrefixPage />} />
            <Route path="/dashboard/message" element={<WelcomeMessagePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </GuildContext.Provider>
  );
}

export default App;
