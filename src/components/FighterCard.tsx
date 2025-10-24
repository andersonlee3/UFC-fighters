import { useRef, useState } from "react";
import BanList from "./BanList";

interface Props {
  img: string;
  name: string;
  nickname: string;
  division: string;
  wins: string;
  losses: string;
  birthplace: string;
  fightStyle: string;
  age: string;
  height: string;
  weight: string;
  reach: string;
}

export default function FighterCard({
  img,
  name,
  nickname,
  division,
  wins,
  losses,
  birthplace,
  fightStyle,
  age,
  height,
  weight,
  reach,
}: Props) {
  const [banList, setBanList] = useState<string[]>([]);

  const handleClick = (attribute: string) => {
    setBanList([...banList, attribute]);
  };

  return (
    <div className="fighter-grid">
      <div className="fighter-container">
        <img className="fighter-img" src={img} alt="fighter image"></img>
        <button onClick={() => handleClick(name)}>{name}</button>
        <h3>"{nickname}"</h3>
        <button onClick={() => handleClick(division)}>{division}</button>
        <h5>
          Record: {wins} - {losses}
        </h5>
        <button onClick={() => handleClick(birthplace)}>
          Birthplace: {birthplace}
        </button>
        <button onClick={() => handleClick(fightStyle)}>
          Fight Style: {fightStyle}
        </button>
        <div>
          <div>
            <span>Age: {age}</span>
          </div>
          <div>
            <span>Height: {height}</span>
          </div>
          <div>
            <span>Weight: {weight}</span>
          </div>
          <div>
            <span>Reach: {reach}</span>
          </div>
        </div>
      </div>
      <div>
        <BanList banList={banList} setBanList={setBanList}></BanList>
      </div>
    </div>
  );
}
