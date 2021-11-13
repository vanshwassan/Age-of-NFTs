import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Web3Provider from "./store/Web3Provider";
import CollectionProvider from "./store/CollectionProvider";
import MarketplaceProvider from "./store/MarketplaceProvider";
import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    <Web3Provider>
      <CollectionProvider>
        <MarketplaceProvider>
          <App />
        </MarketplaceProvider>
      </CollectionProvider>
    </Web3Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
