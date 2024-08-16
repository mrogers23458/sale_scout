// components/ApolloProvider.tsx
"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import { ReactNode } from "react";
import { client } from "../lib/apollo_client";

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  return <Provider client={client}>{children}</Provider>;
};
