# BitstampPublicApi.DepositsApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCryptoDepositAddress**](DepositsApi.md#getCryptoDepositAddress) | **POST** /api/v2/{currency}_address/ | Crypto deposit address
[**getRippleIOUDepositAddress**](DepositsApi.md#getRippleIOUDepositAddress) | **POST** /api/v2/ripple_address/ | Ripple IOU deposit address
[**getUnconfirmedBTCDeposits**](DepositsApi.md#getUnconfirmedBTCDeposits) | **POST** /api/v2/btc_unconfirmed/ | Unconfirmed bitcoin deposits



## getCryptoDepositAddress

> GetUnconfirmedBTCDeposits200Response getCryptoDepositAddress(currency, opts)

Crypto deposit address

This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | User not verified | Your account needs to be verified before you can use this endpoint. | | Your deposits are currently disabled | No new deposits can be made at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | | Invalid network selection | The selected network is not supported for &#39;currency&#39;. Please select a compatible network for it. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.DepositsApi();
let currency = "currency_example"; // String | 
let opts = {
  'depositAddressRequest': new BitstampPublicApi.DepositAddressRequest() // DepositAddressRequest | 
};
apiInstance.getCryptoDepositAddress(currency, opts, (error, data, response) => {
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
 **depositAddressRequest** | [**DepositAddressRequest**](DepositAddressRequest.md)|  | [optional] 

### Return type

[**GetUnconfirmedBTCDeposits200Response**](GetUnconfirmedBTCDeposits200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRippleIOUDepositAddress

> GetRippleIOUDepositAddress200Response getRippleIOUDepositAddress()

Ripple IOU deposit address

This API call is cached for 60 seconds. This call will be executed on the account (Sub or Main), to which the used API key is bound to. This endpoint supports withdrawals of USD, BTC or EUR* IOU on the XRP Ledger.  *IOUs are supported globally except for Singapore. Also, EUR-IOUs are not supported in the US.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | User not verified | Your account needs to be verified before you can use this endpoint. | | Your deposits are currently disabled | No new deposits can be made at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.DepositsApi();
apiInstance.getRippleIOUDepositAddress((error, data, response) => {
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

[**GetRippleIOUDepositAddress200Response**](GetRippleIOUDepositAddress200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnconfirmedBTCDeposits

> GetUnconfirmedBTCDeposits200Response getUnconfirmedBTCDeposits()

Unconfirmed bitcoin deposits

This API call is cached for 60 seconds. This call will be executed on the account (Sub or Main), to which the used API key is bound to. 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.DepositsApi();
apiInstance.getUnconfirmedBTCDeposits((error, data, response) => {
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

[**GetUnconfirmedBTCDeposits200Response**](GetUnconfirmedBTCDeposits200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

