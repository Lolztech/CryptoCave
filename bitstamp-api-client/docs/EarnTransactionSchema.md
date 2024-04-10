# BitstampPublicApi.EarnTransactionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount in base currency | [optional] [readonly] 
**currency** | **String** | Currency | [optional] [readonly] 
**datetime** | **Date** | Date and time of earn history event | [optional] [readonly] 
**quoteCurrency** | **String** | Currency in which value is calculated | [optional] [readonly] 
**status** | **String** | Status of earn history event | [optional] [readonly] 
**type** | **String** | Type of earn history event | [optional] [readonly] 
**value** | **Number** | Amount in quote currency | [optional] [readonly] 



## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `CANCELED` (value: `"CANCELED"`)

* `FAILED` (value: `"FAILED"`)





## Enum: TypeEnum


* `STAKE` (value: `"STAKE"`)

* `UNSTAKE` (value: `"UNSTAKE"`)

* `REWARD_RECEIVED` (value: `"REWARD_RECEIVED"`)

* `OPT_IN` (value: `"OPT_IN"`)

* `OPT_OUT` (value: `"OPT_OUT"`)

* `SUBSCRIBE` (value: `"SUBSCRIBE"`)

* `UNSUBSCRIBE` (value: `"UNSUBSCRIBE"`)




