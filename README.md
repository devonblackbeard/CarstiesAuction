Welcome to Auctioneering, a built-from-scratch live online auction for vehicles!

This application allows sellers to post their vehicles and potential buyers can place their bids. The auctions show a countdown timer indicating the time remaining before the bidding closes for the item. After it ends, the seller is notified of all bids that meet the sellers reserve price and they select the winner.


Tech Stack: 

Frontend: NextJS, TailwindCSS, AuthJS, Zustand (state management)
Backend: .NET 7 (Web API), Duende Idenity Server (OpenID Connect and OAuth 2.0)
Database: MongoDB, PostgreSQL
Services/Environment: RabbitMQ, SignalR, Docker, Kubernetes
Gateway: YARP (yet another reverse proxy)


Challenges faced:
- data consistency between Postgres and Mongo databases
- faulty starts from services after running *`docker compose up`*. Due to dependent services failing to start if other service not launched (remedy coming soon)


Application hosted on: Coming soon