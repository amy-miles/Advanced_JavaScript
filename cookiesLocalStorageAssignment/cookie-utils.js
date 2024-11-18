//<script src="cookie-utils.js"></script>


// This is a 'generic' function that will add a value or cookie to the document
// It uses name-value pairs as input parameters to the function
// 'tag' is the name of the data that you wish to store
// 'value' contains the contents that are associated with the name of the data

function addCookie(tag, value, days=30) {
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (days * 24 * 60 * 60 * 1000)); // Days to milliseconds
    const expires = "expires=" + expireDate.toUTCString();
    document.cookie = `${tag}=${encodeURIComponent(value)}; ${expires}`;
  }


// This is a 'generic' function that will look for a specific piece of information 
// in a cookie and return its value.  
// The 'name' of the function is passed to the function using the 'tag' parameter
// 'tag' contains the name of the name-value pair that you wish to find
// This function will return the value associated with the name requested.
//add functionality to check for JSON and parse
  function getCookie(tag) {
    const cookies = document.cookie.split("; ").find(row => row.startsWith(tag + "="));
    return cookies ? decodeURIComponent(cookies.split('=')[1]) : null;
  } 


// This is a 'generic' function tht will delete the cookie.  This is done by setting 
// the expiration date of the cookie to yesterday.
// 'tag' contains the name of the cookie element that you wish to delete.

  function deleteCookie(tag) {
    document.cookie = tag + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }

// This function will display the contents of the entire cookie

  function displayCookie() {

    alert("Contents of Cookie: " + document.cookie)

  }

//END OF COOKIE FUNCTIONS

//BEGIN regular functions

  function getUserName() {

    //get username from prompt window
    var strName = window.prompt("Hello, What is your name?", "");

    //create cookie element named 'UserName' with a value stored in strName
    addCookie("UserName",strName);

  }


  function displayUserName () {

    //display the UserName element of the cookie
    alert("The UserName is: " + getCookie("UserName"))

  }


  function removeUserName() {

    //delete the UserName from the cookie
    deleteCookie("UserName");
  }

//These functions work with the UserID

  function getUserID() {

    //get userID from prompt window
    var strID = window.prompt("Hello, What is your user ID?", "");

    //create cookie element named 'UserID' with a value stored in strID
    addCookie("UserID",strID);

  }


  function displayUserID () {

    //display the UserID element of the cookie
    alert("The UserID is: " + getCookie("UserID"))

  }


  function removeUserID() {

    //delete the UserID from the cookie
    deleteCookie("UserID");
  }
