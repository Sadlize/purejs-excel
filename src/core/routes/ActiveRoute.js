class ActiveRoute {
  static get path() {
    return window.location.hash.slice(1);
  }

  static get param() {
    return ActiveRoute.path.split('/');
  }
}

export default ActiveRoute;
