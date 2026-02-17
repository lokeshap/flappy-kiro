# Integration Test Instructions

## Overview
Flappy Kiro is a single-unit application with no external service dependencies. Integration testing focuses on verifying the interaction between game components (rendering, physics, input, audio).

## Integration Test Scenarios

### Scenario 1: Input → Physics Integration
**Description**: Test that user input correctly affects game physics

**Setup**: 
- Open game in browser
- Start game

**Test Steps**:
1. Press spacebar to jump
2. Observe Ghosty's upward movement
3. Release spacebar
4. Observe gravity pulling Ghosty down
5. Press spacebar again mid-fall
6. Verify velocity changes correctly

**Expected Results**:
- Jump input immediately applies upward velocity
- Gravity continuously affects velocity
- Multiple jumps work correctly
- Physics calculations are smooth

**Status**: [ ] Pass [ ] Fail

---

### Scenario 2: Physics → Rendering Integration
**Description**: Test that physics state correctly updates visual rendering

**Setup**:
- Open game in browser
- Start game

**Test Steps**:
1. Observe Ghosty's position updates as it falls
2. Jump and observe position updates during ascent
3. Verify walls scroll smoothly across screen
4. Verify score display updates when passing walls

**Expected Results**:
- Ghosty position on canvas matches physics calculations
- Wall positions update smoothly
- All visual elements render at correct positions
- No visual glitches or stuttering

**Status**: [ ] Pass [ ] Fail

---

### Scenario 3: Collision Detection → Game State Integration
**Description**: Test that collision detection correctly triggers game state changes

**Setup**:
- Open game in browser
- Start game

**Test Steps**:
1. Collide with wall
2. Verify game state changes to GAME_OVER
3. Verify rendering switches to game over screen
4. Restart game
5. Collide with ground
6. Verify same state transition occurs

**Expected Results**:
- Collision detection triggers immediate state change
- Game over screen renders correctly
- All game updates stop (walls stop moving)
- Score is preserved and displayed

**Status**: [ ] Pass [ ] Fail

---

### Scenario 4: Input → Audio Integration
**Description**: Test that user input triggers correct audio playback

**Setup**:
- Open game in browser
- Ensure browser audio is enabled
- Start game

**Test Steps**:
1. Press spacebar to jump
2. Verify jump.wav plays
3. Continue playing until collision
4. Verify game_over.wav plays on collision
5. Test rapid spacebar presses
6. Verify audio doesn't overlap incorrectly

**Expected Results**:
- Jump sound plays on each jump
- Game over sound plays on collision
- Audio timing is correct
- No audio errors or glitches

**Status**: [ ] Pass [ ] Fail

---

### Scenario 5: Game Loop → All Systems Integration
**Description**: Test that game loop correctly coordinates all systems

**Setup**:
- Open game in browser
- Start game

**Test Steps**:
1. Play game for 30 seconds
2. Verify consistent frame rate (smooth animation)
3. Verify physics updates continuously
4. Verify rendering updates continuously
5. Verify input remains responsive
6. Verify collision detection works throughout
7. Verify score updates correctly

**Expected Results**:
- Game runs smoothly at ~60 FPS
- All systems work together without conflicts
- No performance degradation over time
- No memory leaks or slowdowns

**Status**: [ ] Pass [ ] Fail

---

### Scenario 6: State Transitions Integration
**Description**: Test all game state transitions work correctly

**Setup**:
- Open game in browser

**Test Steps**:
1. Verify MENU state displays correctly
2. Press spacebar to transition to PLAYING
3. Verify PLAYING state works correctly
4. Collide to transition to GAME_OVER
5. Verify GAME_OVER state displays correctly
6. Press spacebar to restart (back to PLAYING)
7. Verify game resets properly

**Expected Results**:
- All state transitions are smooth
- Each state renders correctly
- State-specific logic executes properly
- No state conflicts or errors

**Status**: [ ] Pass [ ] Fail

---

### Scenario 7: Asset Loading → Rendering Integration
**Description**: Test that assets load correctly and integrate with rendering

**Setup**:
- Clear browser cache
- Open game in browser

**Test Steps**:
1. Observe initial load
2. Verify ghosty.png loads and displays
3. Verify fallback rectangle doesn't show (if sprite loads)
4. Start game and trigger jump
5. Verify jump.wav loads and plays
6. Trigger game over
7. Verify game_over.wav loads and plays

**Expected Results**:
- All assets load successfully
- Sprite displays correctly (not fallback)
- Audio files play without errors
- No 404 errors in browser console

**Status**: [ ] Pass [ ] Fail

---

## Cross-Browser Integration Testing

### Test in Multiple Browsers
Test all scenarios above in:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)

**Expected Results**: Consistent behavior across all browsers

---

## Performance Integration Testing

### Frame Rate Consistency
**Test Steps**:
1. Open browser developer tools
2. Enable FPS meter (if available)
3. Play game for 2 minutes
4. Monitor frame rate

**Expected Results**: 
- Consistent ~60 FPS
- No significant frame drops
- Smooth animation throughout

**Status**: [ ] Pass [ ] Fail

---

## Integration Test Summary

**Total Scenarios**: 7 core + 1 cross-browser + 1 performance
**Passed**: [ ]
**Failed**: [ ]
**Status**: [ ] All Pass [ ] Some Failures

## Notes
- Integration tests verify that all game components work together correctly
- Focus on component interactions rather than individual component logic
- Test in realistic gameplay scenarios
