# BitstampPublicApi.TravelRulePrivateApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](TravelRulePrivateApi.md#createContact) | **POST** /api/v2/travel_rule/contacts/ | Create contact
[**getAllContacts**](TravelRulePrivateApi.md#getAllContacts) | **GET** /api/v2/travel_rule/contacts/ | Get all contacts
[**getContact**](TravelRulePrivateApi.md#getContact) | **GET** /api/v2/travel_rule/contacts/{contact_uuid}/ | Get contact



## createContact

> ContactSchema createContact(opts)

Create contact

Enables a contact to be created and relevant information to be provided and stored. This can then be used to provide the originator or beneficiary details of a Travel Rule message, when transferring crypto from/to the platform.  | Response Code | Status Code | Reason                                                                     | |---------------|-------------|----------------------------------------------------------------------------| | 201           |             | Successfully created the contact.                                          | | 403           |             | You do not have sufficient permissions to access this endpoint.            | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TravelRulePrivateApi();
let opts = {
  'contactSchema': new BitstampPublicApi.ContactSchema() // ContactSchema | 
};
apiInstance.createContact(opts, (error, data, response) => {
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
 **contactSchema** | [**ContactSchema**](ContactSchema.md)|  | [optional] 

### Return type

[**ContactSchema**](ContactSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllContacts

> [ContactSchema] getAllContacts(opts)

Get all contacts

Returns all contacts that have been previously created. These can then be used to provide the originator or beneficiary details of a Travel Rule message, when transferring crypto from/to the platform.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                                     | |---------------|-------------|----------------------------------------------------------------------------| | 200           |             | Successfully retrieved the list of contacts.                               | | 403           |             | You do not have sufficient permissions to access this endpoint.            | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TravelRulePrivateApi();
let opts = {
  'perPage': 56, // Number | 
  'page': 56 // Number | 
};
apiInstance.getAllContacts(opts, (error, data, response) => {
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

[**[ContactSchema]**](ContactSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContact

> ContactSchema getContact(contactUuid)

Get contact

Returns a specific contact that has been previously created. This can then be used to provide the originator or beneficiary details of a Travel Rule message, when transferring crypto from/to the platform.  **The below table defines the HTTP Status codes that this API may return**  | Response Code | Status Code | Reason                                                                     | |---------------|-------------|----------------------------------------------------------------------------| | 200           |             | Successfully retrieved the contact.                                        | | 403           |             | You do not have sufficient permissions to access this endpoint.            | | 404           |             | Contact with given contact uuid is not found.                              | 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.TravelRulePrivateApi();
let contactUuid = "contactUuid_example"; // String | 
apiInstance.getContact(contactUuid, (error, data, response) => {
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
 **contactUuid** | **String**|  | 

### Return type

[**ContactSchema**](ContactSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

