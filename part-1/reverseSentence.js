const reverseSentence = string => {
  let array = string.split(' ').reverse()
  let newString = array.join(' ')
  return newString
}
