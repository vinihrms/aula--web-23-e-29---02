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
        <li>
          <button className={currentPage === 3 ? "active" : ""} onClick={() => changePage(3)}>Atividade 3</button>
        </li>
        <li>
          <button className={currentPage === 4 ? "active" : ""} onClick={() => changePage(4)}>Atividade 4</button>
        </li>
        <li>
          <button className={currentPage === 5 ? "active" : ""} onClick={() => changePage(5)}>Atividade 5</button>
        </li>
        <li>
          <button className={currentPage === 6 ? "active" : ""} onClick={() => changePage(6)}>Atividade 6</button>
        </li>
        <li>
          <button className={currentPage === 7 ? "active" : ""} onClick={() => changePage(7)}>Atividade 7</button>
        </li>
        <li>
          <button className={currentPage === 8 ? "active" : ""} onClick={() => changePage(8)}>Atividade 8</button>
        </li>
        <li>
          <button className={currentPage === 9 ? "active" : ""} onClick={() => changePage(9)}>Atividade 9</button>
        </li>
        <li>
          <button className={currentPage === 10 ? "active" : ""} onClick={() => changePage(10)}>Atividade 10</button>
        </li>
        <li>
          <button className={currentPage === 11 ? "active" : ""} onClick={() => changePage(11)}>Atividade 11</button>
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
