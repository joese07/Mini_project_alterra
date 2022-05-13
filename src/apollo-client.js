import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://smiling-lark-36.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "Lpz60t4tvPqEJz4XJXW17Flg83keqq6hZlOlrr51TaWt4YukjeAjoJ65ttpsPThE",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "https://smiling-lark-36.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "Lpz60t4tvPqEJz4XJXW17Flg83keqq6hZlOlrr51TaWt4YukjeAjoJ65ttpsPThE",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
