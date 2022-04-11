import gql from "graphql-tag";

export const updatePosition = gql`
    mutation UpdatePosition($screenId: ID!, $playerId: ID!, $angle: Int!, $color: String) {
        updatePosition(screenId: $screenId, playerId: $playerId, angle: $angle, color: $color) {
            angle
            color
            screenId
            playerId
        }
    }
`;