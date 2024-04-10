/**
 * Bitstamp Public API
 * # What is API? Bitstamp application programming interface (API) allows our clients to access and control their accounts, using custom written software.  # Response codes Response code is a key that can be appended to an API response as **response_code** (string). Additionally, also explanation may or may not be included as the **response_explanation** (string) key, which defines further explanation to what has gone wrong when processing a request.  Below is the list of all available response codes and it's explanations: | response_code | response_explanation (optional) | | ----------- | ----------- | | 400.001 | Unknown validation error. | | 400.002 | Request rejected due to exceeded rate limit. | | 400.003 | Trading for provided market is disabled. | | 400.004 | POST parameter(s) is missing from request. | | 400.005 | POST parameter(s) is missing from request: amount. | | 400.006 | POST parameter(s) is missing from request: price. | | 400.007 | POST parameter(s) is malformed. | | 400.008 | POST parameter(s) is malformed: client_order_id. | | 400.009 | Insufficient balance for provided user. | | 400.010 | POST parameter(s) is malformed: offset. | | 400.011 | POST parameter(s) is malformed: limit. | | 400.012 | POST parameter(s) is malformed: sort. | | 400.013 | POST parameter(s) is malformed: since_timestamp. | | 400.014 | POST parameter(s) is missing from request: order_id. | | 400.015 | POST parameter(s) is missing from request: client_order_id. | | 400.016 | POST parameter(s) is malformed: order_id. | | 400.017 | POST parameter(s) is malformed: client_cancel_id. | | 400.018 | GET parameters not allowed for this request. | | 400.019 | Provided client_order_id already exists. | | 400.020 | Provided order size is lower than minimum order value. | | 400.021 | Provided price is out of range. | | 400.022 | POST parameter(s) is missing from request: expire_time. | | 400.023 | POST parameter(s) is malformed: expire_time. | | 400.024 | Only one of optional parameters can be set. | | 400.025 | Both limit_price and any optional parameter cannot be set. | | 400.026 | POST parameter(s) is malformed: amount. | | 400.027 | Sell if executed price must be higher than buy price. | | 400.028 | Buy if executed price must be lower than sell price. | | 400.029 | 'stop_order_id' is None. | | 400.030 | 'stop_order_price' is None. | | 400.031 | 'expire_time' is None. | | 400.032 | 'expire_time' must be set in future date. | | 400.033 | 'expire_time' must be None. | | 400.034 | POST parameter(s) is malformed: until_timestamp. | | 400.035 | POST parameter(s) is missing from request: id. | | 400.036 | POST parameter(s) is malformed: id. | | 400.037 | Provided order size is too large. | | 400.038 | Provided order amount is too large. | | 400.039 | Provided order size is higher than maximum order value. | | 400.040 | Provided leverage differs from ones on open orders. | | 400.041 | POST parameter(s) is malformed: price. | | 400.042 | Position management mode already active | | 400.043 | No positions present | | 400.044 | POST parameter(s) is malformed: leverage. | | 400.045 | Open orders present. | | 400.046 | Provided order amount is too low. | | 403.001 | User verification failed. | | 403.002 | Trading is not allowed on lending account. | | 403.003 | Trading is not allowed on collateral account. | | 403.004 | Trading is blocked for user. | | 403.005 | Action not allowed at cross margin mode. | | 404.001 | Unknown not found error. | | 404.002 | Order not found for corresponding request. | | 404.003 | Currency pair not found for corresponding request. | | 404.004 | Trade account not found for provided API key. | | 404.005 | Order book not found. | | 404.006 | Currency not found for corresponding request. | | 404.007 | Market not found for corresponding request. | | 405.001 | GET method not allowed. | | 410.001 | Requested endpoint is deprecated. | | 500.001 | Unknown server error. | | 500.002 | One of Bitstamp internal services failed to process request. | | 500.003 | Unknown error while processing order. | | 500.004 | No sell orders for provided market. | | 500.005 | No buy orders for provided market. | | 500.006 | Cash sell order types are currently disabled. | | 500.007 | Error while serializing data. | | 500.008 | Margin option for provided market is disabled. | | 500.009 | Order book is currently unavailable. | | 500.010 | Instant trading for provided market is disabled. | | 500.011 | Market trading for provided market is disabled. | | 500.012 | Matching blocked for this order book. | | 500.013 | Unknown matching engine error. | | 500.014 | Cash order for provided market is disabled. | | 500.015 | Cannot place order. There are currently no orders for provided market. | | 500.016 | Timeout on matching engine. | | 500.017 | Order rejected by matching engine. | | 500.018 | No orders for provided market. | | 500.019 | Error at canceling orders | | 500.020 | Pre reserved orders present | | 500.021 | Post reserved orders present | | 500.022 | More than one position present | | 500.023 | Position management order not filled |  # Request limits As standard, all clients can make 400 requests per second. There is a default limit threshold of 10,000 requests per 10 minutes in place. The rate limits mentioned above can be increased upon request and the client entering a bespoke agreement with Bitstamp. For real time data please refer to the [**websocket API**](https://www.bitstamp.net/websocket/v2/).  ## Commercial Use of Bitstamp's Exchange Data Companies seeking to utilize Bitstamp's exchange data for their own commercial purposes are directed to contact partners@bitstamp.net to receive and sign a commercial use Data License Agreement.  Bitstamp allows the incorporation and redistribution of our exchange data for commercial purposes. This includes the right to create ratios, calculations, new original works, statistics, and similar, based on the exchange data.  # Authentication  All private API calls require authentication. For a successful authentication you need to provide the following authorization headers in your request:  ## Possible authentication errors <table> <thead><th>Code</th><th>Reason</th><th>Action</th></thead> <tbody> <tr><td><strong>API0001</strong></td><td>API key not found</td><td>Check your API key value.</td></tr> <tr><td><strong>API0002</strong></td><td>IP address not allowed</td><td>This IP address has no permission to use this API key.</td></tr> <tr><td><strong>API0003</strong></td><td>No permission found</td><td>API key doesn't have permission for calling this api endpoint.</td></tr> <tr><td><strong>API0004</strong></td><td>Invalid nonce</td><td>Check your nonce value. It must be different than last nonce used in the last 150 seconds.</td></tr> <tr><td><strong>API0005</strong></td><td>Invalid signature</td><td>Posted signature doesn't match with ours.</td></tr> <tr><td><strong>API0006</strong></td><td>Your account is frozen</td><td>Contact support to unfreeze your account.</td></tr> <tr><td><strong>API0008</strong></td><td>Authentication failed</td><td>Can't find customer with selected API key.</td></tr> <tr><td><strong>API0009</strong></td><td>Please update your profile with your FATCA information, before using API.</td><td>Check that you filled out the FATCA information form on your account.</td></tr> <tr><td><strong>API0010</strong></td><td>Invalid version</td><td>Check that you send \"v2\" in the version authorization header.</td></tr> <tr><td><strong>API0011</strong></td><td>Wrong API key format</td><td>Check that your API key string is correct.</td></tr> <tr><td><strong>API0012</strong></td><td>X-Auth header is required</td><td>X-Auth header is probably missing in your request.</td></tr> <tr><td><strong>API0013</strong></td><td>X-Auth-Signature header is required</td><td>X-Auth-Signature header is probably missing in your request.</td></tr> <tr><td><strong>API0014</strong></td><td>X-Auth-Nonce header is required</td><td>X-Auth-Nonce header is probably missing in your request.</td></tr> <tr><td><strong>API0015</strong></td><td>X-Auth-Timestamp header is required</td><td>X-Auth-Timestamp header is probably missing in your request.</td></tr> <tr><td><strong>API0016</strong></td><td>X-Auth-Version header is required</td><td>X-Auth-Version header is probably missing in your request.</td></tr> <tr><td><strong>API0017</strong></td><td>X-Auth-Timestamp header is out of boundaries</td><td>Timestamp you added in the header is either too old or too new. Check that timestamp is within 150 second timeframe.</td></tr> <tr><td><strong>API0018</strong></td><td>X-Auth-Timestamp header is invalid</td><td>Check the format of X-Auth-Timestamp header.</td></tr> <tr><td><strong>API0019</strong></td><td>Content-Type header is not accepted</td><td>Please specify the correct content type.</td></tr> <tr><td><strong>API0020</strong></td><td>Content-Type header should not be present</td><td>Please make sure you're not sending any body in the request.</td></tr> <tr><td><strong>API0021</strong></td><td>Please make sure url query string is not too long</td><td>Please make sure the total length of the url does not exceed 2000 characters.</td></tr> </tbody> </table> <SecurityDefinitions />  ## Authentication examples **Note:** if the request body is empty, the Content-Type header has to be removed both from the headers and from the signature  <div class=\"api__code mb48\">     <div class=\"api__code-header\">         <span>Python</span>         <span class=\"icon icon--code\"></span>     </div>  ```python import hashlib import hmac import time import requests import uuid import sys from urllib.parse import urlencode  api_key = 'api_key' API_SECRET = b'api_key_secret'  timestamp = str(int(round(time.time() * 1000))) nonce = str(uuid.uuid4()) content_type = 'application/x-www-form-urlencoded' payload = {'offset': '1'}  payload_string = urlencode(payload)  # '' (empty string) in message represents any query parameters or an empty string in case there are none message = 'BITSTAMP ' + api_key + \\     'POST' + \\     'www.bitstamp.net' + \\     '/api/v2/user_transactions/' + \\     '' + \\     content_type + \\     nonce + \\     timestamp + \\     'v2' + \\     payload_string message = message.encode('utf-8') signature = hmac.new(API_SECRET, msg=message, digestmod=hashlib.sha256).hexdigest() headers = {     'X-Auth': 'BITSTAMP ' + api_key,     'X-Auth-Signature': signature,     'X-Auth-Nonce': nonce,     'X-Auth-Timestamp': timestamp,     'X-Auth-Version': 'v2',     'Content-Type': content_type } r = requests.post(     'https://www.bitstamp.net/api/v2/user_transactions/',     headers=headers,     data=payload_string     ) if not r.status_code == 200:     raise Exception('Status code not 200')  string_to_sign = (nonce + timestamp + r.headers.get('Content-Type')).encode('utf-8') + r.content signature_check = hmac.new(API_SECRET, msg=string_to_sign, digestmod=hashlib.sha256).hexdigest() if not r.headers.get('X-Server-Auth-Signature') == signature_check:     raise Exception('Signatures do not match')  print(r.content)   ```  </div> <div class=\"api__code mb48\">     <div class=\"api__code-header\">         <span>Java</span>         <span class=\"icon icon--code\"></span>     </div>  ```java package com.example.AuthenticationExample;  import org.apache.commons.codec.binary.Hex;  import javax.crypto.Mac; import javax.crypto.spec.SecretKeySpec; import java.net.URI; import java.net.http.HttpClient; import java.net.http.HttpRequest; import java.net.http.HttpResponse; import java.util.UUID;  public class Authentication {     public static void main(String[] args) {         String apiKey = String.format(\"%s %s\", \"BITSTAMP\", \"api_key\");         String apiKeySecret = \"api_key_secret\";         String httpVerb = \"POST\";         String urlHost = \"www.bitstamp.net\";         String urlPath = \"/api/v2/user_transactions/\";         String urlQuery = \"\";         String timestamp = String.valueOf(System.currentTimeMillis());         String nonce = UUID.randomUUID().toString();         String contentType = \"application/x-www-form-urlencoded\";         String version = \"v2\";         String payloadString = \"offset=1\";         String signature = apiKey +             httpVerb +             urlHost +             urlPath +             urlQuery +             contentType +             nonce +             timestamp +             version +             payloadString;          try {             SecretKeySpec secretKey = new SecretKeySpec(apiKeySecret.getBytes(), \"HmacSHA256\");             Mac mac = Mac.getInstance(\"HmacSHA256\");             mac.init(secretKey);             byte[] rawHmac = mac.doFinal(signature.getBytes());             signature = new String(Hex.encodeHex(rawHmac)).toUpperCase();              HttpClient client = HttpClient.newHttpClient();             HttpRequest request = HttpRequest.newBuilder()                 .uri(URI.create(\"https://www.bitstamp.net/api/v2/user_transactions/\"))                 .POST(HttpRequest.BodyPublishers.ofString(payloadString))                 .setHeader(\"X-Auth\", apiKey)                 .setHeader(\"X-Auth-Signature\", signature)                 .setHeader(\"X-Auth-Nonce\", nonce)                 .setHeader(\"X-Auth-Timestamp\", timestamp)                 .setHeader(\"X-Auth-Version\", version)                 .setHeader(\"Content-Type\", contentType)                 .build();              HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());              if (response.statusCode() != 200) {                 throw new RuntimeException(\"Status code not 200\");             }              String serverSignature = response.headers().map().get(\"x-server-auth-signature\").get(0);             String responseContentType = response.headers().map().get(\"Content-Type\").get(0);             String stringToSign = nonce + timestamp + responseContentType + response.body();              mac.init(secretKey);             byte[] rawHmacServerCheck = mac.doFinal(stringToSign.getBytes());             String newSignature = new String(Hex.encodeHex(rawHmacServerCheck));              if (!newSignature.equals(serverSignature)) {                 throw new RuntimeException(\"Signatures do not match\");             }              System.out.println(response.body());          } catch (Exception e) {             throw new RuntimeException(e);         }     } }   ```  </div> <div class=\"api__code mb48\">     <div class=\"api__code-header\">         <span>C++</span>         <span class=\"icon icon--code\"></span>     </div>  ```cpp #include <curl/curl.h> #include <openssl/hmac.h> #include <uuid/uuid.h>  #include <iostream> #include <string> #include <chrono> #include <iomanip>  static size_t write_call_back(void *contents, size_t size, size_t nmemb, void *userp) {     ((std::string*)userp)->append((char*)contents, size * nmemb);     return size * nmemb; }  std::string b2a_hex(char *byte_arr, int n) {     const static std::string hex_codes = \"0123456789abcdef\";     std::string hex_string;     for ( int i = 0; i < n ; ++i ) {         unsigned char bin_value = byte_arr[i];         hex_string += hex_codes[( bin_value >> 4 ) & 0x0F];         hex_string += hex_codes[bin_value & 0x0F];     }     return hex_string; }  std::string url_encode(std::string data) {     std::string res = data;     CURL *curl = curl_easy_init();      if(curl) {         char *output = curl_easy_escape(curl, data.c_str(), data.length());         if(output) {             res = output;             curl_free(output);         }     }      return res; }   int main() {      const std::string api_key = \"api_key\";     const std::string api_secret = \"api_key_secret\";      std::chrono::milliseconds timestamp = std::chrono::duration_cast< std::chrono::milliseconds >(             std::chrono::system_clock::now().time_since_epoch()     );      uuid_t uuid;     uuid_string_t nonce;     uuid_generate(uuid);     uuid_unparse_lower(uuid, nonce);      std::string x_auth = \"BITSTAMP \" + api_key;     std::string x_auth_nonce = nonce;     std::string x_auth_timestamp = std::to_string(timestamp.count());     std::string x_auth_version = \"v2\";     std::string content_type = \"application/x-www-form-urlencoded\";     std::string payload = url_encode(\"{offset:1}\");      std::string http_method = \"POST\";     std::string url_host = \"www.bitstamp.net\";     std::string url_path = \"/api/v2/user_transactions/\";     std::string url_query = \"\";      std::string data_to_sign = \"\";     data_to_sign.append(x_auth);     data_to_sign.append(http_method);     data_to_sign.append(url_host);     data_to_sign.append(url_path);     data_to_sign.append(url_query);     data_to_sign.append(content_type);     data_to_sign.append(x_auth_nonce);     data_to_sign.append(x_auth_timestamp);     data_to_sign.append(x_auth_version);     data_to_sign.append(payload);      // calculate hmac signature     unsigned char* result;     unsigned int len = 20;     result = (unsigned char*)malloc(sizeof(char) * len);      HMAC_CTX ctx;     HMAC_CTX_init(&ctx);      HMAC_Init_ex(&ctx, api_secret.c_str(), api_secret.length(), EVP_sha256(), NULL);     HMAC_Update(&ctx, (unsigned char*)data_to_sign.c_str(), data_to_sign.length());     HMAC_Final(&ctx, result, &len);     HMAC_CTX_cleanup(&ctx);      std::string x_auth_signature = b2a_hex( (char *)result, 32 );     free(result);      // send request     CURL *curl;     CURLcode res;     std::string read_buffer;      curl = curl_easy_init();      if(curl) {          struct curl_slist *headers = NULL;         headers = curl_slist_append(headers, (\"X-Auth: \" + x_auth).c_str());         headers = curl_slist_append(headers, (\"X-Auth-Signature: \" + x_auth_signature).c_str());         headers = curl_slist_append(headers, (\"X-Auth-Nonce: \" + x_auth_nonce).c_str());         headers = curl_slist_append(headers, (\"X-Auth-Timestamp: \" + x_auth_timestamp).c_str());         headers = curl_slist_append(headers, (\"X-Auth-Version: \" + x_auth_version).c_str());         headers = curl_slist_append(headers, (\"Content-Type: \" + content_type).c_str());          std::string url = \"https://\" + url_host + url_path + url_query;          curl_easy_setopt(curl, CURLOPT_URL, url.c_str());         curl_easy_setopt(curl, CURLOPT_POSTFIELDS, payload.c_str());         curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);         curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_call_back);         curl_easy_setopt(curl, CURLOPT_WRITEDATA, &read_buffer);          res = curl_easy_perform(curl);          if(res != CURLE_OK) {             std::cout << \"curl_easy_perform() failed: \" << curl_easy_strerror(res) << std::endl;         }          std::cout << \"curl_easy_perform() response: \" << read_buffer << std::endl;          curl_easy_cleanup(curl);      }      return 0;  }   ```  </div>  # Changelog  ### 2023-10-12 * New API changes due to compliance with Travel Rule requirements:   * Travel Rule endpoints: https://www.bitstamp.net/api/#tag/Travel-rule-public   * Changes to all crypto withdrawals to provide optional Travel Rule data (this data will become mandatory in the near future which will be a breaking change!). * All endpoints for creating new orders have an optional **client_order_id field**. If submitted, up until now client_order_id had to be unique. We are deprecating the checking of duplicate **client_order_id** and will allow duplicates beginning November 2023. If you currently rely on us checking for duplicates and us rejecting those, this change may cause you to submit multiple orders so please make the necessary changes to not rely on that check. * New API endpoints that enable you to access full Earn (Staking and Lending) functionality.  ### 2023-09-29 * Added **revoke_all_api_keys** as a kill switch functionality to terminate all API connectivity:   * `POST /api/v2/revoke_all_api_keys/`  ### 2023-09-25 * Updated GTD order description by noting that the orders expire at midnight:   * `POST /api/v2/buy/{market_symbol}/`   * `POST /api/v2/sell/{market_symbol}/`  ### 2023-09-22 * Extended error responses for `/api/v2/cancel_order`:   * `POST /api/v2/cancel_order/`  ### 2023-08-31 * Added market property with the goal of deprecating **currency_pair** long term:   * `GET /api/v2/fees/trading/` * Added datetime and type properties to order status endpoint:   * `GET /api/v2/order_status/`  ### 2023-07-05 * Introduced a new side field (0 - buy; 1 - sell) to all Ticker endpoints:   * `GET /api/v2/ticker/`   * `GET /api/v2/ticker/{currency_pair}/`   * `GET /api/v2/ticker_hour/`  ### 2023-06-29 * Updated **destination_tag** field description for Ripple IOU address endpoint:   * `POST /api/v2/ripple_address/`  ### 2023-04-07 * Introduced a new Currencies endpoint:   * `GET /api/v2/currencies/`: Get listed currencies info. 
 *
 * The version of the OpenAPI document: v2
 * Contact: support@bitstamp.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BuyInstantOrderRequest from '../model/BuyInstantOrderRequest';
import BuySellLimitOrderRequest from '../model/BuySellLimitOrderRequest';
import BuySellMarketOrderRequest from '../model/BuySellMarketOrderRequest';
import CancelAllOrdersResponse from '../model/CancelAllOrdersResponse';
import CancelOrder200Response from '../model/CancelOrder200Response';
import CancelOrderRequest from '../model/CancelOrderRequest';
import GetOrderStatus200Response from '../model/GetOrderStatus200Response';
import OpenInstantBuyOrder200Response from '../model/OpenInstantBuyOrder200Response';
import OpenOrdersAllResponse from '../model/OpenOrdersAllResponse';
import OpenOrdersPairResponse from '../model/OpenOrdersPairResponse';
import OrderStatusRequest from '../model/OrderStatusRequest';
import SellInstantOrderRequest from '../model/SellInstantOrderRequest';
import TradingPair from '../model/TradingPair';

/**
* Orders service.
* @module api/OrdersApi
* @version v2
*/
export default class OrdersApi {

    /**
    * Constructs a new OrdersApi. 
    * @alias module:api/OrdersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the cancelAllOrders operation.
     * @callback module:api/OrdersApi~cancelAllOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelAllOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel all orders
     * Cancel all open orders. This call will be executed on the account (Sub or Main), to which the used API key is bound to.
     * @param {module:api/OrdersApi~cancelAllOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelAllOrdersResponse}
     */
    cancelAllOrders(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CancelAllOrdersResponse;
      return this.apiClient.callApi(
        '/api/v2/cancel_all_orders/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelOrder operation.
     * @callback module:api/OrdersApi~cancelOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel order
     * Cancel an order. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing id POST param. | Id parameter missing. | | Invalid id POST param. | Id parameter must be a positive integer. | | Invalid client_cancel_id POST param. | client_cancel_id parameter can contain at most 180 characters. | | Order not found | Order with that id was not found in orderbook. Order might already be filled or canceled. Please check order status. | | Order cancellation failed due to internal error. Please try again. | Please retry cancelling order. | | Order cancelattion failed due to trade halt. | You can cancel order after trade halt is lifted. | </details> 
     * @param {Object} opts Optional parameters
     * @param {module:model/CancelOrderRequest} [cancelOrderRequest] 
     * @param {module:api/OrdersApi~cancelOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelOrder200Response}
     */
    cancelOrder(opts, callback) {
      opts = opts || {};
      let postBody = opts['cancelOrderRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = CancelOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/cancel_order/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelOrdersForMarket operation.
     * @callback module:api/OrdersApi~cancelOrdersForMarketCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelAllOrdersResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel all orders for market
     * Cancel all open orders for a market. This call will be executed on the account (Sub or Main), to which the used API key is bound to.
     * @param {String} marketSymbol 
     * @param {module:api/OrdersApi~cancelOrdersForMarketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelAllOrdersResponse}
     */
    cancelOrdersForMarket(marketSymbol, callback) {
      let postBody = null;
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling cancelOrdersForMarket");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CancelAllOrdersResponse;
      return this.apiClient.callApi(
        '/api/v2/cancel_all_orders/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllOpenOrders operation.
     * @callback module:api/OrdersApi~getAllOpenOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OpenOrdersAllResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open orders
     * Return user's open orders. This API call is cached for 10 seconds. This call will be executed on the account (Sub or Main), to which the used API key is bound to.
     * @param {module:api/OrdersApi~getAllOpenOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OpenOrdersAllResponse>}
     */
    getAllOpenOrders(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [OpenOrdersAllResponse];
      return this.apiClient.callApi(
        '/api/v2/open_orders/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOpenOrdersForMarket operation.
     * @callback module:api/OrdersApi~getOpenOrdersForMarketCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OpenOrdersPairResponse>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Open orders for market
     * Return user's open orders for market. This API call is cached for 10 seconds. This call will be executed on the account (Sub or Main), to which the used API key is bound to.
     * @param {String} marketSymbol 
     * @param {module:api/OrdersApi~getOpenOrdersForMarketCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OpenOrdersPairResponse>}
     */
    getOpenOrdersForMarket(marketSymbol, callback) {
      let postBody = null;
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling getOpenOrdersForMarket");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [OpenOrdersPairResponse];
      return this.apiClient.callApi(
        '/api/v2/open_orders/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrderStatus operation.
     * @callback module:api/OrdersApi~getOrderStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetOrderStatus200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Order status
     * Returns order status. This call will be executed on the account (Sub or Main), to which the used API key is bound to. Order can be fetched by using either id or client_order_id parameter. For closed orders, this call only returns information for the last 30 days. 'Order not found' error will be returned for orders outside this time range.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing id POST param | Id parameter missing. | | Invalid order id | Order id parameter can only be number. | | Order not found. | Order with that id was not found in our system. | </details> 
     * @param {Object} opts Optional parameters
     * @param {module:model/OrderStatusRequest} [orderStatusRequest] 
     * @param {module:api/OrdersApi~getOrderStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetOrderStatus200Response}
     */
    getOrderStatus(opts, callback) {
      opts = opts || {};
      let postBody = opts['orderStatusRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetOrderStatus200Response;
      return this.apiClient.callApi(
        '/api/v2/order_status/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTradingMarkets operation.
     * @callback module:api/OrdersApi~getUserTradingMarketsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TradingPair>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trading markets
     * Returns all markets that can be traded on selected account. 
     * @param {module:api/OrdersApi~getUserTradingMarketsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TradingPair>}
     */
    getUserTradingMarkets(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TradingPair];
      return this.apiClient.callApi(
        '/api/v2/my_markets/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openInstantBuyOrder operation.
     * @callback module:api/OrdersApi~openInstantBuyOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenInstantBuyOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Buy instant order
     * Open a buy instant order. By placing an instant order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | 'parameter': Enter a number. Use \".\" as a decimal point. | 'parameter' can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only buy 'amount' 'currency'. Check your account balance for details. | Account has less 'available_currency' than is required to make this order. | | Maximum market buy amount at the moment is 'amount' 'currency'. Please use limit order instead. | Order amount exceeds the limit amount set for market buy orders. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | </details> 
     * @param {String} marketSymbol 
     * @param {Object} opts Optional parameters
     * @param {module:model/BuyInstantOrderRequest} [buyInstantOrderRequest] 
     * @param {module:api/OrdersApi~openInstantBuyOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenInstantBuyOrder200Response}
     */
    openInstantBuyOrder(marketSymbol, opts, callback) {
      opts = opts || {};
      let postBody = opts['buyInstantOrderRequest'];
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling openInstantBuyOrder");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OpenInstantBuyOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/buy/instant/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openInstantSellOrder operation.
     * @callback module:api/OrdersApi~openInstantSellOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenInstantBuyOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sell instant order
     * Open an instant sell order. By placing an instant order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | 'parameter': Enter a number. Use \".\" as a decimal point. | 'parameter' can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only sell 'amount' 'currency'. Check your account balance for details. | Account has less 'available_currency' than is required to make this order. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | </details> 
     * @param {String} marketSymbol 
     * @param {Object} opts Optional parameters
     * @param {module:model/SellInstantOrderRequest} [sellInstantOrderRequest] 
     * @param {module:api/OrdersApi~openInstantSellOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenInstantBuyOrder200Response}
     */
    openInstantSellOrder(marketSymbol, opts, callback) {
      opts = opts || {};
      let postBody = opts['sellInstantOrderRequest'];
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling openInstantSellOrder");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OpenInstantBuyOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/sell/instant/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openLimitBuyOrder operation.
     * @callback module:api/OrdersApi~openLimitBuyOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenInstantBuyOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Buy limit order
     * Open a buy limit order. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | 'parameter': Enter a number. Use \".\" as a decimal point. | 'parameter' can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | Price is more than 20% above market price. | Order price must not exceed 20% of current price. | | You need 'order_value' USD to open that order. You have only 'available_fiat' USD available. Check your account balance for details. | Account has less 'available_fiat' than is required to make this order. | | Sell if executed price must be higher than buy price. | 'limit_price' must be larger than 'price' parameter. | | Both limit_price and daily_order cannot be set. | Only one of those parameters can be set. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | </details> 
     * @param {String} marketSymbol 
     * @param {Object} opts Optional parameters
     * @param {module:model/BuySellLimitOrderRequest} [buySellLimitOrderRequest] 
     * @param {module:api/OrdersApi~openLimitBuyOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenInstantBuyOrder200Response}
     */
    openLimitBuyOrder(marketSymbol, opts, callback) {
      opts = opts || {};
      let postBody = opts['buySellLimitOrderRequest'];
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling openLimitBuyOrder");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OpenInstantBuyOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/buy/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openLimitSellOrder operation.
     * @callback module:api/OrdersApi~openLimitSellOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenInstantBuyOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sell limit order
     * Open a sell limit order. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | 'parameter': Enter a number. Use \".\" as a decimal point. | 'parameter' can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | Price is more than 20% below market price. | Order price must not exceed 20% of current price. | | You have only 'available_btc' BTC available. Check your account balance for details. | Account has less 'available_btc' than is required to make this order. | | Buy if executed price must be lower than sell price. | 'limit_price' must be lower than 'price' parameter. | | Both limit_price and daily_order cannot be set. | Only one of those parameters can be set. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | </details> 
     * @param {String} marketSymbol 
     * @param {Object} opts Optional parameters
     * @param {module:model/BuySellLimitOrderRequest} [buySellLimitOrderRequest] 
     * @param {module:api/OrdersApi~openLimitSellOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenInstantBuyOrder200Response}
     */
    openLimitSellOrder(marketSymbol, opts, callback) {
      opts = opts || {};
      let postBody = opts['buySellLimitOrderRequest'];
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling openLimitSellOrder");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OpenInstantBuyOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/sell/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openMarketBuyOrder operation.
     * @callback module:api/OrdersApi~openMarketBuyOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenInstantBuyOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Buy market order
     * Open a buy market order. By placing a market order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | 'parameter': Enter a number. Use \".\" as a decimal point. | 'parameter' can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only buy 'amount' 'currency'. Check your account balance for details. | Account has less 'available_currency' than is required to make this order. | | Maximum market buy amount at the moment is 'amount' 'currency'. Please use limit order instead. | Order amount exceeds the limit amount set for market buy orders. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | </details> 
     * @param {String} marketSymbol 
     * @param {Object} opts Optional parameters
     * @param {module:model/BuySellMarketOrderRequest} [buySellMarketOrderRequest] 
     * @param {module:api/OrdersApi~openMarketBuyOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenInstantBuyOrder200Response}
     */
    openMarketBuyOrder(marketSymbol, opts, callback) {
      opts = opts || {};
      let postBody = opts['buySellMarketOrderRequest'];
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling openMarketBuyOrder");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OpenInstantBuyOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/buy/market/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the openMarketSellOrder operation.
     * @callback module:api/OrdersApi~openMarketSellOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenInstantBuyOrder200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sell market order
     * Open a sell market order. By placing a market order you acknowledge that the execution of your order depends on the market conditions and that these conditions may be subject to sudden changes that cannot be foreseen. This call will be executed on the account (Sub or Main), to which the used API key is bound to.  <details> <summary style='cursor: pointer'><strong>Possible errors</strong></summary>  | Reason | Action | | ----------- | ----------- | | Missing amount and/or price POST parameters | Missing one or both parameters. | | 'parameter': Enter a number. Use \".\" as a decimal point. | 'parameter' can only be number. | | Minimum order size is 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | Order value must be at least 10 USD / 10 EUR / 10 GBP / 10 USDT / 10 USDC / 10 PAX / 10 GUSD / 0.0002 BTC / 0.002 ETH | | You can only sell 'amount' 'currency'. Check your account balance for details. | Account has less 'available_currency' than is required to make this order. | | No buy orders for currency pair 'currency_pair' | The buy side of the orderbook for 'currency_pair' is empty, therefore a market sell order cannot be placed. | | Maximum market sell amount at the moment is 'amount' 'currency'. Please use limit order instead. | Order amount exceeds the limit amount set for market sell orders. | | Order could not be placed. | Order could not be placed (perhaps due to internal error or trade halt). Please retry placing order. | </details> 
     * @param {String} marketSymbol 
     * @param {Object} opts Optional parameters
     * @param {module:model/BuySellMarketOrderRequest} [buySellMarketOrderRequest] 
     * @param {module:api/OrdersApi~openMarketSellOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenInstantBuyOrder200Response}
     */
    openMarketSellOrder(marketSymbol, opts, callback) {
      opts = opts || {};
      let postBody = opts['buySellMarketOrderRequest'];
      // verify the required parameter 'marketSymbol' is set
      if (marketSymbol === undefined || marketSymbol === null) {
        throw new Error("Missing the required parameter 'marketSymbol' when calling openMarketSellOrder");
      }

      let pathParams = {
        'market_symbol': marketSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OpenInstantBuyOrder200Response;
      return this.apiClient.callApi(
        '/api/v2/sell/market/{market_symbol}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
