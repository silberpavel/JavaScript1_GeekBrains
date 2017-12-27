var createChess = function () {
    var counter = 0;
    var n = [1, 2, 3, 4, 5, 6, 7, 8];
    var m = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var chess = document.getElementById('chess');
    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < m.length; j++) {
            var newDiv = document.createElement("div");
            newDiv.classList.add('active');
            newDiv.classList.add(++counter);
            newDiv.setAttribute("id", "cell-" + n[i] + m[j]);
            document.getElementById('chess').appendChild(newDiv);
            // newDiv.innerText = random_character();
            newDiv.innerText = n[i] + m[j];

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




var prevCell;
// var prevBgColor;
// var prevTextColor;

document.onclick = function (event) {
    if (event.target.getAttribute("id") == 'chess') {
        alert('You miss cell!');
        return false
    };
    if (prevCell != undefined) {
        prevCell.classList.remove('red');
    }



    // Сохраняем стиль предидущей ячейки
    // prevCell = event.target;
    // prevBgColor = prevCell.style.backgroundColor;
    // prevTextColor = prevCell.style.color;


    console.log(event.target);
    var cell = event.target;
    cell.classList.add('red');
    prevCell = event.target;

    window.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                console.log('Left');
                // var moveLeft = (prevCell.classList[1])-1; //DOMTokenList
                // // console.log(moveLeft);
                // var movedLeft = document.getElementById()
                // console.log(movedLeft);

                // movedLeft.classList.add('red');
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
}