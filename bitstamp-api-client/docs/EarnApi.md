# BitstampPublicApi.EarnApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**earnSubscribe**](EarnApi.md#earnSubscribe) | **POST** /api/v2/earn/subscribe/ | Subscribe to earn
[**earnSubscriptions**](EarnApi.md#earnSubscriptions) | **GET** /api/v2/earn/subscriptions/ | Get earn subscriptions
[**earnSubscriptionsSetting**](EarnApi.md#earnSubscriptionsSetting) | **POST** /api/v2/earn/subscriptions/setting/ | Manage subscription settings
[**earnTransactions**](EarnApi.md#earnTransactions) | **GET** /api/v2/earn/transactions/ | Get earn transactions
[**earnUnsubscribe**](EarnApi.md#earnUnsubscribe) | **POST** /api/v2/earn/unsubscribe/ | Unsubscribe from earn



## earnSubscribe

> earnSubscribe(opts)

Subscribe to earn

Subscribe given amount to lending / staking.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                                              | |---------------|-------------|-------------------------------------------------------------------------------------| | 200           |             | Successfully subscribed to earn.                                                    | | 400           | API5001     | Earn request amount too low.                                                        | | 400           | API5002     | Earn request amount too high.                                                       | | 400           | API5003     | Decimal places in amount exceed maximum allowed.                                    | | 400           | API5004     | Operation is unsupported.                                                           | | 400           | API5005     | Operation is currently unavailable, please try again later.                         | | 400           | API5006     | Required personal information is missing, please reach out to support@bitstamp.net. | | 400           | API5007     | Operation is unavailable, please reach out to support@bitstamp.net.                 | | 400           | API5011     | Something went wrong, try again later.                                              | | 403           |             | This feature is not available for your account.                                     | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.EarnApi();
let opts = {
  'earnSubscriptionSchema': new BitstampPublicApi.EarnSubscriptionSchema() // EarnSubscriptionSchema | 
};
apiInstance.earnSubscribe(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **earnSubscriptionSchema** | [**EarnSubscriptionSchema**](EarnSubscriptionSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## earnSubscriptions

> [EarnSubscriptionsSchema] earnSubscriptions()

Get earn subscriptions

Get earn subscriptions for user.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                      | |---------------|-------------|-------------------------------------------------------------| | 200           |             | Returned earn subscriptions                                 | | 400           | API5011     | Something went wrong, try again later.                      | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.EarnApi();
apiInstance.earnSubscriptions((error, data, response) => {
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

[**[EarnSubscriptionsSchema]**](EarnSubscriptionsSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## earnSubscriptionsSetting

> earnSubscriptionsSetting(opts)

Manage subscription settings

Manage subscription settings (opt in, opt out). Currently only supported for staking.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                      | |---------------|-------------|-------------------------------------------------------------| | 200           |             | Successfully update subscription setting.                   | | 400           | API5004     | Operation is unsupported.                                   | | 400           | API5005     | Operation is currently unavailable, please try again later. | | 400           | API5008     | Already opted in.                                           | | 400           | API5009     | Not opted in.                                               | | 400           | API5010     | Insufficient balance.                                       | | 400           | API5011     | Something went wrong, try again later.                      | | 403           |             | This feature is not available for your account.             | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.EarnApi();
let opts = {
  'earnSubscriptionSettingSchema': new BitstampPublicApi.EarnSubscriptionSettingSchema() // EarnSubscriptionSettingSchema | 
};
apiInstance.earnSubscriptionsSetting(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **earnSubscriptionSettingSchema** | [**EarnSubscriptionSettingSchema**](EarnSubscriptionSettingSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## earnTransactions

> [EarnTransactionSchema] earnTransactions(opts)

Get earn transactions

Get earn transaction history.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                      | |---------------|-------------|-------------------------------------------------------------| | 200           |             | Returned earn transaction history.                          | | 400           | API5011     | Something went wrong, try again later.                      | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.EarnApi();
let opts = {
  'currency': ETH, // String | Currency
  'limit': 100, // Number | Limit result to that many events (default: 100; maximum: 1000)
  'offset': 0, // Number | Skip that many events before returning results (default: 0, maximum: 200000)
  'quoteCurrency': USD // String | Currency in which value is calculated
};
apiInstance.earnTransactions(opts, (error, data, response) => {
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
 **currency** | **String**| Currency | [optional] 
 **limit** | **Number**| Limit result to that many events (default: 100; maximum: 1000) | [optional] [default to 100]
 **offset** | **Number**| Skip that many events before returning results (default: 0, maximum: 200000) | [optional] [default to 0]
 **quoteCurrency** | **String**| Currency in which value is calculated | [optional] 

### Return type

[**[EarnTransactionSchema]**](EarnTransactionSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## earnUnsubscribe

> earnUnsubscribe(opts)

Unsubscribe from earn

Unsubscribe given amount from lending / staking.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                      | |---------------|-------------|-------------------------------------------------------------| | 200           |             | Successfully unsubscribed from earn.                        | | 400           | API5001     | Earn request amount too low.                                | | 400           | API5002     | Earn request amount too high.                               | | 400           | API5003     | Decimal places in amount exceed maximum allowed.            | | 400           | API5004     | Operation is unsupported.                                   | | 400           | API5005     | Operation is currently unavailable, please try again later. | | 400           | API5011     | Something went wrong, try again later.                      | | 400           | API5012     | Staked balance is insufficient.                             | | 403           |             | This feature is not available for your account.             | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.EarnApi();
let opts = {
  'earnSubscriptionSchema': new BitstampPublicApi.EarnSubscriptionSchema() // EarnSubscriptionSchema | 
};
apiInstance.earnUnsubscribe(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **earnSubscriptionSchema** | [**EarnSubscriptionSchema**](EarnSubscriptionSchema.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

