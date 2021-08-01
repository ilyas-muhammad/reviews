# Reviews Service
Reviews assignment API with Nexus GraphQL Typescript and MongoDB

## Getting Started
### Dependecies
- Node.js >= 12.0.0
- Yarn >= 1.22.4
- Mongo >= 4.2.5

### Setup 
1. Clone or fork this repo
```bash
$ git clone https://github.com/ilyas-muhammad/reviews
$ cd reviews
``` 
2. Rename the environment file by running `mv .env.example .env`
3. Install dependencies by running `yarn install`

### Running locally
Running the project locally
```bash
$ yarn dev
```
After that, go to the web browser and enter URL
> http://127.0.0.1:4000/
That URL will bring you to the GraphQL Playground

## Testing
The codes is currently setup for testing with Jest (still placeholder). To run tests, run
```bash
# run jest
$ yarn test
```

## Folder Structure
The folder and file structure of the App scaffold is as follow:

| Name                                              | Description                                                                           |
| :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| [`src/`](#src)                                    | The folder in which all of our source and business prosess                            |
| [`tests/`](#tests)                                | The folder which contain our spec and test                                            |

## Documentation
After setup the project and able to run locally, please visit
> http://127.0.0.1:4000/

You can read the Docs and Schema on GraphQL playground, all the Query and Mutation will be there.