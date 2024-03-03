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
- Faulty starts from services after running _`docker compose up`_. Due to dependent services failing to start if other service not launched (remedy coming soon)
  <br>
  <br>

### To Run Locally:

- Clone the repo
- Ensure you have Docker Desktop on your machine
- Ensure you have a .env.local file with these variables:
  NEXTAUTH_SECRET=mycoolsecret
  NEXTAUTH_URL=http://localhost:3000
- From the solution level, run: docker compose up -d
- From frontend/web-app, run: npm run dev
- View the application in your browser

### To Run Remotely:

Application hosted at : &lt;Domain coming soon&gt;
