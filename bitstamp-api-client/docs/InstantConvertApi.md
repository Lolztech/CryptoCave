# BitstampPublicApi.InstantConvertApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLiquidationAddressTransactions**](InstantConvertApi.md#getLiquidationAddressTransactions) | **POST** /api/v2/instant_convert_address/info/ | Instant convert address
[**requestNewLiquidationAddress**](InstantConvertApi.md#requestNewLiquidationAddress) | **POST** /api/v2/instant_convert_address/new/ | New instant convert address



## getLiquidationAddressTransactions

> GetLiquidationAddressTransactions200Response getLiquidationAddressTransactions(opts)

Instant convert address

Shows transactions for the instant convert address.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Address not found. | Provided address is wrong. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.InstantConvertApi();
let opts = {
  'instantConvertAddressInfoRequest': new BitstampPublicApi.InstantConvertAddressInfoRequest() // InstantConvertAddressInfoRequest | 
};
apiInstance.getLiquidationAddressTransactions(opts, (error, data, response) => {
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
 **instantConvertAddressInfoRequest** | [**InstantConvertAddressInfoRequest**](InstantConvertAddressInfoRequest.md)|  | [optional] 

### Return type

[**GetLiquidationAddressTransactions200Response**](GetLiquidationAddressTransactions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## requestNewLiquidationAddress

> RequestNewLiquidationAddress200Response requestNewLiquidationAddress(opts)

New instant convert address

Creates a new instant convert address which will automatically sell your crypto for specified fiat currency.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing liquidation_currency parameter. | Parameter liquidation_currency is required for this call. | | Invalid currency / Currency [...] not supported. | Invalid liquidation_currency. | | Cannot create new address, please try later. | At the moment we can&#39;t create new deposit address. Try again later. | | Invalid address format. | Invalid address_format. | | Your trading features are currently disabled | No new liquidation addresses can be created at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.InstantConvertApi();
let opts = {
  'newInstantConvertAddressRequest': new BitstampPublicApi.NewInstantConvertAddressRequest() // NewInstantConvertAddressRequest | 
};
apiInstance.requestNewLiquidationAddress(opts, (error, data, response) => {
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
 **newInstantConvertAddressRequest** | [**NewInstantConvertAddressRequest**](NewInstantConvertAddressRequest.md)|  | [optional] 

### Return type

[**RequestNewLiquidationAddress200Response**](RequestNewLiquidationAddress200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json

