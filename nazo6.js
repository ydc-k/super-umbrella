const checkbox = document.getElementById('three');
const button = document.getElementById('send');
const info = document.getElementById('info');
const menu = document.getElementById('drawer_input');

var url = "https://ja.wikipedia.org/wiki/%E5%A4%A7%E4%B8%8D%E6%AD%A3%E8%A7%A3"

button.addEventListener('click', () => {

if (one.checked && two.checked && three.checked && four.checked && five.checked && six.checked && seven.checked && nine.checked && eight.checked) {
alert("全ての謎を送れたら完成するが、1つ1つ送ると多すぎて送料がかかるな...");
} else if (one.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (two.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (three.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (four.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (five.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (six.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (seven.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (eight.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (nine.checked && drawer_input.checked) {
alert("どうやら間違っているようだ");
} else if (drawer_input.checked) {
location.href = "clearstk.htm"
} else {
alert("どうやら間違っているようだ");
}

});




