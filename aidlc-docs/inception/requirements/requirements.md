# Flappy Kiro - Requirements Document

## Intent Analysis

### User Request
Build a Flappy Bird clone called "Flappy Kiro" - an arcade-style game where the player controls a ghost character named Ghosty navigating through walls with gaps.

### Request Type
New Project (Greenfield)

### Scope Estimate
Single web application - browser-based arcade game

### Complexity Estimate
Simple - straightforward game mechanics with minimal features

---

## Functional Requirements

### FR1: Game Character
- Character name: Ghosty (ghost sprite)
- Moves persistently to the right at constant speed
- Automatically descends due to gravity
- Ascends when player presses spacebar
- Uses provided ghosty.png sprite

### FR2: Obstacles
- Series of vertical walls with gaps
- Gaps are equally sized
- Gap positions at completely random heights
- Walls scroll from right to left
- Player must navigate Ghosty through the gaps

### FR3: Scoring System
- Player earns 1 point for each successful pass through a wall pair
- Display current score during gameplay
- Simple counter (no high score tracking or persistence)

### FR4: Game Over Conditions
- Collision with wall ends the game
- Collision with ground ends the game
- Display "Game Over" message with final score
- Provide restart option

### FR5: Controls
- Spacebar: Make Ghosty ascend/jump
- Single control mechanism (keep it simple)

### FR6: Game Flow
- Start menu with "Start Game" button
- Game begins when player clicks start
- Game loop continues until collision
- Restart returns to start menu or restarts game

### FR7: Audio
- Jump sound effect (jump.wav) when spacebar pressed
- Game over sound effect (game_over.wav) when collision occurs
- Use provided audio files from assets/

---

## Non-Functional Requirements

### NFR1: Platform
- Web browser (HTML5/Canvas)
- Cross-browser compatibility (modern browsers)

### NFR2: Technology Stack
- Plain JavaScript (no frameworks)
- HTML5 Canvas for rendering
- No external game libraries

### NFR3: Visual Design
- Simple/minimalist style
- Solid colors and basic shapes
- Minimal visual effects
- Clean, readable interface

### NFR4: Performance
- Smooth 60 FPS gameplay
- Responsive controls (no input lag)
- Lightweight (fast loading)

### NFR5: Difficulty
- Single difficulty level
- No progressive difficulty
- Consistent game speed throughout

### NFR6: User Experience
- Intuitive controls (single button)
- Clear visual feedback
- Simple, uncluttered interface

---

## Technical Constraints

- No external dependencies or frameworks
- Use existing assets (ghosty.png, jump.wav, game_over.wav)
- Browser-based deployment (no server required)
- Client-side only (no backend)

---

## Out of Scope

- High score persistence
- Leaderboards
- Multiple difficulty modes
- Complex animations or particle effects
- Mobile touch controls
- Multiplayer features
- Progressive difficulty
- Achievement system
- Settings/options menu

---

## Success Criteria

- Player can control Ghosty with spacebar
- Walls generate with random gap positions
- Score increments correctly
- Game ends on collision
- Sound effects play appropriately
- Game can be restarted after game over
- Runs smoothly in web browser
