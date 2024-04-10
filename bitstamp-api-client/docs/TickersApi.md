# BitstampPublicApi.TickersApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrencies**](TickersApi.md#getCurrencies) | **GET** /api/v2/currencies/ | Currencies
[**getCurrencyPairTickers**](TickersApi.md#getCurrencyPairTickers) | **GET** /api/v2/ticker/ | All currency pairs tickers
[**getHourlyCurrencyPairTicker**](TickersApi.md#getHourlyCurrencyPairTicker) | **GET** /api/v2/ticker_hour/{market_symbol}/ | Hourly  ticker
[**getMarketTicker**](TickersApi.md#getMarketTicker) | **GET** /api/v2/ticker/{market_symbol}/ | Market ticker



## getCurrencies

> [CurrencySchema] getCurrencies()

Currencies

Returns list of all currencies with basic data.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TickersApi();
apiInstance.getCurrencies((error, data, response) => {
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

[**[CurrencySchema]**](CurrencySchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrencyPairTickers

> [TickerWithPairResponse] getCurrencyPairTickers()

All currency pairs tickers

Return ticker data for all currency pairs. Passing any GET parameters, will result in your request being rejected.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TickersApi();
apiInstance.getCurrencyPairTickers((error, data, response) => {
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

[**[TickerWithPairResponse]**](TickerWithPairResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHourlyCurrencyPairTicker

> TickerHourResponse getHourlyCurrencyPairTicker(marketSymbol)

Hourly  ticker

Return hourly ticker data for the requested currency pair. Passing any GET parameters, will result in your request being rejected.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TickersApi();
let marketSymbol = "marketSymbol_example"; // String | 
apiInstance.getHourlyCurrencyPairTicker(marketSymbol, (error, data, response) => {
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

### Return type

[**TickerHourResponse**](TickerHourResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMarketTicker

> TickerResponse getMarketTicker(marketSymbol)

Market ticker

Return ticker data for the requested currency pair. Passing any GET parameters, will result in your request being rejected.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TickersApi();
let marketSymbol = "marketSymbol_example"; // String | 
apiInstance.getMarketTicker(marketSymbol, (error, data, response) => {
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

### Return type

[**TickerResponse**](TickerResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

