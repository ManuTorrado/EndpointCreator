import { Box, Button } from "@chakra-ui/react";
import { GrFormAdd } from "react-icons/gr";
import Info from "./Info";
const Add = () => {
  const style = {
    backgroundColor: "#ececec",
    padding: 5,
    justifyContent: "center",
    display: "flex",
  };
  const handleClick = () => {
    return <Info />;
  };

  return (
    <Button onClick={handleClick} variant="ghost">
      <GrFormAdd />
    </Button>
  );
};

export default Add;
