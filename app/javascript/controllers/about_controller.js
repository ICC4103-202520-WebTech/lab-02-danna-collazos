
function showInfo(event) {
  event.target.disabled = true;
  const answer = document.getElementsByTagName('input')[0];
  if (answer.value.toLowerCase() === 'no') {
    const questionElement = document.getElementById('question-text');
    questionElement.classList.remove('d-none');

  } else {
    const textElement = document.getElementById('hidden-text');
    textElement.classList.remove('d-none');
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', showInfo);

});
