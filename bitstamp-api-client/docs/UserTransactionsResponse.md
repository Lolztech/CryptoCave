# BitstampPublicApi.UserTransactionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **String** | Date and time. | [optional] [readonly] 
**fee** | **String** | Transaction fee. | [optional] [readonly] 
**id** | **Number** | Transaction ID. | [optional] [readonly] 
**orderId** | **Number** | Executed order ID. | [optional] [readonly] 
**selfTrade** | **Boolean** | True if transaction is a self trade transaction. | [optional] [readonly] 
**selfTradeOrderId** | **Number** | Order ID of the complementary order of the self trade. | [optional] [readonly] 
**type** | **String** | Transaction type: 0 - deposit; 1 - withdrawal; 2 - market trade; 14 - sub account transfer; 25 - credited with staked assets; 26 - sent assets to staking; 27 - staking reward; 32 - referral reward; 35 - inter account transfer; 33 - settlement transfer. | [optional] [readonly] 
**currencyPair** | **Number** | {currency_pair} exchange rate. | [optional] [readonly] 
**fromCurrency** | **String** | {from_currency} amount. | [optional] [readonly] 
**toCurrency** | **String** | {to_currency} amount. | [optional] [readonly] 


