//***DRAGGING***//


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

    
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // very important to make dragging work
  window.dragMoveListener = dragMoveListener;


  
  //*** DROPZONE***//


// PLASTIC BIN
interact('.bin_plastic').dropzone({
  // only accept elements matching this CSS selector
  accept: '#plastic',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,
  
  // listen for drop related events:
  ondrop: function (event) {
    event.relatedTarget.style.visibility = "hidden";
    if ("#plastic"){  
      alert("gorgeous!");
      }
  },
  
});



//PAPER BIN
interact('.bin_paper').dropzone({
  accept: '#paper',
  overlap: 0.75,

  ondrop: function (event) {
    event.relatedTarget.style.visibility = "hidden";
    if ("#paper"){  
      alert("you got this!");
      }
  },
  
});



//METAL!
interact('.bin_metal').dropzone({
  accept: '#metal',
  overlap: 0.75,

  ondrop: function (event) {
    event.relatedTarget.style.visibility = "hidden";
    if ("#metal"){  
      alert("recycling is fun!");
      }
  },
  
});


