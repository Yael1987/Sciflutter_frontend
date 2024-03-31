import { Socket, io } from "socket.io-client";
import { StateCreator } from "zustand";
import { getToken } from "../_actions/userActions";

export interface SocketStore{
  socket: Socket | null,
  sendNotification: (uid: string) => void,
  initSocket: () => Promise<void>
}

const createSocketSlice: StateCreator<SocketStore> = (set, get) => ({
  socket: null,
  sendNotification: (uid) => {
    const { socket } = get();

    if (socket) socket.emit("new-notification-s", uid);
  },
  initSocket: async () => {
    const { socket } = get()
    let mySocket: Socket

    if (!socket) mySocket = io('http://localhost:4000', {
      query: {
        'sciflutter-token': `${await getToken()}`
      }
    })
    else mySocket = socket
      
    set(() => ({ socket: mySocket }));
  },
});

export default createSocketSlice