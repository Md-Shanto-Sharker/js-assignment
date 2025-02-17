function calculateVAT(price) {
    if (typeof price !== "number" || price <= 0) {
      return "Invalid";
    }
    const vat = (price * 7.5) / 100;
    return vat;
  }



  function validContact(contact) {
    if (typeof contact !== "string") {
      return "Invalid";
    }
    if (/^01\d{9}$/.test(contact)) {
      return true;
    }
    return false;
  }



  function willSuccess(marks) {
    if (!Array.isArray(marks)) {
      return "Invalid";
    }
    let passCount = 0;
    let failCount = 0;
    for (let mark of marks) {
      if (mark >= 50) {
        passCount++;
      } else {
        failCount++;
      }
    }
    return passCount > failCount;
  }




  function validProposal(person1, person2) {
    if (
      typeof person1 !== "object" ||
      typeof person2 !== "object" ||
      person1 == null ||
      person2 == null
    ) {
      return "Invalid";
    }
    if (person1.gender === person2.gender) {
      return false;
    }
    if (Math.abs(person1.age - person2.age) > 7) {
      return false;
    }
    return true;
  }




  function calculateSleepTime(times) {
    if (!Array.isArray(times) || times.some((time) => typeof time !== "number")) {
      return "Invalid";
    }
    let totalSeconds = times.reduce((sum, time) => sum + time, 0);
  
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;
  
    return { hour, minute, second };
  }