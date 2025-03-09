class Header extends HTMLElement {
    constructor() {
        super();
    }
}

connectedCallback() {
    this.innerHTML = `
<!-- navbar about e github-->
<header>
<nav class="navbar sticky-top justify-content-between py-1 px-1 small bg-light mw-100">
         <a class="nav-link link-dark p-2" href="#about"><i class="bi bi-heart"></i> About </a>
        <div class="pagination">
          <a class="page-link link-dark" id="1-link" href="#1">1</a>
          <a class="page-link link-dark" id="2-link" href="#2">2</i></a>
          <a class="page-link link-dark" id="3-link" href="#3">3</a>
        </div></nav>
        </header>`;
}

customElements.define('header-component', Header);