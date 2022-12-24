const actionPanel = document.getElementById("action-bar");
console.log(actionPanel);

window.addEventListener("keydown", (e) => {
  if (e.shiftKey == true) {
    if (e.key == "k" || e.key == "K") {
      console.log("Search");
    } else if(e.key == 'l' || e.key == 'L') {
      console.log("Goto");
    } else if(e.ctrlKey == true && (e.key == 'Z'||e.key == 'z')) {
      console.log("Zoom Out");
    } else if(e.key == 'f' || e.key == 'F') {
      console.log('Find');
    } else if(e.key == 'r' || e.key == 'R') {
      console.log('Replace');
    }
  } else if(e.ctrlKey == true && (e.key == 'Z' || e.key == 'z')) {
    e.preventDefault();
    console.log("Zoom In");
  }
});
