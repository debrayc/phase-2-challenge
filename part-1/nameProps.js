const lowercase = string => {
  return string.toLowerCase()
}
const nameProperties = object => {
  if (typeof object != 'object' || Array.isArray(object)) {
    throw new Error("invalid input!")
  }
  let tempArray = []
  let keys = Object.keys(object)
  let lowerCaseKeys = keys.map((x) => { return lowercase(x); })
  lowerCaseKeys.map(x => { tempArray.push(x) })
  return tempArray.sort()
}
module.exports = { nameProps }
