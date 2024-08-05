"use client";

import { useState } from 'react';
import AbilityOverlay from '../components/ability-overlay';


const initialAbilityLevels = {
  Health: 0, Strength: 0, Pickpocketing: 0,
  'Berserker Rage': 0, Taunt: 0, 'Damage Reduction': 1,
  Illusion: 0, Blink: 0, Presence: 1,
  Evade: 0, Vanish: 0, Backstab: 1,
};
;

export default function Home() {
  const [level, setLevel] = useState(1);
  const [points, setPoints] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);
  const [abilityLevels, setAbilityLevels] = useState(initialAbilityLevels);

  const handleLevelUp = () => {
    setLevel(prevLevel => {
      const newLevel = prevLevel + 1;
      const newPoints = newLevel === 10 ? points + 2 : points + 1;
      setPoints(newPoints);
      return newLevel;
    });
  };

  const handleClassSelect = (className) => {
    setSelectedClass(className);
  };

  const handleCloseOverlay = () => {
    setSelectedClass(null);
  };

  const handleUpgradeAbility = (ability) => {
    if (points > 0 && (!abilityLevels[ability] || abilityLevels[ability] < 3)) {
      setAbilityLevels(prevLevels => ({
        ...prevLevels,
        [ability]: prevLevels[ability] + 1,
      }));
      setPoints(prevPoints => prevPoints - 1);
    }
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl mb-4">RPG Upgrade</h1>
      <p className="text-lg mb-2">Player Level: {level}</p>
      <p className="text-lg mb-4">Points to Spend: {points}</p>
      <div className="space-x-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleLevelUp}>Level Up</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleClassSelect('warrior')}>Warrior</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleClassSelect('wizard')}>Wizard</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleClassSelect('rogue')}>Rogue</button>
      </div>

      {selectedClass && (
        <AbilityOverlay
          selectedClass={selectedClass}
          onClose={handleCloseOverlay}
          abilityLevels={abilityLevels}
          onUpgrade={handleUpgradeAbility}
        />
      )}
    </div>
  );
}
