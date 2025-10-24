import { useRef, useState } from "react";
import "./App.css";
import FighterCard from "./components/FighterCard";
import BanList from "./components/BanList";

function App() {
  const fighterDict = useRef<any>(null);
  const fighterNames = useRef<string[]>([]);
  const [fighter, setFighter] = useState<string>("");

  const processName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleFirstClick = async () => {
    const url = "https://api.octagon-api.com/fighters";

    try {
      const response = await fetch(url);
      const result = await response.json();
      fighterDict.current = result;
      console.log(fighterDict.current);
      fighterNames.current = Object.keys(result);
      console.log(fighterNames.current);
      const numFighters = fighterNames.current?.length;
      const randomIndex = Math.floor(Math.random() * numFighters);
      setFighter(fighterNames.current[randomIndex]);
    } catch (error) {
      console.log(`API Request error: ${error}`);
    }
  };

  const handleSubsClicks = () => {
    const numFighters = fighterNames.current?.length;
    const randomIndex = Math.floor(Math.random() * numFighters);
    setFighter(fighterNames.current[randomIndex]);
  };

  return (
    <>
      <h1>Active UFC Fighters</h1>
      {fighter ? (
        <div>
          <div>
            <FighterCard
              img={fighterDict.current[fighter]["imgUrl"]}
              name={processName(fighter)}
              nickname={fighterDict.current[fighter]["nickname"]}
              division={fighterDict.current[fighter]["category"]}
              wins={fighterDict.current[fighter]["wins"]}
              losses={fighterDict.current[fighter]["losses"]}
              birthplace={fighterDict.current[fighter]["placeOfBirth"]}
              fightStyle={fighterDict.current[fighter]["fightingStyle"]}
              age={fighterDict.current[fighter]["age"]}
              height={fighterDict.current[fighter]["height"]}
              weight={fighterDict.current[fighter]["weight"]}
              reach={fighterDict.current[fighter]["reach"]}
            ></FighterCard>
          </div>
          <div>
            <button onClick={handleSubsClicks}>Discover Fighter</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Click button to discover new fighters!</p>
          <button onClick={handleFirstClick}>Discover Fighter</button>
        </div>
      )}
    </>
  );
}

export default App;
