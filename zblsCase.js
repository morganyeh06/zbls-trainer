/* 
 * Morgan Yeh
 * 2024/12/23
 * Class to represent an zblsCase object
 */

class zblsCase {
    
    /**
     * Constructor for zblsCase object
     * @param {String} name - name of case
     * @param {String} img - image url for case
     * @param {Array} setups - scrambles to set up to case
     * @param {Array} algs - algorithms to solve case
     * @param {Boolean} selected - whether the case has been selected
     * @returns {zblsCase} - new zblsCase object with all attributes specified
     */
    constructor(name, img, setups, algs, selected) {
        this.name = name;
        this.img = img;
        this.setups = setups;
        this.algs = algs;
        this.selected = selected;
    }
    
    /**
     * Getter for name
     * @returns {name}
     */
    getName() {
        return this.name;
    }
    
    /**
     * setter for name
     * @param {String} name - new name of case
     */
    setName(name) {
        this.name = name;
    }
    
    /**
     * getter for img
     * @returns {img} - image url of zblsCase
     */
    getImg() {
        return this.img;
    }
    
    /**
     * setter for img
     * @param {type} img - url of new image
     */
    setImg(img) {
        this.img = img;
    }
    
    /**
     * generates a scramble for a zblsCase object
     * @returns {String} moves - moves to set up to zblsCase
     */
    getSetup() {
        var moves = "";
        var auf;
        var rNum1 = Math.floor(Math.random() * this.setups.length); //which index in setups array to use
        var rNum2 = Math.floor(Math.random() * 4) + 1; //number to decide AUF
        
        //generate AUF at end of scramble based on value of rNum2
        if (rNum2 === 1) {
            auf = "";
        } else if (rNum2 === 2) {
            auf = " U";
        } else if (rNum2 === 3) {
            auf = " U'";
        } else {
            auf = " U2";
        }
        
        // produce scramble
        moves = this.setups[rNum1] + auf;
        
        return moves;
    }
    
    /**
     * setter for individual scrambles in setups array
     * @param {Int} i - index in array to change scramble
     * @param {String} setup - new setup moves
     */
    setSetup(i, setup) {
        this.setups[i] = setup;
    }
    
    /**
     * getter for array of setup moves
     * @returns {Array} - scrambles to set up to case
     */
    getSetupArray() {
        return this.setups;
    }
    
    /**
     * setter for array of setups
     * @param {Array} setups - new array of setup moves
     */
    setSetupArray(setups) {
        this.setups = setups;
    }
    
    /**
     * Getter for individual algorithm at specific index
     * @param {int} i - index of algs array to get algorithm from
     * @returns {String} - algorithm to solve case
     */
    getAlg(i) {
        return this.algs[i];
    }
    
    /**
     * setter for individual algorithm in algs array
     * @param {Int} i - index to change to
     * @param {String} alg = new algorithm
     */
    setAlg(i, alg) {
        this.algs[i] = alg;
    }
    
    /**
     * getter for algs
     * @returns {Array} - algorithms to solve case
     */
    getAlgsArray() {
        return this.algs;
    }
    
    /**
     * setter for algs array
     * @param {Array} algs - new array of algorithms
     */
    setAlgsArray(algs) {
        this.algs = algs;
    }
    
    /**
     * getter for selected
     * @returns {Boolean} - whether case is selected
     */
    isSelected() {
        return this.selected;
    }
    
    /**
     * setter for selected
     * @param {Boolean} selected - new value of selected
     */
    setSelected(selected) {
        this.selected = selected;
    }
    
    /**
     * toString method for zblsCase
     * @returns {String} - string representation of zblsCase object
     */
    toString() {
        return "zblsCase/n" + "- name: " + this.name + "\n"
                            + "- img: " + this.img; + "\n"
                            + "- setups: " + this.setups + "\n"
                            + "- algs: " + this.algs + "\n"
                            + "- selected: " + this.selected;
    }
    
}