import { useState } from "react";

import ToggleBTN2 from "../components/ToggleBTN2";
import Atv291 from "../components/Atividades/29/Atv291";
import Ativ292 from "../components/Atividades/29/Ativ292";
import Atv293 from "../components/Atividades/29/Atv293";

const Dia29 = () => {
  const [currentPage, setCurrentPage] = useState(12);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderComponent = () => {
    switch (currentPage) {
      case 12:
        return <Atv291 />;
      case 13:
        return <Ativ292 />
      case 14:
        return <Atv293 />
      default:
        return null;
    }
  };
  return <div>Dia29
      <ToggleBTN2 changePage={changePage} />
      {renderComponent()}
  </div>;
};

export default Dia29;
