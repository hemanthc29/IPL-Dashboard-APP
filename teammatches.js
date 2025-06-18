import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const TeamMatches = () => {
  const {id} = useParams()
  const [teamMatchesData, setTeamMatchesData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [teamClassName, setTeamClassName] = useState('')

  useEffect(() => {
    const fetchTeamMatches = async () => {
      try {
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()
        const formattedData = {
          teamBannerUrl: data.team_banner_url,
          latestMatchDetails: data.latest_match_details,
          recentMatches: data.recent_matches,
        }
        setTeamMatchesData(formattedData)
        setIsLoading(false)
        setTeamClassName(id.toLowerCase())
      } catch (error) {
        console.error('Error fetching team matches:', error)
        setIsLoading(false)
      }
    }

    fetchTeamMatches()
  }, [id])

  return (
    <div className={`team-matches-container ${teamClassName}`}>
      {isLoading ? (
        <div testid="loader" className="loader-container">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      ) : (
        <>
          <img
            src={teamMatchesData.teamBannerUrl}
            alt="team banner"
            className="team-banner"
          />
          <LatestMatch
            latestMatchDetails={teamMatchesData.latestMatchDetails}
          />
          <ul className="recent-matches-list">
            {teamMatchesData.recentMatches.map(match => (
              <MatchCard key={match.id} matchDetails={match} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default TeamMatches
