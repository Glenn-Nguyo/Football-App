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
        </div>
    )
            }

export default Leagues;