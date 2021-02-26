const loadMoreBtn = {
  refs: {
    button: document.querySelector('[data-function ="loadmore"]'),
    label: document.querySelector('.label'),
    spinner: document.querySelector('.spinner'),
  },
  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Show more';
    this.refs.spinner.classList.add('is-hidden');
  },
  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Loading...';
    this.refs.spinner.classList.remove('is-hidden');
  },
  show() {
    this.refs.button.classList.remove('is-hidden');
  },
  hide() {
    this.refs.button.classList.add('is-hidden');
  },
};

export default loadMoreBtn;
