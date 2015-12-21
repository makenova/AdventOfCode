'use strict';

function createStatesArray(length) {
  var statesArray = [];
  for(var i = 0; i < length; i++){
    statesArray.push({state:0});
  }
  return statesArray;
}

function createMatrix (x, y) {
  var matrix = [];
  for (var i = 0; i < x; i++){
    matrix.push(createStatesArray(y));
  }
  return matrix;
}

function getX(location) {
  return parseInt(location.substring(0,location.indexOf(',')));
}

function getY(location) {
  return parseInt(location.substring(location.indexOf(',')+1));
}

function parseCmd (cmd) {
  var cmdObj = {};
  var cmdArray = cmd.split(' ');

  // toggle e.g. toggle 628,958 through 811,992
  // turn on or turn off e.g. turn on 31,760 through 655,892
  var cornerA = cmdArray.filter(str => { return str.match(/.*\,.*/); })[0];
  cmdObj.x1 = getX(cornerA);
  cmdObj.y1 = getY(cornerA);

  var cornerB = cmdArray[cmdArray.length - 1];
  cmdObj.x2 = getX(cornerB);
  cmdObj.y2 = getY(cornerB);

  return cmdObj;
}

module.exports = class LightMatrix {
  constructor (x, y) {
    this.rows = x;
    this.columns = y;
    this.lights = createMatrix(x, y);
  }

  get lit () { return this.howManyLit(); }

  get howLit () {return this.litLevel(); }

  bling (cmd) {
    var cmdObj = parseCmd(cmd);

    for (var i = cmdObj.x1; i <= cmdObj.x2; i++) {
      for (var j = cmdObj.y1; j <= cmdObj.y2; j++) {
        var light = this.lights[i][j];

        if (cmd.indexOf('toggle') === 0){
          light.state = (light.state === 0) ? 1 : 0;
        } else if (cmd.indexOf('turn on') === 0){
          light.state = 1;
        } else {
          light.state = 0;
        }
      }
    }

    return;
  }

  newBling (cmd) {
    var cmdObj = parseCmd(cmd);

    for (var i = cmdObj.x1; i <= cmdObj.x2; i++) {
      for (var j = cmdObj.y1; j <= cmdObj.y2; j++) {
        var light = this.lights[i][j];

        if (cmd.indexOf('toggle') >= 0){
          light.state += 2;
        } else if (cmd.indexOf('turn on') >= 0){
          light.state++;
        } else {
          if (light.state > 0) light.state-- ;
        }
      }
    }
    return;
  }

  printMatrix () {
    this.lights.forEach((row)=>{
      console.log(row.reduce((oldCol, newCol)=>{
        return `${oldCol}${newCol.state} `; 
      },''));
    });
  }

  howManyLit () {
    var count = 0;
    for (var i = 0; i < this.rows; i++){
      for (var j = 0; j < this.lights[i].length; j++)
        if(this.lights[i][j].state) count++;
    }
    return count;
  }

  litLevel () {
    var level = 0;

    for (var i = 0; i < this.rows; i++){
      for (var j = 0; j < this.lights[i].length; j++)
        level += this.lights[i][j].state;
    }
    return level;
  }
};
