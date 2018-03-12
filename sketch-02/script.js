/// DRAG CODE FOR THE DRAGGING TO WORK ***

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // keep the element within the area of it's parent (wrapper)
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the position after every move so that it actually moves
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // THIS PIECE IS CRUCIAL FOR THE OTHER SKETCHES TO WORK like resize etc
  window.dragMoveListener = dragMoveListener;


/// *** DRAG AND DROP ***


// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#pointer',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active');
    },
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

        if ("#dropzone-snail") {
            alert("You silly goose!");
        }

    },

    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active');
      event.target.classList.remove('drop-target');
    }
  });


  // *** RESIZE DRAG ***

  interact('.resize-drag, .resize-drag-2, .resize-drag-3, .resize-drag-4')
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
