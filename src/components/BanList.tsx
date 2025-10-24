interface Props {
  banList: string[];
  setBanList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function BanList({ banList, setBanList }: Props) {
  const handleClick = (attribute: string) => {
    setBanList(banList.filter((item) => item !== attribute));
  };

  return (
    <div>
      <h2>Ban List</h2>
      <h3>
        Clicking on clickable attributes will filter out any fighters with that
        attribute.
      </h3>
      <h3>Clicking on clickable attributes in the ban list will unban them.</h3>
      <ul>
        {banList.map((attribute, index) => (
          <li key={index}>
            <button onClick={() => handleClick(attribute)}>{attribute}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
