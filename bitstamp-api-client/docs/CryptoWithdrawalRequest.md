# BitstampPublicApi.CryptoWithdrawalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Cryptocurrency address. | 
**amount** | **Number** | Cryptocurrency amount. | 
**contactThirdparty** | **Boolean** | If the address you are withdrawing to is in your name (regardless of if this is a hosted or unhosted wallet), this should be set to False. If you are withdrawing to a third party, set it to True | [optional] 
**contactUuid** | **String** | If setting the contact_thirdparty field to True, you need to provide the UUID of the contact from the /v2/travel_rule/contacts/ endpoint | [optional] 
**destinationTag** | **String** | Address destination tag - applicable to: XRP. | 
**memoId** | **String** | Address memo id - applicable to: XLM, HBAR. | [optional] 
**network** | **String** | Cryptocurrency network. | [optional] 
**transferId** | **Number** | Address transfer id - applicable to: CSPR. | [optional] 
**vaspUuid** | **String** | When withdrawing to a hosted wallet by a Virtual Asset Services Provider, provide the UUID from the /v2/travel_rule/vasps/ endpoint | [optional] 



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




