import {
  Image,
  Header as DefaultHeader,
  Text,
  Box,
} from "@mantine/core";
import amworkUrl from "@/assets/amwork.svg";
import superCrmUrl from "@/assets/super-crm.png";

const Header: React.FC = () => {
  return (
    <DefaultHeader
      sx={{
        border: "none",
        position: "initial",
        display: "flex",
        gap: "1rem",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "flex-start",
        "@media (max-width: 1000px)": {
          justifyContent: "center",
        },
      }}
      height={40}
      p="xs"
    >
      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "0",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "flex-start",
          width: '205px'
        }}
      >
        <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
          <Image width="100px" src={amworkUrl} alt="Amwork logo" />
        </Box>
        <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
          <Text color="primary-black.0">{"x"}</Text>
        </Box>
        <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
          <Image width="100px" src={superCrmUrl} alt="Super CRM logo" />
        </Box>
      </Box>
    </DefaultHeader>
  );
};

export default Header;
