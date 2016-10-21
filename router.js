


class Router {
  constructor (node) {
    this.node = node;
  }

  start(){
    window.addEventListener("hashchange", this.render.bind(this));
  }

  activeRoute(){
    let hashFragment = window.location.hash;
    let noHashSign = hashFragment.slice(1);
    return noHashSign;
  }

  render(){
    this.node.innerHTML = "";
    let routeName = this.activeRoute();
    let el = document.createElement("p");
    el.innerHTML = routeName;
    this.node.appendChild(el);
  }
}
module.exports = Router;
