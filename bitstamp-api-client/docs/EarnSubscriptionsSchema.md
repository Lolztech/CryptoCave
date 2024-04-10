# BitstampPublicApi.EarnSubscriptionsSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activationPeriod** | **String** | Expected time until earn option starts to earn rewards | [optional] [readonly] 
**amount** | **Number** | Amount on which you are earning interest | [optional] [readonly] 
**amountEarned** | **Number** | Amount that has been earned | [optional] [readonly] 
**availableAmount** | **Number** | Amount on which you are earning interest that is available to withdraw from Earn | [optional] [readonly] 
**currency** | **String** | Currency | [optional] [readonly] 
**distributionPeriod** | **String** | Period in which the rewards are distributed | [optional] [readonly] 
**estimatedAnnualYield** | **Number** | Estimated annual yield | [optional] [readonly] 
**minimumSubscriptionAmount** | **Number** | Minimum amount for subscription | [optional] [readonly] 
**term** | **String** | Type of Earn term | [optional] [readonly] 
**type** | **String** | Type of Earn product | [optional] [readonly] 



## Enum: DistributionPeriodEnum


* `DAILY` (value: `"DAILY"`)

* `WEEKLY` (value: `"WEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `QUARTERLY` (value: `"QUARTERLY"`)





## Enum: TermEnum


* `FLEXIBLE` (value: `"FLEXIBLE"`)

* `FIXED` (value: `"FIXED"`)





## Enum: TypeEnum


* `STAKING` (value: `"STAKING"`)

* `LENDING` (value: `"LENDING"`)




