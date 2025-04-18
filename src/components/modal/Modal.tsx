import {
  CloseButton,
  Header,
  ModalContent,
  ModalWrapper,
  SlideContainer,
  Tab,
  Tabs,
} from "./styles";

import { StatusSlider } from "./Status/StatusSlider";
import { useState } from "react";
import DashboardSlider from "./Dashboard/DashboardSlider";

export const Modal = ({ onClose }: { onClose: () => void }) => {
  const [activeSection, setActiveSection] = useState<"status" | "dashboard">(
    "status"
  );

  return (
    <ModalWrapper>
      <ModalContent>
        <Header>
          <span>BOOST PANEL</span>
          <CloseButton onClick={onClose} />
        </Header>

        <Tabs>
          <Tab
            onClick={() => setActiveSection("status")}
            $active={activeSection === "status"}
          >
            Status
          </Tab>
          <Tab
            onClick={() => setActiveSection("dashboard")}
            $active={activeSection === "dashboard"}
          >
            Dashboard
          </Tab>
        </Tabs>
        <SlideContainer>
          {activeSection === "status" && <StatusSlider />}
          {activeSection === "dashboard" && <DashboardSlider />}
        </SlideContainer>
      </ModalContent>
    </ModalWrapper>
  );
};
export default Modal;
