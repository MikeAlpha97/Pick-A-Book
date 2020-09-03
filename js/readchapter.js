function tocopenNav() {
  document.getElementById("settingSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("commentSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  document.getElementById("tocSidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function toccloseNav() {
  document.getElementById("tocSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function settingopenNav() {
  document.getElementById("tocSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("commentSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  document.getElementById("settingSidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function settingcloseNav() {
  document.getElementById("settingSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function commentopenNav() {
  document.getElementById("settingSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("tocSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";

  document.getElementById("commentSidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function commentcloseNav() {
  document.getElementById("commentSidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
$(".fontRobotoMini").on("click", function() {
  $("#chapter-page-text p").css("font-family", "'Roboto Mono', monospace");
});
$(".fontMerriweather").on("click", function() {
  $("#chapter-page-text p").css("font-family", "'Merriweather', serif");
});
$(".fontRaleway").on("click", function() {
  $("#chapter-page-text p").css("font-family", "'Raleway', sans-serif");
});
$(".black").on("click", function() {
  $(".chapter-page").css("background-color", "#1f2129");
  $(".chapter-page").css("color", "#c0c2cc");
  $("body").css("background-color", "#000000");
});
$(".white").on("click", function() {
  $(".chapter-page").css("background-color", "#ffffff");
  $(".chapter-page").css("color", "#000000");
  $("body").css("background-color", "#f2f2f2");
});
// When + or - buttons are clicked the font size of the h1 is increased/decreased by 2
// The max is set to 50px for this demo, the min is set by min font in the user's style sheet

function getSize() {
  size = $("#chapter-page-text").css("font-size");
  size = parseInt(size, 10);
  $("#number").attr("value", size);
}

//get inital font size
getSize();

$("#increase").on("click", function() {
  // parse font size, if less than 50 increase font size
  if (size + 2 <= 36) {
    $("#chapter-page-text").css("font-size", "+=2");
    $("#number").attr("value", (size += 2));
  }
});

$("#decrease").on("click", function() {
  if (size - 2 >= 12) {
    $("#chapter-page-text").css("font-size", "-=2");
    $("#number").attr("value", (size -= 2));
  }
});
