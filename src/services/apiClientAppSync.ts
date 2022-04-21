import * as AWS from 'aws-sdk';
import AWSAppSyncClient from 'aws-appsync';
import {AUTH_TYPE} from 'aws-appsync/lib/client';
import {updatePosition} from '../graphql/updatePosition';

const { REACT_APP_REGION, REACT_APP_ACCESS_KEY_ID, REACT_APP_SECRET_ACCESS_KEY, REACT_APP_URL } = process.env;

AWS.config.update({
    region: REACT_APP_REGION!,
    credentials: new AWS.Credentials({
        accessKeyId: REACT_APP_ACCESS_KEY_ID!,
        secretAccessKey: REACT_APP_SECRET_ACCESS_KEY!,
    }),
});

export const client = new AWSAppSyncClient({
    url: REACT_APP_URL!,
    region: REACT_APP_REGION!,
    auth: {
        type: AUTH_TYPE.AWS_IAM,
        credentials: AWS.config.credentials!,
    },
});

export const motionHandler = (screenId: string, playerId: string, color: string, name = 'PLAYER', direction = 'RIGHT'): void => {
    if (name === '') {
        name = 'Player';
    }

    (async () => {
        await client.mutate({
            mutation: updatePosition,
            variables: {
                screenId,
                playerId,
                direction,
                color,
                name,
            }
        });
    })();
};
