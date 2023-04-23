import './styles/normalize.scss';
import './styles/globals.scss';

// Connect css
import './styles/header.scss';

function titleInputOnClickHandler() {
  document
    .getElementById('title-input')
    .setSelectionRange(0, this.value.length);
}

document
  .getElementById('title-input')
  .addEventListener('click', titleInputOnClickHandler);
