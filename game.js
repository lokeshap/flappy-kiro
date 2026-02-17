// Game Configuration
const CONFIG = {
    canvas: { width: 400, height: 600 },
    gravity: 0.5,
    jumpForce: -9,
    wallSpeed: 2,
    wallWidth: 60,
    gapSize: 150,
    wallSpacing: 250,
    ghostySize: 40,
    groundHeight: 50
};

// Game State
const GAME_STATE = { MENU: 'menu', PLAYING: 'playing', GAME_OVER: 'gameover' };
let gameState = GAME_STATE.MENU;

// Canvas Setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game Objects
let ghosty = {
    x: 100,
    y: 300,
    velocity: 0,
    width: CONFIG.ghostySize,
    height: CONFIG.ghostySize
};

let walls = [];
let score = 0;
let ghostyImage = new Image();
ghostyImage.src = 'assets/ghosty.png';

// Audio
let jumpSound = new Audio('assets/jump.wav');
let gameOverSound = new Audio('assets/game_over.wav');

// Initialize Game
function init() {
    ghosty.y = 300;
    ghosty.velocity = 0;
    walls = [];
    score = 0;
    gameState = GAME_STATE.PLAYING;
    createWall();
}

// Create Wall
function createWall() {
    const minGapY = 100;
    const maxGapY = CONFIG.canvas.height - CONFIG.gapSize - CONFIG.groundHeight - 100;
    const gapY = Math.random() * (maxGapY - minGapY) + minGapY;
    
    walls.push({
        x: CONFIG.canvas.width,
        gapY: gapY,
        scored: false
    });
}

// Update Game
function update() {
    if (gameState !== GAME_STATE.PLAYING) return;

    // Update Ghosty
    ghosty.velocity += CONFIG.gravity;
    ghosty.y += ghosty.velocity;

    // Update Walls
    walls.forEach(wall => {
        wall.x -= CONFIG.wallSpeed;
        
        // Score when passing wall
        if (!wall.scored && wall.x + CONFIG.wallWidth < ghosty.x) {
            score++;
            wall.scored = true;
        }
    });

    // Remove off-screen walls and create new ones
    if (walls.length > 0 && walls[0].x < -CONFIG.wallWidth) {
        walls.shift();
    }
    if (walls.length === 0 || walls[walls.length - 1].x < CONFIG.canvas.width - CONFIG.wallSpacing) {
        createWall();
    }

    // Collision Detection
    checkCollisions();
}

// Check Collisions
function checkCollisions() {
    // Ground collision
    if (ghosty.y + ghosty.height > CONFIG.canvas.height - CONFIG.groundHeight) {
        endGame();
        return;
    }

    // Ceiling collision
    if (ghosty.y < 0) {
        endGame();
        return;
    }

    // Wall collision
    walls.forEach(wall => {
        if (ghosty.x + ghosty.width > wall.x && ghosty.x < wall.x + CONFIG.wallWidth) {
            // Check if hitting top or bottom wall
            if (ghosty.y < wall.gapY || ghosty.y + ghosty.height > wall.gapY + CONFIG.gapSize) {
                endGame();
            }
        }
    });
}

// End Game
function endGame() {
    gameState = GAME_STATE.GAME_OVER;
    gameOverSound.play().catch(() => {});
}

// Jump
function jump() {
    if (gameState === GAME_STATE.PLAYING) {
        ghosty.velocity = CONFIG.jumpForce;
        jumpSound.play().catch(() => {});
    }
}

// Render
function render() {
    // Clear canvas
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);

    if (gameState === GAME_STATE.MENU) {
        renderMenu();
    } else if (gameState === GAME_STATE.PLAYING) {
        renderGame();
    } else if (gameState === GAME_STATE.GAME_OVER) {
        renderGameOver();
    }
}

// Render Menu
function renderMenu() {
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Flappy Kiro', CONFIG.canvas.width / 2, 200);
    
    ctx.font = '24px Arial';
    ctx.fillText('Press SPACE or Click to Start', CONFIG.canvas.width / 2, 300);
    
    ctx.font = '18px Arial';
    ctx.fillText('Controls: SPACEBAR to jump', CONFIG.canvas.width / 2, 400);
}

// Render Game
function renderGame() {
    // Render walls
    ctx.fillStyle = '#2d5016';
    walls.forEach(wall => {
        // Top wall
        ctx.fillRect(wall.x, 0, CONFIG.wallWidth, wall.gapY);
        // Bottom wall
        ctx.fillRect(wall.x, wall.gapY + CONFIG.gapSize, CONFIG.wallWidth, 
                     CONFIG.canvas.height - wall.gapY - CONFIG.gapSize - CONFIG.groundHeight);
    });

    // Render ground
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, CONFIG.canvas.height - CONFIG.groundHeight, CONFIG.canvas.width, CONFIG.groundHeight);

    // Render Ghosty
    if (ghostyImage.complete) {
        ctx.drawImage(ghostyImage, ghosty.x, ghosty.y, ghosty.width, ghosty.height);
    } else {
        ctx.fillStyle = '#fff';
        ctx.fillRect(ghosty.x, ghosty.y, ghosty.width, ghosty.height);
    }

    // Render score
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(score, 20, 50);
}

// Render Game Over
function renderGameOver() {
    renderGame();
    
    // Semi-transparent overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, CONFIG.canvas.width, CONFIG.canvas.height);
    
    // Game Over text
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', CONFIG.canvas.width / 2, 250);
    
    ctx.font = '32px Arial';
    ctx.fillText('Score: ' + score, CONFIG.canvas.width / 2, 320);
    
    ctx.font = '24px Arial';
    ctx.fillText('Press SPACE or Click to Restart', CONFIG.canvas.width / 2, 400);
}

// Game Loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Input Handlers
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (gameState === GAME_STATE.MENU || gameState === GAME_STATE.GAME_OVER) {
            init();
        } else if (gameState === GAME_STATE.PLAYING) {
            jump();
        }
    }
});

canvas.addEventListener('click', () => {
    if (gameState === GAME_STATE.MENU || gameState === GAME_STATE.GAME_OVER) {
        init();
    } else if (gameState === GAME_STATE.PLAYING) {
        jump();
    }
});

// Start Game Loop
gameLoop();
