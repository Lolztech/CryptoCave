# BitstampPublicApi.OrdersApi

All URIs are relative to *https://www.bitstamp.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelAllOrders**](OrdersApi.md#cancelAllOrders) | **POST** /api/v2/cancel_all_orders/ | Cancel all orders
[**cancelOrder**](OrdersApi.md#cancelOrder) | **POST** /api/v2/cancel_order/ | Cancel order
[**cancelOrdersForMarket**](OrdersApi.md#cancelOrdersForMarket) | **POST** /api/v2/cancel_all_orders/{market_symbol}/ | Cancel all orders for market
[**getAllOpenOrders**](OrdersApi.md#getAllOpenOrders) | **POST** /api/v2/open_orders/ | Open orders
[**getOpenOrdersForMarket**](OrdersApi.md#getOpenOrdersForMarket) | **POST** /api/v2/open_orders/{market_symbol}/ | Open orders for market
[**getOrderStatus**](OrdersApi.md#getOrderStatus) | **POST** /api/v2/order_status/ | Order status
[**getUserTradingMarkets**](OrdersApi.md#getUserTradingMarkets) | **GET** /api/v2/my_markets/ | Trading markets
[**openInstantBuyOrder**](OrdersApi.md#openInstantBuyOrder) | **POST** /api/v2/buy/instant/{market_symbol}/ | Buy instant order
[**openInstantSellOrder**](OrdersApi.md#openInstantSellOrder) | **POST** /api/v2/sell/instant/{market_symbol}/ | Sell instant order
[**openLimitBuyOrder**](OrdersApi.md#openLimitBuyOrder) | **POST** /api/v2/buy/{market_symbol}/ | Buy limit order
[**openLimitSellOrder**](OrdersApi.md#openLimitSellOrder) | **POST** /api/v2/sell/{market_symbol}/ | Sell limit order
[**openMarketBuyOrder**](OrdersApi.md#openMarketBuyOrder) | **POST** /api/v2/buy/market/{market_symbol}/ | Buy market order
[**openMarketSellOrder**](OrdersApi.md#openMarketSellOrder) | **POST** /api/v2/sell/market/{market_symbol}/ | Sell market order



## cancelAllOrders

> CancelAllOrdersResponse cancelAllOrders()

Cancel all orders

Cancel all open orders. This call will be executed on the account (Sub or Main), to which the used API key is bound to.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
apiInstance.cancelAllOrders((error, data, response) => {
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

[**CancelAllOrdersResponse**](CancelAllOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cancelOrder

> CancelOrder200Response cancelOrder(opts)

Cancel order

Cancel an order. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing id POST param. | Id parameter missing. | | Invalid id POST param. | Id parameter must be a positive integer. | | Invalid client_cancel_id POST param. | client_cancel_id parameter can contain at most 180 characters. | | Order not found | Order with that id was not found in orderbook. Order might already be filled or canceled. Please check order status. | | Order cancellation failed due to internal error. Please try again. | Please retry cancelling order. | | Order cancelattion failed due to trade halt. | You can cancel order after trade halt is lifted. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let opts = {
  'cancelOrderRequest': new BitstampPublicApi.CancelOrderRequest() // CancelOrderRequest | 
};
apiInstance.cancelOrder(opts, (error, data, response) => {
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
 **cancelOrderRequest** | [**CancelOrderRequest**](CancelOrderRequest.md)|  | [optional] 

### Return type

[**CancelOrder200Response**](CancelOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## cancelOrdersForMarket

> CancelAllOrdersResponse cancelOrdersForMarket(marketSymbol)

Cancel all orders for market

Cancel all open orders for a market. This call will be executed on the account (Sub or Main), to which the used API key is bound to.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
apiInstance.cancelOrdersForMarket(marketSymbol, (error, data, response) => {
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

### Return type

[**CancelAllOrdersResponse**](CancelAllOrdersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllOpenOrders

> [OpenOrdersAllResponse] getAllOpenOrders()

Open orders

Return user&#39;s open orders. This API call is cached for 10 seconds. This call will be executed on the account (Sub or Main), to which the used API key is bound to.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
apiInstance.getAllOpenOrders((error, data, response) => {
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

[**[OpenOrdersAllResponse]**](OpenOrdersAllResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOpenOrdersForMarket

> [OpenOrdersPairResponse] getOpenOrdersForMarket(marketSymbol)

Open orders for market

Return user&#39;s open orders for market. This API call is cached for 10 seconds. This call will be executed on the account (Sub or Main), to which the used API key is bound to.

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
apiInstance.getOpenOrdersForMarket(marketSymbol, (error, data, response) => {
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

### Return type

[**[OpenOrdersPairResponse]**](OpenOrdersPairResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrderStatus

> GetOrderStatus200Response getOrderStatus(opts)

Order status

Returns order status. This call will be executed on the account (Sub or Main), to which the used API key is bound to. Order can be fetched by using either id or client_order_id parameter. For closed orders, this call only returns information for the last 30 days. &#39;Order not found&#39; error will be returned for orders outside this time range.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing id POST param | Id parameter missing. | | Invalid order id | Order id parameter can only be number. | | Order not found. | Order with that id was not found in our system. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let opts = {
  'orderStatusRequest': new BitstampPublicApi.OrderStatusRequest() // OrderStatusRequest | 
};
apiInstance.getOrderStatus(opts, (error, data, response) => {
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
 **orderStatusRequest** | [**OrderStatusRequest**](OrderStatusRequest.md)|  | [optional] 

### Return type

[**GetOrderStatus200Response**](GetOrderStatus200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUserTradingMarkets

> [TradingPair] getUserTradingMarkets()

Trading markets

Returns all markets that can be traded on selected account. 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
apiInstance.getUserTradingMarkets((error, data, response) => {
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

[**[TradingPair]**](TradingPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openInstantBuyOrder

> OpenInstantBuyOrder200Response openInstantBuyOrder(marketSymbol, opts)

Buy instant order

Open a buy instant order. By placing an instant order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only buy &#39;amount&#39; &#39;currency&#39;. Check your account balance for details. | Account has less &#39;available_currency&#39; than is required to make this order. | | Maximum market buy amount at the moment is &#39;amount&#39; &#39;currency&#39;. Please use limit order instead. | Order amount exceeds the limit amount set for market buy orders. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'buyInstantOrderRequest': new BitstampPublicApi.BuyInstantOrderRequest() // BuyInstantOrderRequest | 
};
apiInstance.openInstantBuyOrder(marketSymbol, opts, (error, data, response) => {
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
 **buyInstantOrderRequest** | [**BuyInstantOrderRequest**](BuyInstantOrderRequest.md)|  | [optional] 

### Return type

[**OpenInstantBuyOrder200Response**](OpenInstantBuyOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## openInstantSellOrder

> OpenInstantBuyOrder200Response openInstantSellOrder(marketSymbol, opts)

Sell instant order

Open an instant sell order. By placing an instant order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only sell &#39;amount&#39; &#39;currency&#39;. Check your account balance for details. | Account has less &#39;available_currency&#39; than is required to make this order. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'sellInstantOrderRequest': new BitstampPublicApi.SellInstantOrderRequest() // SellInstantOrderRequest | 
};
apiInstance.openInstantSellOrder(marketSymbol, opts, (error, data, response) => {
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
 **sellInstantOrderRequest** | [**SellInstantOrderRequest**](SellInstantOrderRequest.md)|  | [optional] 

### Return type

[**OpenInstantBuyOrder200Response**](OpenInstantBuyOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## openLimitBuyOrder

> OpenInstantBuyOrder200Response openLimitBuyOrder(marketSymbol, opts)

Buy limit order

Open a buy limit order. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | Price is more than 20% above market price. | Order price must not exceed 20% of current price. | | You need &#39;order_value&#39; USD to open that order. You have only &#39;available_fiat&#39; USD available. Check your account balance for details. | Account has less &#39;available_fiat&#39; than is required to make this order. | | Sell if executed price must be higher than buy price. | &#39;limit_price&#39; must be larger than &#39;price&#39; parameter. | | Both limit_price and daily_order cannot be set. | Only one of those parameters can be set. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'buySellLimitOrderRequest': new BitstampPublicApi.BuySellLimitOrderRequest() // BuySellLimitOrderRequest | 
};
apiInstance.openLimitBuyOrder(marketSymbol, opts, (error, data, response) => {
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
 **buySellLimitOrderRequest** | [**BuySellLimitOrderRequest**](BuySellLimitOrderRequest.md)|  | [optional] 

### Return type

[**OpenInstantBuyOrder200Response**](OpenInstantBuyOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## openLimitSellOrder

> OpenInstantBuyOrder200Response openLimitSellOrder(marketSymbol, opts)

Sell limit order

Open a sell limit order. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | Price is more than 20% below market price. | Order price must not exceed 20% of current price. | | You have only &#39;available_btc&#39; BTC available. Check your account balance for details. | Account has less &#39;available_btc&#39; than is required to make this order. | | Buy if executed price must be lower than sell price. | &#39;limit_price&#39; must be lower than &#39;price&#39; parameter. | | Both limit_price and daily_order cannot be set. | Only one of those parameters can be set. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'buySellLimitOrderRequest': new BitstampPublicApi.BuySellLimitOrderRequest() // BuySellLimitOrderRequest | 
};
apiInstance.openLimitSellOrder(marketSymbol, opts, (error, data, response) => {
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
 **buySellLimitOrderRequest** | [**BuySellLimitOrderRequest**](BuySellLimitOrderRequest.md)|  | [optional] 

### Return type

[**OpenInstantBuyOrder200Response**](OpenInstantBuyOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## openMarketBuyOrder

> OpenInstantBuyOrder200Response openMarketBuyOrder(marketSymbol, opts)

Buy market order

Open a buy market order. By placing a market order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only buy &#39;amount&#39; &#39;currency&#39;. Check your account balance for details. | Account has less &#39;available_currency&#39; than is required to make this order. | | Maximum market buy amount at the moment is &#39;amount&#39; &#39;currency&#39;. Please use limit order instead. | Order amount exceeds the limit amount set for market buy orders. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'buySellMarketOrderRequest': new BitstampPublicApi.BuySellMarketOrderRequest() // BuySellMarketOrderRequest | 
};
apiInstance.openMarketBuyOrder(marketSymbol, opts, (error, data, response) => {
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
 **buySellMarketOrderRequest** | [**BuySellMarketOrderRequest**](BuySellMarketOrderRequest.md)|  | [optional] 

### Return type

[**OpenInstantBuyOrder200Response**](OpenInstantBuyOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json


## openMarketSellOrder

> OpenInstantBuyOrder200Response openMarketSellOrder(marketSymbol, opts)

Sell market order

Open a sell market order. By placing a market order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  &lt;details&gt; &lt;summary style&#x3D;&#39;cursor: pointer&#39;&gt;&lt;strong&gt;Possible errors&lt;/strong&gt;&lt;/summary&gt;  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | &#39;parameter&#39;: Enter a number. Use \&quot;.\&quot; as a decimal point. | &#39;parameter&#39; can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only sell &#39;amount&#39; &#39;currency&#39;. Check your account balance for details. | Account has less &#39;available_currency&#39; than is required to make this order. | | No buy orders for currency pair &#39;currency_pair&#39; | The buy side of the orderbook for &#39;currency_pair&#39; is empty, therefore a market sell order cannot be placed. | | Maximum market sell amount at the moment is &#39;amount&#39; &#39;currency&#39;. Please use limit order instead. | Order amount exceeds the limit amount set for market sell orders. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | &lt;/details&gt; 

### Example

```javascript
import BitstampPublicApi from 'bitstamp_public_api';

let apiInstance = new BitstampPublicApi.OrdersApi();
let marketSymbol = "marketSymbol_example"; // String | 
let opts = {
  'buySellMarketOrderRequest': new BitstampPublicApi.BuySellMarketOrderRequest() // BuySellMarketOrderRequest | 
};
apiInstance.openMarketSellOrder(marketSymbol, opts, (error, data, response) => {
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
 **buySellMarketOrderRequest** | [**BuySellMarketOrderRequest**](BuySellMarketOrderRequest.md)|  | [optional] 

### Return type

[**OpenInstantBuyOrder200Response**](OpenInstantBuyOrder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: www-form-urlencoded
- **Accept**: application/json

