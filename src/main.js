import Navigo from "navigo";
import Header from "./layouts/header";
import HomePage from "./pages/home";
import Footer from "./layouts/footer";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import NewsPage from "./pages/news";
import SignIn from "./login/signin";
import SignUp from "./login/signup";
const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
    document.getElementById("header").innerHTML = Header.print();
    document.getElementById("main").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.print();
}
const login = (content) =>{
    document.getElementById("main").innerHTML = content;
}
router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/news": () => {
        render(NewsPage.print());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewsPage.print(id));
    },
    "/signin": () => {
        login(SignIn.print());
    },
    "/signup":()=>{
        login(SignUp.print());
    },
});

router.resolve();
