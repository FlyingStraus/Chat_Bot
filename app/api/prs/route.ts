import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";

const HEADERS = {
  "Content-Type": "text/html",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  Vary: "Origin",
  "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT,OPTIONS",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
};

// const homeImage = join(process.cwd(), "public/1.png");



export async function GET(request: Request) {
  const address = new URL(request.url).searchParams.get("address");
  const token = new URL(request.url).searchParams.get("token");

  try {
    // Example: Sending a GET request to another API
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${token}&address=${address}&tag=latest&apikey=U5W6DGC6ESEB7PGT7U2R7RIUY25P9PBU6W`);

    if (!response.ok) {
      throw new Error('Failed to fetch data from the external API');
    }

    // Parsing the JSON response from the external API
    const data = await response.json();
    console.log("%s", data);

    // Sending the data received from the external API as a response
    return new Response(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>XMTP Frame Example</title>
      </head>
      <body>
      <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">address - ${address}</div> <br>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">token - ${token} </div> <br>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">Balance - ${data.result}</div> <br>
      </div>
      </body>
    </html>`, { headers: HEADERS });


  } catch(error) {
    console.error('Error fetching data from the external API:', error);
    return new Response(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>XMTP Frame Example</title>
      </head>
      <body>
      NO DATA
      </body>
    </html>`, { headers: HEADERS });
  }
  // const file = readFileSync(homeImage);
  
}

// OPTIONS needed for CORS (in a web XMTP Client)

export async function OPTIONS() {
  return new Response("", {
    headers: HEADERS,
  });
}
