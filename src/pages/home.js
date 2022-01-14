import NewsList from "../components/newsList";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";


const HomePage = {
    print() {
        return /*html*/`
          <div class="max-w-5xl m-auto">
            ${Header.print()}
            <div class="mt-4" id="banner">
              ${Banner.print()}
            </div>
            <div>
              ${NewsList.print()}
            </div>  
            <div class="pt-5">
              ${Footer.print()}
            </div>
          </div>   
        `;
    },
};
export default HomePage;