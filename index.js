// Code your solution in this file!

function distanceFromHqInBlocks (intNum) {
         if (intNum-42 <0) {
           return 8;
         } else {
           return (intNum - 42);
         }
}

function distanceFromHqInFeet(intNum){
         intDistanceInBlocks = distanceFromHqInBlocks(intNum);
         return (intDistanceInBlocks*0.003030);
}