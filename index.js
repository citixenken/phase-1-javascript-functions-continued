// code your solution here

//1. saturdayFun function
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
// console.log(saturdayFun("code"));
// console.log(saturdayFun());

//2. mondayWork function
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
// console.log(mondayWork("code"));
// console.log(mondayWork());

//3. wrapAdjective function
function wrapAdjective(ending = "*") {
  const innerFn = function (occassion = "special") {
    return `You are ${ending}${occassion}${ending}!`;
  };
  //   return innerFn("beautiful");
  return innerFn;
}
// console.log(wrapAdjective("%")("a dedicated programmer"));
