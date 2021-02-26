export default {
  apiKey: '20378001-e5e40f3ffb0fb0828fca51f1b',
  page: 1,
  searchQuery: '',
  fetchArticles() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      })
      .catch(err => console.log(err));
  },

  get query() {
    return this.searchQuery;
  },
  set query(search) {
    this.searchQuery = search;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
};
