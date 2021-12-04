import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [checks, setChecks] = useState([])
  const [lastClick, setLastClick] = useState([])
  useEffect(() => {
    let tempChecks = []
    for (let i = 0; i < 16; i++) {
      tempChecks.push(false)
    }
    lastClick.map(item => {
      return (
        tempChecks[item] = true
      )
    })
    setChecks([...tempChecks])
  }, [lastClick])
  function toggleCheck(e) {
    if (lastClick.length > 1) {
      let tempClicks = [...lastClick]
      tempClicks.shift()
      tempClicks.push(e.target.value)
      setLastClick([...tempClicks])
    }
    else {
      let tempClicks = [...lastClick];
      tempClicks.push(e.target.value)
      setLastClick([...tempClicks])
    }
  }
  return (
    <div>
      <h2>Matrix Game:</h2>
      <div className="boxes">
        {checks.map((item, index) => {
          return (
            <div className="box-container" key={index}>
              <input className="checkbox" id={index} value={index} type="checkbox" onChange={(e) => toggleCheck(e)} checked={item}></input>
              <label className={`box`} htmlFor={index}>{`button #${index + 1}`}</label>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
