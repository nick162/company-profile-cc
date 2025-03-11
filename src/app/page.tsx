import Navbar from "./component/Navbar";
import TakeAway from "./component/TakeAway";
import FoodMenu from "./cardfoodmenu/page";
import Jumbotron from "./home/page";
import Testimonial from "./testimoni/page";
import Menu from "./drinkfoodmenu/page";
import Contact from "./kontak/page";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <TakeAway />
      <Menu />
      <Testimonial />
    </div>
  );
}
