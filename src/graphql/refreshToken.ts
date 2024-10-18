import { gql } from "@apollo/client";

export const REFRESH_TOKEN_MUTATION = gql`
    mutation RefreshToken($refreshoken: String!) {
        refreshoken(refreshoken: $refreshoken) {
            access_token
            refresh_token
        }
    }
`;
