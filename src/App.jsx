import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const generateUniqueKey = () => Math.random().toString(36).substr(2, 9);

  const handleAddFighter = (zombieFighter) => {
    if (zombieFighter.price <= money) {
      // Create a new instance of the fighter with a unique key
      const fighterWithKey = { ...zombieFighter, instanceId: generateUniqueKey() };
      setMoney(money - zombieFighter.price);
      setTeam([...team, fighterWithKey]);
      setTotalStrength(totalStrength + zombieFighter.strength);
      setTotalAgility(totalAgility + zombieFighter.agility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (instanceId) => {
    const fighterToRemove = team.find(fighter => fighter.instanceId === instanceId);
    if (fighterToRemove) {
      const updatedTeam = team.filter(fighter => fighter.instanceId !== instanceId);
      setMoney(money + fighterToRemove.price);
      setTeam(updatedTeam);
      setTotalStrength(totalStrength - fighterToRemove.strength);
      setTotalAgility(totalAgility - fighterToRemove.agility);
    }
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <div>
        <h2>Money: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
      </div>
      <div id='Team'>
        <h2>Team</h2>
        <ul>
          {team.length === 0 ? <div>Pick some team members!</div> : null}
          {team.map((teamMember) => (
            <li key={teamMember.instanceId}>
              <img src={teamMember.img} alt={teamMember.name} />
              <div>{teamMember.name}</div>
              <div>Price: {teamMember.price}</div>
              <div>Strength: {teamMember.strength}</div>
              <div>Agility: {teamMember.agility}</div>
              <button onClick={() => handleRemoveFighter(teamMember.instanceId)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div id='Fighters'>
        <h2>Fighters</h2>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li key={generateUniqueKey()}>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              <div>{zombieFighter.name}</div>
              <div>Price: {zombieFighter.price}</div>
              <div>Strength: {zombieFighter.strength}</div>
              <div>Agility: {zombieFighter.agility}</div>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;


