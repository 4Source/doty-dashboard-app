import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { CategoryPage } from "./pages/CategoryPage";
import { GuildPrefixPage } from "./pages/GuildPrefixPage";
import { LoginPage } from "./pages/LoginPage";
import { MenuPage } from "./pages/MenuPage";
import { WelcomeMessagePage } from "./pages/WelcomeMessagePage";
import { GuildContext } from "./utils/contexts/GuildContext";

function App() {
  const [ guildId, setGuildId ] = useState('')
  return (
    <GuildContext.Provider value={{guildId, setGuildId }}>
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
    </GuildContext.Provider>
  );
}

export default App;
