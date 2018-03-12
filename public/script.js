window.onload = function(){

   /*** DRAG AND DROP ***/ 
    interact('.draggable')
    .draggable({
      inertia: true,
      autoScroll: true,

      onmove: dragMoveListener,

      onend: function (event) {

        /* Write cool functions here */
      }
    });
   
     function dragMoveListener (event) {
      var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';
  
      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  
    // Crucial piece for resizing and other functions to work later (. 
    window.dragMoveListener = dragMoveListener;
  
  }