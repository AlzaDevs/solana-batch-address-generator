import { Keypair } from '@solana/web3.js';

// Function to generate a single address and private key
const generateKeypair = (): Keypair => Keypair.generate();

// Batch generate addresses and private keys concurrently
const generateBatchKeypairs = async (count: number) => {
  const keypairs = await Promise.all(
    Array.from({ length: count }).map(() => generateKeypair())
  );
  
  return keypairs.map((keypair) => ({
    publicKey: keypair.publicKey.toBase58(),
    privateKey: Buffer.from(keypair.secretKey).toString('base64'),
  }));
};

// Usage to generate 100 addresses, you can change the number of address you want generate on every execution
generateBatchKeypairs(100).then((keypairs) => {
  console.log(keypairs);
});
