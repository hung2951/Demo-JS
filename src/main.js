import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detailNews";
import NewsPage from "./pages/news";
import SignIn from "./login/signin";
import SignUp from "./login/signup";
import News from "./admin/news";
import NewsAdd from "./admin/newsadd";
import DashBoard from "./admin/dashboard";
import NewsEdit from "./admin/newsedit";
const routes = new Navigo("/", {linksSelector: "a"});

const render = (content) => {
    document.getElementById("main").innerHTML = content;
}
const login = (content) =>{
    document.getElementById("main").innerHTML = content;
}
const admin_render = (content) => {
    document.getElementById("main").innerHTML = content;
}
routes.on({
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
    "/admin/dashboard":()=>{
        admin_render(DashBoard.print());
    },
    "/admin/news": () => {
        admin_render(News.print());
    },
    "/admin/news/add": () => {
        admin_render(NewsAdd.print());
    },
    "/admin/news/edit/:id": ({data}) => {
        admin_render(NewsEdit.print(data.id));
    }
});

routes.resolve();
