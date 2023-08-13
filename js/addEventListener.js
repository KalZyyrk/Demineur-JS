import onClickCell from './events/onClickCell.js';

const addEventListener = (grid) => {
  const gridElt = document.querySelector('.grid');

  gridElt.addEventListener('click', ({ target }) => onClickCell({ target, grid }))

  gridElt.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const { target } = e;

    if (target.matches('.cell-flag')) {
      target.classList.remove("cell-flag");
      target.classList.add("cell-hidden");
      return;
    }

    if (!target.matches(".cell-hidden")) {
      return;
    }

    target.classList.remove("cell-hidden");
    target.classList.add("cell-flag");
  })
}

export default addEventListener;