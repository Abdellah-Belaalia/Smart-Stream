// export async function getChannels() {
//   try {
//     const res = await fetch ('https://6af34a88d2377d6c3704d78c.mockapi.io/channels');
//     if(!res.ok) throw new Error (`HTTP Error : ${res.status}`)

//       const data = await res.json();

//       return data;
//   }
//   catch (error){
//     console.log("Error fetching channels", error.message)
//     return [];
//   }
// }