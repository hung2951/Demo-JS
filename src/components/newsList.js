import DataNewsList from "../data";
const NewsList = {
  print() {
    return /*html*/`
    <h1 class="my-7 text-[#272f54] font-bold ">TIN TỨC HỌC TẬP</h1>
      <div class="content">
        ${DataNewsList.map((data) =>/*html*/`
          <a href="/news/${data.id}">
            <figure>
              <img src="${data.image}" alt="">
            </figure>
            <h3>${data.title}</h3>
            <p>${data.content}</p>
          </a>
        `).join("")
      }
      </div>
      <h1 class="my-7 text-[#272f54] font-bold ">HOẠT ĐỘNG SINH VIÊN</h1>
      <div class="content">
        ${DataNewsList.map((data) =>/*html*/`
          <a href="/news/${data.id}">
            <figure>
              <img src="${data.image}" alt="">
            </figure>
            <h3>${data.title}</h3>
            <p>${data.content}</p>
          </a>
        `).join("")
      }
      </div>
      `
  }
}
export default NewsList;