const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

//medsos
function redirectToGmail() {
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  var gmailEmail = 'raihannifel1@gmail.com'; // Ganti dengan alamat email Gmail tujuan
  
  if (isMobile) {
    var gmailUrl = 'googlegmail://co?to=' + gmailEmail;
    window.location.href = gmailUrl;
  } else {
    var gmailWebUrl = 'https://mail.google.com/mail/?view=cm&to=' + gmailEmail;
    window.open(gmailWebUrl, '_blank');
  }
}

function redirectToWhatsApp() {
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  var phoneNumber = '+6285762421263'; // Ganti dengan nomor telepon tujuan
  
  if (isMobile) {
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber;
    document.getElementById('whatsappLink').setAttribute('href', whatsappUrl);
  } else {
    var webUrl = 'https://web.whatsapp.com/send?phone=' + phoneNumber;
    document.getElementById('whatsappLink').setAttribute('href', webUrl);
    document.getElementById('whatsappLink').setAttribute('target', '_blank');
  }
}

function redirectToInstagram() {
  var isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  var igUsername = 'rhnnpl'; // Ganti dengan username Instagram tujuan
  
  if (isMobile) {
    var igUrl = 'instagram://user?username=' + igUsername;
    window.location.href = igUrl;
  } else {
    var igWebUrl = 'https://www.instagram.com/' + igUsername;
    window.open(igWebUrl, '_blank');
  }
}
