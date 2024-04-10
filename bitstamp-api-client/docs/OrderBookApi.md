# BitstampPublicApi.OrderBookApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrderBook**](OrderBookApi.md#getOrderBook) | **GET** /api/v2/order_book/{market_symbol}/ | Order book



## getOrderBook

> GetOrderBook200Response getOrderBook(marketSymbol, opts)

Order book

Returns order book data.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | POST method not allowed for this request. | HTTP method other than GET used. | | Invalid GET parameter. | Missing group parameter. | | Internal error. | Order book unavailable. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrderBookApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'group': 0 // Number | The group parameter is used for accessing different data from order book. Possible values are 0 (orders are not grouped at same price), 1 (orders are grouped at same price - default) or 2 (orders with their order ids are not grouped at same price).
};
apiInstance.getOrderBook(marketSymbol, opts, (error, data, response) => {
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
 **group** | **Number**| The group parameter is used for accessing different data from order book. Possible values are 0 (orders are not grouped at same price), 1 (orders are grouped at same price - default) or 2 (orders with their order ids are not grouped at same price). | [optional] 

### Return type

[**GetOrderBook200Response**](GetOrderBook200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

