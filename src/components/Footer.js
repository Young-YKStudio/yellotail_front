import PublicFooter from "./footerParts/PublicFooter";
import AdminFooter from "./footerParts/AdminFooter";

const footerDistributor = (auth) => {
  if(auth === 'admin') {
    return <AdminFooter />
  } else {
    return <PublicFooter />
  }
}

const Footer = (props) => {
  return (
    <div>
      {footerDistributor(props.authUser)}
    </div>
  );
}
export default Footer;