import gql from 'graphql-tag';

export const updatePosition = gql`
    mutation UpdatePosition($screenId: ID!, $playerId: ID!, $direction: String!, $color: String!, $name: String!) {
        updatePosition(screenId: $screenId, playerId: $playerId, direction: $direction, color: $color, name: $name) {
            direction
            color
            screenId
            playerId
            name
        }
    }
`;
