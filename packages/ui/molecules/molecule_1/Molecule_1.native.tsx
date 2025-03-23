import { Text } from "react-native";
import Container from "ui/atoms/container/Container.native";
import { Molecule_1Props } from "./types";

const Molecule_1 = ({ children }: Molecule_1Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
export default Molecule_1;
