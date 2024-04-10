# BitstampPublicApi.AccountBalancesApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalances**](AccountBalancesApi.md#getAccountBalances) | **POST** /api/v2/account_balances/ | Account balances
[**getAccountBalancesForCurrency**](AccountBalancesApi.md#getAccountBalancesForCurrency) | **POST** /api/v2/account_balances/{currency}/ | Account balance for currency



## getAccountBalances

> [AccountBalancesResponse] getAccountBalances()

Account balances

Return account balances.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.AccountBalancesApi();
apiInstance.getAccountBalances((error, data, response) => {
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

[**[AccountBalancesResponse]**](AccountBalancesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAccountBalancesForCurrency

> AccountBalancesResponse getAccountBalancesForCurrency(currency)

Account balance for currency

Return account balances for currency.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.AccountBalancesApi();
let currency = "currency_example"; // String | 
apiInstance.getAccountBalancesForCurrency(currency, (error, data, response) => {
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

### Return type

[**AccountBalancesResponse**](AccountBalancesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

