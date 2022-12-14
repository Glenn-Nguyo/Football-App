import React, { useState, useEffect } from "react";
import axios from 'axios'
function Leagues(){
        const [data, setData] = useState([]);
      
        useEffect(() => {
          axios
            .get("https://api-football-standings.azharimm.site/leagues")
            .then((response) => {
              console.log(response.data.data);
              setData(response.data.data);
            })
            .catch((err) => console.log(err));
        }, [])
    return(
        <div className="leagues">
             {data?.map((league) => (
        <div key={league.id} className="league-div">
          <img src={league.logos.light} alt="#" />
          <h4>{league.name}</h4>
        </div>
      ))}
        </div>
    )
            }

export default Leagues;