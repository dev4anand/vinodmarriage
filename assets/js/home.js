window.onload = function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  };

  const button = document.querySelector('.videobutton');
  const video = button.querySelector('video');

  button.addEventListener('click', () => {
    video.style.display = 'block'; // Show the video
    video.play(); // Start playing the video
  });

  function openModaltwo() {
    var modal = document.getElementById("pdfModal");
    var pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = "assets/images/VINOD.pdf";  // Set your PDF file URL here
    modal.style.display = "block";  // Show the modal
}

function closeModaltwo() {
    var modal = document.getElementById("pdfModal");
    var pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = "";  // Clear the PDF file to stop loading it
    modal.style.display = "none";  // Hide the modal
}

// Close the modal if user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("pdfModal");
    if (event.target == modal) {
        closeModaltwo();
    }
}

function openModal() {
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("myVideo");
    modal.style.display = "block";  // Show the modal
    video.play();                   // Play the video
}

function closeModal() {
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("myVideo");
    video.pause();                  // Pause the video
    video.currentTime = 0;          // Reset video time to start
    modal.style.display = "none";   // Hide the modal
}

// Close the modal if user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeModal();
    }
}
