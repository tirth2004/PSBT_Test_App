// export async function signPsbtAnyAccount(value) {
//     const provider = globalThis.blockcore;
//     const result = await provider.request({
//       method: 'signPsbt',
//       params: [{ message: value, network: this.provider?.indexer.network }],
//     });
//     console.log('Result:', result);

//     return result.response.signature;
// }

window.walletFunctions = {
    SignPsbt: async function(value){
        const provider = globalThis.blockcore;
        const result = await provider.request({
            method: 'signPsbt',
            params: [{ message: value, network: this.provider?.indexer.network }],
        });
        console.log('Result:', result);

        return result.response.signature;

    }
};


