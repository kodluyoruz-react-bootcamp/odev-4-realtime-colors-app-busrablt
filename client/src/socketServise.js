import { io } from "socket.io-client";

let socket;
export const initializeSocket = () => {
    socket = io("https://localhost:3000", {
      transports: ["websocket"],
    });
    console.log("Connecttting..");
    socket.on("connect", () => console.log("connected"));
  };
  
  export const disconnectSocket = () => {
    console.log("disconnecting...");
    if (socket) {
      socket.disconnect();
    }
  };