import Catchy from "../landing_parts/Catchy";
import Approach from "../landing_parts/Approach";
import Contact from '../landing_parts/Contact';
import DeliveryOptions from "../landing_parts/DeliveryOptions";
import Order from '../landing_parts/Order';
import Maps from "../landing_parts/Maps";
import MenuLanding from "../landing_parts/MenuLanding";


const Landing = (props) => {
  return (
    <div>
      <Catchy />
      <DeliveryOptions />
      <MenuLanding />
      <Maps />
      <Approach />
      <Order />
      <Contact />
    </div>
  );
}
export default Landing;