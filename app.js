let d = document;

function goLeft() {
    let rChecked = d.querySelector("input[name=pageChooser]:checked");
    let pageId = rChecked.id;
  
    let fromPage, toPage;
  

      rChecked.checked=false;
      // alert(pageId);
      switch (pageId) {
        case "page1":
          d.querySelector("#page1").checked = true;
          break;
        case "page2":
          d.querySelector("#page1").checked = true;
          fromPage = d.querySelector("div.card:nth-child(2)");
          toPage = d.querySelector("div.card:nth-child(1)");
          pageChange(fromPage, toPage, false);
  
          break;
        case "page3":
          d.querySelector("#page2").checked = true;
          fromPage = d.querySelector("div.card:nth-child(3)");
          toPage = d.querySelector("div.card:nth-child(2)");
          pageChange(fromPage, toPage, false);
  
          break;
        case "page4":
          d.querySelector("#page3").checked = true;
          fromPage = d.querySelector("div.card:nth-child(4)");
          toPage = d.querySelector("div.card:nth-child(3)");
          pageChange(fromPage, toPage, false);
  
          break;
      }
} //end function go Left

function goRight() {
    let rChecked = d.querySelector("input[name=pageChooser]:checked");
    let pageId = rChecked.id;
  
    let fromPage, toPage;
  
      rChecked.checked=false;
      // alert(pageId);
      switch (pageId) {
        case "page1":
          d.querySelector("#page2").checked = true;
          fromPage = d.querySelector("div.card:nth-child(1)");
          toPage = d.querySelector("div.card:nth-child(2)");
          pageChange(fromPage, toPage, true);
  
          break;
        case "page2":
          d.querySelector("#page3").checked = true;
          fromPage = d.querySelector("div.card:nth-child(2)");
          toPage = d.querySelector("div.card:nth-child(3)");
          pageChange(fromPage, toPage, true);
  
          break;
        case "page3":
          d.querySelector("#page4").checked = true;
          fromPage = d.querySelector("div.card:nth-child(3)");
          toPage = d.querySelector("div.card:nth-child(4)");
          pageChange(fromPage, toPage, true);
  
          break;
        case "page4":
          d.querySelector("#page4").checked = true;
  
          break;
      }
  }//end function Go Right

d.addEventListener("keydown", (e) => {

  if (e.key === "ArrowLeft") {
    goLeft();
    }

  if (e.key === "ArrowRight") {
    goRight();
  }
}); //end key events listeners

function pageChange(from,to,directionForwards){
    if (directionForwards) {
        from.classList.add("offLeft");
        to.classList.remove("offRight");
    }
    else {
        from.classList.add("offRight");
        to.classList.remove("offLeft");
    }


}

// let f = d.querySelector("form");
// f.addEventListener("change", function(e){
// // e.preventDefault();

// console.log(e);

// });


d.addEventListener("click", (e) => {
    console.log(e);

    if (e.clientX < d.documentElement.clientWidth / 2) {
        console.log("go left / back");
        goLeft();

    }
    else {
        console.log("go right / forwards");
        goRight();

    }

});
