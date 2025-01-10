/* 
 * Morgan Yeh
 * Functionallity for trainer screen
 */

//get case data from home-screen.js
var cases = JSON.parse(sessionStorage.getItem("cases"));
var selected = JSON.parse(sessionStorage.getItem("selected"));
var caseIds = JSON.parse(sessionStorage.getItem("ids"));
//get scrambles and algorithms, convert to proper format
var algs = convertArray(JSON.parse(sessionStorage.getItem("algs")));
var scrambles = convertArray(JSON.parse(sessionStorage.getItem("scrambles")));

var recap = cases.shift(); //whether trainer is in recap mode
var toTrain = loadSelectedCases();
var toRecap = copyArray(toTrain);

var timerStatus; // whether timer should be running
var milliseconds;
var timerRef = document.querySelector(".timer-display");
var int = null;

var scrambleRef = document.querySelector(".scramble");
var prevCase;
var prevScramble;
var count;

var againClicked = false; //again button not clicked by default

//setup trainer
trainerSetup();


/**
 * sets up trainer screen
 */
function trainerSetup() {
    timerStatus = "Stop";
    seconds = 0;
    milliseconds = 0;

    count = 0;

    //generate a new scramble from one of the selected cases
    prevCase = generateScramble();

    //display number of cases selected and to recap (if in recap mode)
    displayCaseCount(toTrain, "numSelected", "selected");
    if (recap) {
        displayCaseCount(toRecap, "numRecap", "to recap");
    }

}

function goBack() {
    window.location.href = 'home.html';
}

/**
 * generates a scramble for a random ZBLS Case that is selected
 * @returns {zblsCase} - the case that was generated
 */
function generateScramble() {
    var c; //zblsCase object
    var arr;
    var scram;
    var rNum;

    //deterimine which array to get case from
    if (recap) {
        arr = toRecap;
    } else {
        arr = toTrain;
    }

    //pick random case from arr and get its scramble
    rNum = Math.floor(Math.random() * arr.length);
    c = arr[rNum];
    scram = "Scramble: " + c.getSetup();

    //display scramble
    scrambleRef.innerHTML = scram;
    prevScramble = scram;

    return c;
}

/**
 * generates the selected zbls cases
 * @returns {Array} - array of selected zblsCase objects
 */
function loadSelectedCases() {
    var selectedCases = [];

    for (var i = 0; i < selected.length; i++) {
        //only proceed if current case is selected
        if (selected[i]) {
            //get case information from arrays
            var caseName = "ZBLS " + caseIds[i].substring(3);
            var imgPath = "Images/F2L " + caseIds[i].substring(3) + ".png";
            var setupAlgs = scrambles[i];
            var alg = algs[i];

            //instantiate new zblsCase object and add to selectedCases
            var c = new zblsCase(caseName, imgPath, setupAlgs, alg, selected[i]);
            selectedCases.push(c);
        }
    }

    return selectedCases;
}


/**
 * convert an existing array to an array of arrays
 * @param {Array} arr - original array (not nested)
 * @returns {Array} - new nested array
 */
function convertArray(arr) {
    var j = 0;
    var newArr = [];

    //convert array to nested array of scrambles/algs
    for (var i = 0; i < selected.length; i++) {
        var subArr = [];
        var count = arr[j]; //length of sub array         

        //create sub array of length count
        for (var m = 0; m < count; m++) {
            j++;
            subArr[m] = arr[j];
        }

        //add subArr to newArr at index i
        newArr[i] = subArr;
        j++;
    }

    return newArr;
}


/**
 * create a copy of an existing array
 * @param {Array} arr - original array to be copied
 * @returns {Array} - copied array
 */
function copyArray(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }

    return newArr;
}

/**
 * display number of cases to train
 * @param {Array} arr - cases to train
 * @param {String} id - id of HTML element to display to
 * @param {String} message - message to display
 */
function displayCaseCount(arr, id, message) {
    var output;
    var count = arr.length;

    if (count === 1) {
        output = count + " case " + message;
    } else {
        output = count + " cases " + message;
    }

    document.getElementById(id).innerHTML = output;
}

/**
 * removes a specifed ZBLS case from toRecap
 * @param {zblsCase} c - case to remove
 */
function removeElement(c) {
    //get index of c and remove it from toRecap
    var index = toRecap.indexOf(c);
    toRecap.splice(index, 1);

    //check if toRecap is empty
    if (toRecap.length === 0) {
        //go back to train mode
        recap = false;
        document.getElementById("numRecap").innerHTML = "";
        //hide again button
        document.querySelector("#again").hidden = true;

    } else {
        displayCaseCount(toRecap, "numRecap", "to recap");
    }
}

function getAlgList() {
    var algList = "Algs:<br>";
    var algs = prevCase.getAlgsArray();

    for (var i = 0; i < algs.length; i++) {
        algList += "- " + algs[i] + "<br>";
    }

    return algList;
}

function recapCaseAgain() {
    var name = document.querySelector("#case-name").innerHTML;
    var c;

    

    if (againClicked === false) {
        alert("Recap case again?");
        
        for (var i = 0; i < toTrain.length; i++) {
            var train = toTrain[i];

            if (train.getName() === name) {
                c = train;
            }
        }

        toRecap.push(c);
        displayCaseCount(toRecap, "numRecap", "to recap");
        againClicked = true;
        document.querySelector("#again").hidden = true;
    }

}

/*
 * displays information about previous ZBLS Case
 */
function displayCaseInfo() {
    count++; //increment number of results

    //display case information
    document.querySelector("#case-text").innerHTML = "Result #" + count;
    document.querySelector("#case-time").innerHTML = timerRef.textContent;
    document.querySelector("#case-time").hidden = false;
    document.querySelector("#case-name").innerHTML = prevCase.getName();
    document.querySelector("#case-scram").innerHTML = prevScramble;
    document.querySelector("#case-algs").innerHTML = getAlgList();

    //display again button if in recap mode
    if (recap) {
        document.querySelector("#again").hidden = false;
    }


    //display image of case
    var imgRef = document.querySelector("#case-img");
    imgRef.src = prevCase.getImg();
    imgRef.alt = prevCase.getName();
    imgRef.width = 150;
    imgRef.height = 150;
}



/**
 * Displays time while timer is running
 */
function displayTimer() {
    milliseconds += 10;

    var time = String((milliseconds / 1000).toFixed(2));

    //display time
    timerRef.innerHTML = `${time}`;
}


// check if space bar is held down
window.addEventListener('keydown', (event) => {
    event.preventDefault();

    //start or stop timer depending on value of timerStatus
    if (event.key === " " && timerStatus === "Stop") {
        timerRef.style.color = "#40B5AD";
    } else if (event.key === " " && timerStatus === "Start") {
        //stop timer and change timerStatus
        timerStatus = "Paused";
        clearInterval(int);

        //change text color
        timerRef.style.color = "#E34234";
    } else if(event.key === "Backspace" && recap 
            && toTrain.length !== toRecap.length) { //shortcut for recap again
        recapCaseAgain();
    }
});

//check if spacebar is released
window.addEventListener('keyup', (event) => {
    event.preventDefault();

    //change text to black
    timerRef.style.color = "black";

    //start or stop timer depending on value of timerStatus
    if (event.key === " " && timerStatus === "Stop") {
        //reset time and change timerStatus
        milliseconds = 0;

        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);

        timerStatus = "Start";
    } else if (event.key === " " && timerStatus === "Paused") {
        timerStatus = "Stop";

        //remove c from if in recap mode
        if (recap) {
            removeElement(prevCase);
        }

        //generate new scramble and display prevCase information
        againClicked = false;
        displayCaseInfo();
        prevCase = generateScramble();

    }
});


