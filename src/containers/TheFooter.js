import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://www.instagram.com/pmkstikombali/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UKM PMK STIKOM BALI
        </a>
        <span className="ml-1">&copy; 2022 Frensia</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://www.instagram.com/frensia_tanaga/"
          target="_blank"
          rel="noopener noreferrer"
        >
         frensia_tanaga
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
