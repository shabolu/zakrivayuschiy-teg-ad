document.querySelectorAll('.card').forEach((card) => {
  const heart = card.querySelector('.like-icon');
  const likeButton = card.querySelector('.card__like-button');
  const iconButton = card.querySelector('.card__icon-button');
  const buttonText = likeButton.querySelector('.button__text');
  let textTimeout;

  function toggleIsLiked() {
    const isLiked = heart.classList.toggle('is-liked');

    likeButton.setAttribute('aria-pressed', String(isLiked));
    iconButton.setAttribute('aria-pressed', String(isLiked));

    // При быстрых кликах текст должен соответствовать последнему состоянию.
    clearTimeout(textTimeout);
    textTimeout = setTimeout(() => {
      buttonText.textContent = isLiked ? 'Unlike' : 'Like';
    }, 500);
  }

  iconButton.addEventListener('click', toggleIsLiked);
  likeButton.addEventListener('click', toggleIsLiked);
});
