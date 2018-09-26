// // check off specific todos by clicking
// $("li").click(function() {
//   //if li is gray
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     //turn it black
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   }
//   //else
//   else {
//     //turn it gray
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
// });

//$("li").click(function() { // we can only add a listener on elements that exist when this code is ran the first time. So we add a listener to entire ul parent to select everything and keep it "on"

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete TODO

$("ul").on("click", "span", function(event) {
  $(this)
    .parent() //li that encloses the span
    .fadeOut(500, function() {
      //fadeOut on the li
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus-square").click(function() {
  $("input[type='text'").fadeToggle();
});
