import Header from "../components/header";
import Footer from "../components/footer";
const AboutPage = {
    print(){
        return /* html */`
        <div class="max-w-5xl m-auto">
            ${Header.print()}
            <h1>About page</h1>
            <div class="pt-5">
              ${Footer.print()}
            </div>
          </div>   
            
        `
    }
}
export default AboutPage;