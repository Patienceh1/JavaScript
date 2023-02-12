// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 7 === 0) {
//     console.log("FastTrack");
//   } else if (i % 7 === 0) {
//     console.log("Track");
//   } else if (i % 5 === 0) {
//     console.log("Fast");
//   } else {
//     console.log(i);
//   }
// }

function filter() {
  let numArray = [14, 56, 20, 60, 87, 37];
  const filteredArray = numArray.filter((num) => {
    return num > 50;
  });
  console.log(filteredArray);
}
