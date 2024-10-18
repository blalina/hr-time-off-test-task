import { gql } from "@apollo/client";

export const My_PROFILE_QUERY = gql`
    query {
        myProfile {
            id
            name
            avatar
        }
    }
`;
