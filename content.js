// content.js
(function() {
    const header = document.querySelector('header');
    const audioDiv = document.querySelector('.audio-player');
    
    if (header && audioDiv) {
      let headerHeight = header.offsetHeight;
      let originalAudioPosition = audioDiv.getBoundingClientRect().top + window.pageYOffset;
      let audioDivWidth = audioDiv.offsetWidth;
      let audioDivLeft = audioDiv.getBoundingClientRect().left;
      
      function updatePositions() {
        if (window.pageYOffset > originalAudioPosition - headerHeight) {
          header.style.position = 'fixed';
          header.style.top = '0';
          header.style.left = '0';
          header.style.width = '100%';
          header.style.zIndex = '1000';
          
          audioDiv.style.position = 'fixed';
          audioDiv.style.top = headerHeight + 'px';
          audioDiv.style.left = audioDivLeft + 'px';
          audioDiv.style.width = audioDivWidth + 'px';
          audioDiv.style.zIndex = '999';
        } else {
          header.style.position = '';
          audioDiv.style.position = '';
          audioDiv.style.top = '';
          audioDiv.style.left = '';
          audioDiv.style.width = '';
        }
      }
      
      function updateDimensions() {
        headerHeight = header.offsetHeight;
        audioDivWidth = audioDiv.offsetWidth;
        audioDivLeft = audioDiv.getBoundingClientRect().left;
        updatePositions();
      }
      
      window.addEventListener('scroll', updatePositions);
      window.addEventListener('resize', updateDimensions);
      updateDimensions(); // Initial call to set dimensions
    }
  })();