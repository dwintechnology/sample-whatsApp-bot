# Sample WhatsApp bot

A simple starting point for creating a Node.js based WhatsApp bot. This bot allows you to test CHAPI.
You can download the [completed bot](https://github.com/dwintechnology/sample-whatsApp-bot/archive/master.zip) or just follow the [**tutorial**](docs/TUTORIAL.md).

![][1]

## Prerequisites

1. [Node.js 8.0+](http://nodejs.org)
1. An Active WhatsApp account.
1. Account authentication token - unique account identifier used to validate your account in all API requests. Once your account is created your authentication token will appear in the account’s “edit info” screen (for admins only). Each request posted to Viber by the account will need to contain the token.

## Usage

* Clone the repository

```bash
git clone https://github.com/dwintechnology/sample-whatsApp-bot mywhatsappbot
cd mywhatsappbot
npm install
npm start
```

* Get your [authentication token](https://www.chapi.ai)


**That's it!** Now your bot is deployed. Start talking with it in your WhatsApp app.

## License

See the [LICENSE](LICENSE.md) file (MIT).

[1]: output.gif
