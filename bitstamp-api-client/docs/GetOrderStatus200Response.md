# BitstampPublicApi.GetOrderStatus200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Order ID. | [optional] [readonly] 
**datetime** | **String** | Date and time. | [optional] [readonly] 
**type** | **String** | Type: 0 - buy; 1 - sell. | [optional] [readonly] 
**status** | **String** | \&quot;error\&quot; | [optional] [readonly] 
**market** | **String** | Market formatted as \&quot;BTC/USD\&quot;. | [optional] [readonly] 
**transactions** | [**[OrderTransaction]**](OrderTransaction.md) |  | [optional] [readonly] 
**amountRemaining** | **Number** | Amount remaining. | [optional] [readonly] 
**clientOrderId** | **String** | Client order id. (Only returned if order was placed with client order id parameter.). | [optional] [readonly] 
**reason** | **String** | Error reason. | [optional] [readonly] 


