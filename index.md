<!DOCTYPE html>
<!--
Morgan Yeh 
2024/12/13
ZBLS Trainer home screen
--> 
<html>
    <head>
        <title>ZBLS Trainer</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="home-style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body> 
        <header>
            <h1 id="title">ZBLS Trainer</h1>
        </header>

        <div id="container">
            <div class="left-block">
                <input type="checkbox" class="toggleGroup" id="1">
                <button type="button" class="collapsible" id="F2L1Button">
                    <b>F2L 1</b> (<span id="F2L1Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-1" class="F2L1" name="case">
                        <label for="F2L1-1">
                            <img src="Images/F2L 1-1.png" alt="F2L 1-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-2" class="F2L1" name="case">
                        <label for="F2L1-2">
                            <img src="Images/F2L 1-2.png" alt="F2L 1-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-3" class="F2L1" name="case">
                        <label for="F2L1-3">
                            <img src="Images/F2L 1-3.png" alt="F2L 1-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-4" class="F2L1" name="case">
                        <label for="F2L1-4">
                            <img src="Images/F2L 1-4.png" alt="F2L 1-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-5" class="F2L1" name="case">
                        <label for="F2L1-5">
                            <img src="Images/F2L 1-5.png" alt="F2L 1-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-6" class="F2L1" name="case">
                        <label for="F2L1-6">
                            <img src="Images/F2L 1-6.png" alt="F2L 1-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-7" class="F2L1" name="case">
                        <label for="F2L1-7">
                            <img src="Images/F2L 1-7.png" alt="F2L 1-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L1-8" class="F2L1" name="case">
                        <label for="F2L1-8">
                            <img src="Images/F2L 1-8.png" alt="F2L 1-8">
                        </label>
                    </div>   
                </div>

                <input type="checkbox" class="toggleGroup" id="2">
                <button type="button" class="collapsible" id="F2L2Button">
                    <b>F2L 2</b> (<span id="F2L2Count">0</span>/8)</button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-1" class="F2L2" name="case">
                        <label for="F2L2-1">
                            <img src="Images/F2L 2-1.png" alt="F2L 2-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-2" class="F2L2" name="case">
                        <label for="F2L2-2">
                            <img src="Images/F2L 2-2.png" alt="F2L 2-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-3" class="F2L2" name="case">
                        <label for="F2L2-3">
                            <img src="Images/F2L 2-3.png" alt="F2L 2-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-4" class="F2L2" name="case">
                        <label for="F2L2-4">
                            <img src="Images/F2L 2-4.png" alt="F2L 2-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-5" class="F2L2" name="case">
                        <label for="F2L2-5">
                            <img src="Images/F2L 2-5.png" alt="F2L 2-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-6" class="F2L2" name="case">
                        <label for="F2L2-6">
                            <img src="Images/F2L 2-6.png" alt="F2L 2-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-7" class="F2L2" name="case">
                        <label for="F2L2-7">
                            <img src="Images/F2L 2-7.png" alt="F2L 2-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L2-8" class="F2L2" name="case">
                        <label for="F2L2-8">
                            <img src="Images/F2L 2-8.png" alt="F2L 2-8">
                        </label>
                    </div>
                </div>

                <input type="checkbox" class="toggleGroup" id="3">
                <button type="button" class="collapsible" id="F2L3Button">
                    <b>F2L 3</b> (<span id="F2L3Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-1" class="F2L3" name="case">
                        <label for="F2L3-1">
                            <img src="Images/F2L 3-1.png" alt="F2L 3-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-2" class="F2L3" name="case">
                        <label for="F2L3-2">
                            <img src="Images/F2L 3-2.png" alt="F2L 3-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-3" class="F2L3" name="case">
                        <label for="F2L3-3">
                            <img src="Images/F2L 3-3.png" alt="F2L 3-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-4" class="F2L3" name="case">
                        <label for="F2L3-4">
                            <img src="Images/F2L 3-4.png" alt="F2L 3-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-5" class="F2L3" name="case">
                        <label for="F2L3-5">
                            <img src="Images/F2L 3-5.png" alt="F2L 3-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-6" class="F2L3" name="case">
                        <label for="F2L3-6">
                            <img src="Images/F2L 3-6.png" alt="F2L 3-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-7" class="F2L3" name="case">
                        <label for="F2L3-7">
                            <img src="Images/F2L 3-7.png" alt="F2L 3-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L3-8" class="F2L3" name="case">
                        <label for="F2L3-8">
                            <img src="Images/F2L 3-8.png" alt="F2L 3-8">
                        </label>
                    </div>
                </div>

                <input type="checkbox" class="toggleGroup" id="4">
                <button type="button" class="collapsible" id="F2L4Button">
                    <b>F2L 4</b> (<span id="F2L4Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-1" class="F2L4" name="case">
                        <label for="F2L4-1">
                            <img src="Images/F2L 4-1.png" alt="F2L 4-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-2" class="F2L4" name="case">
                        <label for="F2L4-2">
                            <img src="Images/F2L 4-2.png" alt="F2L 4-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-3" class="F2L4" name="case">
                        <label for="F2L4-3">
                            <img src="Images/F2L 4-3.png" alt="F2L 4-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-4" class="F2L4" name="case">
                        <label for="F2L4-4">
                            <img src="Images/F2L 4-4.png" alt="F2L 4-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-5" class="F2L4" name="case">
                        <label for="F2L4-5">
                            <img src="Images/F2L 4-5.png" alt="F2L 4-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-6" class="F2L4" name="case">
                        <label for="F2L4-6">
                            <img src="Images/F2L 4-6.png" alt="F2L 4-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-7" class="F2L4" name="case">
                        <label for="F2L4-7">
                            <img src="Images/F2L 4-7.png" alt="F2L 4-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L4-8" class="F2L4" name="case">
                        <label for="F2L4-8">
                            <img src="Images/F2L 4-8.png" alt="F2L 4-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="5">
                <button type="button" class="collapsible" id="F2L5Button">
                    <b>F2L 5</b> (<span id="F2L5Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-1" class="F2L5" name="case">
                        <label for="F2L5-1">
                            <img src="Images/F2L 5-1.png" alt="F2L 5-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-2" class="F2L5" name="case">
                        <label for="F2L5-2">
                            <img src="Images/F2L 5-2.png" alt="F2L 5-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-3" class="F2L5" name="case">
                        <label for="F2L5-3">
                            <img src="Images/F2L 5-3.png" alt="F2L 5-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-4" class="F2L5" name="case">
                        <label for="F2L5-4">
                            <img src="Images/F2L 5-4.png" alt="F2L 5-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-5" class="F2L5" name="case">
                        <label for="F2L5-5">
                            <img src="Images/F2L 5-5.png" alt="F2L 5-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-6" class="F2L5" name="case">
                        <label for="F2L5-6">
                            <img src="Images/F2L 5-6.png" alt="F2L 5-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-7" class="F2L5" name="case">
                        <label for="F2L5-7">
                            <img src="Images/F2L 5-7.png" alt="F2L 5-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L5-8" class="F2L5" name="case">
                        <label for="F2L5-8">
                            <img src="Images/F2L 5-8.png" alt="F2L 5-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="6">
                <button type="button" class="collapsible" id="F2L6Button">
                    <b>F2L 6</b> (<span id="F2L6Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-1" class="F2L6" name="case">
                        <label for="F2L6-1">
                            <img src="Images/F2L 6-1.png" alt="F2L 6-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-2" class="F2L6" name="case">
                        <label for="F2L6-2">
                            <img src="Images/F2L 6-2.png" alt="F2L 6-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-3" class="F2L6" name="case">
                        <label for="F2L6-3">
                            <img src="Images/F2L 6-3.png" alt="F2L 6-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-4" class="F2L6" name="case">
                        <label for="F2L6-4">
                            <img src="Images/F2L 6-4.png" alt="F2L 6-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-5" class="F2L6" name="case">
                        <label for="F2L6-5">
                            <img src="Images/F2L 6-5.png" alt="F2L 6-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-6" class="F2L6" name="case">
                        <label for="F2L6-6">
                            <img src="Images/F2L 6-6.png" alt="F2L 6-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-7" class="F2L6" name="case">
                        <label for="F2L6-7">
                            <img src="Images/F2L 6-7.png" alt="F2L 6-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L6-8" class="F2L6" name="case">
                        <label for="F2L6-8">
                            <img src="Images/F2L 6-8.png" alt="F2L 6-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="7">
                <button type="button" class="collapsible" id="F2L7Button">
                    <b>F2L 7</b> (<span id="F2L7Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-1" class="F2L7" name="case">
                        <label for="F2L7-1">
                            <img src="Images/F2L 7-1.png" alt="F2L 7-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-2" class="F2L7" name="case">
                        <label for="F2L7-2">
                            <img src="Images/F2L 7-2.png" alt="F2L 7-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-3" class="F2L7" name="case">
                        <label for="F2L7-3">
                            <img src="Images/F2L 7-3.png" alt="F2L 7-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-4" class="F2L7" name="case">
                        <label for="F2L7-4">
                            <img src="Images/F2L 7-4.png" alt="F2L 7-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-5" class="F2L7" name="case">
                        <label for="F2L7-5">
                            <img src="Images/F2L 7-5.png" alt="F2L 7-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-6" class="F2L7" name="case">
                        <label for="F2L7-6">
                            <img src="Images/F2L 7-6.png" alt="F2L 7-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-7" class="F2L7" name="case">
                        <label for="F2L7-7">
                            <img src="Images/F2L 7-7.png" alt="F2L 7-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L7-8" class="F2L7" name="case">
                        <label for="F2L7-8">
                            <img src="Images/F2L 7-8.png" alt="F2L 7-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="8">
                <button type="button" class="collapsible" id="F2L8Button">
                    <b>F2L 8</b> (<span id="F2L8Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-1" class="F2L8" name="case">
                        <label for="F2L8-1">
                            <img src="Images/F2L 8-1.png" alt="F2L 8-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-2" class="F2L8" name="case">
                        <label for="F2L8-2">
                            <img src="Images/F2L 8-2.png" alt="F2L 8-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-3" class="F2L8" name="case">
                        <label for="F2L8-3">
                            <img src="Images/F2L 8-3.png" alt="F2L 8-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-4" class="F2L8" name="case">
                        <label for="F2L8-4">
                            <img src="Images/F2L 8-4.png" alt="F2L 8-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-5" class="F2L8" name="case">
                        <label for="F2L8-5">
                            <img src="Images/F2L 8-5.png" alt="F2L 8-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-6" class="F2L8" name="case">
                        <label for="F2L8-6">
                            <img src="Images/F2L 8-6.png" alt="F2L 8-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-7" class="F2L8" name="case">
                        <label for="F2L8-7">
                            <img src="Images/F2L 8-7.png" alt="F2L 8-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L8-8" class="F2L8" name="case">
                        <label for="F2L8-8">
                            <img src="Images/F2L 8-8.png" alt="F2L 8-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="9">
                <button type="button" class="collapsible" id="F2L9Button">
                    <b>F2L 9</b> (<span id="F2L9Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-1" class="F2L9" name="case">
                        <label for="F2L9-1">
                            <img src="Images/F2L 9-1.png" alt="F2L 9-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-2" class="F2L9" name="case">
                        <label for="F2L9-2">
                            <img src="Images/F2L 9-2.png" alt="F2L 9-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-3" class="F2L9" name="case">
                        <label for="F2L9-3">
                            <img src="Images/F2L 9-3.png" alt="F2L 9-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-4" class="F2L9" name="case">
                        <label for="F2L9-4">
                            <img src="Images/F2L 9-4.png" alt="F2L 9-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-5" class="F2L9" name="case">
                        <label for="F2L9-5">
                            <img src="Images/F2L 9-5.png" alt="F2L 9-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-6" class="F2L9" name="case">
                        <label for="F2L9-6">
                            <img src="Images/F2L 9-6.png" alt="F2L 9-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-7" class="F2L9" name="case">
                        <label for="F2L9-7">
                            <img src="Images/F2L 9-7.png" alt="F2L 9-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L9-8" class="F2L9" name="case">
                        <label for="F2L9-8">
                            <img src="Images/F2L 9-8.png" alt="F2L 9-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="10">
                <button type="button" class="collapsible" id="F2L10Button">
                    <b>F2L 10</b> (<span id="F2L10Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-1" class="F2L10" name="case">
                        <label for="F2L10-1">
                            <img src="Images/F2L 10-1.png" alt="F2L 10-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-2" class="F2L10" name="case">
                        <label for="F2L10-2">
                            <img src="Images/F2L 10-2.png" alt="F2L 10-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-3" class="F2L10" name="case">
                        <label for="F2L10-3">
                            <img src="Images/F2L 10-3.png" alt="F2L 10-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-4" class="F2L10" name="case">
                        <label for="F2L10-4">
                            <img src="Images/F2L 10-4.png" alt="F2L 10-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-5" class="F2L10" name="case">
                        <label for="F2L10-5">
                            <img src="Images/F2L 10-5.png" alt="F2L 10-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-6" class="F2L10" name="case">
                        <label for="F2L10-6">
                            <img src="Images/F2L 10-6.png" alt="F2L 10-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-7" class="F2L10" name="case">
                        <label for="F2L10-7">
                            <img src="Images/F2L 10-7.png" alt="F2L 10-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L10-8" class="F2L10" name="case">
                        <label for="F2L10-8">
                            <img src="Images/F2L 10-8.png" alt="F2L 10-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="11">
                <button type="button" class="collapsible" id="F2L11Button">
                    <b>F2L 11</b> (<span id="F2L11Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-1" class="F2L11" name="case">
                        <label for="F2L11-1">
                            <img src="Images/F2L 11-1.png" alt="F2L 11-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-2" class="F2L11" name="case">
                        <label for="F2L11-2">
                            <img src="Images/F2L 11-2.png" alt="F2L 11-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-3" class="F2L11" name="case">
                        <label for="F2L11-3">
                            <img src="Images/F2L 11-3.png" alt="F2L 11-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-4" class="F2L11" name="case">
                        <label for="F2L11-4">
                            <img src="Images/F2L 11-4.png" alt="F2L 11-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-5" class="F2L11" name="case">
                        <label for="F2L11-5">
                            <img src="Images/F2L 11-5.png" alt="F2L 11-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-6" class="F2L11" name="case">
                        <label for="F2L11-6">
                            <img src="Images/F2L 11-6.png" alt="F2L 11-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-7" class="F2L11" name="case">
                        <label for="F2L11-7">
                            <img src="Images/F2L 11-7.png" alt="F2L 11-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L11-8" class="F2L11" name="case">
                        <label for="F2L11-8">
                            <img src="Images/F2L 11-8.png" alt="F2L 11-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="12">
                <button type="button" class="collapsible" id="F2L12Button">
                    <b>F2L 12</b> (<span id="F2L12Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-1" class="F2L12" name="case">
                        <label for="F2L12-1">
                            <img src="Images/F2L 12-1.png" alt="F2L 12-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-2" class="F2L12" name="case">
                        <label for="F2L12-2">
                            <img src="Images/F2L 12-2.png" alt="F2L 12-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-3" class="F2L12" name="case">
                        <label for="F2L12-3">
                            <img src="Images/F2L 12-3.png" alt="F2L 12-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-4" class="F2L12" name="case">
                        <label for="F2L12-4">
                            <img src="Images/F2L 12-4.png" alt="F2L 12-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-5" class="F2L12" name="case">
                        <label for="F2L12-5">
                            <img src="Images/F2L 12-5.png" alt="F2L 12-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-6" class="F2L12" name="case">
                        <label for="F2L12-6">
                            <img src="Images/F2L 12-6.png" alt="F2L 12-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-7" class="F2L12" name="case">
                        <label for="F2L12-7">
                            <img src="Images/F2L 12-7.png" alt="F2L 12-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L12-8" class="F2L12" name="case">
                        <label for="F2L12-8">
                            <img src="Images/F2L 12-8.png" alt="F2L 12-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="13">
                <button type="button" class="collapsible" id="F2L13Button">
                    <b>F2L 13</b> (<span id="F2L13Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-1" class="F2L13" name="case">
                        <label for="F2L13-1">
                            <img src="Images/F2L 13-1.png" alt="F2L 13-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-2" class="F2L13" name="case">
                        <label for="F2L13-2">
                            <img src="Images/F2L 13-2.png" alt="F2L 13-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-3" class="F2L13" name="case">
                        <label for="F2L13-3">
                            <img src="Images/F2L 13-3.png" alt="F2L 13-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-4" class="F2L13" name="case">
                        <label for="F2L13-4">
                            <img src="Images/F2L 13-4.png" alt="F2L 13-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-5" class="F2L13" name="case">
                        <label for="F2L13-5">
                            <img src="Images/F2L 13-5.png" alt="F2L 13-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-6" class="F2L13" name="case">
                        <label for="F2L13-6">
                            <img src="Images/F2L 13-6.png" alt="F2L 13-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-7" class="F2L13" name="case">
                        <label for="F2L13-7">
                            <img src="Images/F2L 13-7.png" alt="F2L 13-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L13-8" class="F2L13" name="case">
                        <label for="F2L13-8">
                            <img src="Images/F2L 13-8.png" alt="F2L 13-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="14">
                <button type="button" class="collapsible" id="F2L14Button">
                    <b>F2L 14</b> (<span id="F2L14Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-1" class="F2L14" name="case">
                        <label for="F2L14-1">
                            <img src="Images/F2L 14-1.png" alt="F2L 14-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-2" class="F2L14" name="case">
                        <label for="F2L14-2">
                            <img src="Images/F2L 14-2.png" alt="F2L 14-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-3" class="F2L14" name="case">
                        <label for="F2L14-3">
                            <img src="Images/F2L 14-3.png" alt="F2L 14-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-4" class="F2L14" name="case">
                        <label for="F2L14-4">
                            <img src="Images/F2L 14-4.png" alt="F2L 14-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-5" class="F2L14" name="case">
                        <label for="F2L14-5">
                            <img src="Images/F2L 14-5.png" alt="F2L 14-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-6" class="F2L14" name="case">
                        <label for="F2L14-6">
                            <img src="Images/F2L 14-6.png" alt="F2L 14-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-7" class="F2L14" name="case">
                        <label for="F2L14-7">
                            <img src="Images/F2L 14-7.png" alt="F2L 14-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L14-8" class="F2L14" name="case">
                        <label for="F2L14-8">
                            <img src="Images/F2L 14-8.png" alt="F2L 14-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="15">
                <button type="button" class="collapsible" id="F2L15Button">
                    <b>F2L 15</b> (<span id="F2L15Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-1" class="F2L15" name="case">
                        <label for="F2L15-1">
                            <img src="Images/F2L 15-1.png" alt="F2L 15-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-2" class="F2L15" name="case">
                        <label for="F2L15-2">
                            <img src="Images/F2L 15-2.png" alt="F2L 15-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-3" class="F2L15" name="case">
                        <label for="F2L15-3">
                            <img src="Images/F2L 15-3.png" alt="F2L 15-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-4" class="F2L15" name="case">
                        <label for="F2L15-4">
                            <img src="Images/F2L 15-4.png" alt="F2L 15-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-5" class="F2L15" name="case">
                        <label for="F2L15-5">
                            <img src="Images/F2L 15-5.png" alt="F2L 15-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-6" class="F2L15" name="case">
                        <label for="F2L15-6">
                            <img src="Images/F2L 15-6.png" alt="F2L 15-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-7" class="F2L15" name="case">
                        <label for="F2L15-7">
                            <img src="Images/F2L 15-7.png" alt="F2L 15-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L15-8" class="F2L15" name="case">
                        <label for="F2L15-8">
                            <img src="Images/F2L 15-8.png" alt="F2L 15-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="16">
                <button type="button" class="collapsible" id="F2L16Button">
                    <b>F2L 16</b> (<span id="F2L16Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-1" class="F2L16" name="case">
                        <label for="F2L16-1">
                            <img src="Images/F2L 16-1.png" alt="F2L 16-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-2" class="F2L16" name="case">
                        <label for="F2L16-2">
                            <img src="Images/F2L 16-2.png" alt="F2L 16-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-3" class="F2L16" name="case">
                        <label for="F2L16-3">
                            <img src="Images/F2L 16-3.png" alt="F2L 16-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-4" class="F2L16" name="case">
                        <label for="F2L16-4">
                            <img src="Images/F2L 16-4.png" alt="F2L 16-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-5" class="F2L16" name="case">
                        <label for="F2L16-5">
                            <img src="Images/F2L 16-5.png" alt="F2L 16-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-6" class="F2L16" name="case">
                        <label for="F2L16-6">
                            <img src="Images/F2L 16-6.png" alt="F2L 16-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-7" class="F2L16" name="case">
                        <label for="F2L16-7">
                            <img src="Images/F2L 16-7.png" alt="F2L 16-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L16-8" class="F2L16" name="case">
                        <label for="F2L16-8">
                            <img src="Images/F2L 16-8.png" alt="F2L 16-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="17">
                <button type="button" class="collapsible" id="F2L17Button">
                    <b>F2L 17</b> (<span id="F2L17Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-1" class="F2L17" name="case">
                        <label for="F2L17-1">
                            <img src="Images/F2L 17-1.png" alt="F2L 17-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-2" class="F2L17" name="case">
                        <label for="F2L17-2">
                            <img src="Images/F2L 17-2.png" alt="F2L 17-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-3" class="F2L17" name="case">
                        <label for="F2L17-3">
                            <img src="Images/F2L 17-3.png" alt="F2L 17-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-4" class="F2L17" name="case">
                        <label for="F2L17-4">
                            <img src="Images/F2L 17-4.png" alt="F2L 17-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-5" class="F2L17" name="case">
                        <label for="F2L17-5">
                            <img src="Images/F2L 17-5.png" alt="F2L 17-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-6" class="F2L17" name="case">
                        <label for="F2L17-6">
                            <img src="Images/F2L 17-6.png" alt="F2L 17-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-7" class="F2L17" name="case">
                        <label for="F2L17-7">
                            <img src="Images/F2L 17-7.png" alt="F2L 17-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L17-8" class="F2L17" name="case">
                        <label for="F2L17-8">
                            <img src="Images/F2L 17-8.png" alt="F2L 17-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="18">
                <button type="button" class="collapsible" id="F2L18Button">
                    <b>F2L 18</b> (<span id="F2L18Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-1" class="F2L18" name="case">
                        <label for="F2L18-1">
                            <img src="Images/F2L 18-1.png" alt="F2L 18-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-2" class="F2L18" name="case">
                        <label for="F2L18-2">
                            <img src="Images/F2L 18-2.png" alt="F2L 18-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-3" class="F2L18" name="case">
                        <label for="F2L18-3">
                            <img src="Images/F2L 18-3.png" alt="F2L 18-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-4" class="F2L18" name="case">
                        <label for="F2L18-4">
                            <img src="Images/F2L 18-4.png" alt="F2L 18-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-5" class="F2L18" name="case">
                        <label for="F2L18-5">
                            <img src="Images/F2L 18-5.png" alt="F2L 18-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-6" class="F2L18" name="case">
                        <label for="F2L18-6">
                            <img src="Images/F2L 18-6.png" alt="F2L 18-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-7" class="F2L18" name="case">
                        <label for="F2L18-7">
                            <img src="Images/F2L 18-7.png" alt="F2L 18-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L18-8" class="F2L18" name="case">
                        <label for="F2L18-8">
                            <img src="Images/F2L 18-8.png" alt="F2L 18-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="19">
                <button type="button" class="collapsible" id="F2L19Button">
                    <b>F2L 19</b> (<span id="F2L19Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-1" class="F2L19" name="case">
                        <label for="F2L19-1">
                            <img src="Images/F2L 19-1.png" alt="F2L 19-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-2" class="F2L19" name="case">
                        <label for="F2L19-2">
                            <img src="Images/F2L 19-2.png" alt="F2L 19-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-3" class="F2L19" name="case">
                        <label for="F2L19-3">
                            <img src="Images/F2L 19-3.png" alt="F2L 19-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-4" class="F2L19" name="case">
                        <label for="F2L19-4">
                            <img src="Images/F2L 19-4.png" alt="F2L 19-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-5" class="F2L19" name="case">
                        <label for="F2L19-5">
                            <img src="Images/F2L 19-5.png" alt="F2L 19-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-6" class="F2L19" name="case">
                        <label for="F2L19-6">
                            <img src="Images/F2L 19-6.png" alt="F2L 19-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-7" class="F2L19" name="case">
                        <label for="F2L19-7">
                            <img src="Images/F2L 19-7.png" alt="F2L 19-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L19-8" class="F2L19" name="case">
                        <label for="F2L19-8">
                            <img src="Images/F2L 19-8.png" alt="F2L 19-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="20">
                <button type="button" class="collapsible" id="F2L20Button">
                    <b>F2L 20</b> (<span id="F2L20Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-1" class="F2L20" name="case">
                        <label for="F2L20-1">
                            <img src="Images/F2L 20-1.png" alt="F2L 20-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-2" class="F2L20" name="case">
                        <label for="F2L20-2">
                            <img src="Images/F2L 20-2.png" alt="F2L 20-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-3" class="F2L20" name="case">
                        <label for="F2L20-3">
                            <img src="Images/F2L 20-3.png" alt="F2L 20-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-4" class="F2L20" name="case">
                        <label for="F2L20-4">
                            <img src="Images/F2L 20-4.png" alt="F2L 20-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-5" class="F2L20" name="case">
                        <label for="F2L20-5">
                            <img src="Images/F2L 20-5.png" alt="F2L 20-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-6" class="F2L20" name="case">
                        <label for="F2L20-6">
                            <img src="Images/F2L 20-6.png" alt="F2L 20-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-7" class="F2L20" name="case">
                        <label for="F2L20-7">
                            <img src="Images/F2L 20-7.png" alt="F2L 20-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L20-8" class="F2L20" name="case">
                        <label for="F2L20-8">
                            <img src="Images/F2L 20-8.png" alt="F2L 20-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="21">
                <button type="button" class="collapsible" id="F2L21Button">
                    <b>F2L 21</b> (<span id="F2L21Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-1" class="F2L21" name="case">
                        <label for="F2L21-1">
                            <img src="Images/F2L 21-1.png" alt="F2L 21-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-2" class="F2L21" name="case">
                        <label for="F2L21-2">
                            <img src="Images/F2L 21-2.png" alt="F2L 21-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-3" class="F2L21" name="case">
                        <label for="F2L21-3">
                            <img src="Images/F2L 21-3.png" alt="F2L 21-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-4" class="F2L21" name="case">
                        <label for="F2L21-4">
                            <img src="Images/F2L 21-4.png" alt="F2L 21-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-5" class="F2L21" name="case">
                        <label for="F2L21-5">
                            <img src="Images/F2L 21-5.png" alt="F2L 21-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-6" class="F2L21" name="case">
                        <label for="F2L21-6">
                            <img src="Images/F2L 21-6.png" alt="F2L 21-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-7" class="F2L21" name="case">
                        <label for="F2L21-7">
                            <img src="Images/F2L 21-7.png" alt="F2L 21-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L21-8" class="F2L21" name="case">
                        <label for="F2L21-8">
                            <img src="Images/F2L 21-8.png" alt="F2L 21-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="22">
                <button type="button" class="collapsible" id="F2L22Button">
                    <b>F2L 22</b> (<span id="F2L22Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-1" class="F2L22" name="case">
                        <label for="F2L22-1">
                            <img src="Images/F2L 22-1.png" alt="F2L 22-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-2" class="F2L22" name="case">
                        <label for="F2L22-2">
                            <img src="Images/F2L 22-2.png" alt="F2L 22-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-3" class="F2L22" name="case">
                        <label for="F2L22-3">
                            <img src="Images/F2L 22-3.png" alt="F2L 22-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-4" class="F2L22" name="case">
                        <label for="F2L22-4">
                            <img src="Images/F2L 22-4.png" alt="F2L 22-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-5" class="F2L22" name="case">
                        <label for="F2L22-5">
                            <img src="Images/F2L 22-5.png" alt="F2L 22-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-6" class="F2L22" name="case">
                        <label for="F2L22-6">
                            <img src="Images/F2L 22-6.png" alt="F2L 22-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-7" class="F2L22" name="case">
                        <label for="F2L22-7">
                            <img src="Images/F2L 22-7.png" alt="F2L 22-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L22-8" class="F2L22" name="case">
                        <label for="F2L22-8">
                            <img src="Images/F2L 22-8.png" alt="F2L 22-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="23">
                <button type="button" class="collapsible" id="F2L23Button">
                    <b>F2L 23</b> (<span id="F2L23Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-1" class="F2L23" name="case">
                        <label for="F2L23-1">
                            <img src="Images/F2L 23-1.png" alt="F2L 23-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-2" class="F2L23" name="case">
                        <label for="F2L23-2">
                            <img src="Images/F2L 23-2.png" alt="F2L 23-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-3" class="F2L23" name="case">
                        <label for="F2L23-3">
                            <img src="Images/F2L 23-3.png" alt="F2L 23-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-4" class="F2L23" name="case">
                        <label for="F2L23-4">
                            <img src="Images/F2L 23-4.png" alt="F2L 23-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-5" class="F2L23" name="case">
                        <label for="F2L23-5">
                            <img src="Images/F2L 23-5.png" alt="F2L 23-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-6" class="F2L23" name="case">
                        <label for="F2L23-6">
                            <img src="Images/F2L 23-6.png" alt="F2L 23-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-7" class="F2L23" name="case">
                        <label for="F2L23-7">
                            <img src="Images/F2L 23-7.png" alt="F2L 23-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L23-8" class="F2L23" name="case">
                        <label for="F2L23-8">
                            <img src="Images/F2L 23-8.png" alt="F2L 23-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="24">
                <button type="button" class="collapsible" id="F2L24Button">
                    <b>F2L 24</b> (<span id="F2L24Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-1" class="F2L24" name="case">
                        <label for="F2L24-1">
                            <img src="Images/F2L 24-1.png" alt="F2L 24-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-2" class="F2L24" name="case">
                        <label for="F2L24-2">
                            <img src="Images/F2L 24-2.png" alt="F2L 24-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-3" class="F2L24" name="case">
                        <label for="F2L24-3">
                            <img src="Images/F2L 24-3.png" alt="F2L 24-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-4" class="F2L24" name="case">
                        <label for="F2L24-4">
                            <img src="Images/F2L 24-4.png" alt="F2L 24-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-5" class="F2L24" name="case">
                        <label for="F2L24-5">
                            <img src="Images/F2L 24-5.png" alt="F2L 24-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-6" class="F2L24" name="case">
                        <label for="F2L24-6">
                            <img src="Images/F2L 24-6.png" alt="F2L 24-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-7" class="F2L24" name="case">
                        <label for="F2L24-7">
                            <img src="Images/F2L 24-7.png" alt="F2L 24-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L24-8" class="F2L24" name="case">
                        <label for="F2L24-8">
                            <img src="Images/F2L 24-8.png" alt="F2L 24-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="25">
                <button type="button" class="collapsible" id="F2L25Button">
                    <b>F2L 25</b> (<span id="F2L25Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-1" class="F2L25" name="case">
                        <label for="F2L25-1">
                            <img src="Images/F2L 25-1.png" alt="F2L 25-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-2" class="F2L25" name="case">
                        <label for="F2L25-2">
                            <img src="Images/F2L 25-2.png" alt="F2L 25-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-3" class="F2L25" name="case">
                        <label for="F2L25-3">
                            <img src="Images/F2L 25-3.png" alt="F2L 25-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-4" class="F2L25" name="case">
                        <label for="F2L25-4">
                            <img src="Images/F2L 25-4.png" alt="F2L 25-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-5" class="F2L25" name="case">
                        <label for="F2L25-5">
                            <img src="Images/F2L 25-5.png" alt="F2L 25-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-6" class="F2L25" name="case">
                        <label for="F2L25-6">
                            <img src="Images/F2L 25-6.png" alt="F2L 25-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-7" class="F2L25" name="case">
                        <label for="F2L25-7">
                            <img src="Images/F2L 25-7.png" alt="F2L 25-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L25-8" class="F2L25" name="case">
                        <label for="F2L25-8">
                            <img src="Images/F2L 25-8.png" alt="F2L 25-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="26">
                <button type="button" class="collapsible" id="F2L26Button">
                    <b>F2L 26</b> (<span id="F2L26Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-1" class="F2L26" name="case">
                        <label for="F2L26-1">
                            <img src="Images/F2L 26-1.png" alt="F2L 26-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-2" class="F2L26" name="case">
                        <label for="F2L26-2">
                            <img src="Images/F2L 26-2.png" alt="F2L 26-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-3" class="F2L26" name="case">
                        <label for="F2L26-3">
                            <img src="Images/F2L 26-3.png" alt="F2L 26-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-4" class="F2L26" name="case">
                        <label for="F2L26-4">
                            <img src="Images/F2L 26-4.png" alt="F2L 26-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-5" class="F2L26" name="case">
                        <label for="F2L26-5">
                            <img src="Images/F2L 26-5.png" alt="F2L 26-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-6" class="F2L26" name="case">
                        <label for="F2L26-6">
                            <img src="Images/F2L 26-6.png" alt="F2L 26-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-7" class="F2L26" name="case">
                        <label for="F2L26-7">
                            <img src="Images/F2L 26-7.png" alt="F2L 26-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L26-8" class="F2L26" name="case">
                        <label for="F2L26-8">
                            <img src="Images/F2L 26-8.png" alt="F2L 26-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="27">
                <button type="button" class="collapsible" id="F2L27Button">
                    <b>F2L 27</b> (<span id="F2L27Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-1" class="F2L27" name="case">
                        <label for="F2L27-1">
                            <img src="Images/F2L 27-1.png" alt="F2L 27-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-2" class="F2L27" name="case">
                        <label for="F2L27-2">
                            <img src="Images/F2L 27-2.png" alt="F2L 27-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-3" class="F2L27" name="case">
                        <label for="F2L27-3">
                            <img src="Images/F2L 27-3.png" alt="F2L 27-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-4" class="F2L27" name="case">
                        <label for="F2L27-4">
                            <img src="Images/F2L 27-4.png" alt="F2L 27-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-5" class="F2L27" name="case">
                        <label for="F2L27-5">
                            <img src="Images/F2L 27-5.png" alt="F2L 27-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-6" class="F2L27" name="case">
                        <label for="F2L27-6">
                            <img src="Images/F2L 27-6.png" alt="F2L 27-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-7" class="F2L27" name="case">
                        <label for="F2L27-7">
                            <img src="Images/F2L 27-7.png" alt="F2L 27-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L27-8" class="F2L27" name="case">
                        <label for="F2L27-8">
                            <img src="Images/F2L 27-8.png" alt="F2L 27-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="28">
                <button type="button" class="collapsible" id="F2L28Button">
                    <b>F2L 28</b> (<span id="F2L28Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-1" class="F2L28" name="case">
                        <label for="F2L28-1">
                            <img src="Images/F2L 28-1.png" alt="F2L 28-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-2" class="F2L28" name="case">
                        <label for="F2L28-2">
                            <img src="Images/F2L 28-2.png" alt="F2L 28-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-3" class="F2L28" name="case">
                        <label for="F2L28-3">
                            <img src="Images/F2L 28-3.png" alt="F2L 28-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-4" class="F2L28" name="case">
                        <label for="F2L28-4">
                            <img src="Images/F2L 28-4.png" alt="F2L 28-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-5" class="F2L28" name="case">
                        <label for="F2L28-5">
                            <img src="Images/F2L 28-5.png" alt="F2L 28-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-6" class="F2L28" name="case">
                        <label for="F2L28-6">
                            <img src="Images/F2L 28-6.png" alt="F2L 28-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-7" class="F2L28" name="case">
                        <label for="F2L28-7">
                            <img src="Images/F2L 28-7.png" alt="F2L 28-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L28-8" class="F2L28" name="case">
                        <label for="F2L28-8">
                            <img src="Images/F2L 28-8.png" alt="F2L 28-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="29">
                <button type="button" class="collapsible" id="F2L29Button">
                    <b>F2L 29</b> (<span id="F2L29Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-1" class="F2L29" name="case">
                        <label for="F2L29-1">
                            <img src="Images/F2L 29-1.png" alt="F2L 29-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-2" class="F2L29" name="case">
                        <label for="F2L29-2">
                            <img src="Images/F2L 29-2.png" alt="F2L 29-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-3" class="F2L29" name="case">
                        <label for="F2L29-3">
                            <img src="Images/F2L 29-3.png" alt="F2L 29-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-4" class="F2L29" name="case">
                        <label for="F2L29-4">
                            <img src="Images/F2L 29-4.png" alt="F2L 29-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-5" class="F2L29" name="case">
                        <label for="F2L29-5">
                            <img src="Images/F2L 29-5.png" alt="F2L 29-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-6" class="F2L29" name="case">
                        <label for="F2L29-6">
                            <img src="Images/F2L 29-6.png" alt="F2L 29-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-7" class="F2L29" name="case">
                        <label for="F2L29-7">
                            <img src="Images/F2L 29-7.png" alt="F2L 29-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L29-8" class="F2L29" name="case">
                        <label for="F2L29-8">
                            <img src="Images/F2L 29-8.png" alt="F2L 29-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="30">
                <button type="button" class="collapsible" id="F2L30Button">
                    <b>F2L 30</b> (<span id="F2L30Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-1" class="F2L30" name="case">
                        <label for="F2L30-1">
                            <img src="Images/F2L 30-1.png" alt="F2L 30-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-2" class="F2L30" name="case">
                        <label for="F2L30-2">
                            <img src="Images/F2L 30-2.png" alt="F2L 30-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-3" class="F2L30" name="case">
                        <label for="F2L30-3">
                            <img src="Images/F2L 30-3.png" alt="F2L 30-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-4" class="F2L30" name="case">
                        <label for="F2L30-4">
                            <img src="Images/F2L 30-4.png" alt="F2L 30-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-5" class="F2L30" name="case">
                        <label for="F2L30-5">
                            <img src="Images/F2L 30-5.png" alt="F2L 30-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-6" class="F2L30" name="case">
                        <label for="F2L30-6">
                            <img src="Images/F2L 30-6.png" alt="F2L 30-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-7" class="F2L30" name="case">
                        <label for="F2L30-7">
                            <img src="Images/F2L 30-7.png" alt="F2L 30-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L30-8" class="F2L30" name="case">
                        <label for="F2L30-8">
                            <img src="Images/F2L 30-8.png" alt="F2L 30-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="31">
                <button type="button" class="collapsible" id="F2L31Button">
                    <b>F2L 31</b> (<span id="F2L31Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-1" class="F2L31" name="case">
                        <label for="F2L31-1">
                            <img src="Images/F2L 31-1.png" alt="F2L 31-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-2" class="F2L31" name="case">
                        <label for="F2L31-2">
                            <img src="Images/F2L 31-2.png" alt="F2L 31-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-3" class="F2L31" name="case">
                        <label for="F2L31-3">
                            <img src="Images/F2L 31-3.png" alt="F2L 31-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-4" class="F2L31" name="case">
                        <label for="F2L31-4">
                            <img src="Images/F2L 31-4.png" alt="F2L 31-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-5" class="F2L31" name="case">
                        <label for="F2L31-5">
                            <img src="Images/F2L 31-5.png" alt="F2L 31-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-6" class="F2L31" name="case">
                        <label for="F2L31-6">
                            <img src="Images/F2L 31-6.png" alt="F2L 31-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-7" class="F2L31" name="case">
                        <label for="F2L31-7">
                            <img src="Images/F2L 31-7.png" alt="F2L 31-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L31-8" class="F2L31" name="case">
                        <label for="F2L31-8">
                            <img src="Images/F2L 31-8.png" alt="F2L 31-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="32">
                <button type="button" class="collapsible" id="F2L32Button">
                    <b>F2L 32</b> (<span id="F2L32Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-1" class="F2L32" name="case">
                        <label for="F2L32-1">
                            <img src="Images/F2L 32-1.png" alt="F2L 32-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-2" class="F2L32" name="case">
                        <label for="F2L32-2">
                            <img src="Images/F2L 32-2.png" alt="F2L 32-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-3" class="F2L32" name="case">
                        <label for="F2L32-3">
                            <img src="Images/F2L 32-3.png" alt="F2L 32-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-4" class="F2L32" name="case">
                        <label for="F2L32-4">
                            <img src="Images/F2L 32-4.png" alt="F2L 32-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-5" class="F2L32" name="case">
                        <label for="F2L32-5">
                            <img src="Images/F2L 32-5.png" alt="F2L 32-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-6" class="F2L32" name="case">
                        <label for="F2L32-6">
                            <img src="Images/F2L 32-6.png" alt="F2L 32-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-7" class="F2L32" name="case">
                        <label for="F2L32-7">
                            <img src="Images/F2L 32-7.png" alt="F2L 32-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L32-8" class="F2L32" name="case">
                        <label for="F2L32-8">
                            <img src="Images/F2L 32-8.png" alt="F2L 32-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="33">
                <button type="button" class="collapsible" id="F2L33Button">
                    <b>F2L 33</b> (<span id="F2L33Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-1" class="F2L33" name="case">
                        <label for="F2L33-1">
                            <img src="Images/F2L 33-1.png" alt="F2L 33-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-2" class="F2L33" name="case">
                        <label for="F2L33-2">
                            <img src="Images/F2L 33-2.png" alt="F2L 33-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-3" class="F2L33" name="case">
                        <label for="F2L33-3">
                            <img src="Images/F2L 33-3.png" alt="F2L 33-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-4" class="F2L33" name="case">
                        <label for="F2L33-4">
                            <img src="Images/F2L 33-4.png" alt="F2L 33-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-5" class="F2L33" name="case">
                        <label for="F2L33-5">
                            <img src="Images/F2L 33-5.png" alt="F2L 33-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-6" class="F2L33" name="case">
                        <label for="F2L33-6">
                            <img src="Images/F2L 33-6.png" alt="F2L 33-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-7" class="F2L33" name="case">
                        <label for="F2L33-7">
                            <img src="Images/F2L 33-7.png" alt="F2L 33-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L33-8" class="F2L33" name="case">
                        <label for="F2L33-8">
                            <img src="Images/F2L 33-8.png" alt="F2L 33-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="34">
                <button type="button" class="collapsible" id="F2L34Button">
                    <b>F2L 34</b> (<span id="F2L34Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-1" class="F2L34" name="case">
                        <label for="F2L34-1">
                            <img src="Images/F2L 34-1.png" alt="F2L 34-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-2" class="F2L34" name="case">
                        <label for="F2L34-2">
                            <img src="Images/F2L 34-2.png" alt="F2L 34-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-3" class="F2L34" name="case">
                        <label for="F2L34-3">
                            <img src="Images/F2L 34-3.png" alt="F2L 34-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-4" class="F2L34" name="case">
                        <label for="F2L34-4">
                            <img src="Images/F2L 34-4.png" alt="F2L 34-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-5" class="F2L34" name="case">
                        <label for="F2L34-5">
                            <img src="Images/F2L 34-5.png" alt="F2L 34-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-6" class="F2L34" name="case">
                        <label for="F2L34-6">
                            <img src="Images/F2L 34-6.png" alt="F2L 34-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-7" class="F2L34" name="case">
                        <label for="F2L34-7">
                            <img src="Images/F2L 34-7.png" alt="F2L 34-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L34-8" class="F2L34" name="case">
                        <label for="F2L34-8">
                            <img src="Images/F2L 34-8.png" alt="F2L 34-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="35">
                <button type="button" class="collapsible" id="F2L35Button">
                    <b>F2L 35</b> (<span id="F2L35Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-1" class="F2L35" name="case">
                        <label for="F2L35-1">
                            <img src="Images/F2L 35-1.png" alt="F2L 35-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-2" class="F2L35" name="case">
                        <label for="F2L35-2">
                            <img src="Images/F2L 35-2.png" alt="F2L 35-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-3" class="F2L35" name="case">
                        <label for="F2L35-3">
                            <img src="Images/F2L 35-3.png" alt="F2L 35-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-4" class="F2L35" name="case">
                        <label for="F2L35-4">
                            <img src="Images/F2L 35-4.png" alt="F2L 35-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-5" class="F2L35" name="case">
                        <label for="F2L35-5">
                            <img src="Images/F2L 35-5.png" alt="F2L 35-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-6" class="F2L35" name="case">
                        <label for="F2L35-6">
                            <img src="Images/F2L 35-6.png" alt="F2L 35-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-7" class="F2L35" name="case">
                        <label for="F2L35-7">
                            <img src="Images/F2L 35-7.png" alt="F2L 35-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L35-8" class="F2L35" name="case">
                        <label for="F2L35-8">
                            <img src="Images/F2L 35-8.png" alt="F2L 35-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="36">
                <button type="button" class="collapsible" id="F2L36Button">
                    <b>F2L 36</b> (<span id="F2L36Count">0</span>/8)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-1" class="F2L36" name="case">
                        <label for="F2L36-1">
                            <img src="Images/F2L 36-1.png" alt="F2L 36-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-2" class="F2L36" name="case">
                        <label for="F2L36-2">
                            <img src="Images/F2L 36-2.png" alt="F2L 36-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-3" class="F2L36" name="case">
                        <label for="F2L36-3">
                            <img src="Images/F2L 36-3.png" alt="F2L 36-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-4" class="F2L36" name="case">
                        <label for="F2L36-4">
                            <img src="Images/F2L 36-4.png" alt="F2L 36-4">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-5" class="F2L36" name="case">
                        <label for="F2L36-5">
                            <img src="Images/F2L 36-5.png" alt="F2L 36-5">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-6" class="F2L36" name="case">
                        <label for="F2L36-6">
                            <img src="Images/F2L 36-6.png" alt="F2L 36-6">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-7" class="F2L36" name="case">
                        <label for="F2L36-7">
                            <img src="Images/F2L 36-7.png" alt="F2L 36-7">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L36-8" class="F2L36" name="case">
                        <label for="F2L36-8">
                            <img src="Images/F2L 36-8.png" alt="F2L 36-8">
                        </label>
                    </div>  
                </div>

                <input type="checkbox" class="toggleGroup" id="37">
                <button type="button" class="collapsible" id="F2L37Button">
                    <b>F2L 37</b> (<span id="F2L37Count">0</span>/2)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L37-1" class="F2L37" name="case">
                        <label for="F2L37-1">
                            <img src="Images/F2L 37-1.png" alt="F2L 37-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L37-2" class="F2L37" name="case">
                        <label for="F2L37-2">
                            <img src="Images/F2L 37-2.png" alt="F2L 37-2">
                        </label>
                    </div>     
                </div>

                <input type="checkbox" class="toggleGroup" id="38">
                <button type="button" class="collapsible" id="F2L38Button">
                    <b>F2L 38</b> (<span id="F2L38Count">0</span>/4)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L38-1" class="F2L38" name="case">
                        <label for="F2L38-1">
                            <img src="Images/F2L 38-1.png" alt="F2L 38-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L38-2" class="F2L38" name="case">
                        <label for="F2L38-2">
                            <img src="Images/F2L 38-2.png" alt="F2L 38-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L38-3" class="F2L38" name="case">
                        <label for="F2L38-3">
                            <img src="Images/F2L 38-3.png" alt="F2L 38-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L38-4" class="F2L38" name="case">
                        <label for="F2L38-4">
                            <img src="Images/F2L 38-4.png" alt="F2L 38-4">
                        </label>
                    </div>
                </div>

                <input type="checkbox" class="toggleGroup" id="39">
                <button type="button" class="collapsible" id="F2L39Button">
                    <b>F2L 39</b> (<span id="F2L39Count">0</span>/4)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L39-1" class="F2L39" name="case">
                        <label for="F2L39-1">
                            <img src="Images/F2L 39-1.png" alt="F2L 39-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L39-2" class="F2L39" name="case">
                        <label for="F2L39-2">
                            <img src="Images/F2L 39-2.png" alt="F2L 39-2">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L39-3" class="F2L39" name="case">
                        <label for="F2L39-3">
                            <img src="Images/F2L 39-3.png" alt="F2L 39-3">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L39-4" class="F2L39" name="case">
                        <label for="F2L39-4">
                            <img src="Images/F2L 39-4.png" alt="F2L 39-4">
                        </label>
                    </div>
                </div>

                <input type="checkbox" class="toggleGroup" id="40">
                <button type="button" class="collapsible" id="F2L40Button">
                    <b>F2L 40</b> (<span id="F2L40Count">0</span>/2)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L40-1" class="F2L40" name="case">
                        <label for="F2L40-1">
                            <img src="Images/F2L 40-1.png" alt="F2L 40-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L40-2" class="F2L40" name="case">
                        <label for="F2L40-2">
                            <img src="Images/F2L 40-2.png" alt="F2L 40-2">
                        </label>
                    </div>     
                </div>

                <input type="checkbox" class="toggleGroup" id="41">
                <button type="button" class="collapsible" id="F2L41Button">
                    <b>F2L 41</b> (<span id="F2L41Count">0</span>/2)
                </button>
                <div class="grid-container">
                    <div class="grid-item">
                        <input type="checkbox" id="F2L41-1" class="F2L41" name="case">
                        <label for="F2L41-1">
                            <img src="Images/F2L 41-1.png" alt="F2L 41-1">
                        </label>
                    </div>
                    <div class="grid-item">
                        <input type="checkbox" id="F2L41-2" class="F2L41" name="case">
                        <label for="F2L41-2">
                            <img src="Images/F2L 41-2.png" alt="F2L 41-2">
                        </label>
                    </div>     
                </div>

            </div>

            <div class="right-block">
                <button type="submit" onclick="loadCases(false)" class="train" id="start" disabled>Start</button>
                <button type="submit" onclick="loadCases(true)" class="train" id="recap" disabled>Recap</button>
                <p id="selected">0 cases selected</p>
                <button type="button" onclick="toggleAll(true)" class="selectToggle" id="selectAll">Select All</button>
                <button type="button" onclick="toggleAll(false)" class="selectToggle" id="deselectAll">Deselect All</button>
                <button type="button" onclick="toggleExpand(true)" class="collapseToggle" id="open">Expand All</button>
                <button type="button" onclick="toggleExpand(false)" class="collapseToggle" id="close">Collapse All</button>
            </div>
        </div>


        <script src="home-screen.js"></script>
    </body>
</html>
