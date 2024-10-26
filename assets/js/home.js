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