# BitstampPublicApi.WebsocketApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebsocketToken**](WebsocketApi.md#getWebsocketToken) | **POST** /api/v2/websockets_token/ | Websockets token



## getWebsocketToken

> WebsocketsTokenResponse getWebsocketToken()

Websockets token

Generates token required for subscribing to private WebSocket channels.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WebsocketApi();
apiInstance.getWebsocketToken((error, data, response) => {
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

[**WebsocketsTokenResponse**](WebsocketsTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

