// Add event from js the keep the markup clean
function init() {
  let elementsArray = document.querySelectorAll(".menu-toggle");
  elementsArray.forEach(function (element) {
    element.addEventListener("click", toggleMenu);
  });
}

function toggleMenu() {
  var ele = document.documentElement.getAttribute('data-navigation');
  if (ele == "close") {
    document.documentElement.setAttribute('data-navigation', "open");
  } else {
    document.documentElement.setAttribute('data-navigation', "close");
  }
}

// Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function () {
  if (document.readyState === "complete") {
    init();
  }
});

// Tabs

window.addEventListener("load", function () {
  // store tabs variable
  var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll(".tab-pane");
    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks)
  }
});
