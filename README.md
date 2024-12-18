# 🛠️ Solana Batch Address Generator

This TypeScript tool allows you to **batch generate Solana addresses** and **private keys** concurrently and efficiently. With this, you can quickly create a large number of Solana keypairs for testing or deployment purposes. We use `tsx` for running it. ⚡

## 🚀 Features

- **Concurrent Keypair Generation**: Uses `Promise.all` to generate multiple keypairs in parallel, maximizing speed. ⚡
- **Public & Private Keys**: Outputs public addresses in Base58 and private keys in Base64. 🔑
- **Simple and Fast**: Easily generate batches of keypairs for Solana projects. 💨

## 📝 Installation

1. Clone or download the repository.
2. Install dependencies:
  ```bash
  yarn
  ```

## 🔧 Usage
```bash
yarn tsx solgen.ts
```

## 📋 Output Format

The output for each keypair will be:

```json
[
  {
    "publicKey": "PUBLIC_KEY_BASE64",
    "privateKey": "PRIVATE_KEY_BASE64"
  }
]
```

## 🌍 Why Use This?

- **Fast**: Batch generation minimizes wait time for creating multiple Solana addresses and private keys. ⏱️
- **Flexible**: Generate as many keypairs as you need, from 1 to thousands. 🔢
- **Easy to Use**: Just call the `generateBatchKeypairs()` function with the number of keypairs you want. 🤖

## 🧑‍💻 Contributing

Feel free to open an issue or submit a pull request if you'd like to improve the tool! 🤝

## 📚 License

This project is licensed under the MIT License.



