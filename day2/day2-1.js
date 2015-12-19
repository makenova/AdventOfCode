var readinput = require('../readinput');

readinput(2).then((input)=>{
  var result = input
    .split('\n')
    .map((v) => { return v.split('x').map((v)=>{return parseInt(v);});})
    .map((v) => {return surfaceArea.apply(null, v);})
    .reduce((old, newV)=>{return old + newV;} ,0);

    console.log(result);
});


function area(l, w){
  return l * w;
}

function slack(l, w, h) {
  return Math.min(area(l,w), area(l,h), area(w,h));
}

function surfaceArea(l, w, h) {
  var paper = ((2*area(l,w)) + (2*area(w,h)) + (2*area(h,l)));
  var slackPaper = slack(l,w,h);
  return paper + slackPaper;
}
