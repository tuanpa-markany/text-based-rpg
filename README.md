# RPG Upgrade System

Welcome to the RPG Upgrade System! This project provides a simple and interactive UI for upgrading player abilities in a text-based RPG game. The application is built using Next.js and TypeScript, with Tailwind CSS for styling. The goal is to showcase a UI that allows players to level up and upgrade their abilities.

## Features

- Player level progression
- Ability upgrade system with class-specific abilities
- Responsive design for both desktop and mobile
- TypeScript for type safety and better code quality
- Tailwind CSS for styling

## Abilities

The game has the following abilities:

### General Abilities (available to any class)
- **Health:** Extra health points
- **Strength:** Extra attack
- **Pickpocketing:** Increases success chance of pickpocket attempt

### Warrior Abilities
- **Berserker Rage:** Sacrifice HP for attack bonus this turn
- **Taunt:** Freezes closest player(s) in place
- **Damage Reduction:** Passive, +1

### Wizard Abilities
- **Illusion:** If enemy hits the wrong target they become vulnerable next turn
- **Blink:** Skips a room without entering it (teleports)
- **Presence:** Passive, can see what’s in the next room and can hear players from 1 room farther away

### Rogue Abilities
- **Evade:** Take no damage next turn
- **Vanish:** Become invisible for 30 seconds
- **Backstab:** Passive, guarantees having first turn and +50% more damage on the first attack if rogue initiates combat while invisible

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tuanpa21/text-based-rpg
   cd text-based-rpg
    ```
2. Install dependencies:
```bash
pnpm install
#or
npm install
```
3. Run the development server:
```bash
pnpm start
#or
npm start 
```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

