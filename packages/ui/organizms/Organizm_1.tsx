import Container from "ui/atoms/container/Container";
import Molecule_1 from "ui/molecules/molecule_1/Molecule_1";
import { Organizm_1Props } from "./types";

const Organizm_1 = ({ moleculeChildren }: Organizm_1Props) => {
  return (
    <Container>
      <Molecule_1>{moleculeChildren}</Molecule_1>
    </Container>
  );
};
export default Organizm_1;
