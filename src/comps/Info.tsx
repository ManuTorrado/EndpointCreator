import {
  Tag,
  TagLabel,
  HStack,
  Code,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

const Info = () => {
  type Endpoint = "GET" | "POST" | "PATCH" | "PUT";
  const [endpointType, setEndpointType] = useState<Endpoint>("GET");
  const [route, setRoute] = useState("/");
  const [tagColor, setTagColor] = useState("red");

  const endpointColor = () => {
    switch (endpointType) {
      case "GET":
        setTagColor("red");
        break;
      case "POST":
        setTagColor("blue");
        break;

      default:
        setTagColor("red");
    }
  };

  return (
    <div
      style={{
        border: " 2px solid #dbd02c",
        borderBottom: "4px solid #dbd02c",
        borderRadius: 5,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <HStack spacing={1}>
            <Tag variant="solid" colorScheme={tagColor}>
              <TagLabel>{endpointType}</TagLabel>
            </Tag>

            <Tag contentEditable variant="solid" colorScheme="yellow">
              <TagLabel>{route}</TagLabel>
              <Code></Code>
            </Tag>
          </HStack>
        </div>

        <ButtonGroup spacing={0} variant="ghost">
          <Button>
            <BsPencil />
          </Button>
          <Button>
            <BsTrash />
          </Button>
        </ButtonGroup>
      </div>
      <Code> {"{}"}</Code>
    </div>
  );
};

export default Info;
