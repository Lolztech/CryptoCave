# BitstampPublicApi.FeesApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllTradingFees**](FeesApi.md#getAllTradingFees) | **POST** /api/v2/fees/trading/ | Trading fees
[**getAllWithdrawalFees**](FeesApi.md#getAllWithdrawalFees) | **POST** /api/v2/fees/withdrawal/ | Withdrawal fees
[**getTradingFeesForCurrency**](FeesApi.md#getTradingFeesForCurrency) | **POST** /api/v2/fees/trading/{market_symbol}/ | Trading fee for market
[**getWithdrawalFeeForCurrency**](FeesApi.md#getWithdrawalFeeForCurrency) | **POST** /api/v2/fees/withdrawal/{currency}/ | Withdrawal fee for currency



## getAllTradingFees

> [FeeTradingResponse] getAllTradingFees()

Trading fees

Return all trading fees.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.FeesApi();
apiInstance.getAllTradingFees((error, data, response) => {
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

[**[FeeTradingResponse]**](FeeTradingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllWithdrawalFees

> [FeeWithdrawalResponse] getAllWithdrawalFees()

Withdrawal fees

Return withdrawal fees.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.FeesApi();
apiInstance.getAllWithdrawalFees((error, data, response) => {
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

[**[FeeWithdrawalResponse]**](FeeWithdrawalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTradingFeesForCurrency

> FeeTradingResponse getTradingFeesForCurrency(marketSymbol)

Trading fee for market

Return trading fees for market.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.FeesApi();
let marketSymbol = "marketSymbol_example"; // String | 
apiInstance.getTradingFeesForCurrency(marketSymbol, (error, data, response) => {
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

[**FeeTradingResponse**](FeeTradingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWithdrawalFeeForCurrency

> FeeWithdrawalResponse getWithdrawalFeeForCurrency(currency, opts)

Withdrawal fee for currency

Return withdrawal fee for currency.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Invalid network selection | The selected network is not supported for &#39;currency&#39;. Please select a compatible network for it. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.FeesApi();
let currency = "currency_example"; // String | 
let opts = {
  'feeWithdrawalRequest': new BitstampPublicApi.FeeWithdrawalRequest() // FeeWithdrawalRequest | 
};
apiInstance.getWithdrawalFeeForCurrency(currency, opts, (error, data, response) => {
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
 **currency** | **String**|  | 
 **feeWithdrawalRequest** | [**FeeWithdrawalRequest**](FeeWithdrawalRequest.md)|  | [optional] 

### Return type

[**FeeWithdrawalResponse**](FeeWithdrawalResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

