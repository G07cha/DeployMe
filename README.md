# Deploy Me

Small but flexible autodeploy tool based on Github's webhooks.
Based on three elements:
- Server
- Config
- Script

To install just clone the repository:

```
git clone https://github.com/G07cha/DeployMe.git
```

## Usage

Setup config file like in [example](example/config.json), write script that will be executed each time when branch-specific request occured. Next, setup webhook for your repository that will send push information to endpoint. Finally, start webserver using `node index.js %path-to-config%`, you cal leave %path-to-config% empty, and server will look for `config.json` file in same directory.

## License

MIT
