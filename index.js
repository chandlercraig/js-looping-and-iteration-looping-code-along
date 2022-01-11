// Code your solutions in this file

function writeCards(arr, str) {
  const new_arr = []
  for (let i = 0; i < arr.length; i++) {
    const messg = `Thank you, ${arr[i]}, for the wonderful ${str} gift!`;
    new_arr.push(messg)
  }
  return new_arr
}

function countDown(num) {
  let i = 0;
  while (i <= num) {
    console.log(num);
    num--;
  }
}
