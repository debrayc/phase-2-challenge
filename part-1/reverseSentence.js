const reverseSentence = string => {
  if (typeof string != string) { throw new Error("invalid input!") }
  let array = string.split(' ').reverse()
  let newString = array.join(' ')
  return newString;
}
module.exports = { reverseSentence }
