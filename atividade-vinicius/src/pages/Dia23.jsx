import { useState } from "react";
import ToggleBTN from "../components/ToggleBTN";
import Atv1 from "../components/Atividades/23/Atv1";
import Atv2 from "../components/Atividades/23/Atv2";
import Atv3 from "../components/Atividades/23/Atv3";
import Atv4 from "../components/Atividades/23/Atv4";
import Atv5 from "../components/Atividades/23/Atv5";
import Atv6 from "../components/Atividades/23/Atv6";
import Atv7 from "../components/Atividades/23/Atv7";
import Atv8 from "../components/Atividades/23/Atv8";
import Atv9 from "../components/Atividades/23/Atv9";
import Atv10 from "../components/Atividades/23/Atv10";

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
      case 3:
        return <Atv3 />;
      case 4:
        return <Atv4 />;
      case 5:
        return <Atv5 />;
      case 6:
        return <Atv6 />;
      case 7:
        return <Atv7 />;
      case 8:
        return <Atv8 />;
      case 9:
        return<Atv9 />
      case 10:
        return <Atv10 />
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
