const zoom_in = document.getElementById("zoom_in");
const zoom_out = document.getElementById("zoom_out");
const text_editor = document.getElementById("text-editor");
// const action = document.getElementById("status");
const zoomIn = (e) => {
  const fontSize = text_editor.style.fontSize;
  if(fontSize == "72px") {
    // add just message update here
  } else {
    const fontSize = parseInt(text_editor.style.fontSize.replace("px", ""));
    const updatedSize = `${fontSize + 2}px`;
    // action.innerHTML = updatedSize;
    // action.style.visibility = true;
    text_editor.style.fontSize = updatedSize;
  }
};

const zoomOut = (e) => {
  const fontSize = text_editor.style.fontSize;
  if(fontSize == "14px") {

  } else {
    const fontSize = parseInt(text_editor.style.fontSize.replace("px", ""));
    text_editor.style.fontSize = `${fontSize - 2}px`;
  }
}


window.addEventListener("keydown", e => {
  if (e.shiftKey == true) {
    if (e.key == "k" || e.key == "K") {
      console.log("Search");
    } else if(e.key == 'l' || e.key == 'L') {
      console.log("Goto");
    } else if(e.ctrlKey == true && (e.key == 'Z'||e.key == 'z')) {
      zoomOut(e);
    } else if(e.key == 'f' || e.key == 'F') {
      console.log('Find');
    } else if(e.key == 'r' || e.key == 'R') {
      console.log('Replace');
    }
  } else if(e.ctrlKey == true && (e.key == 'Z' || e.key == 'z')) {
    e.preventDefault();
    zoomIn(e);
  }
});
zoom_in.addEventListener('click', zoomIn);
zoom_out.addEventListener('click', zoomOut);


