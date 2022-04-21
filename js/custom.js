const collapseNav = document.getElementById("collapsedNav");
const openBtn = document.querySelectorAll(".navbar-toggler");
const hambMenu = document.getElementById("hamburger");
const collapseLink = document.querySelectorAll(".nav-link-collapse");
const navItem = document.querySelectorAll(".navbar-nav .nav-link");
const percentCircle = document.querySelectorAll(".progressPercent");
const positivePer = document.querySelectorAll(".positivePercent");
const negativePer = document.querySelectorAll(".negativePercent");
const expandTd = document.querySelectorAll(".collapseTd");
const pageContent = document.getElementById("content");
const mainNav = document.getElementById("navContainer");
const avatarDescBox = document.getElementById("avaDesContainer");
const toggleFaArrow = document.getElementById("MobileToggleArrow");
const mobileOverlay = document.getElementById("mobileOverlay");
const navLink = document.querySelectorAll(".nav-link span,.brandContainer");
const textScript = document.getElementById("projecScript")

// toggle button amimation & open sidebar on click
openBtn.forEach(function (btnTarget) {
  btnTarget.addEventListener("click", function () {
    pageContent.classList.toggle("leftSpace");
    mainNav.classList.toggle("leftNavSpace");
    collapseNav.classList.toggle("open");
    hambMenu.classList.toggle("close");
    navLink.forEach(function(allLinks){
      allLinks.classList.toggle("navLinkSpace")
    })
  });
});

// open submenu on click
collapseLink.forEach(function (linkTarget) {
  linkTarget.addEventListener("click", function (collapseItem) {
    const changeIcon = collapseItem.currentTarget;
    changeIcon.classList.toggle("nav-link-show");
  });
});

// add ctive class on click and remove from the rest of the list
navItem.forEach(function (thisItem) {
  thisItem.addEventListener("click", function (activeCase) {
    const listTarget = activeCase.currentTarget;
    navItem.forEach(function (removeClass) {
      removeClass.classList.remove("active");
    });
    listTarget.classList.add("active");
  });
});

// add shadow to the nav on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mainNav.classList.add("navShadow");

  } else {
    mainNav.classList.remove("navShadow");
  }
}

// percentage circle

percentCircle.forEach(function(currentPercent){
  const percentNumber = currentPercent.getAttribute("data-percent");
  perCirc($(currentPercent), percentNumber);
  console.log(percentNumber);
  function perCirc($el, end, i) {
    if (end < 0) end = 0;
    else if (end > 100) end = 100;
    if (typeof i === "undefined") i = 0;
    var curr = (100 * i) / 360;
    if (i <= 180) {
      $el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #E7E8EA 50%),linear-gradient(90deg, #E7E8EA 50%, transparent 50%)');
    } else {
      $el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #017AFF 50%),linear-gradient(90deg, #E7E8EA 50%, transparent 50%)');
    }
    if (curr < end) {
      setTimeout(function () {
        perCirc($el, end, ++i);
      }, 1);
    }
  }
})
positivePer.forEach(function(currentPosPercent){
  const percentNumber = currentPosPercent.getAttribute("data-percent");
  perCirc($(currentPosPercent), percentNumber);
  console.log(percentNumber);
  function perCirc($el, end, i) {
    if (end < 0) end = 0;
    else if (end > 100) end = 100;
    if (typeof i === "undefined") i = 0;
    var curr = (100 * i) / 360;
    if (i <= 180) {
      $el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #E7E8EA 50%),linear-gradient(90deg, #E7E8EA 50%, transparent 50%)');
    } else {
      $el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #1BC47D 50%),linear-gradient(90deg, #E7E8EA 50%, transparent 50%)');
    }
    if (curr < end) {
      setTimeout(function () {
        perCirc($el, end, ++i);
      }, 1);
    }
  }
})
negativePer.forEach(function(currentNegPercent){
  const percentNumber = currentNegPercent.getAttribute("data-percent");
  perCirc($(currentNegPercent), percentNumber);
  console.log(percentNumber);
  function perCirc($el, end, i) {
    if (end < 0) end = 0;
    else if (end > 100) end = 100;
    if (typeof i === "undefined") i = 0;
    var curr = (100 * i) / 360;
    if (i <= 180) {
      $el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #E7E8EA 50%),linear-gradient(90deg, #E7E8EA 50%, transparent 50%)');
    } else {
      $el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #F04747 50%),linear-gradient(90deg, #E7E8EA 50%, transparent 50%)');
    }
    if (curr < end) {
      setTimeout(function () {
        perCirc($el, end, ++i);
      }, 1);
    }
  }
})
  $(".splitUrl").hide()
  $('#splitTest').click(function(){
    $(".typeUrl").hide();
    $(".splitUrl").show();
    $(this).addClass("modalActive");
    $('#recommended').removeClass("modalActive")
  })
  $('#recommended').click(function(){
    $(".typeUrl").show();
    $(".splitUrl").hide();
    $(this).addClass("modalActive");
    $('#splitTest').removeClass("modalActive")
  })
  $(".secondAddPageBtn").click(function(){
    $("#addPageModal").modal("show")
  })
  $('#addExistingProject').click(function() {
    $('#addPageModal').modal('hide');
  });
// aos & scroller configuration
$(window).load(function () {
  $("body").css("overflow", "auto");
  $(".loading").fadeOut(1000);
  AOS.init({
    offset: 200,
    duration: 400,
    easing: "ease-in-sine",
    delay: 50,
    loop: false
  });
});
  // range slider
  (function() {
    var parent = document.querySelectorAll(".range-slider");
    if(!parent) return;
      parent.forEach(function(f){
      const range = f.querySelector("input[type=range]");
      const rangeValue = f.querySelector(".testValue");
      range.oninput = function() {
      var slide = parseFloat(range.value);
      var slideValue = slide + "%";
      rangeValue.innerHTML = slideValue;
    }
        })
  })();
  $(".check_impact input").click(function(){
    $(".medium_impact_element, .low_impact_element").toggleClass("d-none")
  })
  const newVariant = 
  `<li class="high_impact_element new_variant">
    <div class="d-flex mb-1 align-items-center">
      <div class="mr-auto d-flex">
        <h3 class="fs12 align_with_chkbox gray64 mr-2">Exp. 4</h3>     
        <button class="btn default-btn transparent gray64 ml-2 border-0 fs14 p-0 delete_exp" style="vertical-align: baseline;line-height: 0;"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </div>
      <div class="ml-auto gray64 fs12">
        <span></span>
        <span class="visits_number mr-1"></span>
        <span class="nigative mr-1"></span>
          <button class="btn default-btn transparent gray64 ml-2 border-0 fs12 p-0" id="sett" style="vertical-align: baseline;"><i class="fa fa-play" aria-hidden="true"></i></button>
          <div class="dropdown-menu m-0 p-0 border-0 editViewDropDown" aria-labelledby="sett" x-placement="bottom-start" style="position: absolute; transform: translate3d(795px, 80px, 0px); top: 0px; left: 0px; will-change: transform;">
            <a class="dropdown-item fs12" href="#">Transfer ownership</a>
            <a class="dropdown-item fs12" href="#">Delete user</a>
          </div>
      </div>
    </div>
    <form class="pt-1">
      <div class="form-group mb-2">
        <input type="text" class="form-control fs12" id="pageUrl" placeholder="My new test heading">
      </div>
    </form>
</li>`

  $("#add_variant_btn").click(function(){
    $(newVariant).insertBefore(".add_variant");
      const closeVariant = $(".delete_exp"); 
      closeVariant.click(function(){
      $(this).closest('.new_variant').remove()
    })
  })


/* Color converter
 *
 * Store a current color in 3 formats: hex, rgb, and hsl.
 * Display the values of each of those colors. 
 * On updating of a color input or inputs, update the 
 * displayed values. 
 */

// define jQuery objects for DOM manipulation
const picker = $('input#color-picker')

const colorValueContainer = $('#color_value')
const selectColorType = $('#color_type')

// define the current color object, which will hold
// all our color formats
const currentColor = {hex: null, rgb: null, hsl: null}

// grab the color picker's current color, convert it
// to rgb & hsl, and update the values in the DOM
function calculateColor() {
  currentColor.hex = picker.val()
  currentColor.rgb = hexToRgb(currentColor.hex)
  currentColor.hsl = rgbToHsl(currentColor.rgb)
  colorValueContainer.val( currentColor.hex )
  selectColorType.change(function(){
    if($(this).val() == 'HEX') {
      colorValueContainer.val( currentColor.hex )
    } if($(this).val() == 'RGB') {
      colorValueContainer.val( currentColor.rgb.string )
    } if($(this).val() == 'HSL') {
      colorValueContainer.val( currentColor.hsl.string )
    }
  })
}

// Convert a hex string, e.g. #ff0000, to 
// rgba. Return both an array - [r,g,b] - and
// string representation. One for usefulness 
// and one for convenience. 
// JS has built in support for converting a hex
// string to standard base 10 using the Number() 
// function. The only requirement is that the 
// string is prefixed with 0x, so we just 
// split up the incoming hex string and prepend 
// accordingly.
function hexToRgb(hex) {
  let r = Number('0x' + hex.substr(1,2) )
  let g = Number('0x' + hex.substr(3,2) )
  let b = Number('0x' + hex.substr(5,2) )
  
  let rgb = [r,g,b]
  let rgbString = '('+r+', '+g+', '+b+')'
  
  return { array: rgb, string: rgbString }
}

function init() {
  randomizeColor()
}

// Generate a random hex color and apply it.
function randomizeColor() {
  // build out the hex color string
  var hexColor = '#'
  for (var i = 0; i < 3; i++) {
    hexColor += Math.round(Math.random() * 255).toString(16)
  }
  
  // set the color on the color picker
  picker.val(hexColor)
  
  // update the calculations for the other
  // color formats
  calculateColor()
}

function rgbToHsl(rgb) {
  let h, s, l
  // The formula used for hue depends on which color 
  // channel (r, g, or b) has the highest value
  let strongestChannel = 0
  
  // Normalize the rgb values to between 0 - 1
  let normalizedRgb = rgb.array.map(function(n) { return n/255 })
  // Store them as individual variables for convenience
  let [r,g,b] = normalizedRgb
  // Compute the min and max channel values. These are used to determine
  // all 3 hsl values.
  let minVal = normalizedRgb.reduce(function(t, v) { return Math.min(t, v) })
  // Get the max value, but also note which channel (index) is strongest
  let maxVal = normalizedRgb.reduce(function(t, v, i) { 
    if (v > t) { 
      strongestChannel = i
      return v 
    } else { 
      return t
    } 
  })
  
  // Lightness is a very straightforward calculation
  l = (minVal + maxVal) / 2
  
  // Only calculate saturation if there is a difference 
  // in color values. There are 2 formulas used, depending 
  // on whether lightness is above or below 50. Note that
  // saturation peaks when lightness is at 50, and declines
  // in both directions
  if (maxVal != minVal) {
    if (l > 50) {
      s = (maxVal - minVal) / (2 - maxVal - minVal)
    } else {
      s = (maxVal - minVal) / (maxVal + minVal)
    }
    
    // calculate hue using one of 3 formulas (based on strongest channel)
    switch(strongestChannel) {
      case 0:
        h = (g-b) / (maxVal - minVal)
        break
      case 1:
        h = 2 + (b-r) / (maxVal - minVal)
        break
      case 2:
        h = 4 + (r-g) / (maxVal - minVal)
    }
    // multiply hue by 60 to get the degree
    h = h * 60
    // add 360 to negative values, effectively
    // causing them to loop around the circle and
    // maintaining a value range of between 0 - 360
    if (h < 0) { h += 360 }
  } else {
    s = 0
    h = 0
  }
  
  // Set s and l as percentages and round all values
  h = Math.round( h )
  s = Math.round( s * 100 ) 
  l = Math.round( l * 100 )
  
  // Create a string representation, for convenience
  let string = '('+h+', '+s+'%, '+l+'%)'
  
  return { array: [h,s,l], string: string }
}

// Bind events
picker.change(function() {
  calculateColor()  
})

// Initialize / execute
init()

$('.Different_how_to_use').click(function(){
  $('.how_to_use_popup').toggleClass("d-none")
})

