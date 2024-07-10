import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 80 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorScheme={color}
      paddingX="8px"
      fontSize="14px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
