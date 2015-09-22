'use strict';

function toggle(x,y) {
  if (document.getElementById(x).style.display === 'inline') {
    document.getElementById(x).style.display = 'none';
    document.getElementById(y).innerHTML = 'Show more info';
  }
  else {
    document.getElementById(x).style.display = 'inline';
    document.getElementById(y).innerHTML = 'Show less info';
  }
}
