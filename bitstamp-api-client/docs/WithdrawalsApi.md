# BitstampPublicApi.WithdrawalsApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelWithdrawal**](WithdrawalsApi.md#cancelWithdrawal) | **POST** /api/v2/withdrawal/cancel/ | Cancel bank or crypto withdrawal
[**getFiatWithdrawalStatus**](WithdrawalsApi.md#getFiatWithdrawalStatus) | **POST** /api/v2/withdrawal/status/ | Fiat withdrawal status
[**getWithdrawalRequests**](WithdrawalsApi.md#getWithdrawalRequests) | **POST** /api/v2/withdrawal-requests/ | Withdrawal requests
[**requestCryptoWithdrawal**](WithdrawalsApi.md#requestCryptoWithdrawal) | **POST** /api/v2/{currency}_withdrawal/ | Crypto withdrawal
[**requestFiatWithdrawal**](WithdrawalsApi.md#requestFiatWithdrawal) | **POST** /api/v2/withdrawal/open/ | Open bank withdrawal
[**requestRippleIOUWithdrawal**](WithdrawalsApi.md#requestRippleIOUWithdrawal) | **POST** /api/v2/ripple_withdrawal/ | Ripple IOU withdrawal



## cancelWithdrawal

> CancelWithdrawal200Response cancelWithdrawal(opts)

Cancel bank or crypto withdrawal

Cancels a bank or crypto withdrawal request. This call can only be performed by your Main Account.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Cancelling bank withdrawals with sub account API keys is not supported. | This API endpoint can only be utilized by your main account. | | Missing parameters: [...] | Parameters stated in the list ([...]) are required for this call. | | No active bank withdrawal with id&#x3D;X found. | Could not find any active bank withdrawal with the id X. Will return the same response for already cancelled withdrawal requests. | | Cannot cancel a withdrawal in process (id&#x3D;X). | The bank withdrawal request with id&#x3D;X is currently being processed and cannot be cancelled. | | Your withdrawals are currently disabled | No bank withdrawals can be canceled at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WithdrawalsApi();
let opts = {
  'cancelBankOrCryptoWithdrawalRequest': new BitstampPublicApi.CancelBankOrCryptoWithdrawalRequest() // CancelBankOrCryptoWithdrawalRequest | 
};
apiInstance.cancelWithdrawal(opts, (error, data, response) => {
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
 **cancelBankOrCryptoWithdrawalRequest** | [**CancelBankOrCryptoWithdrawalRequest**](CancelBankOrCryptoWithdrawalRequest.md)|  | [optional] 

### Return type

[**CancelWithdrawal200Response**](CancelWithdrawal200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## getFiatWithdrawalStatus

> GetFiatWithdrawalStatus200Response getFiatWithdrawalStatus(opts)

Fiat withdrawal status

Checks the status of a fiat withdrawal request. This call can only be performed by your Main Account.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Performing bank withdrawal status checks with sub account API keys is not supported. | This API endpoint can only be utilized by your main account. | | Missing parameters: [...]. | Parameters stated in the list ([...]) are required for this call. | | No bank withdrawal with id&#x3D;X found. | Could not find any bank withdrawal with the id X. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WithdrawalsApi();
let opts = {
  'bankWithdrawalStatusRequest': new BitstampPublicApi.BankWithdrawalStatusRequest() // BankWithdrawalStatusRequest | 
};
apiInstance.getFiatWithdrawalStatus(opts, (error, data, response) => {
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
 **bankWithdrawalStatusRequest** | [**BankWithdrawalStatusRequest**](BankWithdrawalStatusRequest.md)|  | [optional] 

### Return type

[**GetFiatWithdrawalStatus200Response**](GetFiatWithdrawalStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## getWithdrawalRequests

> GetWithdrawalRequests200Response getWithdrawalRequests(opts)

Withdrawal requests

Return user&#39;s withdrawal requests. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Invalid timedelta | Timedelta needs to have only numeric characters. | | Timedelta too large | Timedelta too large. | | Invalid offset | Offset needs to be numeric characters between 0 and 200000. | | Invalid limit | Limit needs to be numeric characters between 1 and 1000. | | Invalid id | Id needs to have only numeric characters. | | Both limit and offset must be present | Both limit and offset must be present. | | Too many parameters | Pick one or combination of parameters and run again. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WithdrawalsApi();
let opts = {
  'withdrawalRequestsRequest': new BitstampPublicApi.WithdrawalRequestsRequest() // WithdrawalRequestsRequest | 
};
apiInstance.getWithdrawalRequests(opts, (error, data, response) => {
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
 **withdrawalRequestsRequest** | [**WithdrawalRequestsRequest**](WithdrawalRequestsRequest.md)|  | [optional] 

### Return type

[**GetWithdrawalRequests200Response**](GetWithdrawalRequests200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## requestCryptoWithdrawal

> RequestCryptoWithdrawal200Response requestCryptoWithdrawal(currency, opts)

Crypto withdrawal

Request a crypto withdrawal.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or address POST parameters | One or both parameters missing. | | User not verified | Your account needs to be verified before you can use this endpoint. | | &#39;crypto_currency&#39; withdrawals are currently unavailable for your account | Contact support for additional information. | | Not allowed to withdraw to specified &#39;crypto_currency&#39; address | API key is set for withdrawing to another &#39;crypto_currency&#39; address. | | Enter a number. Use \&quot;.\&quot; as a decimal point | Amount parameter can only be number. | | You have only &#39;available&#39; &#39;crypto_currency&#39; available. Check your account balance for details | Account has less available &#39;crypto_currency&#39; than are required to make this withdrawal. | | Your withdrawals are currently disabled | No new withdrawals can be opened at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | | Ensure this value is greater than or equal to &#39;minimum_withdrawal_amount&#39; | Minimum withdrawal amount is &#39;minimum_withdrawal_amount&#39;. | | Ensure this value has at least &#39;minimum_address_length&#39; characters (it has x). Ensure this value has at most &#39;maximum_address_length&#39; characters (it has x). | Address parameter must be between &#39;minimum_address_length&#39; and &#39;maximum_address_length&#39; characters long. | | Invalid network selection | The selected network is not supported for &#39;currency&#39;. Please select a compatible network for it. | | Contact does not exist | Review and validate the contact_uuid to ensure it matches an existing contact, you may also create contacts at /v2/travel_rule/contacts endpoint | | Vasp does not exist | Verify that the vasp_uuid exists within the /v2/travel_rule/vasps endpoint. | | contact_uuid: You must set this field because contact_thirdparty&#x3D;True | contact_uuid must be provided if withdrawing to a third party | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WithdrawalsApi();
let currency = "currency_example"; // String | 
let opts = {
  'cryptoWithdrawalRequest': new BitstampPublicApi.CryptoWithdrawalRequest() // CryptoWithdrawalRequest | 
};
apiInstance.requestCryptoWithdrawal(currency, opts, (error, data, response) => {
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
 **cryptoWithdrawalRequest** | [**CryptoWithdrawalRequest**](CryptoWithdrawalRequest.md)|  | [optional] 

### Return type

[**RequestCryptoWithdrawal200Response**](RequestCryptoWithdrawal200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## requestFiatWithdrawal

> RequestFiatWithdrawal200Response requestFiatWithdrawal(opts)

Open bank withdrawal

Opens a bank withdrawal request (SEPA or international). Withdrawal requests opened via API are automatically confirmed (no confirmation e-mail will be sent), but are processed just like withdrawals opened through the platform&#39;s interface. This call can only be performed by your Main Account.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Opening bank withdrawals with sub account API keys is not supported. | This API endpoint can only be utilized by your main account. | | &#39;X&#39;: [&#39;This field is required.&#39;] | Parameter X is required for this call. | | &#39;X&#39;: [&#39;Select a valid choice. Y is not one of the available choices.&#39;] | Y is not a valid value for parameter X. | | Bank withdrawals temporarily disabled. | No new bank withdrawals can be opened at this time. | | Unsupported withdrawal type (must be either SEPA or international). | When opening bank withdrawals, you must specify one of the two supported types: SEPA or international. | | When opening bank withdrawals, you must specify one of the two supported types: SEPA or international. | To open this withdrawal, your balance must have at least &#39;amount&#39; of target currency available. | | &#39;X&#39;: [&#39;Enter a number. Use \&quot;.\&quot; as a decimal point.&#39;] | Parameter X can only be a decimal number. | | Your withdrawals are currently disabled | No new withdrawals can be opened at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WithdrawalsApi();
let opts = {
  'openBankWithdrawalRequest': new BitstampPublicApi.OpenBankWithdrawalRequest() // OpenBankWithdrawalRequest | 
};
apiInstance.requestFiatWithdrawal(opts, (error, data, response) => {
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
 **openBankWithdrawalRequest** | [**OpenBankWithdrawalRequest**](OpenBankWithdrawalRequest.md)|  | [optional] 

### Return type

[**RequestFiatWithdrawal200Response**](RequestFiatWithdrawal200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## requestRippleIOUWithdrawal

> RequestRippleIOUWithdrawal200Response requestRippleIOUWithdrawal(opts)

Ripple IOU withdrawal

This call will be executed on the account (Sub or Main), to which the used API key is bound to. This endpoint supports withdrawals of USD, BTC or EUR* IOU on the XRP Ledger.  *IOUs are supported globally except for Singapore. Also, EUR-IOUs are not supported in the US.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or address POST parameters | One or both parameters missing. | | User not verified | Your account needs to be verified before you can use this endpoint. | | &#39;crypto_currency&#39; withdrawals are currently unavailable for your account | Contact support for additional information. | | Not allowed to withdraw to specified &#39;crypto_currency&#39; address | API key is set for withdrawing to another &#39;crypto_currency&#39; address. | | Enter a number. Use \&quot;.\&quot; as a decimal point | Amount parameter can only be number. | | You have only &#39;available&#39; &#39;crypto_currency&#39; available. Check your account balance for details | Account has less available &#39;crypto_currency&#39; than are required to make this withdrawal. | | Your withdrawals are currently disabled | No new withdrawals can be opened at this time. If a URL is provided you can follow it to resolve any issues which might be causing this. | | Ensure this value is greater than or equal to &#39;minimum_withdrawal_amount&#39; | Minimum withdrawal amount is &#39;minimum_withdrawal_amount&#39;. | | Ensure this value has at least &#39;minimum_address_length&#39; characters (it has x). Ensure this value has at most &#39;maximum_address_length&#39; characters (it has x). | Address parameter must be between &#39;minimum_address_length&#39; and &#39;maximum_address_length&#39; characters long. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.WithdrawalsApi();
let opts = {
  'rippleIOUWithdrawalRequest': new BitstampPublicApi.RippleIOUWithdrawalRequest() // RippleIOUWithdrawalRequest | 
};
apiInstance.requestRippleIOUWithdrawal(opts, (error, data, response) => {
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
 **rippleIOUWithdrawalRequest** | [**RippleIOUWithdrawalRequest**](RippleIOUWithdrawalRequest.md)|  | [optional] 

### Return type

[**RequestRippleIOUWithdrawal200Response**](RequestRippleIOUWithdrawal200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json

