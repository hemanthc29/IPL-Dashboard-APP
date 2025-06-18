import './index.css'

const LatestMatch = ({latestMatchDetails}) => (
  <div className="latest-match-container">
    <div className="match-details">
      <p className="competing-team">{latestMatchDetails.competing_team}</p>
      <p className="match-date">{latestMatchDetails.date}</p>
      <p className="match-venue">{latestMatchDetails.venue}</p>
      <p className="match-result">{latestMatchDetails.result}</p>
    </div>
    <img
      src={latestMatchDetails.competing_team_logo}
      alt={`latest match ${latestMatchDetails.competing_team}`}
      className="team-logo"
    />
    <div className="innings-details">
      <h1 className="innings-heading">First Innings</h1>
      <p className="innings-team">{latestMatchDetails.first_innings}</p>
      <h1 className="innings-heading">Second Innings</h1>
      <p className="innings-team">{latestMatchDetails.second_innings}</p>
      <h1 className="innings-heading">Man of The Match</h1>
      <p className="innings-team">{latestMatchDetails.man_of_the_match}</p>
      <h1 className="innings-heading">Umpires</h1>
      <p className="innings-team">{latestMatchDetails.umpires}</p>
    </div>
  </div>
)

export default LatestMatch
