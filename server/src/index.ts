import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:5173"],
	},
});

app.use(cors({ origin: "http://localhost:5173" }));

io.on("connection", (socket) => {
	console.log("> a user connected");

	socket.on("chat message", (msg) => {
		socket.broadcast.emit("chat message", msg);
	});
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

server.listen(9000, () => {
	console.log("Server running at http://localhost:9000");
});
