var readinput = require('../readinput');

readinput(2).then((input)=>{

  var result = input.split('\n')
               .map((v)=>{return v.split('x').map((v)=>{return parseInt(v);});})
               .map((v)=>{ return ribbonRequired.apply(null, v);})
               .reduce((old, newV) => { return old + newV; }, 0);

  console.log( result);
});

function wrapRibbon (l, w, h) {
  dimArray = [l,w,h].sort((a,b)=>{
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  return (dimArray[1]*2) + (dimArray[0]*2);
}

function bowRibbon (l, w, h) {
  return l * w * h;
}

function ribbonRequired (l, w, h) {
  return wrapRibbon(l,w,h) + bowRibbon(l,w,h);
}

