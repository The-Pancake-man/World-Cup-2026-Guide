import { createContext, useCallback, useContext, useEffect, useState } from "react"

const FavoritesContext = createContext(null)

function getInitialValue(key) {
  try {
    const savedValue = localStorage.getItem(key)
    return savedValue ? JSON.parse(savedValue) : []
  } catch (error) {
    console.error("Failed to read localStorage:", error)
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteTeamIds, setFavoriteTeamIds] = useState(() =>
    getInitialValue("favoriteTeamIds")
  )

  const [favoriteMatchIds, setFavoriteMatchIds] = useState(() =>
    getInitialValue("favoriteMatchIds")
  )

  useEffect(() => {
    localStorage.setItem("favoriteTeamIds", JSON.stringify(favoriteTeamIds))
  }, [favoriteTeamIds])

  useEffect(() => {
    localStorage.setItem("favoriteMatchIds", JSON.stringify(favoriteMatchIds))
  }, [favoriteMatchIds])

  const toggleFavoriteTeam = useCallback((teamId) => {
    setFavoriteTeamIds((currentIds) => {
      if (currentIds.includes(teamId)) {
        return currentIds.filter((id) => id !== teamId)
      }

      return [...currentIds, teamId]
    })
  }, [])

  const toggleFavoriteMatch = useCallback((matchId) => {
    setFavoriteMatchIds((currentIds) => {
      if (currentIds.includes(matchId)) {
        return currentIds.filter((id) => id !== matchId)
      }

      return [...currentIds, matchId]
    })
  }, [])

  const isFavoriteTeam = useCallback(
    (teamId) => favoriteTeamIds.includes(teamId),
    [favoriteTeamIds]
  )

  const isFavoriteMatch = useCallback(
    (matchId) => favoriteMatchIds.includes(matchId),
    [favoriteMatchIds]
  )

  const value = {
    favoriteTeamIds,
    favoriteMatchIds,
    toggleFavoriteTeam,
    toggleFavoriteMatch,
    isFavoriteTeam,
    isFavoriteMatch,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider")
  }

  return context
}