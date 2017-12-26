window.onload = function () {
    // alert('document loaded');

    window.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                console.log('Left');
                break;
            case 38:
                console.log('Up');
                break;
            case 39:
                console.log('Right');
                break;
            case 40:
                console.log('Down');
                break;
            default:
                console.log('another keyCode');
                break;
        }
    }

    console.log('document.childNodes'); //all childrens with doctype
    console.log(document.childNodes);
    console.log('document.children'); //all childrens
    console.log(document.children);
    console.log('document.children[0].children[0].children (HEAD childrens)');
    console.log(document.children[0].children[0].children);

    console.log(`------------------------------------------`);
    console.log(`document.getElementById('container')`);
    console.log(document.getElementById('container'));

    console.log(`------------------------------------------`);
    var divs = window.document.getElementsByTagName('div');
    console.log(divs);
    var container3 = document.getElementById('container3');
    var innerContainer3 = document.createElement("div");
    container3.appendChild(innerContainer3);
    console.log(`innerContainer3`);
    console.log(innerContainer3);
    // innerContainer3.style.width = "10px";
    // innerContainer3.style.height = "10px";
    // innerContainer3.style.border = "1px solid black";

    var container0 = document.getElementById('container0');
    container0.style.fontSize = '2em';

    container0.innerHTML = '<div style="width: 100px; height: 100px; border: 1px solid black;"></div></br>';

    // container0.classList
    // container0.classList.add('.active');
    // container0.classList.remove('.active');

    console.log(`------------------------------------------`);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function random_character() {
        var chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
        return chars.substr( Math.floor(Math.random() * 27), 1);
    }

    var createChess = function () {
        var n = [1,2,3,4,5,6,7,8];
        var m = ['A','B','C','D','E','F','G','H'];
        var chess = document.getElementById('chess');
        for (var i = 0; i < n.length; i++) {
            for (var j = 0; j < m.length; j++) {
                var newDiv = document.createElement("div");
                newDiv.classList.add('active');
                newDiv.setAttribute("id", "cell-" + n[i] + m[j]);
                document.getElementById('chess').appendChild(newDiv);
                newDiv.innerText = random_character();

                if ((i + j) % 2 == 0) {
                    newDiv.style.backgroundColor = 'black';
                    newDiv.style.color = 'white';
                }
            }
            var br = document.createElement("br");
            document.getElementById('chess').appendChild(br);
        }
    }


    createChess();




document.onclick = function(event) {
    console.log(event.target);
    var cell = event.target;
    cell.style.backgroundColor = 'red';
}










}