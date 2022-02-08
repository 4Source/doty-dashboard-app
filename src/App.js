import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { Spinner } from "./components/Spinner";
import { CategoryPage } from "./pages/CategoryPage";
import { GuildPrefixPage } from "./pages/GuildPrefixPage";
import { LoginPage } from "./pages/LoginPage";
import { ServersPage } from "./pages/ServersPage";
import { WelcomeMessagePage } from "./pages/WelcomeMessagePage";
import { GuildContext } from "./utils/contexts/GuildContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";

function App() {
  const [ guild, setGuild ] = useState();
  const updateGuild = (guild) => setGuild(guild);
  const [ user, error, loading ] = useFetchUser();

  if(loading) return <Spinner />;

  return (
    <GuildContext.Provider value={{ guild, updateGuild }}>
      { user && !error ? (
        <>
          <Routes>
            <Route path="/dashboard/*" element={<AppBar />} />
          </Routes>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/servers" element={<ServersPage />} />
            <Route path="/dashboard/categories" element={<CategoryPage />} />
            <Route path="/dashboard/prefix" element={<GuildPrefixPage />} />
            <Route path="/dashboard/message" element={<WelcomeMessagePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      )}
    </GuildContext.Provider>
  );
}

export default App;
