function register() {
  waitfordelay(10000);
  console.log("register now");

}
function login() {
  waitfordelay(5000);
  console.log("login now");
}
function getData() {
  waitfordelay(4000);
  console.log("get data now");
}
function displayData() {
  waitfordelay(6000);
  console.log("display data now");
}
function waitfordelay(delay) {
  const mt = Date.now() + delay;
  while (Date.now() < mt) {
    

  }
}
register();
login();
getData();
displayData();
console.log("call another Application");