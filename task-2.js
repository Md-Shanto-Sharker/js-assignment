function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  if (/^01\d{9}$/.test(contact)) {
    return true;
  }
  return false;
}
console.log(validContact("01819234567"));
console.log(validContact("0181923 4567"));
console.log(validContact("018192345679"));
console.log(validContact(["01987654321"]));
console.log(validContact("01345678900"));
console.log(validContact("02145678900"));
console.log(validContact(true));
