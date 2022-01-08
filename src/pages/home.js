import NewsList from "../components/newsList";
import Banner from "../components/banner";
const HomePage = {
    print() {
        return /*html*/`
        <div class="mt-4" id="banner">
        ${Banner.print()}
        </div>
      <h1 class="my-7 text-[#272f54] font-bold ">TIN TỨC HỌC TẬP</h1>
      <div class="content">
        ${NewsList.print()}
      </div>
        `;
    },
};
export default HomePage;