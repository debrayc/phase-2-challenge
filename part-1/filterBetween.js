const filterBetween = (names, min, max) => {
  if (!Array.isArray(names)) {
    throw new Error('Inalid input!')
  } else {
    let filteredNames = names.filter((name) => {
      if ( min.toLowerCase() <= name.toLowerCase() && name.toLowerCase() <= max.toLowerCase() ) {
        return name
      }
    })
    return filteredNames || []
  }
}
module.exports = { filterBetween }
