import {
  Tag,
  TagLabel,
  HStack,
  Code,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

type RequestType = "GET" | "POST" | "PATCH" | "PUT";

interface Props {
  request: string;
  dir: string;
}

const Info = ({ request, dir }: Props) => {
  const [endpointType, setEndpointType] = useState(request);
  const [route, setRoute] = useState(dir);
  const [tagColor, setTagColor] = useState("red");

  useEffect(() => {
    switch (endpointType) {
      case "GET":
        setTagColor("red");
        break;
      case "POST":
        setTagColor("blue");
        break;
      case "PATCH":
        setTagColor("pink");
        break;
      case "PUT":
        setTagColor("green");
        break;

      default:
        setTagColor("red");
    }
  });

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

            <Tag variant="solid" colorScheme="yellow">
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
