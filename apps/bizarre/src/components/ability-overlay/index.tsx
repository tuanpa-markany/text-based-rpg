import React from 'react';

interface Ability {
  name: string;
  passive: boolean;
}

interface AbilityOverlayProps {
  selectedClass: string;
  abilityLevels: Record<string, number>;
  onUpgrade: (ability: string) => void;
}

const abilities: Record<string, Ability[]> = {
  general: [
    { name: 'Health', passive: false },
    { name: 'Strength', passive: false },
    { name: 'Pickpocketing', passive: false },
  ],
  warrior: [
    { name: 'Berserker Rage', passive: false },
    { name: 'Taunt', passive: false },
    { name: 'Damage Reduction', passive: true },
  ],
  wizard: [
    { name: 'Illusion', passive: false },
    { name: 'Blink', passive: false },
    { name: 'Presence', passive: true },
  ],
  rogue: [
    { name: 'Evade', passive: false },
    { name: 'Vanish', passive: false },
    { name: 'Backstab', passive: true },
  ],
};

const descriptions: Record<string, string> = {
  Health: 'Extra health points',
  Strength: 'Extra attack',
  Pickpocketing: 'Increases success chance of pickpocket attempt',
  'Berserker Rage': 'Sacrifice HP for attack bonus this turn',
  Taunt: 'Freezes closest player(s) in place',
  'Damage Reduction': 'Passive, +1',
  Illusion: 'If enemy hits wrong target they become vulnerable next turn',
  Blink: 'Skips a room without entering it (teleports)',
  Presence:
    'Can see what’s in the next room and hear players from 1 room farther away',
  Evade: 'Take no damage next turn',
  Vanish: 'Become invisible for 30 seconds',
  Backstab:
    'Guarantees first turn and +50% dmg on first attack if rogue initiates combat while invisible',
};

const AbilityOverlay: React.FC<AbilityOverlayProps> = ({
  selectedClass,
  abilityLevels,
  onUpgrade,
}) => {
  const classAbilities = abilities[selectedClass];

  return (
    <div className="inset-0 bg-white p-6 rounded-md shadow-md overflow-auto">
      <h2 className="text-2xl mb-4">
        {selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1)}{' '}
        Abilities
      </h2>
      <ul className="space-y-2">
        {classAbilities.map((ability, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>
              {ability.name} (Level {abilityLevels[ability.name]}) -{' '}
              {descriptions[ability.name]}
            </span>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded disabled:bg-gray-300"
              onClick={() => onUpgrade(ability.name)}
              disabled={
                ability.passive
                  ? abilityLevels[ability.name] >= 1
                  : abilityLevels[ability.name] >= 3
              }
            >
              Upgrade
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbilityOverlay;
