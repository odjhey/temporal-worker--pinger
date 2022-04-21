## Repo to check Temporal Installations

-- hence, PINGER

### Usage

1. create your `packages/worker/.env` - see `.env-template` for keys needed
1. install - `yarn`
1. build workflows - `yarn build.workflows`
1. connect worker to server - `yarn start.worker`
1. trigger a workflow with correct `taskQueue`, default is `pingtq`
