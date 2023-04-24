function submitQuiz() {
  // get all the radio button groups
  var q1 = document.getElementsByName('q1');
  var q2 = document.getElementsByName('q2');
  var q3 = document.getElementsByName('q3');
  
  // check if all questions have been answered
  if (q1[0].checked || q1[1].checked || q1[2].checked &&
      q2[0].checked || q2[1].checked || q2[2].checked &&
      q3[0].checked || q3[1].checked || q3[2].checked) {
    
    // initialize score to 0
    var score = 0;
    
    // check answers and update score
    if (q1[1].checked) {
      score++;
    }
    if (q2[1].checked) {
      score++;
    }
    if (q3[0].checked) {
      score++;
    }
    
    // display score
    alert('You scored ' + score + ' out of 3.');
  } else {
    // if not all questions have been answered, display error message
    alert('Please answer all questions before submitting.');
  }
}
