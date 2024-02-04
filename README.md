## Welcome to Auctioneering

Auctioneering is a modern, built-from-scratch application that serves as a live online auction for vehicles!


This application allows sellers to post their vehicles and potential buyers can place their bids. Each auction item shows a countdown timer indicating the time remaining before the bidding closes for the item. After it ends, the seller is notified of all bids that meet the sellers reserve price and they select the winner.



### Tech Stack

- Frontend: NextJS, TailwindCSS, NextAuth.js, Zustand (state management)
- Backend: .NET 7 (Web API), Duende Idenity Server (OpenID Connect and OAuth 2.0)
- Database: MongoDB, PostgreSQL
- Services/Environment: RabbitMQ, SignalR, Docker, Kubernetes
- Gateway: YARP (yet another reverse proxy)



### Challenges faced
- Data consistency between Postgres and Mongo databases
- Faulty starts from services after running *`docker compose up`*. Due to dependent services failing to start if other service not launched (remedy coming soon)
<br>
<br>

Application hosted at : &lt;Domain coming soon&gt;
