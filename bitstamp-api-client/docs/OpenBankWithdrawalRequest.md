# BitstampPublicApi.OpenBankWithdrawalRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCurrency** | **String** | The balance from which you wish to withdraw. Can be either \&quot;USD\&quot;, \&quot;EUR\&quot; or \&quot;GBP\&quot;. | 
**address** | **String** | User or company address. | 
**amount** | **String** | The amount to withdraw. | 
**bankAddress** | **String** | Target bank address (international withdrawals only). | [optional] 
**bankCity** | **String** | Target bank city (international withdrawals only). | [optional] 
**bankCountry** | **String** | Target bank country. Country codes must be in accordance with the ISO 3166-1 standard (use two character Alpha-2 codes). Disclaimer: Not all country choices listed at this reference URL are supported. For a detailed list please refer to our platform&#39;s withdrawal interfaces (international withdrawals only). | [optional] 
**bankName** | **String** | Target bank name (international withdrawals only). | [optional] 
**bankPostalCode** | **String** | Target bank postal code (international withdrawals only). | [optional] 
**bic** | **String** | The target bank BIC. | 
**city** | **String** | User or company city. | 
**comment** | **String** | Withdrawal comment. | [optional] 
**country** | **String** | User or company country. Country codes must be in accordance with the ISO 3166-1 standard (use two character Alpha-2 codes). Disclaimer: Not all country choices listed at this reference URL are supported. For a detailed list please refer to our platform&#39;s withdrawal interfaces. | 
**currency** | **String** | The currency in which the funds should be withdrawn (may involve conversion fees). Currency codes must be in accordance with the ISO 4217 standard. Disclaimer: Not all currency choices listed at this reference URL are supported. For a detailed list please refer to our platform&#39;s withdrawal interfaces. (international withdrawals only) | [optional] 
**iban** | **String** | User or company IBAN. | 
**name** | **String** | Full user or company name. | 
**postalCode** | **String** | User or company postal code. | 
**type** | **String** | Type of the withdrawal request (\&quot;sepa\&quot; or \&quot;international\&quot;). | 


