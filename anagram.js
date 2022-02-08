

const isAnagram = (first, last) => {
    var mary = first.toLowerCase();
    var army = last.toLowerCase();

    var name1 = mary.split("").sort().join("");
    var name2 = army.split("").sort().join("");

    return name1 === name2;

}

console.log(isAnagram("Mary", "Army"));