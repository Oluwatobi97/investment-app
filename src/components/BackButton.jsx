import { Linkbuttons } from "../views/DashBoard/Plans";
import { SquareArrowLeft } from "lucide-react";
const BackButton = () => {
  return (
    <Linkbuttons
      path={"/Home"}
      className={"flex items-center px-4 gap-2 mb-2 mt-24 md:mt-10"}
    >
      <SquareArrowLeft />
      <p>Go Back To Home</p>
    </Linkbuttons>
  );
};

export default BackButton;
