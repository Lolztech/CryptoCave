# BitstampPublicApi.SecurityApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**revokeAllAPIKeys**](SecurityApi.md#revokeAllAPIKeys) | **POST** /api/v2/revoke_all_api_keys/ | Revoke all API access



## revokeAllAPIKeys

> RevokedAPIKeySchema revokeAllAPIKeys(opts)

Revoke all API access

Revoke all API keys across all user&#39;s accounts.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.SecurityApi();
let opts = {
  'body': {key: null} // Object | This endpoint does not expect a request body.
};
apiInstance.revokeAllAPIKeys(opts, (error, data, response) => {
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
 **body** | **Object**| This endpoint does not expect a request body. | [optional] 

### Return type

[**RevokedAPIKeySchema**](RevokedAPIKeySchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

