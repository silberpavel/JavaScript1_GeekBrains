var createChess = function () {

    var counter = 0;
    var n = [1, 2, 3, 4, 5, 6, 7, 8];
    var m = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var chess = document.getElementById('chess');

    for (var i = 0; i < n.length; i++) {

        for (var j = 0; j < m.length; j++) {

            var newDiv = document.createElement("div");
            newDiv.classList.add('active');
            newDiv.setAttribute("id", ++counter);
            document.getElementById('chess').appendChild(newDiv);
            newDiv.innerText = n[i] + m[j]; // Text on cells

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

    console.log(event.target);
    var cell = event.target;
    cell.classList.add('red'); // Draw icon (red horse)
    prevCell = event.target;

    // Сохраняем стиль предидущей ячейки
    // prevCell = event.target;
    // prevBgColor = prevCell.style.backgroundColor;
    // prevTextColor = prevCell.style.color;


    window.onkeydown = function (event) {

        switch (event.keyCode) {

            case 37: //Left

                if (parseInt(prevCell.id) <= 1) { // Out of range => break
                    break;
                }

                if (prevCell != undefined) {
                    prevCell.classList.remove('red');
                }
                
                var moveLeft = parseInt(prevCell.id) - 1; // Move left 
                var movedLeft = document.getElementById(moveLeft);
                movedLeft.classList.add('red');
                // Uptade prevCell
                prevCell = movedLeft;
                break;

            case 38: // Up

                if (parseInt(prevCell.id) <= 8) { // Out of range => break
                    break;
                }

                if (prevCell != undefined) {
                    prevCell.classList.remove('red');
                }

                var moveUp = parseInt(prevCell.id) - 8; // Move Up 
                var movedUp = document.getElementById(moveUp);
                movedUp.classList.add('red');
                // Uptade prevCell
                prevCell = movedUp;
                break;

            case 39: // Right

                if (parseInt(prevCell.id) >= 64) { // Out of range => break
                    break;
                }

                if (prevCell != undefined) {
                    prevCell.classList.remove('red');
                }

                var moveRight = parseInt(prevCell.id) + 1; // Move right 
                var movedRight = document.getElementById(moveRight);
                movedRight.classList.add('red');
                // Uptade prevCell
                prevCell = movedRight;
                break;

            case 40: // Down

                if (parseInt(prevCell.id) >= 57) { // Out of range => break
                    break;
                }

                if (prevCell != undefined) {
                    prevCell.classList.remove('red');
                }

                var moveDown = parseInt(prevCell.id) + 8; // Move Down 
                var movedDown = document.getElementById(moveDown);
                movedDown.classList.add('red');
                // Uptade prevCell
                prevCell = movedDown;
                break;

            default:
                console.log('another keyCode');
                break;
        }
    }
}