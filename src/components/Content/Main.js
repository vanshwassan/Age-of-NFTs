import { useContext } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/layout";

import MintForm from "./MintNFT/MintForm";
import NFTCollection from "./NFTCollection/NFTCollection";
import CollectionContext from "../../store/collection-context";
import MarketplaceContext from "../../store/marketplace-context";
import Spinner from "../Layout/Spinner";
import logo from "../../img/logo2.PNG";
import banner from "../../img/banner.png";
import bgbg from "../../img/bgbg.png";

const Main = () => {
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);

  return (
    <>
      <Flex
        bg="#0d0d0d"
        py="10"
        px="18%"
        flexDir="column"
        bg="black"
        minH="100vh"
      >
        <div className="container-fluid mt-2">
          <div className="row">
            <main
              role="main"
              className="col-lg-12 justify-content-center text-center"
            >
              <div className="content mr-auto ml-auto">
                <Box bgImage={banner} my="6" p="10" rounded="xl">
                  <Heading size="2xl" color="black" fontFamily="Castellar">
                    First Exclusive Fan-Made <br></br> Age of Empires NFT
                    Platform
                  </Heading>
                  <br></br>
                  <Heading size="lg" color="black" fontFamily="Castellar">
                    For the community, by the community
                  </Heading>
                </Box>
                <Box bg="#0d0d0d" my="6" p="10" rounded="xl">
                  <Heading color="white" fontFamily="Segoe UI Light" p={3}>
                    Start minting your own NFTs with one click!
                  </Heading>
                  {!collectionCtx.nftIsLoading && <MintForm />}
                  {collectionCtx.nftIsLoading && <Spinner />}
                </Box>
              </div>
            </main>
          </div>
          <hr />
          <Box bgImage={bgbg} my="6" p="10" rounded="xl">
            <Heading size="xl" color="white" fontFamily="Segoe UI Light">
              Beta Drop
            </Heading>
          </Box>
          <Box bg="#0d0d0d" my="6" p="10" rounded="xl">
            {!marketplaceCtx.mktIsLoading && <NFTCollection />}
            {marketplaceCtx.mktIsLoading && <Spinner />}
          </Box>
        </div>
      </Flex>
    </>
  );
};

export default Main;
