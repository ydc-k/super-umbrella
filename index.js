const button = document.getElementById('send');
var answer = document.getElementById('answer');

button.addEventListener('click', () => {

if (answer.value == 'せいかい')  {
alert("認証が完了しました。");
location.href = "1tltsny.htm"
} else {
alert("認証に失敗しました。表記がひらがなであることを確認してください。");
}

});





