import { createContext, useContext, useEffect } from "react";

import { useRouter } from "next/router";

import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

type SidebarDrawerContextType = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextType);

const SidebarDrawerProvider = ({ children }) => {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};

const useSidebarDrawer = () => useContext(SidebarDrawerContext);

export { SidebarDrawerProvider, useSidebarDrawer };
