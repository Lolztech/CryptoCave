# BitstampPublicApi.WithdrawalRequestsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Withdrawal address. | [optional] [readonly] 
**amount** | **String** | Amount. | [optional] [readonly] 
**currency** | **String** | Currency. | [optional] [readonly] 
**datetime** | **Date** | Date and time. | [optional] [readonly] 
**id** | **Number** | Withdrawal ID. | [optional] [readonly] 
**network** | **String** | Cryptocurrency network. | [optional] [readonly] 
**status** | **Number** | 0 (open), 1 (in process), 2 (finished), 3 (canceled), 4 (failed) or 11 (reversed). | [optional] [readonly] 
**transactionId** | **String** | Transaction ID (crypto withdrawals only). | [optional] [readonly] 
**txid** | **Number** | Bitstamp&#39;s transaction id. | [optional] [readonly] 
**type** | **Number** | 0 (SEPA), 2 (WIRE transfer), 17 (BCH), 1 (BTC), 16 (ETH), 15 (LTC), 18 (PAX), 19 (XLM), 14 (XRP), 20 (LINK), 21 (OMG), 22 (USDC), 24 (AAVE), 25 (BAT), 26 (UMA), 27 (DAI), 28 (KNC), 29 (MKR), 30 (ZRX), 31 (GUSD), 32 (ALGO), 33 (AUDIO), 34 (CRV), 35 (SNX), 36 (UNI), 38 (YFI), 39 (COMP), 40 (GRT), 42 (USDT), 43 (EURT), 46 (MATIC), 47 (SUSHI), 48 (CHZ), 49 (ENJ), 50 (HBAR), 51 (ALPHA), 52 (AXS), 53 (FTT), 54 (SAND), 55 (STORJ), 56 (ADA), 57 (FET), 58 (RGT), 59 (SKL), 60 (CEL), 61 (SLP), 62 (SXP), 65 (DYDX), 66 (FTM), 67 (SHIB), 69 (AMP), 71 (GALA), 72 (PERP). | [optional] [readonly] 



## Enum: NetworkEnum


* `bitcoin-cash` (value: `"bitcoin-cash"`)

* `bitcoin` (value: `"bitcoin"`)

* `ethereum` (value: `"ethereum"`)

* `litecoin` (value: `"litecoin"`)

* `stellar` (value: `"stellar"`)

* `xrpl` (value: `"xrpl"`)

* `algorand` (value: `"algorand"`)

* `flare` (value: `"flare"`)

* `hedera` (value: `"hedera"`)

* `cardano` (value: `"cardano"`)

* `songbird` (value: `"songbird"`)

* `avalanche-c-chain` (value: `"avalanche-c-chain"`)

* `solana` (value: `"solana"`)

* `polkadot` (value: `"polkadot"`)

* `near` (value: `"near"`)

* `doge` (value: `"doge"`)

* `sui` (value: `"sui"`)

* `casper` (value: `"casper"`)




