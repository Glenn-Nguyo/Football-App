import React, {useState, useEffect} from "react";
import axios from "axios";
function Standings(){
        const [selectedLeague, setSelectedLeague] = useState("eng.1");
        const [selectedYear, setSelectedYear] = useState("2021");
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
      
        useEffect(() => {
          setLoading(true);
          setData([]);
          axios
            .get(
              `https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`
            )
            .then((res) => {
              console.log(res.data.data.standings);
              setData(res.data.data.standings);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
        }, [selectedYear, selectedLeague]);
    return(
        <div className="standings"></div>
    )
}

export default Standings;