import React from "react";
//import { Link } from "react-router-dom";

export default function Join() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [passwordCheck, setPasswordCheck] = useState("yet");
  //   const [isPasswordSame, setIsPasswordSame] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [joinResult, setJoinResult] = useState(false);
  return (
    <>
      <h1>Hello Join Page</h1>
      ID : <input type="text" />
      Password : <input type="password" />
      Password Check : <input type="password" />
      Email : <input type="email" />
      Phone number : <input type="text" />
      Address : <input type="text" />
      <button type="submit">Submit</button>
    </>
  );
}
