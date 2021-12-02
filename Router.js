class Router {
  nowPage = "";

  constructor({ pages }) {
    this.app = document.getElementById("app");

    // 3.페이지가 변경될 때를 감지하여 라우팅을 한다.
    window.onhashchange = () => {
      // 1.라우팅할 전체 페이지를 등록한다.
      this.pages = pages;
      this.nowPage = window.location.hash.replace("#", "");

      const page = this.pages.find((p) => p.path === this.nowPage);
      const Page = page.page;
      const currentPage = new Page({router:this});

      this.app.innerHTML = '';
      this.app.innerHTML += currentPage.render();
      currentPage.mount();
    };
  }

  push(pageName){
    window.location.hash = pageName;
  }

}
module.exports = Router;   

// 라우터를 만들 때 고려할 사항
// 1.라우팅할 전체 페이지를 등록한다.
// 2.전역에서 라우터를 가져와 쉽게 라우팅 할 수 있게 한다.
// 3.페이지가 변경될 때를 감지하여 라우팅을 한다.
