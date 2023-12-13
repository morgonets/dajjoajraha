//  $(document).ready(function(){
//         var isVisible = false;
  
//         $("#mainElement").on("click" ,function(){
//           if (isVisible) {
//             $("#element1, #element2").fadeOut();
//           } else {
//             $("#element1, #element2").fadeIn();
//           }
//           isVisible = !isVisible;
//         });
//       });

$(document).ready(function(){
  $("#popupBtn").click(function(){
    $("#popup").fadeToggle();
  });
});

$(document).ready(function(){
  $('.slider').slick({
    // Настройки слайдера
    autoplay: true, // Автоматическое воспроизведение слайдов
    autoplaySpeed: 2000 // Время между слайдами в миллисекундах
  });
});

function goindex1() {
  window.location.href = 'job.html';
}
function goindex3() {
  window.location.href = 'Regist.html';
}
function goindex4() {
  window.location.href = 'Login.html';
}
let orderCounter = 0;

// Function to update the order counter
function updateOrderCounter() {
  orderCounter++;
  document.getElementById('order-counter').innerText = orderCounter;

  // Show the counter if it's greater than 0, hide otherwise
  document.getElementById('order-counter').style.display = orderCounter > 0 ? 'block' : 'none';
}

// Adding click event listeners to all buttons with class "order"
let orderButtons = document.querySelectorAll('.order');
orderButtons.forEach(function (button) {
  button.addEventListener('click', updateOrderCounter);
});
document.getElementById('basket-container').addEventListener('click', function () {
  // Toggle the active class to show/hide the sliding content
  document.getElementById('sliding-content').classList.toggle('active');
});

// Sample function to add items to the order list
function addB() {
  // You can customize this function based on your requirements
  let orderList = document.getElementById('order-list');
  let newItem = document.createElement('li');
  newItem.textContent = 'New item';
  orderList.appendChild(newItem);
}
function closeSlidingContent() {
  document.getElementById('sliding-content').classList.remove('active');
}

// Close sliding content function
