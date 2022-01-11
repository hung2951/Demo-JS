import DataNewsList from "../data";

const DetailNewsPage = {
    print(id){
        const result = DataNewsList.find((post) => post.id === id);
        return /*html*/`
        <h1 class="my-7 text-[#272f54] font-bold ">TIN TỨC HỌC TẬP</h1>
        <div class="content">  
              <figure>
                <img src="${result.image}" alt="">
              </figure>
              <h3>${result.title}</h3>
              <p>${result.content}</p>
        </div>
        `;
    },
};
export default DetailNewsPage;