'use client';

import { useState } from 'react';
import AbilityOverlay from '../components/ability-overlay';

const initialAbilityLevels: Record<string, number> = {
  Health: 0,
  Strength: 0,
  Pickpocketing: 0,
  'Berserker Rage': 0,
  Taunt: 0,
  'Damage Reduction': 1,
  Illusion: 0,
  Blink: 0,
  Presence: 1,
  Evade: 0,
  Vanish: 0,
  Backstab: 1,
};

export default function Home() {
  const [level, setLevel] = useState<number>(1);
  const [points, setPoints] = useState<number>(0);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [abilityLevels, setAbilityLevels] =
    useState<Record<string, number>>(initialAbilityLevels);

  const handleLevelUp = () => {
    setLevel((prevLevel) => {
      const newLevel = prevLevel + 1;
      const newPoints = newLevel === 10 ? points + 2 : points + 1;
      setPoints(newPoints);
      return newLevel;
    });
  };

  const handleClassSelect = (className: string) => {
    setSelectedClass(className);
  };

  const handleUpgradeAbility = (ability: string) => {
    if (points > 0 && (!abilityLevels[ability] || abilityLevels[ability] < 3)) {
      setAbilityLevels((prevLevels) => ({
        ...prevLevels,
        [ability]: prevLevels[ability] + 1,
      }));
      setPoints((prevPoints) => prevPoints - 1);
    }
  };

  return (
    <div className="container mx-auto p-6 text-center relative">
      <h1 className="text-4xl mb-4">RPG Upgrade</h1>
      <p className="text-lg mb-2">Player Level: {level}</p>
      <p className="text-lg mb-4">Points to Spend: {points}</p>
      <div className="space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleLevelUp}
        >
          Level Up
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleClassSelect('warrior')}
        >
          Warrior
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleClassSelect('wizard')}
        >
          Wizard
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleClassSelect('rogue')}
        >
          Rogue
        </button>
      </div>

      {selectedClass && (
        <div className="mt-6">
          <AbilityOverlay
            selectedClass={selectedClass}
            abilityLevels={abilityLevels}
            onUpgrade={handleUpgradeAbility}
          />
        </div>
      )}
    </div>
  );
}
