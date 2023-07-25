let containerA = new ProgressBar.Circle(circleA, {
  color: '#fff',
  strokeWidth: 9,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#f2911b', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});


let containerB = new ProgressBar.Circle(circleB, {
  color: '#fff',
  strokeWidth: 9,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#f2911b', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  
    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  
  }
});

let containerC = new ProgressBar.Circle(circleC, {
  color: '#fff',
  strokeWidth: 9,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#f2911b', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  
    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  
  }
});

let containerD = new ProgressBar.Circle(circleD, {
  color: '#fff',
  strokeWidth: 9,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#f2911b', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  
    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  
  }
});

containerA.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
containerA.text.style.fontSize = '2rem';
containerB.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
containerB.text.style.fontSize = '2rem';
containerC.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
containerC.text.style.fontSize = '2rem';
containerD.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
containerD.text.style.fontSize = '2rem';


containerA.animate(1.0);  
containerB.animate(1.0);  
containerC.animate(1.0);  
containerD.animate(1.0); 





// Parallax
$('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
$('#apply-content').parallax({imageSrc: 'img/pattern.png'})