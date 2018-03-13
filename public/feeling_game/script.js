
/*** DRAG CODE FOR THE DRAGGING TO WORK ***/

interact('.draggable')
  .draggable({
    // keep the element within the area of it's parent (wrapper)
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
    },
    autoScroll: true,
  });

  function dragMoveListener (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the position after every move so that it actually moves
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // THIS PIECE IS CRUCIAL FOR THE OTHER SKETCHES TO WORK like resize etc
  window.dragMoveListener = dragMoveListener;


/*** DRAG AND DROP ***/

/* This includes ALL dropzones since they alll have class dropzone. */
/* Adding classes and removing them depending on dropzone feedback. */
interact('.dropzone').dropzone({
  accept: '#pointer',
  overlap: 0.75,

  ondropactivate: function (event) {
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    dropzoneElement.classList.add('drop-target');
    
  },

  ondragleave: function (event) {
    event.target.classList.remove('drop-target');
  },

  ondropdeactivate: function (event) {
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
})

  /* DROPZONE CAT */

interact('#dropzone-cat').dropzone({
  accept: '#pointer',
  overlap: 0.1,  

  ondragenter: function (event) {
    $(".message-cat").toggle(1000);
  },

  ondragleave: function (event) {
    $(".message-cat").toggle(1000);
  },
})

/** DOG */

interact('#dropzone-dog').dropzone({
  accept: '#pointer',
  overlap: 0.1,  

  ondragenter: function (event) {
    $(".message-dog").toggle(1000);
  },

  ondragleave: function (event) {
    $(".message-dog").toggle(1000);
  },
})

/** SNAIL */

interact('#dropzone-snail').dropzone({
  accept: '#pointer',
  overlap: 0.1,  

  ondragenter: function (event) {
    $(".message-snail").toggle(1000);
  },

  ondragleave: function (event) {
    $(".message-snail").toggle(1000);
  },
})



  /*** RESIZE DRAG ***/

  interact('.resize-drag, .resize-drag-2, .resize-drag-3')
  .draggable({
    onmove: window.dragMoveListener,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })
  .resizable({
    // resize only top
    edges: { left: false, right: false, bottom: false, top: true },

    // Dont go outside of wrapper
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },

    // Start size and minimun size of box
    restrictSize: {
      min: { width: 20, height: 50 },
    },

  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style 
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });


  /**** SLIDER ****/

  interact('.slider')                   
  .origin('self')                     
  .draggable({
    restrict: { restriction: 'self' },
    // keep the drag within the element itself 
    onmove: function (event) {        
        // call this function on every dragmove
      var sliderHeight = interact.getElementRect(event.target.parentNode).height,
          value = event.pageX / sliderHeight;

      event.target.style.paddingLeft = (value * 100) + '%'; //Makes sure that it moves with the pointer
      event.target.setAttribute('data-value', value.toFixed(2));
    }
  });
