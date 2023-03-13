// first step, not went thru 1 test

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function (address) {
  const arr = [];
  const newAddress = address.split("");
  for (let i = 0; i < newAddress.length; i++) {
    if (i % 2 !== 0) {
      newAddress[i] = "[.]";
      arr.push(newAddress[i]);
    } else {
      arr.push(newAddress[i]);
    }
  }

  console.log(newAddress.join(""));
};

//2nd attempt

var defangIPaddr = function (address) {
  var phrase = "";
  address
    .split("")
    .forEach((letter) =>
      letter == "." ? (phrase += "[.]") : (phrase += letter)
    );
  return phrase;
};
