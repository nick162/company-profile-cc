import TakeAway from "./component/TakeAway";
import Menu from "./drinkfoodmenu/page";
import Jumbotron from "./home/page";
import Testimonial from "./testimoni/page";

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
