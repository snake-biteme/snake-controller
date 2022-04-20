import * as AWS from 'aws-sdk'
import AWSAppSyncClient from 'aws-appsync'
import {AUTH_TYPE} from 'aws-appsync/lib/client'
import {updatePosition} from "../graphql/updatePosition";


AWS.config.update({
    region: 'eu-west-1',
    credentials: new AWS.Credentials({
        accessKeyId: 'AKIAQ3BCCU7B5N7VQTPR',
        secretAccessKey: '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',
    }),
});

export const client = new AWSAppSyncClient({
    url: 'https://3yawg75a7jb5zng4j2fvdu3ijq.appsync-api.eu-west-1.amazonaws.com/graphql',
    region: 'eu-west-1',
    auth: {
        type: AUTH_TYPE.AWS_IAM,
        credentials: AWS.config.credentials!,
    },
});

export const motionHandler = (screenId: string, playerId: string, color: string, name: string = 'PLAYER', direction = 'RIGHT'): void => {
    if (name === '') {
        name = 'Player'
    }

    console.log(screenId, playerId, color, direction, name);


    (async () => {
        const result: any = await client.mutate({
            mutation: updatePosition,
            variables: {
                screenId,
                playerId,
                direction,
                color,
                name,
            }
        });
        console.log(result)
        console.log(result.data.updatePosition);
    })();
};
