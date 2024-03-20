import "./Button.css"
import PropTypes from 'prop-types';


const ToggleBTN2 = ({ changePage, currentPage }) => {
  return (
    <div className="btns">
      <ul className="btn_list">
        <li>
          <button className={currentPage === 12 ? "active" : ""} onClick={() => changePage(12)}>Página 12</button>
        </li>
        <li>
          <button className={currentPage === 13 ? "active" : ""} onClick={() => changePage(13)}>Página 13</button>
        </li>
        <li>
          <button className={currentPage === 14 ? "active" : ""} onClick={() => changePage(14)}>Página 14</button>
        </li>
      </ul>
    </div>

  );
};

ToggleBTN2.propTypes = {
    changePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
  };

export default ToggleBTN2;
