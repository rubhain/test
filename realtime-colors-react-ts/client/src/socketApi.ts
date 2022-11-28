import { DefaultEventsMap } from "@socket.io/component-emitter";
import io, { Socket }  from "socket.io-client";
import { createBrotliCompress } from "zlib";

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const init = () => {
    console.log("Connecting...");

    socket = io('http://localhost:3001',{
        transports: ["websocket"]
    });

    socket.on("connect", () =>
        console.log("Connection succeeded")
    );
};

export const send = (color: any) =>{
    socket.emit("newColor", color)
};

export const subscribe = (cb:any) => {
    socket.on("receive", (color: any) => {
        console.log(color);
        cb(color);
    });
};