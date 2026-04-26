// Creating Promise
async function getPhonePromise() {
let phone = {

brand: 'Samsung',
color: 'black'
};
return phone;
}
//Consuming Promise using then()
getPhonePromise().then(phone => {
console. log(phone);
})
// consuming Promise using await
async function consumePhonePromise() {
let phone = await getPhonePromise();
console.log(phone);

}