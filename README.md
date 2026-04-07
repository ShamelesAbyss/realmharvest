# ⚔️ RealmHarvest — HyperEVM Snapshot Tool

Zero-setup (after install) NFT holder snapshot tool for HyperEVM.

- Extract wallets from NFT collections
- Uses recent block windows (fast + relevant)
- Multi-collection support
- Round-robin scanning
- Checkpoint + resume

## Setup

1. Install Node.js (https://nodejs.org)

Check:
node -v
npm -v

2. Rename:
.env.example → .env

Add:
RPC_URL=your_rpc_here

3. Install:
npm install

4. Run:
npm start

## Config

Edit config.js and replace placeholder collections with your own:

- name: Your collection name
- address: Contract address
- recentBlocks: How far back to scan

## Output

/output

- progress.json
- errors.log
- collections/*.state.json
- collections/*.final.json

## Tip

Tip in HYPE ⚔️
