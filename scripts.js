function nickCage(movies) {
  return "I'm in " + movies + " movies."
}

function chuckNorris(str) {
  return "My movies are " + (str*100) + " times as manly."
}

var nickMovies = 60;
var chuckMovies = 'more manly';
var compare = 100
document.getElementById("nickCage").innerHTML = nickCage(nickMovies);
document.getElementById("chuckNorris").innerHTML = chuckNorris(chuckMovies, compare);


compare = 'a hundred';
document.getElementById("chuckNorris").innerHTML = chuckNorris(chuckMovies, compare);
