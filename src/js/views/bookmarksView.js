import View from './View';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _data;
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it! :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(rec => previewView.render(rec, false)).join('');
  }
}

export default new BookmarksView();
