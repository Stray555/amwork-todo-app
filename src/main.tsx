import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider
    theme={{
      // We can use system font families and by default, Mantine uses system fonts. So no changes in this regard here
      colors: {
        // Custom colors from task
        "primary-blue": ["#3D8FEC"],
        "primary-green": ["#50B810"],
        "primary-purple": ["#B233A6"],
        "primary-gray": ["#EBEEF6"],
        "primary-black": ["#555555"],
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Notifications />
    <App />
  </MantineProvider>,
);
