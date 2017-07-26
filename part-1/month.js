const month = (date) => {
  if (date instanceof Date){
    let month = date.getMonth();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
  } else {
    throw new Error("invalid input!")
  }
}
module.exports = { month }
