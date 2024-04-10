# BitstampPublicApi.MarketInfoApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEURUSDConversionRate**](MarketInfoApi.md#getEURUSDConversionRate) | **GET** /api/v2/eur_usd/ | EUR/USD conversion rate
[**getOHLCData**](MarketInfoApi.md#getOHLCData) | **GET** /api/v2/ohlc/{market_symbol}/ | OHLC data
[**getTradingPairsInfo**](MarketInfoApi.md#getTradingPairsInfo) | **GET** /api/v2/trading-pairs-info/ | Trading pairs info



## getEURUSDConversionRate

> EurUsdConversionRateResponse getEURUSDConversionRate()

EUR/USD conversion rate

Return EUR/USD conversion rate.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.MarketInfoApi();
apiInstance.getEURUSDConversionRate((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EurUsdConversionRateResponse**](EurUsdConversionRateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOHLCData

> GetOHLCData200Response getOHLCData(marketSymbol, step, limit, opts)

OHLC data

Returns OHLC (Open High Low Close) data.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing data for required field. | Step and limit parameters are missing. | | Not a valid choice. | Value entered in parameter is invalid. | | Must be between 1 and 1000. | Limit value must be between 1 and 1000. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.MarketInfoApi();
let marketSymbol = "marketSymbol_example"; // String | 
let step = 60; // Number | Timeframe in seconds.
let limit = 50; // Number | Limit OHLC results.
let opts = {
  'start': 10000, // Number | Unix timestamp from when OHLC data will be started.
  'end': 60, // Number | Unix timestamp to when OHLC data will be shown.If none from start or end timestamps are posted then endpoint returns OHLC data to current unixtime. If both start and end timestamps are posted, end timestamp will be used.
  'excludeCurrentCandle': true // Boolean | If set, results won't include current (open) candle.
};
apiInstance.getOHLCData(marketSymbol, step, limit, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketSymbol** | **String**|  | 
 **step** | **Number**| Timeframe in seconds. | 
 **limit** | **Number**| Limit OHLC results. | 
 **start** | **Number**| Unix timestamp from when OHLC data will be started. | [optional] 
 **end** | **Number**| Unix timestamp to when OHLC data will be shown.If none from start or end timestamps are posted then endpoint returns OHLC data to current unixtime. If both start and end timestamps are posted, end timestamp will be used. | [optional] 
 **excludeCurrentCandle** | **Boolean**| If set, results won&#39;t include current (open) candle. | [optional] [default to false]

### Return type

[**GetOHLCData200Response**](GetOHLCData200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTradingPairsInfo

> TradingPairsInfoResponse getTradingPairsInfo()

Trading pairs info

Return trading pairs info.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.MarketInfoApi();
apiInstance.getTradingPairsInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TradingPairsInfoResponse**](TradingPairsInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

