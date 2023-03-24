function addingEventListener() {
    const input = document.getElementById("input");

  function handleClick() {
    console.log("The input was clicked!");
  }

  input.addEventListener("click", handleClick)
}
addingEventListener();
