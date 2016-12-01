function buildMap(x){
    var x = getElementById("mapPlacement");
    var bullet = document.createElement(UL);
    var listItem = document.createElement(LI);
    x.appendChild("unorderedList");
    
    var linkIndex = document.createElement(A);
    linkIndex.setAttribute("href", "index.html");
    linkIndex.textContent = "Index";
    listItem.appendChild("linkIndex");
    bullet.appendChild("listItem");
    
    var linkBio = document.createElement(A);
    linkBio.setAttribute("href", "bio.html");
    linkBio.textContent = "Bio";
    listItem.appendChild("linkBio");
    bullet.appendChild("listItem");
    
    listItem.textContent = "Class Projects";
    bullet.appendChild("listItem");
    
    var nestedList = document.createElement(UL);
    
    var linkBreakout = document.createElement(A);
    linkBreakout.setAttribute("href", "breakout.html");
    linkBreakout.textContent = "Breakout";
    nestedList.appendChild("linkBreakout");
    bullet.appendChild("nestedList");
    
    var linkJSEvents = document.createElement(A);
    linkJSEvents.setAttribute("href", "eventsTest.html");
    linkJSEvents.textContent = "JavaScript Events";
    nestedList.appendChild("linkJSEvents");
    bullet.appendChild("nestedList");
    
    var linkEureka = document.createElement(A);
    linkEureka.setAttribute("href", "popup.html");
    linkEureka.textContent = "Pop-Up!";
    nestedList.appendChild("linkEureka");
    bullet.appendChild("nestedList");
    
    var linkChalkboard = document.createElement(A);
    linkChalkboard.setAttribute("href", "chalkboard.html");
    linkChalkboard.textContent = "Chalkboard";
    nestedList.appendChild("linkChalkboard");
    bullet.appendChild("nestedList");
    
    var linkTicTacToe = document.createElement(A);
    linkTicTacToe.setAttribute("href", "tictactoe.html");
    linkTicTacToe.textContent = "Tic-Tac-Toe";
    nestedList.appendChild("linkTicTacToe");
    bullet.appendChild("nestedList");
    
    var linkMultiplication = document.createElement(A);
    linkMultiplication.setAttribute("href", "timestable.html");
    linkMultiplication.textContent = "Multiplication";
    nestedList.appendChild("linkMultiplication");
    bullet.appendChild("nestedList");
    
    var linkMultiplication2 = document.createElement(A);
    linkMultiplication2.setAttribute("href", "timesTable2.html");
    linkMultiplication2.textContent = "More Multiplication";
    nestedList.appendChild("linkMultiplication2");
    bullet.appendChild("nestedList");
}