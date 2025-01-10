/* 
 * Morgan Yeh 
 * Functionality for home screen
 */

const F2LCount = document.getElementsByClassName('grid-container').length;
const coll = document.querySelectorAll(".collapsible");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//open and collapse F2L Selection
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// display number of cases selected
document.querySelectorAll("input[type=checkbox]").forEach(i => {
    i.onclick = () => showChecked();

});

// select/deselct cases from a group when checkbox is clicked
document.querySelectorAll(".toggleGroup").forEach(i => {
    i.onclick = () => toggleSelectGroup(i);

});


// save checkboxes when clicked
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', saveCheckboxStates);
});

// Load checkbox states on page load
document.addEventListener('DOMContentLoaded', loadCheckboxStates);



/**
 * saves checkbox states to Local Storage
 */
function saveCheckboxStates() {
    checkboxes.forEach((checkbox) => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
}

/**
 * loads checkbox states from Local Storage
 */
function loadCheckboxStates() {
    checkboxes.forEach((checkbox) => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState !== null) {
            checkbox.checked = savedState === 'true';
        }
    });

    //display number of cases selected
    showChecked();
}





/**
 * create array of selected ZBLS cases
 * @param {Boolean recap - whether cases should be recapped
 */
function loadCases(recap) {
    //get NodeList of all zbls cases and convert to array
    var nlCases = document.getElementsByName("case");
    var cases = Array.from(nlCases);
    //get case ids, checked status
    var selected = getInfo(cases, isCaseSelected);
    var caseIds = getInfo(cases, getCaseId);

    //add value of recap to front of cases
    cases.unshift(recap);

    //go to trainer page and pass data to other file
    window.location.href = "trainer.html";
    sessionStorage.setItem("cases", JSON.stringify(cases));
    sessionStorage.setItem("ids", JSON.stringify(caseIds));
    sessionStorage.setItem("selected", JSON.stringify(selected));
}

/**
 * returns the id of checkbox representing ZBLS case c
 * @param {HTML Element} c - checkbox for ZBLS case
 * @returns {String} - id of c
 */
function getCaseId(c) {
    return c.getAttribute("id");
}

/**
 * returns whether checkbox representing a ZBLS case c is selected
 * @param {HTML Element} c - checkbox for ZBLS case
 * @returns {Boolean} - whether c is checked
 */
function isCaseSelected(c) {
    return c.checked;
}

/**
 * returns an array containing specific case info depending on function passed
 * @param {Array} cases - HTML elements for each ZBLS case
 * @param {Function} func - function to be applied to each case
 * @returns {Array} - information about each case
 */
function getInfo(cases, func) {
    var infoArr = [];

    for (var i = 0; i < cases.length; i++) {
        infoArr[i] = func(cases[i]);
    }

    return infoArr;
}

/**
 * Expands or Collapse all .collapsible elements
 * @param {Boolean} val - whether the elements should be expanded
 */
function toggleExpand(val) {
    Array.from(coll).forEach(span => {
        var content = span.nextElementSibling;
        var condition;
        var result;
        switch (val) {
            case false:
                condition = content.style.maxHeight === content.scrollHeight + "px";
                result = null;
                break;
            case true:
                condition = content.style.maxHeight === null || content.style.maxHeight === "";
                result = content.scrollHeight + "px";
                break;
            default:
        }
        if (condition) {
            span.classList.toggle("active");
            content.style.maxHeight = result;
        }
    });
}


/**
 * Select or deselect all ZBLS cases and display number of cases selected
 * @param {Boolean} val - whether each case should be selected
 */
function toggleAll(val) {
    var toggles = document.querySelectorAll('.toggleGroup');

    //change value for each ZBLS case
    for (var i = 0; i < toggles.length; i++) {
        //select or deselect the toggleGroup and apply val to cases in group
        toggles[i].checked = val;
        toggles[i].dispatchEvent(new Event("click")); //trigger a click
        toggleSelectGroup(toggles[i]);
    }
}

/**
 * select or deselect all ZBLS cases in an F2L group
 * @param {input[type="checkbox"]} cb - A checkbox from the toggleGroup class
 */
function toggleSelectGroup(cb) {
    var num = cb.getAttribute("id");
    var cases = document.querySelectorAll(".F2L" + num);

    for (var i = 0; i < cases.length; i++) {
        //value of all cases is whether cb is checked or not
        cases[i].checked = cb.checked;
    }

    //display number of cases selected
    showChecked();
}

/**
 * Enables/Disables start and recap buttons 
 * @param {Number} count - number of total zbls cases selected
 */
function changeStartStates(count) {
    var isDisabled;
    var start = document.getElementById("start");
    var recap = document.getElementById("recap");

    if (count === 0) {
        isDisabled = true;
    } else {
        isDisabled = false;
    }

    start.disabled = isDisabled;
    recap.disabled = isDisabled;
}

/**
 * Change a given button's colour given number of selected cases and total cases
 * @param {Number} count - number of cases selected
 * @param {Number} total - total cases corresponding to the button
 * @param {Button} b - button to change colour of
 * @param {input[type="checkbox"]} cb = checkbox to change state of
 */
function changeColourAndState(count, total, b, cb) {
    var c = "";
    var isSelected;

    //change colour of button depending on number of cases selected
    if (count === total) {
        c = "#40B5AD";
        isSelected = true;
    } else if (count !== 0) {
        c = "#F4C430";
        isSelected = false;
    } else {
        c = "#C0C0C0";
        isSelected = false;
    }

    //change colour of b and state of cb
    b.style.background = c;
    cb.checked = isSelected;
}

/**
 * displays number of cases selected for a given F2L group
 * @param {String} caseId - F2L case number
 */
function showCheckedGroup(caseId) {
    var caseNumber = caseId.substring(3);
    var count = document.querySelectorAll(".F2L" + caseNumber + ":checked").length;
    var totalCases = document.querySelectorAll(".F2L" + caseNumber).length;
    var button = document.getElementById("F2L" + caseNumber + "Button");
    var checkbox = document.getElementById(caseNumber);

    //display count
    document.getElementById("F2L" + caseNumber + "Count").innerHTML = count;

    //change button colour and checkbox state based on number of cases selected
    changeColourAndState(count, totalCases, button, checkbox);

}

/**
 * displays the number of ZBLS cases selected
 */
function showChecked() {
    var output;
    var count = 0;

    //display number of cases selected in each F2L group
    for (var i = 1; i <= F2LCount; i++) {
        showCheckedGroup("F2L" + i);
        //add count for each case to total count
        count += getCaseCount(i);
    }

    if (count === 1) {
        output = count + " case selected";
    } else {
        output = count + " cases selected";
    }

    //display total number of cases selected
    document.getElementById('selected').innerHTML = output;
    //change states of start/recap buttons
    changeStartStates(count);
}


/**
 * produces the number of ZBLS cases selected given an F2L case
 * @param {Number} num - F2L case number to get count from
 * @returns {Number} - number of cases selected
 */
function getCaseCount(num) {
    return document.querySelectorAll(".F2L" + num + ":checked").length;
}



