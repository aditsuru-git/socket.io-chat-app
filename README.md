# Socket.io Chat App

<div align="center">
  <img src="https://github.com/aditsuru-git/readme-template/blob/main/assets/header.png?raw=true" alt="Project Banner" width="100%" style="max-width: 1200px;">
</div>

<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br></br>

<div align="center">
  <a href="https://github.com/aditsuru-git/socket.io-chat-app">
    <img src="https://raw.githubusercontent.com/aditsuru-git/readme-template/main/assets/icon.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Socket.io Chat App</h3>

  <p align="center">
    A chat app built in TypeScript using Socket.io (learning project).
    <br />
    <br />
    <a href="https://github.com/aditsuru-git/socket.io-chat-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/aditsuru-git/socket.io-chat-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A learning project to understand Socket.IO concepts like rooms and real-time bidirectional communication. Built a basic chat application where users can:

- Join different chat rooms
- Send real-time messages to room members
- See messages from other users in real-time

Built this to learn Socket.IO fundamentals while practicing TypeScript!

### Built With

[![TypeScript][TypeScript-badge]][TypeScript-url]
[![Vite][Vite-badge]][Vite-url]
[![Socket.io][Socket.io-badge]][Socket.io-url]

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repo

```sh
git clone https://github.com/aditsuru-git/socket.io-chat-app.git
cd socket.io-chat-app
```

2. Install dependencies for both client and server

```sh
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Start the application

```sh
# Terminal 1 - Start server
cd server
npm run dev

# Terminal 2 - Start client
cd client
npm run dev
```

<!-- USAGE EXAMPLES -->

## Usage

1. Open http://localhost:5173 in your browser
2. Enter a room name and click "Join Room"
3. Open another browser window and join the same room
4. Start chatting!

<h1></h1>
<div align="center">
  <img src="https://github.com/aditsuru-git/readme-template/blob/main/assets/footer.png?raw=true" alt="Footer Banner" width="100%" style="max-width: 1200px;">
</div>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/aditsuru-git/socket.io-chat-app.svg?style=for-the-badge
[contributors-url]: https://github.com/aditsuru-git/socket.io-chat-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/aditsuru-git/socket.io-chat-app.svg?style=for-the-badge
[forks-url]: https://github.com/aditsuru-git/socket.io-chat-app/network/members
[stars-shield]: https://img.shields.io/github/stars/aditsuru-git/socket.io-chat-app.svg?style=for-the-badge
[stars-url]: https://github.com/aditsuru-git/socket.io-chat-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/aditsuru-git/socket.io-chat-app.svg?style=for-the-badge
[issues-url]: https://github.com/aditsuru-git/socket.io-chat-app/issues
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=white
[TypeScript-url]: https://www.TypeScriptlang.org/
[Vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Socket.io-badge]: https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101
[Socket.io-url]: https://socket.io/
