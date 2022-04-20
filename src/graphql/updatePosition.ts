import gql from "graphql-tag";

export const updatePosition = gql`
    mutation UpdatePosition($screenId: ID!, $playerId: ID!, $direction: String!, $color: String!) {
        updatePosition(screenId: $screenId, playerId: $playerId, direction: $direction, color: $color) {
            direction
            color
            screenId
            playerId
        }
    }
`;