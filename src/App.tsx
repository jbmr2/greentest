import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Schedule } from "./components/Schedule";
import { PointsTable } from "./components/PointsTable";
import { Teams } from "./components/Teams";
import { Venues } from "./components/Venues";
import { GreenInitiative } from "./components/GreenInitiative";
import { News } from "./components/News";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Thumbnail } from "./components/Thumbnail";
import { TournamentRules } from "./components/TournamentRules";
import { PlayerStats } from "./components/PlayerStats";
import { TournamentFormat } from "./components/SeriesOverview";
import { TournamentBracket } from "./components/TournamentBracket";
import { Admin } from "./components/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bracket" element={<TournamentBracket />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="points" element={<PointsTable />} />
          <Route path="teams" element={<Teams />} />
          <Route path="venues" element={<Venues />} />
          <Route path="green-initiative" element={<GreenInitiative />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="rules" element={<TournamentRules />} />
          <Route path="stats" element={<PlayerStats />} />
          <Route path="format" element={<TournamentFormat />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/thumbnail" element={<Thumbnail />} />
      </Routes>
    </BrowserRouter>
  );
}
