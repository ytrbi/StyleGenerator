function newStyle() {
    let newColor = '';
    let newFont = '';
    let newBgColor = '';
    let newFontColor = '';
    let x = Math.floor(Math.random() * 7); // Random number between 0 and 6
    switch (x) {
        case 0:
            newColor = 'red';
            newFont = 'Times New Roman';
            break;
        case 1:
            newColor = 'blue';
            newFont = 'Florence, cursive';
            break;
        case 2:
            newColor = 'yellow';
            newFont = 'Verdana';
            break;
        case 3:
            newColor = 'purple';
            newFont = 'Courier New';
            break;
        case 4:
            newColor = 'cyan';
            newFont = 'Georgia';
            break;
        case 5:
            newColor = 'maroon';
            newFont = 'Palatino';
            break;
        case 6:
            newColor = 'lime';
            newFont = 'Impact';
            break;
    }
    let y = Math.floor(Math.random() * 7); // Random number between 0 and 6 for background color
    switch (y) {
        case 0:
            newBgColor = 'lightblue';
            newFontColor = 'black';
            break;
        case 1:
            newBgColor = 'lightgreen';
            newFontColor = 'black';
            break;
        case 2:
            newBgColor = 'lightyellow';
            newFontColor = 'black';
            break;
        case 3:
            newBgColor = 'lightpink';
            newFontColor = 'black';
            break;
        case 4:
            newBgColor = 'lightsalmon';
            newFontColor = 'black';
            break;
        case 5:
            newBgColor = 'lightgrey';
            newFontColor = 'black';
            break;
        case 6:
            newBgColor = 'lightcyan';
            newFontColor = 'black';
            break;
    }
    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont;
    document.body.style.backgroundColor = newBgColor; // Set the background color of the body
    document.body.style.color = newFontColor; // Set the font color of the body
}