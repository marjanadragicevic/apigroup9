//Line: dragging code

// target elements with the "draggable" class
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
  


    interact('.dot').dropzone({
  // only accept elements matching this CSS selector
  accept: '#circle',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
  },

  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
  },

  ondrop: function (event) {
    console.log("blue");
    event.target.classList.add('dropcircle');
    console.log("blueagain");
  }
  
});

interact('.draggable')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('switch-bg');
    event.preventDefault();
  })
  

