var one = " # # # #"
var two = "# # # # "

for(i = 0; i < 4; i++) {
  console.log(one + "\n" + two)
}

for(i = 0; i < 8; i++) {
  if(i % 2 === 0) {
    console.log(one + "\n");
  } else {
    console.log(two + "\n")
  }
}

var size = 8;
one = "";
two = "";

for (i = 0; i < size / 2; i++) {
  one += " #";
}

for (i = 0; i < size / 2; i++) {
  two += "# ";
}

for (i = 0; i < size; i++) {
  if (i % 2 === 0) {
    console.log(one + "\n");
  } else {
    console.log(two + "\n")
  }
}
