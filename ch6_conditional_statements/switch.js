let age = 20;

switch (false) {
  case age >= 18:
    console.log("you're an adult");
    break;
  case age <= 3:
    console.log("you are a toddler");
    break;
  case age >= 13 && age <= 17:
    console.log("you are ateenager");
    break;
  default:
    console.log("you are Not an adult");
}
