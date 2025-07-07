## ZBLS Trainer
A web application for learning and practising Rubik's Cube ZBLS algorithms.

**Link:** https://morganyeh06.github.io/zbls-trainer/

### Built With
- JavaScript
- HTML/CSS

## What is ZBLS?
**Zborowski-Bruchem Last Slot (ZBLS)** is the penultimate step in the [ZB Method](https://www.speedsolving.com/wiki/index.php/ZB_method) used to solve a 3x3 Rubik's Cube. It involves solving the last F2L pair while simultaneously orienting all last layer edges, allowing solvers to execute a ZBLL algorithm during last layer. ZBLS can be applied to all four F2L slots, but is most commonly used when solving a pair in the front right (FR) or front left (FL). There are 302 cases in total, with multiple edge orientation combinations existing for each possible F2L case.

The cases and algorithms provided in the ZBLS trainer are specifically used to solve cases in FR, but users can mirror or use a different algorithm for FL cases.

**Source:** [Speedsolving Wiki](https://www.speedsolving.com/wiki/index.php/ZB_method)

## Usage
### Selecting Cases
1. Click the F2L cases to view all the ZBLS algs for that case
2. Select the cases you would like to train
   - check the checkbox on left to select all ZBLS algs for the corresponding F2L case
   - select/deselect every case using the _Select All_ and _Deselect All_ buttons respectively

### Using Presets
1. Select the desired cases to create a preset with
2. Name the preset and click _Save_
3. Find the preset in the dropdown menu
4. Click _Apply_ or _Delete_ respectively to apply/remove the preset

### Training Algorithms
1. Click _Start_ to practise the selected cases in a random order, or click _Recap_ to review each case once
2. Follow the scramble on the top of the page to set up a ZBLS case
3. Use the spacebar to start/stop the timer or tap the screen if on mobile
4. In Recap mode, press _Again_ or backspace to practice the previous case again
