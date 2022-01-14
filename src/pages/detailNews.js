import DataNewsList from "../data";
import Header from "../components/header";
import Footer from "../components/footer";
const DetailNewsPage = {
    print(id){
        const result = DataNewsList.find((post) => post.id === id);
        return /*html*/`
          <div class="max-w-5xl m-auto">
              ${Header.print()}
            <h1 class="my-7 text-[#272f54] font-bold ">TIN TỨC HỌC TẬP</h1>
            <div class="content">  
                  <figure>
                    <img src="${result.image}" alt="">
                  </figure>
                  <h3>${result.title}</h3>
                  <p>${result.content}</p>
            </div>
            ${Footer.print()}
          </div>
        `;
    },
};
export default DetailNewsPage;