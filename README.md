# Deploy Me

Small but flexible auto deploy tool based on Github's webhooks.
Based on three elements:
- Server
- Config
- Script


## Install

### Production

```
npm i -g deploy-me
```

### Development

```
git clone https://github.com/G07cha/DeployMe.git
npm install
npm test
```

## Usage

Setup config file like in [example](example/config.json), write script that will be executed each time when branch-specific request occured. Next, setup webhook for your repository that will send push information to endpoint. Finally, start webserver using `deploy-me %path-to-config%`, for more options check `deploy-me --help`.

## License

MIT
