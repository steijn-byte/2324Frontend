import { Injectable } from '@angular/core';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    private apiUrl = 'http://localhost:42860';


    JoinRoom(user1, roomId ){
try{
    const connection = new HubConnectionBuilder()
    .withUrl(this.apiUrl)
    .configureLogging(LogLevel.Information)
    .build();

    connection.on("Users", (Chatusers) =>{
      setUsers(Chatusers);
    });

    connection.onclose(e => {
      setConnection();
      setMessages([]);
      setUsers([]);
    })

    connection.start();
    connection.invoke("JoinRoom", {users, roomId});
    setConnection(connection);

}
catch(e){
  console.log(e);
}
    }

  constructor() { }
}
