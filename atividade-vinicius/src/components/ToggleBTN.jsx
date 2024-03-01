import "./Button.css"
import PropTypes from 'prop-types';


const ToggleBTN = ({ changePage, currentPage }) => {
  return (
    <div className="btns">
      <ul className="btn_list">
        <li>
          <button className={currentPage === 1 ? "active" : ""} onClick={() => changePage(1)}>Atividade 1</button>
        </li>
        <li>
          <button className={currentPage === 2 ? "active" : ""} onClick={() => changePage(2)}>Atividade 2</button>
        </li>
      </ul>
    </div>

  );
};

ToggleBTN.propTypes = {
    changePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
  };

export default ToggleBTN;
