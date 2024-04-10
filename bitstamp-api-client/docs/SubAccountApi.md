# BitstampPublicApi.SubAccountApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transferFromMainToSub**](SubAccountApi.md#transferFromMainToSub) | **POST** /api/v2/transfer-from-main/ | Transfer balance from Main to Sub Account
[**transferFromSubToMain**](SubAccountApi.md#transferFromSubToMain) | **POST** /api/v2/transfer-to-main/ | Transfer balance from Sub to Main account



## transferFromMainToSub

> TransferFromMainToSub200Response transferFromMainToSub(opts)

Transfer balance from Main to Sub Account

Transfers the desired balance from your Main Account to a Sub Account, specified by the subAccount parameter. This call can only be performed by your Main Account.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | You have only &#39;available&#39; &#39;currency&#39; available. Check your account balance for details. | Account has less &#39;available_currency&#39; than is required to make this transfer. | | Select a valid choice. X is not one of the available choices. | X is not valid currency. Select a valid currency. | | Sub account with identifier \&quot;X\&quot; does not exist. | Can&#39;t find sub account with id X. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.SubAccountApi();
let opts = {
  'transferToFromMainRequest': new BitstampPublicApi.TransferToFromMainRequest() // TransferToFromMainRequest | 
};
apiInstance.transferFromMainToSub(opts, (error, data, response) => {
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
 **transferToFromMainRequest** | [**TransferToFromMainRequest**](TransferToFromMainRequest.md)|  | [optional] 

### Return type

[**TransferFromMainToSub200Response**](TransferFromMainToSub200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## transferFromSubToMain

> TransferFromMainToSub200Response transferFromSubToMain(opts)

Transfer balance from Sub to Main account

Transfers the desired balance from a Sub Account to your Main Account. Can be called by either the Main Account or a Sub Account, but requires a permission in both cases. The subAccount parameter must be provided if the Main Account is initiating the call. If a Sub Account is making the call, then it is the target Sub Account for the transfer and no further clarification is required. In that case, passing this parameter will have no additional effect.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | You have only &#39;available&#39; &#39;currency&#39; available. Check your account balance for details. | Account has less &#39;available_currency&#39; than is required to make this transfer. | | Select a valid choice. X is not one of the available choices. | X is not valid currency. Select a valid currency. | | Sub account with identifier \&quot;X\&quot; does not exist. | Can&#39;t find sub account with id X. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.SubAccountApi();
let opts = {
  'transferToFromMainRequest': new BitstampPublicApi.TransferToFromMainRequest() // TransferToFromMainRequest | 
};
apiInstance.transferFromSubToMain(opts, (error, data, response) => {
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
 **transferToFromMainRequest** | [**TransferToFromMainRequest**](TransferToFromMainRequest.md)|  | [optional] 

### Return type

[**TransferFromMainToSub200Response**](TransferFromMainToSub200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json

