## Internet Monitor with Discord Notification (Webhook)

This project monitors your internet connection and sends a message to a Discord channel through a webhook when the connection is restored after an outage.

### Features

* Monitors internet connectivity.
* Sends notification to Discord channel via webhook upon restoration.
* Reports downtime duration.
* Runs as a command-line tool or a persistent background service.

### Installation

1. Clone this repository.
2. Install dependencies:

```bash
npm install
```

### Configuration

1. Create a `.env` file in the project root directory.
2. Add the following line to your `.env` file, replacing `<YOUR_WEBHOOK_URL>` with your actual Discord webhook URL:

```
DISCORD_WEBHOOK_URL=<YOUR_WEBHOOK_URL>
```

**Note:** This `.env` file should **not** be committed to version control.

### Usage

**Command-line:**

```bash
npm start
```

**Background service:**

```bash
npm run service:install
# Service will run automatically in the background.

npm run service:uninstall
# Stops the background service.
```

**Example:**

```bash
# Send notification with a custom message
npm start
# Run as a background service
npm run service:install
```

### Discord Setup

1. Create a Discord webhook in the desired channel:
    * Go to the channel where you want to receive notifications.
    * Click the gear icon next to the channel name and select "Channel Settings".
    * Go to the "Integrations" tab and click "Create Webhook".
    * Give your webhook a name and select the channel permissions it needs.
    * Copy the webhook URL provided.

**Note:** This project uses a webhook URL and does not require a Discord bot token.