import './spinner.css'

const Spinner = (props) => {
  return (
    <div className='spinnerContainer'>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <p>Loading...</p>
    </div>
  );
}
export default Spinner;