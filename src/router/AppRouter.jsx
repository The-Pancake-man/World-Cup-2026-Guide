import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppLayout from "../components/layout/AppLayout"

import HomePage from "../pages/HomePage"
import HistoryPage from "../pages/HistoryPage"
import RulesPage from "../pages/RulesPage"
import TeamsPage from "../pages/TeamsPage"
import TeamDetailPage from "../pages/TeamDetailPage"
import TeamOverviewPage from "../pages/TeamOverviewPage"
import TeamSquadPage from "../pages/TeamSquadPage"
import TeamHistoryPage from "../pages/TeamHistoryPage"
import SchedulePage from "../pages/SchedulePage"
import MatchDetailPage from "../pages/MatchDetailPage"
import FavoritesPage from "../pages/FavoritesPage"
import SettingsPage from "../pages/SettingsPage"
import NotFoundPage from "../pages/NotFoundPage"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />

          <Route path="history" element={<HistoryPage />} />
          <Route path="rules" element={<RulesPage />} />

          <Route path="teams" element={<TeamsPage />} />

          <Route path="teams/:teamId" element={<TeamDetailPage />}>
            <Route index element={<TeamOverviewPage />} />
            <Route path="squad" element={<TeamSquadPage />} />
            <Route path="history" element={<TeamHistoryPage />} />
          </Route>

          <Route path="schedule" element={<SchedulePage />} />
          <Route path="schedule/:matchId" element={<MatchDetailPage />} />

          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="settings" element={<SettingsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter