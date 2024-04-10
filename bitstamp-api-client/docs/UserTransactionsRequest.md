# BitstampPublicApi.UserTransactionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **String** | Limit result to that many transactions (default: 100; maximum: 1000). | [optional] 
**offset** | **String** | Skip that many transactions before returning results (default: 0, maximum: 200000). If you need to export older history contact support OR use combination of limit and since_id parameters. | [optional] 
**sinceId** | **String** | (Optional) Show only transactions from specified transaction id. If since_id parameter is used, limit parameter is set to 1000. | [optional] 
**sinceTimestamp** | **String** | (Optional) Show only transactions from unix timestamp (for max 30 days old). | [optional] 
**sort** | **String** | Sorting by date and time: asc - ascending; desc - descending (default: desc). | [optional] 
**untilTimestamp** | **String** | Show only transactions to unix timestamp (for max 30 days old). | [optional] 


