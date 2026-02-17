# Flappy Kiro

A browser-based Flappy Bird clone featuring Ghosty, a ghost character navigating through walls.

## Game Description

Flappy Kiro is an arcade-style game where you control Ghosty, a ghost that moves persistently to the right. Navigate through a series of walls with randomly positioned gaps. Ghosty automatically descends due to gravity and only ascends when you press the spacebar. Each successful pass through a wall pair awards one point. The game ends when Ghosty collides with a wall or the ground.

## How to Play

1. Open `index.html` in a modern web browser
2. Press **SPACEBAR** or **click** to start the game
3. Press **SPACEBAR** or **click** to make Ghosty jump
4. Navigate through the gaps in the walls
5. Try to get the highest score possible!

## Controls

- **SPACEBAR** or **Mouse Click**: Jump / Start / Restart

## Game Features

- Simple, minimalist graphics
- Smooth 60 FPS gameplay
- Random wall gap generation
- Score tracking
- Sound effects (jump and game over)
- Responsive controls

## Technical Details

- **Platform**: Web browser (HTML5/Canvas)
- **Technology**: Plain JavaScript (no frameworks)
- **Canvas Size**: 400x600 pixels
- **Performance**: 60 FPS target

## Assets

- `assets/ghosty.png` - Ghost character sprite
- `assets/jump.wav` - Jump sound effect
- `assets/game_over.wav` - Game over sound effect

## Browser Compatibility

Works in all modern browsers that support HTML5 Canvas and the Audio API:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Example UI

![Flappy Kiro UI](img/example-ui.png)

## Resources

- `assets/` - Game audio and sprites
- `img/` - Screenshots and images