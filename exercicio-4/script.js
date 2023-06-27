function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
function loadMemes() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            var memes = JSON.parse(xhttp.responseText).data.memes;
            var tableBody = document.getElementById("memes-table");
            tableBody.innerHTML= "";
            for(var i = 0; i < memes.length; i++) {
                var meme = memes[getRandomInt(memes.length)];
                var row = tableBody.insertRow(-1);
                var memeCell = row.insertCell(0);
                memeCell.innerHTML = "<img src='" + meme.url + "' width= 100%" + meme.width + "' height= 100%" + meme.height + "' />";
                var nameCell = row.insertCell(1);
                nameCell.innerHTML = meme.name;
                var linkCell = row.insertCell(2);
                linkCell.innerHTML = "<a href='" + meme.url + "' target='_blank'>Abrir Link</a>";
                var widthCell = row.insertCell(3);
                widthCell.innerHTML = meme.width;
                var heightCell = row.insertCell(4);
                heightCell.innerHTML = meme.height;
            }
        }
    }
    xhttp.open("GET", "https://api.imgflip.com/get_memes", true);
  xhttp.send();
}
window.onload = function() {
    loadMemes();
  }