import NewsList from "../components/newsList";
import Header from "../components/header";
import Footer from "../components/footer";
const NewsPage = {
    print (){
        return  /*html*/ `
            <div class="max-w-5xl m-auto">
                ${Header.print()}
                ${NewsList.print()}
                <div class="pt-5">
                    ${Footer.print()}
                </div>
            </div>   
        `
    }
}
export default NewsPage;