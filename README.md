# Sparkz

Play to burn calories on bicycle rides in San Francisco and using zk proofs

Developed at [ETH San Francisco 2022](https://ethglobal.com/showcase/sparkz-00gkp)  

## About
SparkZ is an IRL game to gamify positive carbon mobility in San Francisco. Players will be able to play on SF landmarks and get Sparks for the calories burned on bicycle rides between them, and shadows for using the zero-knowledge proofs circom.

All rides will be done between San Francisco landmarks that players will be competing to own as digital collectibles if they deposit energy and upgrade them if they deposit shadows. Landmarks will have different energy and shadow limits depending on the upgrades made in the place. Deposited sparks and shadows will be able to be moved between landmarks owned by the same individual or team.

Any player will be able to make rides between any landmarks. Still, if they are owned by another player or team, the rider will give a percentage of the ride rewards to the owner (if the place still has room for deposits) if it is owned by the same player or team they will multiply the rewards depending on the upgrade level. A player or team can overtake a Landmark owned by others by Attacking from an owned Landmark and moving more sparks than those deposited to get the ownership.

  
## How it's made

Sparks was built with:

- Create-T3-App (Next.js app with Tailwind CSS)  
- React Leaflet for maps, routing and coordinates  
- The Graph for index contract interactions  
- Worldcoin for admin permissions  
- IPFS for content upload places cover images  
- Contracts deployed on Polygon  

### Dev Environemnt

Working with Polygon Mumbai testnet contracts (further update to deploy your own contracts)

1. Make `.env`

```shell
touch .env
```

add environment variable

```text
NEXTAUTH_SECRET=secret
NEXTAUTH_URL=http://localhost:3000/
```

3. Install dependencies

```bash
npm install
```

4. Start developmment

```bash
npm run dev
```

5. 📱 Open http://localhost:3000 to see the app