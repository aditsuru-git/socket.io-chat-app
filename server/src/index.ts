import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:5173"],
	},
});

interface MSG {
	room: string;
	message: string;
}

io.on("connection", (socket) => {
	console.log("> a user connected");

	socket.on("join room", (room: string) => {
		if (!room.trim()) return;
		socket.join(room);
	});

	socket.on("leave room", (room: string) => {
		socket.leave(room);
	});

	socket.on("chat message", (msg: MSG) => {
		socket.to(msg.room).emit("chat message", msg.message);
	});

	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

server.listen(9000, () => {
	console.log("Server running at http://localhost:9000");
});
