const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(aryOfObjs){
  let winner = aryOfObjs.find(obj=>obj.result==="W");
  console.log(winner);
  return winner.year;
}
