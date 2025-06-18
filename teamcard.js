import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = ({teamData}) => {
  const {id, name, teamImageUrl} = teamData

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="team-link">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
