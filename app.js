// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting

const sections = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];
// 动态颜色变换 //
const options = {
  threshold: 0.7,
}; // 图片少于70%时颜色变换 //
let observer = new IntersectionObserver(navScroll, options);
// 第一个是创建的函数，第二个参数是我们的选项对象 //
function navScroll(entries) {
  entries.forEach(function (entry) {
    // 为每个元素创造一个循环 //
    const className = entry.target.className;
    const activeLink = document.querySelector(`[data-page="${className}"]`);
    const elementIndex = entry.target.getAttribute("data-index");
    const coordinates = activeLink.getBoundingClientRect();
    // 这将获取顶部底部高度的所有坐标以及顶部和左侧的所有信息 //
    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };
    if (entry.isIntersecting) {
      trans.style.setProperty("height", `${directions.height}px`);
      trans.style.setProperty("width", `${directions.width}px`);
      trans.style.setProperty("top", `${directions.top}px`);
      trans.style.setProperty("left", `${directions.left}px`);
      trans.style.backgroundColor = gradients[elementIndex];
    } // 控制文档流向 //
  });
}

sections.forEach(function (section) {
  observer.observe(section);
});
