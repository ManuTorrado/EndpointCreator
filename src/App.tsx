import { useState } from "react";
import Add from "./comps/Add";
import Info from "./comps/Info";
import "./index.css";
import {
  Button,
  Text,
  Box,
  Stack,
  Container,
  ButtonGroup,
  Input,
  Center,
  Flex,
} from "@chakra-ui/react";
import { GrFormAdd } from "react-icons/gr";
function App() {
  const [infoContent, setInfoContent] = useState([<Info />]);

  const addInfo = () => {
    setInfoContent([...infoContent, <Info />]);
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#fffc65",
        }}
      >
        <Text fontSize="4xl">Endpoint Maker ⚙️</Text>
        <ButtonGroup>
          <Button variant="ghost">Download JSON</Button>
          <Button variant="ghost">Download JSON</Button>
        </ButtonGroup>
      </Box>

      <br />

      <ButtonGroup isAttached variant="outline">
        <Button>Post</Button>
        <Button>Get</Button>
        <Button>Patch</Button>
        <Button>Put</Button>
      </ButtonGroup>
      <br />
      <br />
      <Flex minWidth="max-content" justifyContent="start">
        <Box style={{ width: "25%" }}>
          <Stack>{infoContent}</Stack>
          <Button style={{ width: "100%" }} onClick={addInfo}>
            <GrFormAdd />
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default App;
