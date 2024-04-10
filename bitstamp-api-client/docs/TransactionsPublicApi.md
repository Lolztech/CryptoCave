# BitstampPublicApi.TransactionsPublicApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactions**](TransactionsPublicApi.md#getTransactions) | **GET** /api/v2/transactions/{market_symbol}/ | Transactions



## getTransactions

> TransactionsResponse getTransactions(marketSymbol, opts)

Transactions

Return transaction data from a given time frame.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TransactionsPublicApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'time': minute // String | The time interval from which we want the transactions to be returned. Possible values are minute, hour (default) or day.
};
apiInstance.getTransactions(marketSymbol, opts, (error, data, response) => {
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
 **time** | **String**| The time interval from which we want the transactions to be returned. Possible values are minute, hour (default) or day. | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

