import NewsList from "../components/newsList";
import Banner from "../components/banner";
const HomePage = {
    print() {
        return /*html*/`
          <div class="mt-4" id="banner">
          ${Banner.print()}
          </div>
          ${NewsList.print()}
        `;
    },
};
export default HomePage;