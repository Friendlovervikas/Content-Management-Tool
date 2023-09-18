document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');
    const titleDisplay = document.getElementById('title-display');
    const contentDisplay = document.getElementById('content-display');
    const imageDisplay = document.getElementById('image-display');
    const videoDisplay = document.getElementById('video-display');
  
    blogForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const image = document.getElementById('image').files[0];
      const video = document.getElementById('video').files[0];
  
      titleDisplay.textContent = title;
      contentDisplay.textContent = content;
      imageDisplay.src = URL.createObjectURL(image);
      videoDisplay.src = URL.createObjectURL(video);
  
      document.getElementById('submitted-content').style.display = 'block';
      blogForm.reset();
    });
  });
