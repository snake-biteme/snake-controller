import * as AWS from 'aws-sdk';
import AWSAppSyncClient from 'aws-appsync';
import {AUTH_TYPE} from 'aws-appsync/lib/client';
import {updatePosition} from '../graphql/updatePosition';
import {API_URL, AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY} from '../consts';

AWS.config.update({
    region: AWS_REGION,
    credentials: new AWS.Credentials({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    }),
});

export const client = new AWSAppSyncClient({
    url: API_URL,
    region: AWS_REGION,
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
