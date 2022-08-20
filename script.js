//selecting all requie=red elements
const selectBox = document.querySelector(".select-box"), SelectXBtn = selectBox.querySelector(".playerX"), SelectOBtn = selectBox.querySelector(".playerO"), playBoard = document.querySelector(".play-board"), allBox = document.querySelectorAll("section span"), players = document.querySelector(".players");

window.onload = () => { //once window is loaded
    for(let i=0; i<allBox.length; i++){ //add onclick attribute in all available section's span
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
    
    SelectXBtn.onclick = () => {
        selectBox.classList.add("hide"); //hide the select box on player X button clicked
        playBoard.classList.add("show"); //show the playboard section on playerX button clicked
    }
    SelectOBtn.onclick = () => {
        selectBox.classList.add("hide"); //hide the select box on player O button clicked
        playBoard.classList.add("show"); //show the playboard section on playerO button clicked
        players.setAttribute("class", "players active player");//adding three class names in player element
    }
}

let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome circle icon

function clickedBox(element){ //if players element has contains .player
    if(players.classList.contains("player")){
        element.innerHTML = <i class="${playerOIcon}"></i>; //adding circle icon tag inside user clicked element
    }
    else{
        element.innerHTML = <i class="${playerXIcon}"></i>; //adding cross icon tag inside user clicked element
    }
}