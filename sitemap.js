function buildMap(x){
    var z = document.getElementById(x);
    var bullet = document.createElement('UL');
    var listItem = document.createElement('LI');
    z.appendChild(bullet);
    
    var linkIndex = document.createElement('A');
    var listItem = document.createElement('LI');
    linkIndex.setAttribute("href", "index.html");
    linkIndex.setAttribute("target", "_blank");
    linkIndex.textContent = "Index";
    listItem.appendChild(linkIndex);
    bullet.appendChild(listItem);
    
    var linkBio = document.createElement('A');
    var listItem = document.createElement('LI');
    linkBio.setAttribute("href", "bio.html");
    linkBio.setAttribute("target", "_blank");
    linkBio.textContent = "Bio";
    listItem.appendChild(linkBio);
    bullet.appendChild(listItem);
    
    var listItem = document.createElement('LI');
    listItem.textContent = "Class Projects";
    bullet.appendChild(listItem);
    
    var nestedList = document.createElement('UL');
    listItem.appendChild(nestedList);
    
    var linkBreakout = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkBreakout.setAttribute("href", "breakout.html");
    linkBreakout.setAttribute("target", "_blank");
    linkBreakout.textContent = "Breakout";
    nestedListItem.appendChild(linkBreakout);
    nestedList.appendChild(nestedListItem);
    
    var linkJSEvents = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkJSEvents.setAttribute("href", "eventsTest.html");
    linkJSEvents.setAttribute("target", "_blank");
    linkJSEvents.textContent = "JavaScript Events";
    nestedListItem.appendChild(linkJSEvents);
    nestedList.appendChild(nestedListItem);
    
    var linkEureka = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkEureka.setAttribute("href", "popup.html");
    linkEureka.setAttribute("target", "_blank");
    linkEureka.textContent = "Pop-Up!";
    nestedListItem.appendChild(linkEureka);
    nestedList.appendChild(nestedListItem);
    
    var linkChalkboard = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkChalkboard.setAttribute("href", "chalkboard.html");
    linkChalkboard.setAttribute("target", "_blank");
    linkChalkboard.textContent = "Chalkboard";
    nestedListItem.appendChild(linkChalkboard);
    nestedList.appendChild(nestedListItem);
    
    var linkTicTacToe = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkTicTacToe.setAttribute("href", "tictactoe.html");
    linkTicTacToe.setAttribute("target", "_blank");
    linkTicTacToe.textContent = "Tic-Tac-Toe";
    nestedListItem.appendChild(linkTicTacToe);
    nestedList.appendChild(nestedListItem);
    
    var linkMultiplication = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkMultiplication.setAttribute("href", "timestable.html");
    linkMultiplication.setAttribute("target", "_blank");
    linkMultiplication.textContent = "Multiplication";
    nestedListItem.appendChild(linkMultiplication);
    nestedList.appendChild(nestedListItem);
    
    var linkMultiplication2 = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkMultiplication2.setAttribute("href", "timesTable2.html");
    linkMultiplication2.setAttribute("target", "_blank");
    linkMultiplication2.textContent = "More Multiplication";
    nestedListItem.appendChild(linkMultiplication2);
    nestedList.appendChild(nestedListItem);
    
    var linkCalendar = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkCalendar.setAttribute("href", "calendar.html");
    linkCalendar.setAttribute("target", "_blank");
    linkCalendar.textContent = "Calendar";
    nestedListItem.appendChild(linkCalendar);
    nestedList.appendChild(nestedListItem);
    
    var linkUserInput = document.createElement('A');
    var nestedListItem = document.createElement('LI');
    linkUserInput.setAttribute('href', 'userInput.html');
    linkUserInput.textContent = "Basic User Input";
    nestedListItem.appendChild(linkUserInput);
    nestedList.appendChild(nestedListItem);
}