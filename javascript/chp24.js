// var name = "My name is Muhammad Sufiyan Baig";
// var length = name.length;
// var update = name.charAt(length- 1);
// console.log(length);

var paragraph ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
for (let i = 0; i < paragraph.length; i++) {
    if(paragraph.charAt(i) === "p"){
console.log("You Win");
break;
    }
    else if(paragraph.charAt(i) === "s"){
console.log("You Lose");
    }
}