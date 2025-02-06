// "use client";
// import { useEffect, useState } from "react";
import axios from "axios";

// interface UserType{
//     name: string;
//     email: string;
// }
  // export default function User(){
  //   const [loading, setLoading] = useState<boolean>(true);
  //   const [data, setData] = useState<UserType | {}>({});

  //   useEffect(() => {
  //       axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details").then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //       })
  //   },[]);
    
  //   if(loading) {
  //     return <div>
  //       Loading...
  //     </div>
  //   }

  //   return <div>
  //     {data.name} {data.email}
  //   </div>
  // }

// lets make this  client componet to a server compoent while doing the same task

// *******thats pre-render on the server then return to the browser 
export default async function User(){
  
  const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  const data = res.data;
  console.log(data) // lets check to pre-render on the server
  return <div>
    {data.name} {data.email}
  </div>
}