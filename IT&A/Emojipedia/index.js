const emoji_arr = {
  "π": "Grinning Face",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Smiling Face with Hello",
  "π": "Smiling Face with Horns",
  "π": "Smiling Face with Heart-Eyes",
  "π": "Smirking Face",
  "π": "Neutral Face",
  "π": " Upside-Down Face",
  "π": "Face with Tears of Joy",
  "π€£": "Rolling on the Floor Laughing",
 " π" :"Winking Face",
 "π€©" :"Star-Struck",
 "π": "Kissing Face",
 "πΆβπ«οΈ" :"Face in Clouds",
 "πͺ": "Sleepy Face",

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