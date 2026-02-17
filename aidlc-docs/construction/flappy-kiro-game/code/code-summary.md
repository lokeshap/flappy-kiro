# Flappy Kiro - Code Summary

## Architecture Overview

Flappy Kiro is a single-page web application built with plain JavaScript and HTML5 Canvas. The game follows a simple game loop architecture with state management.

## File Structure

```
/aidlc-workshop/
├── index.html          # Main HTML file with canvas
├── game.js             # Complete game logic
└── assets/
    ├── ghosty.png      # Ghost character sprite
    ├── jump.wav        # Jump sound effect
    └── game_over.wav   # Game over sound effect
```

## Key Components

### 1. Game Configuration (CONFIG)
Centralized configuration object containing all game constants:
- Canvas dimensions (400x600)
- Physics parameters (gravity: 0.5, jumpForce: -9)
- Wall parameters (speed: 2, width: 60, gap: 150, spacing: 250)
- Character size (40x40)
- Ground height (50)

### 2. Game State Management
Three states managed via `GAME_STATE` enum:
- `MENU`: Initial start screen
- `PLAYING`: Active gameplay
- `GAME_OVER`: End screen with score

### 3. Game Objects

**Ghosty (Player Character)**
- Position (x, y)
- Velocity (affected by gravity)
- Dimensions (width, height)
- Sprite rendering with fallback

**Walls (Obstacles)**
- Array of wall objects
- Each wall has: x position, gap Y position, scored flag
- Generated with random gap heights
- Scroll from right to left

### 4. Core Functions

**init()**
- Resets game state
- Initializes Ghosty position
- Clears walls array
- Creates first wall
- Sets state to PLAYING

**update()**
- Applies gravity to Ghosty
- Updates Ghosty position
- Moves walls left
- Manages wall creation/removal
- Checks scoring conditions
- Calls collision detection

**checkCollisions()**
- Ground collision detection
- Ceiling collision detection
- Wall collision detection (top and bottom segments)
- Triggers game over on collision

**jump()**
- Applies upward velocity to Ghosty
- Plays jump sound effect
- Only active during PLAYING state

**createWall()**
- Generates new wall at right edge
- Randomizes gap position within valid range
- Adds to walls array

**endGame()**
- Sets state to GAME_OVER
- Plays game over sound

### 5. Rendering Functions

**render()**
- Main render dispatcher
- Calls appropriate render function based on game state

**renderMenu()**
- Displays game title
- Shows start instructions
- Shows control information

**renderGame()**
- Renders walls (top and bottom segments)
- Renders ground
- Renders Ghosty sprite
- Renders current score

**renderGameOver()**
- Renders game state with overlay
- Displays "Game Over" message
- Shows final score
- Shows restart instructions

### 6. Game Loop

**gameLoop()**
- Runs continuously via requestAnimationFrame
- Calls update() then render()
- Targets 60 FPS

### 7. Input Handling

**Keyboard Input**
- Spacebar: Jump (during play) or Start/Restart (menu/game over)
- Prevents default space behavior (page scroll)

**Mouse Input**
- Canvas click: Jump (during play) or Start/Restart (menu/game over)

## Game Mechanics

### Physics
- Constant gravity applied each frame (0.5)
- Jump applies instant upward velocity (-9)
- Velocity accumulates over time

### Wall Generation
- Walls spawn at right edge when spacing threshold met
- Gap position randomized within safe bounds
- Minimum gap from top: 100px
- Minimum gap from bottom: 100px + ground height
- Gap size: 150px

### Scoring
- Score increments when Ghosty passes wall center
- Scored flag prevents double-counting
- Score displayed in top-left during play

### Collision Detection
- AABB (Axis-Aligned Bounding Box) collision
- Checks Ghosty bounds against:
  - Ground (bottom boundary)
  - Ceiling (top boundary)
  - Wall segments (top and bottom)

## Asset Loading
- Ghosty sprite loaded asynchronously
- Fallback white rectangle if sprite not loaded
- Audio files loaded on demand
- Error handling with catch blocks for audio playback

## Browser Compatibility
- Uses standard HTML5 Canvas API
- Uses requestAnimationFrame for smooth animation
- Audio API with error handling for autoplay restrictions
- No external dependencies
