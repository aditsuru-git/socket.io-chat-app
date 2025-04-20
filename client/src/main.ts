import io from "socket.io-client";

const socket = io("http://localhost:9000");

const form = document.getElementById("form");
const input = document.getElementById("input") as HTMLInputElement | null;
const messages = document.getElementById("messages");

if (form && input && messages) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (input.value.trim()) {
			socket.emit("chat message", input.value.trim());
			const item = document.createElement("li");
			item.textContent = input.value.trim();
			messages.appendChild(item);
			input.value = "";
			messages.scrollTop = messages.scrollHeight;
		}
	});
}

socket.on("chat message", (msg: string) => {
	if (messages) {
		const item = document.createElement("li");
		item.textContent = msg;
		messages.appendChild(item);
		messages.scrollTop = messages.scrollHeight;
	}
});
