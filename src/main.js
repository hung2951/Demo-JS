import Navigo from "navigo";
import Header from "./layouts/header";
import HomePage from "./pages/home";
import Footer from "./layouts/footer";
import AboutPage from "./pages/about";
const router = new Navigo("/", {linksSelector:"a"});

const render = (header,content,footer) => {
    document.getElementById("header").innerHTML = header.print();
    document.getElementById("main").innerHTML = content.print();
    document.getElementById("footer").innerHTML = footer.print();
}
const about_render = (header,about,footer) =>{
    document.getElementById("header").innerHTML = header.print();
    document.getElementById("main").innerHTML = about.print();
    document.getElementById("footer").innerHTML = footer.print();
}
router.on({
    "/": () => {
        render(Header,HomePage,Footer);
    },
    "/about": () => {
        about_render(Header,AboutPage,Footer);
    }
});

router.resolve();
