import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');

      if (!button) return;
      const goToPage = +button.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    console.log(numPages);

    // Page 1, and there are other pages
    if (currPage === 1 && numPages > 1) {
      return this.#generateButton(currPage, 'next');
    }

    // Last page
    if (currPage === numPages && numPages > 1) {
      return this.#generateButton(currPage, 'prev');
    }

    // Middle page
    if (currPage < numPages) {
      return `
        ${this.#generateButton(currPage, 'prev')} 
        ${this.#generateButton(currPage, 'next')}
        `;
    }

    // Page 1, and there are no other pages
    return '';
  }

  #generateButton(currPage, dir) {
    const newPage = currPage + (dir === 'prev' ? -1 : +1);

    return `
        <button data-goto="${newPage}"class="btn--inline pagination__btn--${dir}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
      dir === 'prev' ? 'left' : 'right'
    }"></use>
            </svg>
            <span>Page ${newPage}</span>
        </button>
    `;
  }
}

export default new PaginationView();
