function buildMap(x){
    var x = getElementById("mapPlacement");
    var unorderedList = document.createElement(UL);
    var listItem = document.createElement(LI);
    var linkIndex = document.createElement(A);
    x.appendChild("unorderedList");
    linkIndex.setAttribute("href", "index.html");
    linkIndex.textContent = Index;
    listItem.appendChild("linkIndex");
    unorderedList.appendChild("listItem");
    var linkBio = document.createElement(A);
    linkBio.setAttribute("href", "bio.html");
    linkBio.textContent = Bio;
    listItem.appendChild("linkBio");
    unorderedList.appendChild("listItem");
}