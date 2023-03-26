import React from 'react'
import "./HomeLeaderBoard.css"
import RankNormal from './RankNormal'
function HomeLeaderBoard() {
  
  return (
    <div className="HomeLeaderBoard-main">
        <div className="HomeLeaderBoard-heading">  
              <h1>LeaderBoard</h1>
        </div>

        <div className="HomeLeaderBoard-rankers">
              <div className="HomeLeaderBoard-rankers-rank2">
                  <img  src="https://cdn-icons-png.flaticon.com/512/5934/5934990.png" alt="dgadf" width={45} />
                  <h2>Rank 2</h2>
              </div>
              <div className="HomeLeaderBoard-rankers-rank1">
                  <img  src="https://cdn-icons-png.flaticon.com/512/5934/5934990.png" alt="dgadf" width={45} />
                  <h2>Rank 1</h2>
              </div>
              <div className="HomeLeaderBoard-rankers-rank2">
                  <img  src="https://cdn-icons-png.flaticon.com/512/5934/5934990.png" alt="dgadf" width={45} />
                  <h2>Rank 3</h2>
              </div>
        </div>

        <div className="HomeLeaderBoard-rankers-normal">
            <RankNormal></RankNormal>
            <RankNormal></RankNormal>
            <RankNormal></RankNormal>
            <RankNormal></RankNormal>
            <RankNormal></RankNormal>
            <RankNormal></RankNormal>
            <RankNormal></RankNormal>


        </div>
    </div>
  )
}

export default HomeLeaderBoard