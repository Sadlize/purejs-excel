class Page {
  constructor(params) {
    this.params = params;
  }

  // eslint-disable-next-line class-methods-use-this
  getRoot() {
    throw new Error('Method getRoot should be implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  afterRender() {}

  // eslint-disable-next-line class-methods-use-this
  destroy() {}
}

export default Page;
