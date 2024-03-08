function kustuta(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.clearRect(0,0,300,200);
}
function joon(){
    let t=document.getElementById("tahvel").getContext("2d");
    t.beginPath();
    t.lineWidth="5";
    t.strokeStyle="purple";

    t.moveTo(50, 50);
    t.lineTo(100,50);
    t.lineTo(150,60);
    t.lineTo(150,150);
    t.lineTo(50,50);
    t.stroke();
    t.fillStyle="deeppink";
    t.fill();
}
function ring(){
    // ringjoon
    let t=document.getElementById("tahvel").getContext("2d");
    // arc - дуга
    t.beginPath();
    t.strokeStyle="deeppink"
    t.arc(50,80,30,0,2*Math.PI, true); //x,y,R
    t.stroke();

    //ring
    t.beginPath();
    t.fillStyle="deeppink"
    t.arc(150,80,30,0,2*Math.PI, true); //x,y,R
    t.fill();
    //ring joonega
    t.beginPath();
    t.strokeStyle="purple"
    t.fillStyle="aqua"
    t.lineWidth="3"
    t.arc(250,80,30,0,2*Math.PI, true); //x,y,R
    t.stroke();
    t.fill();

}
function ristkylik() {
    let t = document.getElementById("tahvel").getContext("2d");
    t.fillStyle="black";
    t.fillRect(20, 20, 30, 20); //x,y,laius,kõrgus
    t.fillText("Tere!", 100, 50,);
}
function svetofor(){
    let t = document.getElementById("tahvel").getContext("2d");
    t.fillStyle="gray";
    t.fillRect(120, 20, 50, 120); //x,y,laius,kõrgus

    t.beginPath();
    t.fillStyle="yellow"
    t.strokeStyle="black"
    t.arc(145,80,17,0,2*Math.PI, true); //x,y,R
    t.stroke();
    t.fill();

    t.beginPath();
    t.fillStyle="green"
    t.strokeStyle="black"
    t.arc(145,120,17,0,2*Math.PI, true); //x,y,R
    t.stroke();
    t.fill();

    t.beginPath();
    t.fillStyle="red"
    t.strokeStyle="black"
    t.arc(145,40,17,0,2*Math.PI, true); //x,y,R
    t.stroke();
    t.fill();
    t.fillText("SVETOFOR", 50,50)
}
function red(){
    let t = document.getElementById("tahvel").getContext("2d");
    t.fillStyle = "gray";
    t.fillRect(120, 20, 50, 120); //x,y,laius,kõrgus

    t.beginPath();
    t.fillStyle="red"
    t.strokeStyle="black"
    t.arc(145,40,17,0,2*Math.PI, true); //x,y,R
    t.stroke();
    t.fill();
    t.fillText("SVETOFOR", 50,50)

    t.beginPath();
    t.strokeStyle="black"
    t.arc(145,80,17,0,2*Math.PI, true);
    t.stroke();

    t.beginPath();
    t.strokeStyle="black"
    t.arc(145,120,17,0,2*Math.PI, true);
    t.stroke();
}

function yellow(){
    let t = document.getElementById("tahvel").getContext("2d");
    t.fillStyle = "gray";
    t.fillRect(120, 20, 50, 120); //x,y,laius,kõrgus

    t.beginPath();
    t.fillStyle="yellow"
    t.strokeStyle="black"
    t.arc(145,80,17,0,2*Math.PI, true); //x,y,R
    t.stroke();
    t.fill();
    t.fillText("SVETOFOR", 50,50)

    t.beginPath();
    t.strokeStyle="black"
    t.arc(145,40,17,0,2*Math.PI, true);
    t.stroke();

    t.beginPath();
    t.strokeStyle="black"
    t.arc(145,120,17,0,2*Math.PI, true);
    t.stroke();
}

function green() {
    let t = document.getElementById("tahvel").getContext("2d");
    t.fillStyle = "gray";
    t.fillRect(120, 20, 50, 120); //x,y,laius,kõrgus

    t.beginPath();
    t.fillStyle = "green"
    t.strokeStyle = "black"
    t.arc(145, 120, 17, 0, 2 * Math.PI, true); //x,y,R
    t.stroke();
    t.fill();
    t.fillText("SVETOFOR", 50, 50)

    t.beginPath();
    t.strokeStyle = "black"
    t.arc(145, 40, 17, 0, 2 * Math.PI, true);
    t.stroke();

    t.beginPath();
    t.strokeStyle = "black"
    t.arc(145, 80, 17, 0, 2 * Math.PI, true);
    t.stroke();
}