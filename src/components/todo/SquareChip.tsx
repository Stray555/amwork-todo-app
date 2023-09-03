import React from "react";
import { Text, Center } from "@mantine/core";

interface SquareChipProps {
  number: number;
}

const SquareChip: React.FC<SquareChipProps> = ({ number }) => {
  return (
    <Center
      sx={{
        borderRadius: "4px",
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        border: "1px solid #7B8AAB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        align="center"
        color="primary-black.0"
        sx={{
          height: "12px",
          fontSize: "9px",
        }}
      >
        {number}
      </Text>
    </Center>
  );
};

export default SquareChip;
