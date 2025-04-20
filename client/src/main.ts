import io from "socket.io-client";

const socket = io("http://localhost:9000");

const form = document.getElementById("form");
const input = document.getElementById("input") as HTMLInputElement | null;
const messages = document.getElementById("messages");
const roomInput = document.getElementById("room-input") as HTMLInputElement | null;
const joinRoomButton = document.getElementById("join-room") as HTMLButtonElement | null;
const roomDisplay = document.getElementById("current-room") as HTMLDivElement | null;

let currentRoom = "";

if (joinRoomButton && roomInput && roomDisplay) {
	joinRoomButton.addEventListener("click", (e) => {
		e.preventDefault();
		const roomName = roomInput.value.trim();
		if (roomName) {
			// Leave current room if any
			if (currentRoom) {
				socket.emit("leave room", currentRoom);
			}
			// Join new room
			socket.emit("join room", roomName);
			currentRoom = roomName;
			roomDisplay.textContent = `Current Room: ${roomName}`;
			roomInput.value = "";
			if (messages) {
				messages.innerHTML = ""; // Clear messages when joining new room
			}
		}
	});
}

if (form && input && messages) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (!currentRoom) {
			// Show message if not in a room
			const item = document.createElement("li");
			item.style.color = "red";
			item.textContent = "Please join a room first!";
			item.classList.add("system-message");
			messages.appendChild(item);
			messages.scrollTop = messages.scrollHeight;
			return;
		}
		if (input.value.trim()) {
			socket.emit("chat message", {
				room: currentRoom,
				message: input.value.trim(),
			});
			const item = document.createElement("li");
			item.textContent = `You: ${input.value.trim()}`;
			item.classList.add("own-message");
			messages.appendChild(item);
			input.value = "";
			messages.scrollTop = messages.scrollHeight;
		}
	});
}

socket.on("chat message", (message: string) => {
	if (messages) {
		const item = document.createElement("li");
		item.textContent = message;
		messages.appendChild(item);
		messages.scrollTop = messages.scrollHeight;
	}
});
