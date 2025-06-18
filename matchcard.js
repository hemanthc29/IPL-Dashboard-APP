import './index.css'

const MatchCard = ({matchDetails}) => {
  const {competing_team, competing_team_logo, match_status, result} =
    matchDetails

  const getStatusClassName = status =>
    status === 'Won' ? 'won-text' : 'lost-text'

  return (
    <li className="match-card">
      <img
        src={competing_team_logo}
        alt={`competing team ${competing_team}`}
        className="team-logo"
      />
      <p className="competing-team">{competing_team}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${getStatusClassName(match_status)}`}>
        {match_status}
      </p>
    </li>
  )
}

export default MatchCard
