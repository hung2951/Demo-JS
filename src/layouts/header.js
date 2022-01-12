import Logo from "../components/logo";
import Menu from "../components/navbar";
import FormSearch from "../components/form-search";
const Header = {
  print() {
    return /*html*/ `
        <div class="bg-[#272f54]">
        <a href="">
          ${Logo.print()}
        </a>
      </div>
      <div class="flex bg-[#cb7801] h-[50px]">
        <div class="menu">
          ${Menu.print()}
        </div>
        <div class="py-3 pl-20">
         ${FormSearch.print()}
        </div>
        <a class="py-2 pl-20">
        <i class="fas fa-user fa-2x"></i>
        </a>
      </div>
        `
  }
}
export default Header;