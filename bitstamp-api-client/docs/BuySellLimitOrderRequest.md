# BitstampPublicApi.BuySellLimitOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | Amount. | 
**price** | **Number** | Price. | 
**limitPrice** | **Number** | If the order gets executed, a new sell order will be placed, with \&quot;limit_price\&quot; as its price. | [optional] 
**dailyOrder** | **Boolean** | Opens buy limit order which will be canceled at 0:00 UTC unless it already has been executed. | [optional] 
**iocOrder** | **Boolean** | An Immediate-Or-Cancel (IOC) order is an order that must be executed immediately. Any portion of an IOC order that cannot be filled immediately will be cancelled. | [optional] 
**fokOrder** | **Boolean** | A Fill-Or-Kill (FOK) order is an order that must be executed immediately in its entirety. If the order cannot be immediately executed in its entirety, it will be cancelled. | [optional] 
**mocOrder** | **Boolean** | A Maker-Or-Cancel (MOC) order is an order that ensures it is not fully or partially filled when placed. In case it would be, the order is cancelled. | [optional] 
**gtdOrder** | **Boolean** | A Good-Till-Date (GTD) lets you select an expiration time up until which the order will be open. Note that all GTD orders are cancelled at 00:00:00 UTC. | [optional] 
**expireTime** | **Number** | Unix timestamp in milliseconds. Required in case of GTD order. | [optional] 
**clientOrderId** | **String** | Client order ID set by the client for internal reference. It should be unique, but there are no additional constraints or checks guaranteed on the field by Bitstamp. | [optional] 


