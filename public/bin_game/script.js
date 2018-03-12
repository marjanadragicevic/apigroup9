//Line: dragging code

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
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

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;


  
          // Line: drag and drop

  /* The dragging code for '.draggable' from the demo above
  applies to this demo as well so it doesn't have to be repeated. */

 /*Line: did not work had to cooy in drag js aswell
 enable draggables to be dropped into this*/

//Line: PLASTIC!


interact('.bin_plastic').dropzone({
  // only accept elements matching this CSS selector
  accept: '#plastic',
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
    draggableElement.textContent = 'Correct!';
  },
  ondragleave: function (event) {
     //remove the drop feedback style
     event.target.classList.remove('drop-target');
     event.relatedTarget.classList.remove('can-drop');
     event.relatedTarget.textContent = 'Hang on!';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'That is the correct bin';
    event.relatedTarget.style.visibility = "hidden";
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});



//Line: PAPER!
interact('.bin_paper').dropzone({
  // only accept elements matching this CSS selector
  accept: '#paper',
  // Require element to be in center overlap for a drop to be possible
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
    draggableElement.textContent = 'Correct!';
  },
  ondragleave: function (event) {
     //remove the drop feedback style
     event.target.classList.remove('drop-target');
     event.relatedTarget.classList.remove('can-drop');
     event.relatedTarget.textContent = 'Hang on!';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'That is the correct bin';
    event.relatedTarget.style.visibility = "hidden";
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

//Line: METAL!
interact('.bin_metal').dropzone({
  // only accept elements matching this CSS selector
  accept: '#metal',
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
    draggableElement.textContent = 'Correct!';
  },
  ondragleave: function (event) {
     //remove the drop feedback style
     event.target.classList.remove('drop-target');
     event.relatedTarget.classList.remove('can-drop');
     event.relatedTarget.textContent = 'Hang on!';
  },
  ondrop: function (event) {
    
    if ("#plastic"){
      alert("try again");}

    event.relatedTarget.style.visibility = "hidden";
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});