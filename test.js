function getTimeString(time){
  const hour = parseInt(time / 3600);
  const remainingTime = time % 3600;
  const minutes =  parseInt(remainingTime / 60);
  const seconds = remainingTime % 60;


  return `${hour} hour ${minutes} minutes ${seconds} seconds ago`;
 
}

console.log(getTimeString(724));