import { useState } from "react";
import ToggleBTN from "../components/ToggleBTN";
import Atv1 from "../components/Atividades/23/Atv1";
import Atv2 from "../components/Atividades/23/Atv2";

const Dia23 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const renderComponent = () => {
    switch (currentPage) {
      case 1:
        return <Atv1 />;
      case 2:
        return <Atv2 />;

      default:
        return null;
    }
  };

  return (
    <div>
      Dia23
      <ToggleBTN changePage={changePage} />
      {renderComponent()}
    </div>
  );
};

export default Dia23;
