import { useDisclosure } from "../../hooks/useDisclosure";

export const useCreateNewAccessCode = () => {
  const [loading, { open, close }] = useDisclosure();
};
