/* 
 * Morgan Yeh
 * 2025/01/02
 * Array of all ZBLS algorithms (unformatted)
 */

const algArray = [1,
    "U R U' R'",
    1,
    "R' F R F'",
    3,
    "U2' R' F R F' R U2 R'",
    "U R B U' B' R'",
    "U R' F R F2 U F",
    3,
    "R' U' F U R U' F'",
    "U F' L' U' L F",
    "U2 R U2 B U B' U' R'",
    3,
    "R' U' F U R2 U' R' F'",
    "U R U R' U2' R' F R F'",
    "U R U R' U2 M' U R U' r'",
    3,
    "r' R U R U' R' U' M'",
    "U S' R U' R' S",
    "U2 R U' B U' B' R'",
    2,
    "R' F R2 U R' U' F'",
    "U2 R U' R' U' R' F R F'",
    2,
    "M' U R U' r2 U2' R U R' U r",
    "U2 R' F R F' U2 R' F R F'",
    1,
    "y U' L' U L",
    1,
    "F R' F' R",
    1,
    "U' r U' r' U r U r'",
    3,
    "U' R B U B' R'",
    "y U' F R U R' F'",
    "U2' R U R' U' R' F R F' R U' R'",
    2,
    "U R' D' r U' r' D R",
    "U' R2 D r' U r D' R2",
    2,
    "U' R' D' r U r' D R",
    "U' F2 r U r' U F",
    1,
    "R U2 R D r' U' r D' R2",
    2,
    "U' R U' R2' D' r U r' D R",
    "r U r' U2 M' U R r'",
    1,
    "y L' U' L",
    2,
    "S U R U' R' S'",
    "R U' R' F' r U' r' F2",
    1,
    "F' r U' r' F2 R U' R'",
    1,
    "U' R' F R U R U' R2 F' R",
    1,
    "y' S' R' U' R S",
    1,
    "U R2 D r' U' r D' R2",
    1,
    "U2 R' D' r U' r' D R2 U' R'",
    1,
    "R' F R2 U' M' U2 r' U' F'",
    1,
    "R U R'",
    3,
    "U M U' R U R' M'",
    "R U2 R' U' R' F R F'",
    "R U R' F R U R' U' F'",
    2,
    "U' F' U2 F U R U' R'",
    "R U R' F U R U' R' F'",
    2,
    "U2 r U' r' U' r U r'",
    "R U' R' U2 R' F R F'",
    3,
    "R U R' U' F R U R' U' F'",
    "R U y R U R' U' F'",
    "S' R U R' S",
    3,
    "R U2 B U' B' R'",
    "U F U R U' R2' F' R",
    "R U R' U' r' U2 R U R' U r",
    2,
    "R U' R2' F R F' R U2' R'",
    "R U' R' F2 r U r' F",
    2,
    "R' D' r U r' D R2 U R'",
    "R' D' r U' r' D R2 U R'",
    1,
    "U' R U R' U2 R U' R'",
    2,
    "U2 R U' R' U2 R U' R' U R' F R F'",
    "R U' R B2 r' U' r B' R2",
    2,
    "y' U r' U R U' R' U' r",
    "r U' r' U' r U r' F' r U' r' F2",
    1,
    "R' D' R U R' D F R F'",
    1,
    "U' R U R' U R' F R F'",
    1,
    "U' r U R' U' R2 r' U2 R'",
    2,
    "U' F R U R' U' F' R U2 R'",
    "U R U' R' U' R' F R F' R U R'",
    2,
    "U2 R2 D r' U' r D' R' U' R'",
    "U' r U' r' U2 r U r' U' R U' R'",
    1,
    "y' U R' U' R U R' U2' R",
    3,
    "U R U' R' d' L' U L U' L' U L",
    "U' R' F R2 U R' U' F' R U R'",
    "R U R' U' R U R' U' F' U' F",
    1,
    "U' r U' R' U R U r'",
    1,
    "R' D' F r U2 r' F D R",
    3,
    "y U L' U' L U' L F' L' F",
    "U F' U' L' U L U' F",
    "F R U' R' U' R U R' F2 U F",
    2,
    "U' R' F R F' R U2' R2' F R F'",
    "R2 D r' U' r D' R' U R'",
    3,
    "U2 y' R' F' U' F U2' R",
    "U2 F' L' U' L U2' F",
    "U R U R2' F R F' r U' r' U' r U r'",
    3,
    "U R U R D r' U' r D' R2' U' R U R'",
    "U R U' R' d' L' U L2 F' L' F",
    "U R U' R' F' L' U2 L U' F",
    1,
    "U' R U2 R' U2 R U' R'",
    3,
    "R U R' U R U' R2 F R F'",
    "U R' F R F' R U' R' U R U R'",
    "U R F U R U' R' F' R'",
    1,
    "R' D' R U2 R' D F R F'",
    3,
    "R' D' r U2 r' D F R F'",
    "r R' U' R U2 R' U' R U2 r'",
    "y' R2' F R F' U R U2' R' U R",
    1,
    "U' R U2 R' U R' F R F'",
    2,
    "F R' F' R U2 R U' R' U R U' R'",
    "r' F' R2 U R' U2 R U' R2 F r",
    2,
    "U R U' R' U R' F R F' R U R'",
    "U F U R U' R' F' U R U' R'",
    1,
    "r R' U' R r' U2 r U' r'",
    1,
    "y' U R' U2 R U2 R' U R",
    2,
    "U2 R U' R' F' U' F U' R U R'",
    "F' U' L' U2 L U' F",
    2,
    "r' U2 R2 U R2' U r",
    "U2 r' D' r U r' D r2 U' R' U R U r'",
    3,
    "U R U' R' d R' U R U' R' U R",
    "r' U2 R2 U R' U' R' U2 r",
    "R l U' R' U F' l' U2 R U' R'",
    2,
    "U y L' U2 L U' L F' L' F",
    "U F' U2 L' U L U' F",
    3,
    "U F R' F' R2 U2 R' U R' F R F'",
    "F R' F' R U' R U R' U' F' U' F",
    "R2 D R' U' R r' U' r D' R' U R'",
    3,
    "U2 r' U r2 U' r2' U' r U2' r U r'",
    "U' r' F' r U r U' r2' F2 r F",
    "r' U2 R U R' U r2 U' R' U' R U r'",
    1,
    "r U r' U' R U' M' U r'",
    2,
    "y' U2' R' U R U R' U' R",
    "d R' U' R U' R' U' R",
    1,
    "F R U R' U' F' R U' R'",
    2,
    "U' R U' R' d R' U' R",
    "U' R U' R' U F' U' F",
    2,
    "U r U R' U' M R U' R'",
    "R' F R U2 r U2 r' U2 F'",
    2,
    "F R U R' U' F' U' R' F R F'",
    "F' U L' U' L U2 F",
    2,
    "U' r U2 r' U' r U' r' U r U2 r'",
    "U r U' r' U2' r U r' R U' R'",
    2,
    "R' F R2 U' R' U' r U2 r' U' F'",
    "U' R2 D r' U r D' R' U' R' U R U' R'",
    3,
    "U r U r' U2 M' U M R U' R'",
    "U2 R U R' U' R' F R F' R U2' R2' F R F'",
    "U2 R U R D r' U' r D' R' U R'",
    2,
    "U2 R U' R' U' R U R'",
    "U' R U R' U R U R'",
    2,
    "F R' F' R U R' F R F' R U R'",
    "r' D' r U r' D R r U R'",
    3,
    "R U R2 F R F' R U R'",
    "U2' r U' R' U' R U r'",
    "U F' U' F' U' R U R'",
    3,
    "U' r' D' r U' r' D r2 U' r' U' r U r'",
    "U' F' U' F r U' r' U' r U r'",
    "R' F R F' U2' R U R' U' R U R'",
    2,
    "U F R' F' R U2 R U' R'",
    "R U R' F' U F U R U' R'",
    3,
    "U2 R U' R' U r U' r' U' r U r'",
    "U' R U r' U R U R' U' r R'",
    "F U R U' R2 F' R U R U R'",
    2,
    "U' R U R' U' r U' r' U' r U r'",
    "R' F' R U R U' R' F' r U r' F",
    3,
    "r U' r' U' r U r' U2' R' F R F'",
    "R U' R D r' U' r D' R' U' R'",
    "R' D' R U M' U r' D R2 U R'",
    2,
    "y' R U2 R2 U' R2 U' R'",
    "R U2' R' U R U R' F' U' F",
    2,
    "U' R U R' U' R U' R' U' F' U' F",
    "R U' R' U R U' R2' F R F' R U' R'",
    2,
    "R U R' U' R U' R' F' U' F",
    "F R' F' R U' R U' R' U R U' R'",
    1,
    "U' R U2 R' U F' U' F",
    2,
    "F' U L' U2 L U2 F",
    "F' U r' F2 r U2 F",
    1,
    "R U2 R' U' r U' r' U2 r U r'",
    3,
    "F' L' U' L U' L' U L U' F",
    "F' r' F' r U' r' F r U' F",
    "R' D' r U r U R U' r2' D",
    1,
    "F R' F' R U' R U' R2 F R F'",
    2,
    "R' U2' R2 U R2' U R",
    "R U' R' U R U' R' U2 R U' R'",
    1,
    "R U' r' U R U' R' U' r U2 R'",
    1,
    "R U' R' U R U' R' U R' F R F'",
    1,
    "U F' U2 F U' R U R'",
    1,
    "R d' R U2 R' U2 F'",
    3,
    "U2 R' F2 r U r' F R2 U R'",
    "R U2 F U R U' R' F' R'",
    "R U2 r U R' U R U2 r' U R'",
    1,
    "R U R' U R' F R F' R U R'",
    2,
    "R' D' R U2 M' U r' D R2 U R'",
    "U F R' F' R2 U R' U R' F R F'",
    3,
    "y' U R' U R U' R' U' R",
    "R' D' R U R' D R F' U' F",
    "R' D' r U r' D F R F'",
    3,
    "R2 D R' U R D' R2 F' U' F",
    "U R U' R' U R U' R' d' R' U R",
    "F U R U' R2 F' R U2 R U' R'",
    3,
    "M' U' R U R' U2 R U' r'",
    "R U' R' U R' F R F' R U' R'",
    "R U R' U R U' R' F' U' F",
    2,
    "M' U' R U R' U' R U2 r'",
    "R' F' r U R U2 r' F2",
    2,
    "R' D' r U r' D R U R U' R'",
    "R' F R F' U' R' F R F' R U R'",
    2,
    "M' U' R U' r' U2 r U' r'",
    "R U R' F' U r' F2 r F",
    2,
    "R' F R U2 r U' r' U2 F'",
    "U2' r U2' r' U' r U r' U r U2' r'",
    1,
    "U2 R U R D r' U r D' R' U R'",
    1,
    "U' R U' R' U R U R'",
    3,
    "U' R' F R2 U R' U' R' F' R",
    "r' D' r U' r' D r R U R'",
    "U F R U R' D R2 U' R2 D' F'",
    2,
    "M' U' R U' R' U R U R' U' M",
    "U' R U' r' U R U R' U' M'",
    2,
    "U2 R U R' U R U2 R2 F R F'",
    "U2 r R' U R U' r' U R U R'",
    1,
    "R U R' U' R' F R F' R U R'",
    3,
    "R U R' U' F' U' F U R U R'",
    "U2 r U R' U R U2 r' U R U' R'",
    "U2 F R' F' R U R U' R' U R U R'",
    2,
    "U' R U' R' U' r U' r' U' r U r'",
    "U' R U' R' U R U' R' U2 R' F R F'",
    3,
    "U2 r U' r' U M' U2' R U r'",
    "U2 r U' r' U2 r U r' U R U R'",
    "U2 r U' r' U' R U2 R' r U' r'",
    3,
    "R' D' R U' R' D R U R U' R'",
    "R U2 R' U R U R' U R U' R'",
    "R U R' U2 R U' R' U R U' R'",
    2,
    "M U r U' r' U' M'",
    "F D R U R U' R2 D' F'",
    3,
    "F' U L' U L U2' F",
    "F' U F U2 R U R'",
    "U R' F R F' U R U R'",
    3,
    "R U2' R' U R U R2' F R F'",
    "R' D' R U' R' D F R F'",
    "U' R' F R F' R U R' U2' R U R'",
    1,
    "R U R' U2 R U' R2 F R F'",
    1,
    "R U2' R2' F R F' U' R U2' R'",
    1,
    "M U R U R' U' r U' R'",
    2,
    "U R U' R D r' U r D' R' U' R'",
    "r' U' R U M' U' R' F U R U' F'",
    3,
    "U M' U R U' r' U' R U R'",
    "U F R' F' R2 U' R' U R' F R F'",
    "r U r' U r U2 r' U' r U' r'",
    3,
    "R U R' U2' R U' R' U' F' U F",
    "U F R U R' U' F' U R U' R'",
    "U R F R U R' U' F' R'",
    2,
    "F' U2 L' U' L U' F",
    "R U' R' U2 F' U' F",
    2,
    "U F U R U' R' F' R U R'",
    "R' D' R U R' D R F R' F' R",
    3,
    "r U' r' U l' U2 R U' R' U2 l",
    "U2 r' F' r U' r' F2' r2 U' r' U2' r U r'",
    "U r U' r' U2 r U r' U r U' r' U' r U r'",
    2,
    "U2 R' D' r U' M U' R' D R",
    "U r U' r' U2' r U r' U' R U R'",
    2,
    "F' U R U R' U' R' F2 R F'",
    "U2 R U R' r U' r' U2' r U r'",
    3,
    "U' r U' R' U' M U2 r U r'",
    "U R U2' R' r U' r' U2' r U r'",
    "R U' R2 D' r U' r' D R2 U' R'",
    1,
    "R U2 R' U' R U R'",
    2,
    "F' U' F U R U' R' U R U' R'",
    "R U2' R' U r U' r' U' r U r'",
    3,
    "R U R' U' F R' F' R2 U R'",
    "U2 F' U2 F R U R' U' R U R'",
    "U2 r U' r' U R U R' U r U' r'",
    2,
    "F' U2' F R U R' U2 R U' R'",
    "r' R2 U2 R' U' R U R' U' r R'",
    3,
    "U R U2 R' U' R U R' U R' F R F'",
    "U' R U2 R' U' F' U' F R U R'",
    "R U' R' U' F R' F' R U2 R U' R'",
    3,
    "R U2 R' F U R U' R2 F' R",
    "U' R U' R' U2 R U2 R2' F R F'",
    "R U R' U2 F' U F R U R'",
    2,
    "R U' R' r U' R' U' R U r'",
    "R U2 r' U' R U R' M'",
    3,
    "r' D' r U2' r' D r2 U' R' U2' R U r'",
    "F' r U' r' F2 R U2' R2 F R F'",
    "U2 F' U2 F U' F R' F' R2 U R'",
    2,
    "R' F R F' R U' R' U R U' R'",
    "y' R' U2 R U R' U' R",
    2,
    "R U' R' F' U' F U R U' R'",
    "R U R' d' L' U L U' L' U L",
    3,
    "R U' R' F' U F U R U R'",
    "U R U' R2' F R F' U R U' R'",
    "U R' F R F' R U' R' U F' U' F",
    2,
    "R' F R F' R U' R2' F R F'",
    "R U R' U' R U2 R' F' U2 F",
    3,
    "U2 R U R2 D' r U' r' D R U R U' R'",
    "r U R' U R U r' U M' U2 R U r'",
    "R' D' R U2 R' D R r U' r' U2' r U r'",
    2,
    "R U' R2' F R F' r U' r' U' r U r'",
    "R' D R2 U2' r' U2 R U r D' R2",
    3,
    "R U R' d' r' F r2 U' r' F",
    "R U R' F' L' U2 L U' F",
    "R U' R D r' U' r D' R2' U' R U R'",
    2,
    "F R' F' R2 U' R' U R U2' R2' F R F'",
    "F R U R' U' F' R U2' R2 F R F'",
    1,
    "U R U2 R' U R U' R'",
    3,
    "U R U2 R2 U' F U R U' F'",
    "U' R U' R' U r U' R' U2' R U r'",
    "R' U R U' R2 F R2 U R' U' R F'",
    3,
    "U R' F R F' R U' R' U2 R U' R'",
    "F' U R U R' U' R' F R2 U R'",
    "U R U2' r' U R U' R' U' M'",
    3,
    "F' U' F U2 R U' R' U R U' R'",
    "U' r U' R' U' R U r' U R U' R'",
    "U R U2' R' U R U R' U2' R' F R F'",
    3,
    "U' x' R2 U' R' U x U' R' U2 R U R'",
    "U F R' F' R r U' R' U R U r'",
    "F R' F' R2 U2 R' U2 R U R'",
    1,
    "U F R U R' U' F' R U R'",
    1,
    "U R U2 R2 F R F'",
    2,
    "U2 R U R2' r U' M U2' r U' r'",
    "R' U' F' U F2 R2 U R' U' R' F' R",
    2,
    "y' U' R' U2 R U' R' U R",
    "d' L' U2 L U' L' U L",
    2,
    "R' U' R' F R F' U R2 U' R'",
    "U2' r U' R' U R U r' F' U' F",
    2,
    "U' R U' R' U R U' R' d R' U R",
    "U' F R' F' R2 U R' U2 R U R'",
    1,
    "U' R U' R2 F R F' R U' R'",
    2,
    "R' F2 R U' F U R' F2 R",
    "U' r U' r' U2 r U r' R U R' U R U' R'",
    3,
    "r' D' r U r' D r2 U' r' U2' r U r'",
    "U' R U' r' U r U2' r' U' r U R'",
    "F D R2 U' R' U2 R U R2 D' F'",
    2,
    "U' F' U' r U' r' F2",
    "y U' L' U2 L2 F' L' F",
    3,
    "U' R U' R2' F R F' U' R' F R F'",
    "U' R U R' U r U' r' U2 r U r'",
    "U2 R U' R' U' r U' r' U2 r U r'",
    1,
    "U2 R U R' U R U' R'",
    2,
    "U R' F R F' U' R U2 R'",
    "U2 F' U' F R U R'",
    1,
    "U2' R U R2' F R F'",
    3,
    "U R U' R' U2 R U' R2' F R F'",
    "R U R' U' F' U F R U R'",
    "U2 F' r U R' U' r' F2 R F'",
    2,
    "r U' R' U2 R U r'",
    "y F R U2 R' F'",
    3,
    "U2 F R U R' U' F' U' R U2 R'",
    "U2 R U R2 U' F U R U' F'",
    "y U F R U R' U F'",
    3,
    "U F R' F' R2 U' R' U R U R'",
    "U2' R U r' U R U' R' U' M'",
    "r' U2 R' U R2 U' R U2 r",
    3,
    "U2' F' r' F2 r2 U' r' F2",
    "U R' F R F2 U' F R U2 R'",
    "U M' U R U' r' U R U R2' F R F'",
    3,
    "y' U2 R' U' R U' R' U R",
    "y U2 L' U2 L U' L' U L",
    "U2 R' F R F' R U R' U R U' R'",
    3,
    "U2' R U R' F' U' F",
    "y' R' F' U F U R",
    "F' L' U L U F",
    3,
    "U2 F' r U' r' F2",
    "y' U2 R' F R' F' R2",
    "y U2 L' U' L2 F' L' F",
    2,
    "U R U' R' U' R U' R' y' R' U' R",
    "U R U' R' U' R U' R' F' U' F",
    2,
    "r U' r' U2' r U r'",
    "F' L' U2 L F",
    3,
    "U2 R' F R F2 U' F R U R'",
    "U' r U' r' U' r U r' F' U' F",
    "U' F' L' U' L U' F",
    2,
    "U2' R' F R F' R U R2' F R F'",
    "r U' r' U2 r U' R' U' R U' r'",
    3,
    "U' R U2 r' U r U2 r' U' r U R'",
    "U' F R' F' R U2' r U' r' U r U r'",
    "M' U R U' r' F2 r U r' U2 F",
    3,
    "U R U' R' U' R U' R' U R U' R'",
    "U2 R2 U2' R' U' R U' R2'",
    "R U' R2' D' R U2 R' D R",
    3,
    "U2 R U2 R' U' R U' R2 F R F'",
    "U2 R U R' U' R U' R' U R' F R F'",
    "U2 r U' r' U r U r' R' F R F'",
    2,
    "U R U' R' U' R U' R2' F R F'",
    "F' U' F U' R U' R' U R U' R'",
    2,
    "U R' F R F' R U R' U2 R U' R'",
    "F U R U' R' F' U' F' U' F",
    2,
    "U F R' F' R U R U R'",
    "R U R' F' U F R U R'",
    2,
    "R U2' R' U r U' R' U' R U r'",
    "R U2 R' F' U F U' R U R'",
    3,
    "U2 r U' r' U r U r' U R U' R'",
    "M U2 R U R' U r U' R'",
    "U2' r U' r' U r U r' U R U' R'",
    3,
    "F' U' F U' R U' R2' F R F'",
    "U' R' F R F' U2' R U' R' U R' F R F'",
    "U F R' F' R2 r' U R U R' U' M'",
    1,
    "U' R U R2' F R F' R U' R'",
    1,
    "R U' R' U r U' R' U R U r'",
    3,
    "R U R' d R' U R U' R' U R",
    "y U' L' U L U L' U L2 F' L' F",
    "R U' R2 F' U' F U R2 U' R'",
    1,
    "F U R U' R' F' R U' R'",
    3,
    "U' R U R2' F R F' U' R' F R F'",
    "U' R U' R' U r U' r' U2' r U r'",
    "F U R U' R' F2 U' F R U' R'",
    3,
    "r U' r' U' r U r2' D' r U2' r' D r",
    "r U R' U R U r' U' r U r'",
    "r U' r' U' r U r' F' U2' F",
    3,
    "U r U' r' U2' r U r' R U2' R' U R U' R'",
    "F' U' r U2 R' U' R U' r' U2' F",
    "U' R U' R' F' L' U' L U' F",
    2,
    "R U' R2 D' r U r' R U R' D R",
    "R U R' U2 F' r' F2 r U' F",
    3,
    "R' F' R U R U' R' F",
    "U' F' R U R' U' R' F R",
    "R' U' R' U' R' U R U R",
    2,
    "U' R' F R F' R U R'",
    "U' M' U R U' r' R U R'",
    1,
    "U' F' U F U R U' R'",
    1,
    "U' F' U' F U R U R'",
    2,
    "r U r' U2 r U R' U2 R U' r'",
    "U2 r' U' R' U' R U R U r",
    2,
    "U2 r U2' R' U R U' R' U2' R U' r'",
    "r' U' R' U' R' U R U r",
    3,
    "U2 r U' r' R U' R' U' r U' r'",
    "U r U r' U R U M' U r'",
    "U2 F' L' U' L U R U R' U' R' F R",
    3,
    "U R2 D r' U r D' R' U' R'",
    "r U r' U2 r U R' U' R U2 r'",
    "r U2 R' U r' R U2 r U' r'",
    2,
    "U2 R U' R' U' r U' R' U R U r'",
    "r2 U2' R2' F R2 U2' r2' F",
    3,
    "U R U' R' F R' F' R",
    "U R U' M' U R' U' M",
    "R2 U R' U' R' F R F' R'",
    1,
    "U R U' R' U' F' U F",
    2,
    "U R U R' U' F' U' F",
    "F U' r U M U' R' U F'",
    3,
    "U R U' R' U R' D' r U' r' D R",
    "r U R' U2 R U r' U2 r U' r'",
    "R' D' R U M' U' r' D R",
    2,
    "r U r' U2' r U' R' U2' R U' r'",
    "R' D' R U' M' U r' D R",
    3,
    "R' D' r U r' D R U' R U R'",
    "U F R U' R' r U2 r' U' F'",
    "R' D r2 U r' U' r U' r2 D' R",
    2,
    "r U2 R' U R U' r' U2 r U' r'",
    "U R U R D r' U' r D' R2'",
    1,
    "R U' R' U R U' R'",
    2,
    "R U' R2 F R2 U R' U' F'",
    "F' U' F U' R U2 R'",
    3,
    "R' D' R U' R' D R U R' F R F'",
    "R' D' R U R' D R U' R' F R F'",
    "R U2 R' U2 r U' R' U2 R U r'",
    2,
    "R U' r' U R U' R' U' M'",
    "F' U2 F R U2 R'",
    1,
    "R U' R2 F R F'",
    3,
    "U2 r U' r' U r U r' R U2' R'",
    "R U' R2 U' F U R2 U' R' F'",
    "R U' R' U R U R' U2' R' F R F'",
    2,
    "R U' R2 U' F U R U' F'",
    "U2 R U R' U R U R2' F R F'",
    2,
    "U' R U' R2 r U' M U2 r U' r'",
    "U' R' D' r U' r' D R U' R U2 R'",
    2,
    "y' R' U R U' R' U R",
    "y L' U L U' L' U L",
    3,
    "R U R' d R' U2 R",
    "R U R' r' D' r U' r' D r",
    "F U R U' R2 F' R2 U R'",
    3,
    "R U2 l U' R' U l'",
    "R U2 R' U r U' r' U r U r'",
    "R U2 R' U F R' F' R2 U' R'",
    2,
    "R U2 R' F' U2 F",
    "U2 R' F R F' r U' r' U2' r U r'",
    3,
    "y L' U L2 F' L' F",
    "F' U2' r U' r' F2",
    "R U R2 D' r U' r' D R",
    2,
    "R U2 R' U R2 D r' U r D' R2'",
    "R U R' F R U R' U' F2 U' F",
    3,
    "y L' U L U' F R U R' F'",
    "R U2 R' U' F R U R' U' F2 U' F",
    "R U' R' r U' R' U' R r' U' r U r'",
    3,
    "U r U r' U2 r R' U r' R2 U R'",
    "R U2 R' U R' D' r U r' D R",
    "R U2' R2' F R F2 U2' F",
    3,
    "R' F R F' U R U' R'",
    "y' R' U' R U R' U' R",
    "y L' U' L U L' U' L",
    1,
    "U2 R U' R' F' U' F",
    1,
    "R' F R F' R' F R F'",
    3,
    "R' F R F' U R U R' U2' R' F R F'",
    "R U' R2' D' r U' r' D F R F'",
    "U2 R U' R' U' R' F R U R U' R2' F' R",
    2,
    "U R' D' r U r' D R2 U' R'",
    "U R' F R F2 U' F",
    3,
    "U R2 D r' U' r D' R2' U' R U2 R'",
    "F' r2 D2 r' U r D2 r' U2 r' F2",
    "U2 r U' r' U2 r U r' U' R U2 R' U R U R'",
    2,
    "U' R U R' U' r U' r' U2 r U r'",
    "U F' U L' U2 L F",
    2,
    "R U' R2' D' r U' r' D R U R U' R'",
    "M' U' M U2 r U' R' U R U' r'",
    1,
    "R U R' U' R U R'",
    2,
    "U2' F' U F R U R'",
    "R U R' F U R U' R2 F' R",
    2,
    "x U R' U' R U R' U' l",
    "r U R' U' R U R' U' r' R",
    1,
    "U2 R' F R F' R U' R' U2 R U R'",
    1,
    "U' F R' F' R2 U R'",
    1,
    "R U r' U' R U R2 r",
    3,
    "R U R' U r U' r' U' r U r'",
    "U' R U' R' r U' R' U2 R U r'",
    "U' R d' R U2' R' F'",
    3,
    "R U R' U' R' D' r U r' D R2 U R'",
    "r U R' U' R U r' U2' M' U M",
    "U2 F R' F' R U F R' F' R U' R U2 R'",
    1,
    "R U' R' U F' U F",
    1,
    "U' R' F R F' R U' R'",
    1,
    "R U2 R' U' F R' F' R",
    2,
    "F' U F R U2' R'",
    "R' F' R U R U' R' U2 F",
    1,
    "r U' r' U M' U R U r'",
    3,
    "U' R' F R F' U' R' F R F'",
    "F' U' F R U' R2 F R F'",
    "U' R U2 R' U r U' r' U2 r U r'",
    1,
    "R U2 R2 D' r U' r' D R",
    2,
    "r U' R' U' M U' r U r'",
    "R U' R' U R U R2 D' r U r' D R",
    1,
    "U R U' R' U R U' R' U R U' R'",
    3,
    "U' F' U L' U2 L U' F",
    "U2 R U r' U R U R' U' r U' R'",
    "U R U' R' U R U' r' U R U' R' U' M'",
    1,
    "U R U' R' U R U' R2 F R F'",
    2,
    "F R' F' R2 U R' U' R U R'",
    "U' R U R' U' R U R2 F R F'",
    3,
    "U R' F R F' d R' U' R",
    "U2 F' U r' F' r U' F",
    "U2 R' F R F2 r U' r' F2",
    3,
    "U' F R' F' R U' R U R'",
    "U' r U r' R' F R F' r U' r'",
    "r U' R2 U' R U' R' U2 R2 U r'",
    3,
    "U2 F R' F' R2 U R' U R U' R'",
    "U2 R U2 R' U2 R U' R2 F R F'",
    "R U R' U F' U F R U R'",
    2,
    "U2' r U2' r' U2 r U' r' U2 r U2' r'",
    "U2' R' F R F' U2' r U' r' U2' r U r'",
    1,
    "U' R U' R' U2 R U' R'",
    3,
    "R U M U' R' U r U' R'",
    "R U r' R U' R' U r U' R'",
    "U' R U' R' F' U' F R U2 R'",
    2,
    "U' R U' R' U2' R U R' U2' R' F R F'",
    "R' F R F' R2 U R' U' R' F R F' R'",
    3,
    "U R U' R2 F R F' R U R'",
    "F R' F' R2 U' R' U R U' R'",
    "r U r' R U' R' U r U' r'",
    3,
    "U r U' r' U r U r' R U' R'",
    "M' U' R U r' U2 r U' r'",
    "U' R U' R' U' F R' F' R2 U2 R'",
    1,
    "U' R U' R' U R' F R F'",
    3,
    "y U2 F R U2 R' U2 F'",
    "R U R' U' F' U' F U' R U2 R'",
    "U' F' U2 L' U2 L F",
    2,
    "U' F R' F' R2 U2' R2' F R F'",
    "D' r U' r' F2 U R' F R F2 D",
    2,
    "U R' D' R U' R' D R",
    "U' R' D' R U R' D R",
    1,
    "r U r' U' R U R' r U' r'",
    3,
    "U R U' R' F R' F' R2 U R'",
    "U' R U2' R' U' r U' r' U' r U r'",
    "R U' R' U' R' F R F' U R U R'",
    2,
    "U r U' R' U R U r' U' R U R'",
    "U R U' R' U' F' U F R U R'",
    2,
    "y U L' U L U' L F' L' F",
    "U r U R' U' M U' R U R'",
    2,
    "U R U M' U' r' U' r U r'",
    "F U' R2 D2 R' U' R D2 R2 U F'",
    2,
    "R U R' U2 R' F R F' R U R'",
    "U2 R U' R' U r U' R' U' R U r'",
    2,
    "U r U2' r' U2' r U r' U2' r U2' r'",
    "R U R D r' U r D' R' U' R'",
    2,
    "U2' R U R' y' U' R' U R",
    "R' D' r U' r' D F R F'",
    3,
    "U' R U R' d R' U' R",
    "U M' U R U' M U' R'",
    "R U R2 F R F' R' F R F'",
    2,
    "U2 R U' R' U' F' U' F",
    "R U R2 F R F' U R U' R'",
    2,
    "U2' R U R' F R' F' R",
    "R2 D R' U2 R D' R2 F' U' F",
    3,
    "R2 D r' U' r D' R2 U R U' R'",
    "U2 r U' r' U R' F R F' r U2' r'",
    "U2 R U' r' U r U2 r' U' r R'",
    1,
    "U2 R U' R D r' U' r D' R2",
    1,
    "R' D' r U' r' D R U R U' R'",
    2,
    "U R' D' r U r' D R2 U2' R'",
    "R' F R F' U2' R' F R F' R U R'",
    1,
    "U F' U' F U' R U R'",
    3,
    "U2 F' U' F U R U' R'",
    "R U R' U R U' R' d' r' F r",
    "R U R' F U2' r U r' U2' F'",
    3,
    "U2 F' U' F R' F R F'",
    "U2' R' F R F' U2 R U R'",
    "R U R2 U' R F' R' U R F",
    3,
    "F' U' F R U R' U' R U R'",
    "R U R U R' U' R' F R F' R'",
    "U2 F' U F U R U R'",
    1,
    "R2 D r' U r D' R' U R'",
    1,
    "U2 R' F R F' r U' r' U' r U r'",
    3,
    "U2 R' F R F' r U' r' U' r U r'",
    "F' U2' r' F2 r2 U' r' F U' F",
    "R2 D R' U2 R r' U' r D' R' U R'",
    3,
    "R U R2' D' r U r' D R U' R U R'",
    "R U R2' D' r U' r' D R U R U R'",
    "R' F R F' U F' U F R U R'",
    2,
    "U' R' F R F' R U' R' U R U' R' U2 R U' R'",
    "U' R' F R F' R' U2' R2 U R2' U R",
    2,
    "U' r U' r' R U R' U r U' r' R U R'",
    "R' F R F' U F' U2' F U' R U R'",
    2,
    "R2 U2 R' U' R U' R' U2 R'",
    "R U' R' U' R U R' U2 R U' R'",
    2,
    "U R U' R' U' R U R' U R' F R F'",
    "R' F R U R U' R2 F' R U' R U2' R'",
    1,
    "F R' F' R2 U2' R' U' R U R'",
    3,
    "M' U R U' R' U' R U' r' U2 r U' r'",
    "R U' R' U' r U' r' U2' r U r' R U2 R'",
    "R U' R' U2 R2 D r' U' r D' R' U' R'",
    2,
    "R U2 R' U R U' R' U R U R'",
    "R U' R' U R U2' R' U R U' R'",
    1,
    "R U2' R' U R' F R2 U R' U' R' F' R",
    1,
    "R U' R' U R U2 R2 F R F'",
    3,
    "R U2' R' r U' r' U M' U2' R U r'",
    "R U R D r' U r D' R2' U2' R U R'",
    "R U2' R' r U' r' U' R U2 R' r U' r'",
    2,
    "U R U' R' F R U R' U' F' R U' R'",
    "R U' R' U' R U' R' U y' R' U' R",
    1,
    "r U' r' U2' r U r' R U R'",
    2,
    "U' R U R' F U R U' R' F' R U R'",
    "R U R' U' R U' R' U2 F' U' F",
    1,
    "R U' R' r U' r' U2 r U r'"];

sessionStorage.setItem("algs", JSON.stringify(algArray));
