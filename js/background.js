let randomPosX = (locX1, locX2) => (Math.random() * (locX2 - locX1)) + 1 + locX1;
let randomPosY = (locY1, locY2) => (Math.random() * (locY2 - locY1)) + 1 + locY1;

function randomSize(){
    return Math.random() * 20 + 21;
}

let setBlob = (name, x, x2, y, y2) =>{
    O = document.getElementById(name);
    P = randomSize();

    O.style.left = randomPosX(x, x2) + "%";
    O.style.top = randomPosY(y, y2) + "%";

    O.style.width = P + "vh";
    O.style.height = P + "vh"; 
}

let createBlob = (name, x, x2, y, y2) =>{
    const div = document.createElement("div");
    div.setAttribute("id", name);
    document.getElementById("back").appendChild(div);

    setBlob(name, x, x2, y, y2);
    //document.getElementById(name).style.top = "10%";
}



createBlob("orb1", 0, 20, 5, 70);
createBlob("orb2", 30, 50, 10, 50);
createBlob("orb3", 60, 80, 15, 65);