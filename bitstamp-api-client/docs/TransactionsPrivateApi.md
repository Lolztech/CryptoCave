# BitstampPublicApi.TransactionsPrivateApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCryptoUserTransactions**](TransactionsPrivateApi.md#getCryptoUserTransactions) | **POST** /api/v2/crypto-transactions/ | Crypto transactions
[**getUserTransactions**](TransactionsPrivateApi.md#getUserTransactions) | **POST** /api/v2/user_transactions/ | User transactions
[**getUserTransactionsForMarket**](TransactionsPrivateApi.md#getUserTransactionsForMarket) | **POST** /api/v2/user_transactions/{market_symbol}/ | User transactions for market



## getCryptoUserTransactions

> GetCryptoUserTransactions200Response getCryptoUserTransactions(opts)

Crypto transactions

Return user&#39;s crypto transactions. This call will be executed on the account, to which the used API key is bound to. This call is for your main account only.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Limit too large | Max value of limit parameter is 1000. | | Invalid limit | Limit parameter should be number from 1 to 1000. | | Offset too large | Offset parameter cannot be larger than 200000. | | Invalid offset | Offset parameter needs to be a number from 0 to 200000. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TransactionsPrivateApi();
let opts = {
  'cryptoTransactionsRequest': new BitstampPublicApi.CryptoTransactionsRequest() // CryptoTransactionsRequest | 
};
apiInstance.getCryptoUserTransactions(opts, (error, data, response) => {
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
 **cryptoTransactionsRequest** | [**CryptoTransactionsRequest**](CryptoTransactionsRequest.md)|  | [optional] 

### Return type

[**GetCryptoUserTransactions200Response**](GetCryptoUserTransactions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## getUserTransactions

> GetUserTransactions200Response getUserTransactions(opts)

User transactions

Return user transactions from a given time frame. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Invalid offset | Offset parameter should be number from 0 to 200000. | | Limit too large | Max value of limit parameter is 1000. | | Invalid limit | Limit parameter should be number from 1 to 1000. | | Invalid sort parameter | Sort parameter can only be &#39;asc&#39; or &#39;desc&#39;. | | Invalid since_timestamp parameter | since_timestamp can only be digit. | | since_timestamp parameter must be higher than .. | Make sure that since_timestamp is less than 30 days in the past. | | Failed to convert since_timestamp parameter | Check the value of since_timestamp parameter. | | Invalid until_timestamp parameter | until_timestamp can only be digit. | | until_timestamp parameter must be higher than .. | Make sure that until_timestamp is less than 30 days in the past. | | Failed to convert until_timestamp parameter | Check the value of until_timestamp parameter. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TransactionsPrivateApi();
let opts = {
  'userTransactionsRequest': new BitstampPublicApi.UserTransactionsRequest() // UserTransactionsRequest | 
};
apiInstance.getUserTransactions(opts, (error, data, response) => {
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
 **userTransactionsRequest** | [**UserTransactionsRequest**](UserTransactionsRequest.md)|  | [optional] 

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## getUserTransactionsForMarket

> GetUserTransactions200Response getUserTransactionsForMarket(marketSymbol, opts)

User transactions for market

Return user transactions for a market from a given time frame. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Invalid offset | Offset parameter should be number from 0 to 200000. | | Limit too large | Max value of limit parameter is 1000. | | Invalid limit | Limit parameter should be number from 1 to 1000. | | Invalid sort parameter | Sort parameter can only be &#39;asc&#39; or &#39;desc&#39;. | | Invalid since_timestamp parameter | since_timestamp can only be digit. | | since_timestamp parameter must be higher than .. | Make sure that since_timestamp is less than 30 days in the past. | | Failed to convert since_timestamp parameter | Check the value of since_timestamp parameter. | | Invalid until_timestamp parameter | until_timestamp can only be digit. | | until_timestamp parameter must be higher than .. | Make sure that until_timestamp is less than 30 days in the past. | | Failed to convert until_timestamp parameter | Check the value of until_timestamp parameter. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TransactionsPrivateApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'userTransactionsRequest': new BitstampPublicApi.UserTransactionsRequest() // UserTransactionsRequest | 
};
apiInstance.getUserTransactionsForMarket(marketSymbol, opts, (error, data, response) => {
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
 **userTransactionsRequest** | [**UserTransactionsRequest**](UserTransactionsRequest.md)|  | [optional] 

### Return type

[**GetUserTransactions200Response**](GetUserTransactions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json

