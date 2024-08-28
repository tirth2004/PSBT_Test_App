# PSBT_Test_App
This project provides a Blazor WebAssembly application to test and sign Partially Signed Bitcoin Transactions (PSBTs) using JavaScript and C# integration. The app includes functionality for custom PSBT signing and testing with example PSBTs, providing an easy-to-use interface for validating PSBT signatures.

## Overview

The PSBT Test App allows users to input custom PSBTs for signing and provides test PSBTs for experimentation. It integrates with a wallet's background process for signing via a JavaScript function, which is exposed to the Blazor application through JavaScript interop.

## Features

- **Custom PSBT Signing:** Sign custom PSBTs using the wallet's background process.
- **Test PSBTs:** Includes example PSBTs for testing and validation.
- **Blazor and JavaScript Integration:** Combines C# Blazor WebAssembly and JavaScript for seamless PSBT signing.
- **Copy Signed PSBT:** Easy-to-use interface with a copy button to quickly copy the signed PSBT.

## Getting Started

### Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js](https://nodejs.org/) (for running the wallet's background scripts, if applicable)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/tirth2004/PSBT_Test_App.git
   cd PSBT_Test_App
2. **Restore and Build the Project::**
   ```bash
   dotnet restore
   dotnet build
3. **Run the Application::**
   ```bash
   dotnet run