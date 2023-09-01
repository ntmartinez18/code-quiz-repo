// created array to get the highscore value from local storage 
var users = JSON.parse(localStorage.getItem("highscores"))
  
  // Get the unordered list element
  var userList = document.getElementById("userList");
  
  // created function to iterate over the users array
  for (var i = 0; i < users.length; i++) {
    // Create a list item element
    var listItem = document.createElement("li");
  
    // Set the text content of the list item to include the score and initials
    listItem.textContent = "Score: " + users[i].score + " | Initials: " + users[i].initials;
  
    // Append the list item to the unordered list
    userList.appendChild(listItem);

    users.sort(function(a, b) {
        return b - a;
      });};