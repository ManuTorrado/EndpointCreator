import { ChangeEvent, useState } from "react";
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
  Modal,
  ModalContent,
  Select,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalOverlay,
  ModalFooter,
} from "@chakra-ui/react";
import { GrFormAdd } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { info } from "console";

function App() {
  const [infoContent, setInfoContent] = useState([{ type: "", route: "" }]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalInfo, setModalInfo] = useState({ type: "", route: "" });
  const postInfo = infoContent.filter((info) =>
    info.type == "POST" ? true : false
  );
  const getInfo = infoContent.filter((info) =>
    info.type == "GET" ? true : false
  );
  const patchInfo = infoContent.filter((info) =>
    info.type == "PATCH" ? true : false
  );
  const putInfo = infoContent.filter((info) =>
    info.type == "PUT" ? true : false
  );
  const addInfo = () => {
    setModalInfo({ type: "GET", route: "" });
    onOpen();
    //  setInfoContent([...infoContent, { type: "GET", route: "/" }]);
  };

  const CreateInfo = () => {
    setInfoContent([...infoContent, modalInfo]);
    onClose();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalInfo({ type: modalInfo.type, route: e.target.value });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    setModalInfo({ type: e.target.value, route: modalInfo.route });
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <Box style={{ padding: 10 }}>
            <ModalHeader>Create an endpoint</ModalHeader>
            <ModalCloseButton />
            <Flex gap={3} direction={"row"} justifyContent={"space-between"}>
              <Box style={{ flexGrow: "11" }}>
                <Input onChange={handleInput} placeholder="Endpoint Route" />
              </Box>
              <Box style={{ flexGrow: "1" }}>
                <Select
                  defaultValue={"GET"}
                  onChange={handleSelect}
                  variant="outline"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PATCH">PATCH</option>
                  <option value="PUT">PUT</option>
                </Select>
              </Box>
            </Flex>

            <br />
            <Button style={{ width: "100%" }} onClick={CreateInfo}>
              Confirm
            </Button>
          </Box>
        </ModalContent>
      </Modal>

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
          <Button variant="ghost" rightIcon={<IoMdDownload />}>
            Download JSON
          </Button>
          <Button variant="ghost" rightIcon={<MdUpload />}>
            Upload JSON
          </Button>
        </ButtonGroup>
      </Box>

      <br />

      <Button onClick={addInfo}>
        <GrFormAdd />
      </Button>

      <Flex minWidth="max-content" justifyContent="start">
        <Box style={{ width: "25%" }}>
          <Stack>
            {getInfo.map((item) => (
              <Info request={item.type} dir={item.route} />
            ))}
          </Stack>
        </Box>
        <Box style={{ width: "25%" }}>
          <Stack>
            {postInfo.map((item) => (
              <Info request={item.type} dir={item.route} />
            ))}
          </Stack>
        </Box>
        <Box style={{ width: "25%" }}>
          <Stack>
            {putInfo.map((item) => (
              <Info request={item.type} dir={item.route} />
            ))}
          </Stack>
        </Box>

        <Box style={{ width: "25%" }}>
          <Stack>
            {patchInfo.map((item) => (
              <Info request={item.type} dir={item.route} />
            ))}
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export default App;
