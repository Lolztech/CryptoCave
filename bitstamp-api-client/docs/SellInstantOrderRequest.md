# BitstampPublicApi.SellInstantOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount in base currency (Example: For BTC/USD pair, amount is quoted in BTC) | 
**amountInCounter** | **Boolean** | (Optional) Instant sell orders allow you to sell an amount of the base currency determined by the value of it in the counter-currency. Amount_in_counter sets the amount parameter to refer to the counter currency instead of the base currency of the selected trading pair. Possible value: True | [optional] 
**clientOrderId** | **String** | Client order ID set by the client for internal reference. It should be unique, but there are no additional constraints or checks guaranteed on the field by Bitstamp. | [optional] 


