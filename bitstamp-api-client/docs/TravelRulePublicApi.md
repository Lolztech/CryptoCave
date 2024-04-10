# BitstampPublicApi.TravelRulePublicApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vaspList**](TravelRulePublicApi.md#vaspList) | **GET** /api/v2/travel_rule/vasps/ | VASP list



## vaspList

> VaspList200Response vaspList(opts)

VASP list

A list of Virtual Asset Service Providers needed to comply with the Travel Rule. These may be needed when transferring cryptocurrency from/to the platform. This is required in cases where the originating or destination address of the crypto transfer is hosted by a VASP.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                                     | |---------------|-------------|----------------------------------------------------------------------------| | 200           |             | Successfully retrieved the vasp list.                                      | | 400           |             | Could not fetch VASP list, service unavailable.                            | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TravelRulePublicApi();
let opts = {
  'perPage': 56, // Number | 
  'page': 56 // Number | 
};
apiInstance.vaspList(opts, (error, data, response) => {
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
 **perPage** | **Number**|  | [optional] 
 **page** | **Number**|  | [optional] 

### Return type

[**VaspList200Response**](VaspList200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

