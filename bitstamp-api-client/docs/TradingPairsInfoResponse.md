# BitstampPublicApi.TradingPairsInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Trading pair. | [optional] [readonly] 
**urlSymbol** | **String** | URL symbol of trading pair. | [optional] [readonly] 
**baseDecimals** | **Number** | Decimal precision for base currency (BTC/USD - base: BTC). | [optional] [readonly] 
**counterDecimals** | **Number** | Decimal precision for counter currency (BTC/USD - counter: USD). | [optional] [readonly] 
**instantOrderCounterDecimals** | **Number** | Decimal precision for counter currency for instant buy and cash sell orders. | [optional] [readonly] 
**minimumOrder** | **String** | Minimum order size. | [optional] [readonly] 
**trading** | **String** | Trading engine status (Enabled/Disabled). | [optional] [readonly] 
**instantAndMarketOrders** | **String** | Instant and market orders status (Enabled/Disabled). | [optional] [readonly] 
**description** | **String** | Trading pair description. | [optional] [readonly] 



## Enum: TradingEnum


* `Enabled` (value: `"Enabled"`)

* `Disabled` (value: `"Disabled"`)





## Enum: InstantAndMarketOrdersEnum


* `Enabled` (value: `"Enabled"`)

* `Disabled` (value: `"Disabled"`)




