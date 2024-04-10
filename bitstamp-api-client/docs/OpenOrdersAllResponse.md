# BitstampPublicApi.OpenOrdersAllResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Order ID. | [optional] [readonly] 
**datetime** | **String** | Date and time. | [optional] [readonly] 
**type** | **String** | Order type: 0 - buy; 1 - sell. | [optional] [readonly] 
**price** | **String** | Price. | [optional] [readonly] 
**amount** | **String** | Remaining amount. | [optional] [readonly] 
**amountAtCreate** | **String** | Initial amount. | [optional] [readonly] 
**currencyPair** | **String** | Currency Pair (deprecated). | [optional] [readonly] 
**market** | **String** | Market formatted as \&quot;BTC/USD\&quot;. | [optional] [readonly] 
**limitPrice** | **String** | Limit price. (Only returned if limit order was placed with limit_price parameter.) | [optional] [readonly] 
**clientOrderId** | **String** | Client order id. (Only returned if order was placed with client order id parameter.) | [optional] [readonly] 


