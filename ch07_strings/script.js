// //-------Ways of creating Strings---------

let firstName = "Liban"; // Using double quotes
// console.log(firstName);
let middleName = 'Ibrahim'; //Using single quotes
// console.log(middleName);
let lastName = `Ali`; //Using backticks
// console.log(lastName);

//===============================

// let teacher = new String("AHMED");
// console.log(teacher); // this is object.
// //you can change to string.
// console.log(teacher.toString());

//===============================

//starts with and end with
// console.log(firstName.startsWith('L'));
// console.log(lastName.endsWith("i"));

//===============================

// Join together
// console.log(firstName + middleName + lastName); //the issue is no space if you add space in typing will not work it.
// // So the solution is concatenate by adding empty strings with space
// console.log(firstName + " " + middleName + " " + lastName);
// //this is way is not liked most people  
// console.log(`${firstName} ${middleName} ${lastName}`);
// let fullName = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);
//*****************************************************

// Index is position number (and starts from 0)
// console.log(firstName.indexOf("L")); // 0
// console.log(middleName.indexOf("r")); // 2
// console.log(lastName.indexOf("m")); // -1 means i can't find it.
// //This wll tell you the first position of your name while based on the most left closest.
// console.log(fullName.indexOf("Ali"));
//---------------------------------------------------------------

// //Chracter is the reverse of index
// console.log(firstName.charAt("0")); // L
// console.log(middleName.charAt("2")); // r
// console.log(lastName.charAt("-1")); // empty

//---------------------------------------------------------------

//Upper case
// console.log(firstName.toUpperCase());

//---------------------------------------------------------------


//Lower case
// console.log(teacher.toLowerCase());

//---------------------------------------------------------------

//Concat
// console.log(firstName.concat("Omar")); //issue is no space.
// console.log(firstName.concat(" ").concat("Omar"));
// console.log(firstName.concat(middleName,lastName)); //issue is no space.
// console.log(firstName.concat(" ").concat(middleName,lastName));//issue no space between middle and last name
// console.log(firstName.concat(" ").concat(middleName.concat(" "),lastName));

//---------------------------------------------------------------

//Replace
// console.log(firstName.replace(firstName, "Omar"));
// console.log(firstName.replace(firstName, lastName));

//---------------------------------------------------------------

//Lastindex
// console.log(fullName.lastIndexOf("Ali"));
// console.log(fullName.indexOf("Ali"));
// This wll tell you the first position of your name while based on the most right closest.
//---------------------------------------------------------------

//Length: no need parnthesis, and is starts 1 not 0.
// console.log(firstName.length);

//---------------------------------------------------------------

//trim 
// let school = "  Jabir  "
// console.log(school);
// console.log(school.trim());

//---------------------------------------------------------------

//repeat
// console.log(school.repeat(5)); //issue not starting each new line
// let jamacad = "SNU\n";
// console.log(jamacad.repeat(5));

//---------------------------------------------------------------

//Slice 
// removing part of data while mentioning index(x,y) x is where you start to safe and y ends where you stpped but y it's self will be part what will removing.
// let father = "Ibrahim"
// console.log(father.slice(0,4));

//---------------------------------------------------------------

//substring
//if you tell starting index -1 or something it will identify index 0
// console.log(father.substring(-10,4));

//---------------------------------------------------------------
//split Habkani waa mid aad muhiim u ah! Waxa uu xarfaha (string) u beddelaa liis (Array). Waxaad u sheegaysaa halka uu ka goynayo.
// let friends = "Axmed,Cali,Hani,Faadumo";
// console.log(friends.split(","));

//---------------------------------------------------------------
//Search Wuxuu raadiyaa kelmad ama xaraf aad u sheegto, markaas ayuu kuu soo celinayaa booska (index) uu joogo. Waxay aad isugu dhow yihiin indexOf().
// let talk = "Learning JavaScript is fun";
// console.log(talk.search("JavaScript")); 

//---------------------------------------------------------------
//valueOf() Habkani inta badan looma isticmaalo koodhka maalin kasta ah, laakiin JavaScript ayaa gudaha u isticmaasha si ay u hesho qiimaha asalka ah ee string-ka haddii uu yahay Object.

// let tijaabo = new String("Hello");
// console.log(tijaabo.valueOf()); // Natiijadu: Hello (waa string caadi ah hadda)



//slice and substring
//formula (start,end) exclude end position
// let magac = 'Omar Gacal';
// console.log(magac.substring(2,8));  // ar Gac
// console.log(magac.slice(5,8));  // Gac
//handling negative
// console.log(magac.slice(-3));  //wuxuu ku print garaynaa last 3 char
// console.log(magac.substring(-3)); //so negative ma aqoonsana wuxuu ka soo qadaa 0 wuna wada print garenaa data
//handling swiping
// console.log(magac.substring(8, 2)); //Wuxuu leeyahay "Malaha qofkan wuxuu rabay (2, 8)," markaasuu inta is-weydaariyo natiijada kuu soo saaraa.
// console.log(magac.slice(8, 2)); //Isagu xeerka ayuu raacaa. Maadaama aad ku tiri "Ka bilow 8, kuna jooji 2" (oo ah dib-u-socod), wuxuu kuu soo celinayaa qoraal madhan ("").
//wahat about (-3,4)
// console.log(magac.substring(-3,4)); //substring marnaba ma aqoonsato nambar laga rabo (negative). Wax kasta oo ka yar 0, waxay u beddeshaa 0 Wuxuu u akhriyayaa: substring(0, 5)
// console.log(magac.slice(-3, 4)); // you made that the length of your date subtrct it negative one, 10-3 = 7 so will change like this slice(7,4) now is swipe handling waana empty