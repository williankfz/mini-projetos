const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');
questions[0].classList.add('question-active');
answers[0].classList.add('answer-active');

function handleClick() {
  questions.forEach((item) => {
    item.classList.remove('question-active');
    item.nextElementSibling.classList.remove('answer-active');
  });
  this.classList.add('question-active');
  this.nextElementSibling.classList.add('answer-active');
}

questions.forEach((question) => {
  question.addEventListener('click', handleClick);
});
