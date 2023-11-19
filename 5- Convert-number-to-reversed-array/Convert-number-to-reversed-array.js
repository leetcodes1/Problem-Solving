function ConvertNumberToReversedArray(number) {

  let str = String(number).split("");
  console.log(str);

  for (let index = 0; index < str.length; index++) {
    str[index] = Number(str[index]);
  }
  console.log(Object.values(str.reverse()));
}
ConvertNumberToReversedArray(5214);
