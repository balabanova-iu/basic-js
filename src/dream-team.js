const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let st = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].tring) {
      sr += arr[i];
    }
  }
  let str;
  str = st.map((word) => word[0]).join("");
  return str.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
