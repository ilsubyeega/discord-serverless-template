# discord-serverlesss-template
Discord slash command/interaction implementation for [Vercel](https://vercel.com/) and [Deta](https://deta.sh/) for use of myself.

## Features
- Slash commands
- Message components
- Context menus

## Structure
```
├───api # Vercel purpose. See https://github.com/vercel/vercel/discussions/6598, You can delete this directory if you are not going to use with vercel.
├───commands # Edit the commands here.
├───interactions # Edit the rest of interaction here, such like buttons, list etc.
├───lib
├───index.ts # Handler for deta.
└───scripts
```

## Run on vercel
```bash
npm run register-commands
# Fork this repository and fill out the environment variables.
vercel dev # for debugging process
```

## Run on deta
```bash
npm run register-commands
npm run compile
deta new --name discord-serverless-template build
# Now fill out the environment variables on .env file.
deta update -e .env
```

## Environemnt Variables
| Key                    | Value                                                  |
|------------------------|--------------------------------------------------------|
| DISCORD_BOT_TOKEN      | Your Bot Token.                                        |
| DISCORD_PUBLIC_KEY     | Your Public Key for validating interactions.           |
| DISCORD_APPLICATION_ID | Your application key for (un)registering commands etc. |
| BYPASS_SECRET          | Secret Key for bypassing handle_auth. *(optional)*     |
