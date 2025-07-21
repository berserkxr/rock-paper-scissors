
````
# 🎵 Bosilegrad Music Bot

A simple Discord music bot built in Python that lets users play music in voice channels using YouTube links.

## 🚀 Features

- Join and leave voice channels
- Play music from YouTube URLs
- Pause, resume, and stop playback
- Queue and skip songs
- Built with `discord.py`, `youtube_dl`, and `FFmpeg`

## 🛠️ Requirements

Make sure you have the following installed:

- Python 3.8 or newer
- [FFmpeg](https://ffmpeg.org/download.html)
- Required Python packages (install with pip):

```bash
pip install -r requirements.txt
````

## 📁 Setup

1. **Clone the repository**

```bash
git clone https://github.com/berserkxr/DiscordMusicBot.git
cd DiscordMusicBot/BosilegradMusicbot
```

2. **Add your bot token**
   Create a `.env` file and paste your token:

```
TOKEN=your_discord_bot_token
```

3. **Run the bot**

```bash
python bot.py
```

Make sure `FFmpeg` is installed and added to your system path.

## 🎧 Commands

Here are some basic commands the bot supports (may vary depending on your code):

| Command       | Description                      |
| ------------- | -------------------------------- |
| `!join`       | Joins your current voice channel |
| `!play <url>` | Plays audio from a YouTube link  |
| `!pause`      | Pauses current track             |
| `!resume`     | Resumes paused track             |
| `!skip`       | Skips to the next track          |
| `!stop`       | Stops music and clears the queue |
| `!leave`      | Leaves the voice channel         |

> You can customize the command prefix and add more features as you like.

## 🧠 Tech Stack

* Python
* [discord.py](https://discordpy.readthedocs.io/en/stable/)
* [youtube\_dl](https://github.com/ytdl-org/youtube-dl)
* FFmpeg

## 📜 License

MIT License

---

Made by [@berserkxr](https://github.com/berserkxr) with ❤️

```

