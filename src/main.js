import Navigo from "navigo";

import Header from "./layouts/header";
import HomePage from "./pages/home";
import Footer from "./layouts/footer";
const router = new Navigo("/");

const render = (header,content,footer) => {
    document.getElementById("header").innerHTML = header.print();
    document.getElementById("main").innerHTML = content.print();
    document.getElementById("footer").innerHTML = footer.print();
}

router.on({
    "/": () => {
        render(Header,HomePage,Footer);
    },
    "/about": () => {
        render('about');
    }
});

router.resolve();
