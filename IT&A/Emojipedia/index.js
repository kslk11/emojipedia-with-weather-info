const emoji_arr = {
  "😀": "Grinning Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😇": "Smiling Face with Hello",
  "😈": "Smiling Face with Horns",
  "😍": "Smiling Face with Heart-Eyes",
  "😏": "Smirking Face",
  "😛": "Neutral Face",
  "🙃": " Upside-Down Face",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
 " 😉" :"Winking Face",
 "🤩" :"Star-Struck",
 "😗": "Kissing Face",
 "😶‍🌫️" :"Face in Clouds",
 "😪": "Sleepy Face",

};
var emojiweknow = Object.keys(emoji_arr);

function myFunction() {
  var input = document.getElementById("input");
  let emoji_name = emoji_arr[input.value];
  if (emoji_name) {
    document.getElementById("emoji_name").innerHTML = emoji_name;
  } else {
    document.getElementById("emoji_name").innerHTML = "No Data Found";
  }
  
}
function setValue(emoji) {
  document.getElementById("emoji_name").innerHTML = '';
  var input = document.getElementById("input");
  input.value = '';
  input.value = emoji;
}