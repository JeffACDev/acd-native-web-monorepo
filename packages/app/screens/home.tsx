import { Container } from "ui/atoms/container/Container";
import { Text } from "ui/atoms/text";
export function Home() {
  return (
    <Container className="flex flex-1 justify-center items-center">
      <Text className="text-base">
        Edit
        <Text className="text-base font-bold">
          packages/app/screens/home.tsx
        </Text>
        to edit this screen.
      </Text>
    </Container>
  );
}
