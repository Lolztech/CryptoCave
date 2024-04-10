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


import ApiClient from './ApiClient';
import AccountBalancesResponse from './model/AccountBalancesResponse';
import BankWithdrawalStatusRequest from './model/BankWithdrawalStatusRequest';
import BankWithdrawalStatusResponse from './model/BankWithdrawalStatusResponse';
import BuyInstantOrderRequest from './model/BuyInstantOrderRequest';
import BuySellLimitOrderRequest from './model/BuySellLimitOrderRequest';
import BuySellMarketOrderRequest from './model/BuySellMarketOrderRequest';
import BuySellOrderResponse from './model/BuySellOrderResponse';
import CancelAllOrdersResponse from './model/CancelAllOrdersResponse';
import CancelBankOrCryptoWithdrawalRequest from './model/CancelBankOrCryptoWithdrawalRequest';
import CancelBankWithdrawalResponse from './model/CancelBankWithdrawalResponse';
import CancelOrder200Response from './model/CancelOrder200Response';
import CancelOrderRequest from './model/CancelOrderRequest';
import CancelOrderResponse from './model/CancelOrderResponse';
import CancelWithdrawal200Response from './model/CancelWithdrawal200Response';
import ContactSchema from './model/ContactSchema';
import CorporateInfo from './model/CorporateInfo';
import CryptoTransaction from './model/CryptoTransaction';
import CryptoTransactionsRequest from './model/CryptoTransactionsRequest';
import CryptoTransactionsResponse from './model/CryptoTransactionsResponse';
import CryptoWithdrawalRequest from './model/CryptoWithdrawalRequest';
import CryptoWithdrawalResponse from './model/CryptoWithdrawalResponse';
import CurrencySchema from './model/CurrencySchema';
import DepositAddressRequest from './model/DepositAddressRequest';
import DepositAddressResponse from './model/DepositAddressResponse';
import EarnSubscriptionSchema from './model/EarnSubscriptionSchema';
import EarnSubscriptionSettingSchema from './model/EarnSubscriptionSettingSchema';
import EarnSubscriptionsSchema from './model/EarnSubscriptionsSchema';
import EarnTransactionSchema from './model/EarnTransactionSchema';
import ErrorResponse from './model/ErrorResponse';
import ErrorSchema from './model/ErrorSchema';
import EurUsdConversionRateResponse from './model/EurUsdConversionRateResponse';
import Fee from './model/Fee';
import FeeTradingResponse from './model/FeeTradingResponse';
import FeeWithdrawalRequest from './model/FeeWithdrawalRequest';
import FeeWithdrawalResponse from './model/FeeWithdrawalResponse';
import GetCryptoUserTransactions200Response from './model/GetCryptoUserTransactions200Response';
import GetFiatWithdrawalStatus200Response from './model/GetFiatWithdrawalStatus200Response';
import GetLiquidationAddressTransactions200Response from './model/GetLiquidationAddressTransactions200Response';
import GetOHLCData200Response from './model/GetOHLCData200Response';
import GetOrderBook200Response from './model/GetOrderBook200Response';
import GetOrderStatus200Response from './model/GetOrderStatus200Response';
import GetRippleIOUDepositAddress200Response from './model/GetRippleIOUDepositAddress200Response';
import GetUnconfirmedBTCDeposits200Response from './model/GetUnconfirmedBTCDeposits200Response';
import GetUserTransactions200Response from './model/GetUserTransactions200Response';
import GetWithdrawalRequests200Response from './model/GetWithdrawalRequests200Response';
import InstantConvertAddressInfoRequest from './model/InstantConvertAddressInfoRequest';
import InstantConvertAddressInfoResponse from './model/InstantConvertAddressInfoResponse';
import NewInstantConvertAddressRequest from './model/NewInstantConvertAddressRequest';
import NewInstantConvertAddressResponse from './model/NewInstantConvertAddressResponse';
import OHLCData from './model/OHLCData';
import OHLCDataResponseSchema from './model/OHLCDataResponseSchema';
import OpenBankWithdrawalRequest from './model/OpenBankWithdrawalRequest';
import OpenBankWithdrawalResponse from './model/OpenBankWithdrawalResponse';
import OpenInstantBuyOrder200Response from './model/OpenInstantBuyOrder200Response';
import OpenOrdersAllResponse from './model/OpenOrdersAllResponse';
import OpenOrdersPairResponse from './model/OpenOrdersPairResponse';
import Order from './model/Order';
import OrderBookResponse from './model/OrderBookResponse';
import OrderStatusRequest from './model/OrderStatusRequest';
import OrderStatusResponse from './model/OrderStatusResponse';
import OrderTransaction from './model/OrderTransaction';
import PaginationSchema from './model/PaginationSchema';
import RequestCryptoWithdrawal200Response from './model/RequestCryptoWithdrawal200Response';
import RequestFiatWithdrawal200Response from './model/RequestFiatWithdrawal200Response';
import RequestNewLiquidationAddress200Response from './model/RequestNewLiquidationAddress200Response';
import RequestRippleIOUWithdrawal200Response from './model/RequestRippleIOUWithdrawal200Response';
import RetailInfo from './model/RetailInfo';
import RevokedAPIKeySchema from './model/RevokedAPIKeySchema';
import RippleIOUDepositAddressResponse from './model/RippleIOUDepositAddressResponse';
import RippleIOUWithdrawalRequest from './model/RippleIOUWithdrawalRequest';
import RippleIOUWithdrawalResponse from './model/RippleIOUWithdrawalResponse';
import SellInstantOrderRequest from './model/SellInstantOrderRequest';
import SimpleErrorResponse from './model/SimpleErrorResponse';
import TickerHourResponse from './model/TickerHourResponse';
import TickerResponse from './model/TickerResponse';
import TickerWithPairResponse from './model/TickerWithPairResponse';
import Trade from './model/Trade';
import TradingPair from './model/TradingPair';
import TradingPairsInfoResponse from './model/TradingPairsInfoResponse';
import Transaction from './model/Transaction';
import TransactionsResponse from './model/TransactionsResponse';
import TransferFromMainToSub200Response from './model/TransferFromMainToSub200Response';
import TransferToFromMainRequest from './model/TransferToFromMainRequest';
import TransferToFromMainResponse from './model/TransferToFromMainResponse';
import UserTransactionsRequest from './model/UserTransactionsRequest';
import UserTransactionsResponse from './model/UserTransactionsResponse';
import VaspList200Response from './model/VaspList200Response';
import VaspSchema from './model/VaspSchema';
import WebsocketsTokenResponse from './model/WebsocketsTokenResponse';
import WithdrawalRequestsRequest from './model/WithdrawalRequestsRequest';
import WithdrawalRequestsResponse from './model/WithdrawalRequestsResponse';
import AccountBalancesApi from './api/AccountBalancesApi';
import DepositsApi from './api/DepositsApi';
import EarnApi from './api/EarnApi';
import FeesApi from './api/FeesApi';
import InstantConvertApi from './api/InstantConvertApi';
import MarketInfoApi from './api/MarketInfoApi';
import OrderBookApi from './api/OrderBookApi';
import OrdersApi from './api/OrdersApi';
import SecurityApi from './api/SecurityApi';
import SubAccountApi from './api/SubAccountApi';
import TickersApi from './api/TickersApi';
import TransactionsPrivateApi from './api/TransactionsPrivateApi';
import TransactionsPublicApi from './api/TransactionsPublicApi';
import TravelRulePrivateApi from './api/TravelRulePrivateApi';
import TravelRulePublicApi from './api/TravelRulePublicApi';
import WebsocketApi from './api/WebsocketApi';
import WithdrawalsApi from './api/WithdrawalsApi';


/**
* # What is API? Bitstamp application programming interface (API) allows our clients to access and control their accounts, using custom written software.  # Response codes Response code is a key that can be appended to an API response as **response_code** (string). Additionally, also explanation may or may not be included as the **response_explanation** (string) key, which defines further explanation to what has gone wrong when processing a request.  Below is the list of all available response codes and it&#39;s explanations: | response_code | response_explanation (optional) | | ----------- | ----------- | | 400.001 | Unknown validation error. | | 400.002 | Request rejected due to exceeded rate limit. | | 400.003 | Trading for provided market is disabled. | | 400.004 | POST parameter(s) is missing from request. | | 400.005 | POST parameter(s) is missing from request: amount. | | 400.006 | POST parameter(s) is missing from request: price. | | 400.007 | POST parameter(s) is malformed. | | 400.008 | POST parameter(s) is malformed: client_order_id. | | 400.009 | Insufficient balance for provided user. | | 400.010 | POST parameter(s) is malformed: offset. | | 400.011 | POST parameter(s) is malformed: limit. | | 400.012 | POST parameter(s) is malformed: sort. | | 400.013 | POST parameter(s) is malformed: since_timestamp. | | 400.014 | POST parameter(s) is missing from request: order_id. | | 400.015 | POST parameter(s) is missing from request: client_order_id. | | 400.016 | POST parameter(s) is malformed: order_id. | | 400.017 | POST parameter(s) is malformed: client_cancel_id. | | 400.018 | GET parameters not allowed for this request. | | 400.019 | Provided client_order_id already exists. | | 400.020 | Provided order size is lower than minimum order value. | | 400.021 | Provided price is out of range. | | 400.022 | POST parameter(s) is missing from request: expire_time. | | 400.023 | POST parameter(s) is malformed: expire_time. | | 400.024 | Only one of optional parameters can be set. | | 400.025 | Both limit_price and any optional parameter cannot be set. | | 400.026 | POST parameter(s) is malformed: amount. | | 400.027 | Sell if executed price must be higher than buy price. | | 400.028 | Buy if executed price must be lower than sell price. | | 400.029 | &#39;stop_order_id&#39; is None. | | 400.030 | &#39;stop_order_price&#39; is None. | | 400.031 | &#39;expire_time&#39; is None. | | 400.032 | &#39;expire_time&#39; must be set in future date. | | 400.033 | &#39;expire_time&#39; must be None. | | 400.034 | POST parameter(s) is malformed: until_timestamp. | | 400.035 | POST parameter(s) is missing from request: id. | | 400.036 | POST parameter(s) is malformed: id. | | 400.037 | Provided order size is too large. | | 400.038 | Provided order amount is too large. | | 400.039 | Provided order size is higher than maximum order value. | | 400.040 | Provided leverage differs from ones on open orders. | | 400.041 | POST parameter(s) is malformed: price. | | 400.042 | Position management mode already active | | 400.043 | No positions present | | 400.044 | POST parameter(s) is malformed: leverage. | | 400.045 | Open orders present. | | 400.046 | Provided order amount is too low. | | 403.001 | User verification failed. | | 403.002 | Trading is not allowed on lending account. | | 403.003 | Trading is not allowed on collateral account. | | 403.004 | Trading is blocked for user. | | 403.005 | Action not allowed at cross margin mode. | | 404.001 | Unknown not found error. | | 404.002 | Order not found for corresponding request. | | 404.003 | Currency pair not found for corresponding request. | | 404.004 | Trade account not found for provided API key. | | 404.005 | Order book not found. | | 404.006 | Currency not found for corresponding request. | | 404.007 | Market not found for corresponding request. | | 405.001 | GET method not allowed. | | 410.001 | Requested endpoint is deprecated. | | 500.001 | Unknown server error. | | 500.002 | One of Bitstamp internal services failed to process request. | | 500.003 | Unknown error while processing order. | | 500.004 | No sell orders for provided market. | | 500.005 | No buy orders for provided market. | | 500.006 | Cash sell order types are currently disabled. | | 500.007 | Error while serializing data. | | 500.008 | Margin option for provided market is disabled. | | 500.009 | Order book is currently unavailable. | | 500.010 | Instant trading for provided market is disabled. | | 500.011 | Market trading for provided market is disabled. | | 500.012 | Matching blocked for this order book. | | 500.013 | Unknown matching engine error. | | 500.014 | Cash order for provided market is disabled. | | 500.015 | Cannot place order. There are currently no orders for provided market. | | 500.016 | Timeout on matching engine. | | 500.017 | Order rejected by matching engine. | | 500.018 | No orders for provided market. | | 500.019 | Error at canceling orders | | 500.020 | Pre reserved orders present | | 500.021 | Post reserved orders present | | 500.022 | More than one position present | | 500.023 | Position management order not filled |  # Request limits As standard, all clients can make 400 requests per second. There is a default limit threshold of 10,000 requests per 10 minutes in place. The rate limits mentioned above can be increased upon request and the client entering a bespoke agreement with Bitstamp. For real time data please refer to the [**websocket API**](https://www.bitstamp.net/websocket/v2/).  ## Commercial Use of Bitstamp&#39;s Exchange Data Companies seeking to utilize Bitstamp&#39;s exchange data for their own commercial purposes are directed to contact partners@bitstamp.net to receive and sign a commercial use Data License Agreement.  Bitstamp allows the incorporation and redistribution of our exchange data for commercial purposes. This includes the right to create ratios, calculations, new original works, statistics, and similar, based on the exchange data.  # Authentication  All private API calls require authentication. For a successful authentication you need to provide the following authorization headers in your request:  ## Possible authentication errors &lt;table&gt; &lt;thead&gt;&lt;th&gt;Code&lt;/th&gt;&lt;th&gt;Reason&lt;/th&gt;&lt;th&gt;Action&lt;/th&gt;&lt;/thead&gt; &lt;tbody&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0001&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;API key not found&lt;/td&gt;&lt;td&gt;Check your API key value.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0002&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;IP address not allowed&lt;/td&gt;&lt;td&gt;This IP address has no permission to use this API key.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0003&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;No permission found&lt;/td&gt;&lt;td&gt;API key doesn&#39;t have permission for calling this api endpoint.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0004&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Invalid nonce&lt;/td&gt;&lt;td&gt;Check your nonce value. It must be different than last nonce used in the last 150 seconds.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0005&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Invalid signature&lt;/td&gt;&lt;td&gt;Posted signature doesn&#39;t match with ours.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0006&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Your account is frozen&lt;/td&gt;&lt;td&gt;Contact support to unfreeze your account.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0008&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Authentication failed&lt;/td&gt;&lt;td&gt;Can&#39;t find customer with selected API key.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0009&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Please update your profile with your FATCA information, before using API.&lt;/td&gt;&lt;td&gt;Check that you filled out the FATCA information form on your account.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0010&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Invalid version&lt;/td&gt;&lt;td&gt;Check that you send \&quot;v2\&quot; in the version authorization header.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0011&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Wrong API key format&lt;/td&gt;&lt;td&gt;Check that your API key string is correct.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0012&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth header is required&lt;/td&gt;&lt;td&gt;X-Auth header is probably missing in your request.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0013&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth-Signature header is required&lt;/td&gt;&lt;td&gt;X-Auth-Signature header is probably missing in your request.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0014&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth-Nonce header is required&lt;/td&gt;&lt;td&gt;X-Auth-Nonce header is probably missing in your request.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0015&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth-Timestamp header is required&lt;/td&gt;&lt;td&gt;X-Auth-Timestamp header is probably missing in your request.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0016&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth-Version header is required&lt;/td&gt;&lt;td&gt;X-Auth-Version header is probably missing in your request.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0017&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth-Timestamp header is out of boundaries&lt;/td&gt;&lt;td&gt;Timestamp you added in the header is either too old or too new. Check that timestamp is within 150 second timeframe.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0018&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;X-Auth-Timestamp header is invalid&lt;/td&gt;&lt;td&gt;Check the format of X-Auth-Timestamp header.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0019&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Content-Type header is not accepted&lt;/td&gt;&lt;td&gt;Please specify the correct content type.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0020&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Content-Type header should not be present&lt;/td&gt;&lt;td&gt;Please make sure you&#39;re not sending any body in the request.&lt;/td&gt;&lt;/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;strong&gt;API0021&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Please make sure url query string is not too long&lt;/td&gt;&lt;td&gt;Please make sure the total length of the url does not exceed 2000 characters.&lt;/td&gt;&lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;SecurityDefinitions /&gt;  ## Authentication examples **Note:** if the request body is empty, the Content-Type header has to be removed both from the headers and from the signature  &lt;div class&#x3D;\&quot;api__code mb48\&quot;&gt;     &lt;div class&#x3D;\&quot;api__code-header\&quot;&gt;         &lt;span&gt;Python&lt;/span&gt;         &lt;span class&#x3D;\&quot;icon icon--code\&quot;&gt;&lt;/span&gt;     &lt;/div&gt;  &#x60;&#x60;&#x60;python import hashlib import hmac import time import requests import uuid import sys from urllib.parse import urlencode  api_key &#x3D; &#39;api_key&#39; API_SECRET &#x3D; b&#39;api_key_secret&#39;  timestamp &#x3D; str(int(round(time.time() * 1000))) nonce &#x3D; str(uuid.uuid4()) content_type &#x3D; &#39;application/x-www-form-urlencoded&#39; payload &#x3D; {&#39;offset&#39;: &#39;1&#39;}  payload_string &#x3D; urlencode(payload)  # &#39;&#39; (empty string) in message represents any query parameters or an empty string in case there are none message &#x3D; &#39;BITSTAMP &#39; + api_key + \\     &#39;POST&#39; + \\     &#39;www.bitstamp.net&#39; + \\     &#39;/api/v2/user_transactions/&#39; + \\     &#39;&#39; + \\     content_type + \\     nonce + \\     timestamp + \\     &#39;v2&#39; + \\     payload_string message &#x3D; message.encode(&#39;utf-8&#39;) signature &#x3D; hmac.new(API_SECRET, msg&#x3D;message, digestmod&#x3D;hashlib.sha256).hexdigest() headers &#x3D; {     &#39;X-Auth&#39;: &#39;BITSTAMP &#39; + api_key,     &#39;X-Auth-Signature&#39;: signature,     &#39;X-Auth-Nonce&#39;: nonce,     &#39;X-Auth-Timestamp&#39;: timestamp,     &#39;X-Auth-Version&#39;: &#39;v2&#39;,     &#39;Content-Type&#39;: content_type } r &#x3D; requests.post(     &#39;https://www.bitstamp.net/api/v2/user_transactions/&#39;,     headers&#x3D;headers,     data&#x3D;payload_string     ) if not r.status_code &#x3D;&#x3D; 200:     raise Exception(&#39;Status code not 200&#39;)  string_to_sign &#x3D; (nonce + timestamp + r.headers.get(&#39;Content-Type&#39;)).encode(&#39;utf-8&#39;) + r.content signature_check &#x3D; hmac.new(API_SECRET, msg&#x3D;string_to_sign, digestmod&#x3D;hashlib.sha256).hexdigest() if not r.headers.get(&#39;X-Server-Auth-Signature&#39;) &#x3D;&#x3D; signature_check:     raise Exception(&#39;Signatures do not match&#39;)  print(r.content)   &#x60;&#x60;&#x60;  &lt;/div&gt; &lt;div class&#x3D;\&quot;api__code mb48\&quot;&gt;     &lt;div class&#x3D;\&quot;api__code-header\&quot;&gt;         &lt;span&gt;Java&lt;/span&gt;         &lt;span class&#x3D;\&quot;icon icon--code\&quot;&gt;&lt;/span&gt;     &lt;/div&gt;  &#x60;&#x60;&#x60;java package com.example.AuthenticationExample;  import org.apache.commons.codec.binary.Hex;  import javax.crypto.Mac; import javax.crypto.spec.SecretKeySpec; import java.net.URI; import java.net.http.HttpClient; import java.net.http.HttpRequest; import java.net.http.HttpResponse; import java.util.UUID;  public class Authentication {     public static void main(String[] args) {         String apiKey &#x3D; String.format(\&quot;%s %s\&quot;, \&quot;BITSTAMP\&quot;, \&quot;api_key\&quot;);         String apiKeySecret &#x3D; \&quot;api_key_secret\&quot;;         String httpVerb &#x3D; \&quot;POST\&quot;;         String urlHost &#x3D; \&quot;www.bitstamp.net\&quot;;         String urlPath &#x3D; \&quot;/api/v2/user_transactions/\&quot;;         String urlQuery &#x3D; \&quot;\&quot;;         String timestamp &#x3D; String.valueOf(System.currentTimeMillis());         String nonce &#x3D; UUID.randomUUID().toString();         String contentType &#x3D; \&quot;application/x-www-form-urlencoded\&quot;;         String version &#x3D; \&quot;v2\&quot;;         String payloadString &#x3D; \&quot;offset&#x3D;1\&quot;;         String signature &#x3D; apiKey +             httpVerb +             urlHost +             urlPath +             urlQuery +             contentType +             nonce +             timestamp +             version +             payloadString;          try {             SecretKeySpec secretKey &#x3D; new SecretKeySpec(apiKeySecret.getBytes(), \&quot;HmacSHA256\&quot;);             Mac mac &#x3D; Mac.getInstance(\&quot;HmacSHA256\&quot;);             mac.init(secretKey);             byte[] rawHmac &#x3D; mac.doFinal(signature.getBytes());             signature &#x3D; new String(Hex.encodeHex(rawHmac)).toUpperCase();              HttpClient client &#x3D; HttpClient.newHttpClient();             HttpRequest request &#x3D; HttpRequest.newBuilder()                 .uri(URI.create(\&quot;https://www.bitstamp.net/api/v2/user_transactions/\&quot;))                 .POST(HttpRequest.BodyPublishers.ofString(payloadString))                 .setHeader(\&quot;X-Auth\&quot;, apiKey)                 .setHeader(\&quot;X-Auth-Signature\&quot;, signature)                 .setHeader(\&quot;X-Auth-Nonce\&quot;, nonce)                 .setHeader(\&quot;X-Auth-Timestamp\&quot;, timestamp)                 .setHeader(\&quot;X-Auth-Version\&quot;, version)                 .setHeader(\&quot;Content-Type\&quot;, contentType)                 .build();              HttpResponse&lt;String&gt; response &#x3D; client.send(request, HttpResponse.BodyHandlers.ofString());              if (response.statusCode() !&#x3D; 200) {                 throw new RuntimeException(\&quot;Status code not 200\&quot;);             }              String serverSignature &#x3D; response.headers().map().get(\&quot;x-server-auth-signature\&quot;).get(0);             String responseContentType &#x3D; response.headers().map().get(\&quot;Content-Type\&quot;).get(0);             String stringToSign &#x3D; nonce + timestamp + responseContentType + response.body();              mac.init(secretKey);             byte[] rawHmacServerCheck &#x3D; mac.doFinal(stringToSign.getBytes());             String newSignature &#x3D; new String(Hex.encodeHex(rawHmacServerCheck));              if (!newSignature.equals(serverSignature)) {                 throw new RuntimeException(\&quot;Signatures do not match\&quot;);             }              System.out.println(response.body());          } catch (Exception e) {             throw new RuntimeException(e);         }     } }   &#x60;&#x60;&#x60;  &lt;/div&gt; &lt;div class&#x3D;\&quot;api__code mb48\&quot;&gt;     &lt;div class&#x3D;\&quot;api__code-header\&quot;&gt;         &lt;span&gt;C++&lt;/span&gt;         &lt;span class&#x3D;\&quot;icon icon--code\&quot;&gt;&lt;/span&gt;     &lt;/div&gt;  &#x60;&#x60;&#x60;cpp #include &lt;curl/curl.h&gt; #include &lt;openssl/hmac.h&gt; #include &lt;uuid/uuid.h&gt;  #include &lt;iostream&gt; #include &lt;string&gt; #include &lt;chrono&gt; #include &lt;iomanip&gt;  static size_t write_call_back(void *contents, size_t size, size_t nmemb, void *userp) {     ((std::string*)userp)-&gt;append((char*)contents, size * nmemb);     return size * nmemb; }  std::string b2a_hex(char *byte_arr, int n) {     const static std::string hex_codes &#x3D; \&quot;0123456789abcdef\&quot;;     std::string hex_string;     for ( int i &#x3D; 0; i &lt; n ; ++i ) {         unsigned char bin_value &#x3D; byte_arr[i];         hex_string +&#x3D; hex_codes[( bin_value &gt;&gt; 4 ) &amp; 0x0F];         hex_string +&#x3D; hex_codes[bin_value &amp; 0x0F];     }     return hex_string; }  std::string url_encode(std::string data) {     std::string res &#x3D; data;     CURL *curl &#x3D; curl_easy_init();      if(curl) {         char *output &#x3D; curl_easy_escape(curl, data.c_str(), data.length());         if(output) {             res &#x3D; output;             curl_free(output);         }     }      return res; }   int main() {      const std::string api_key &#x3D; \&quot;api_key\&quot;;     const std::string api_secret &#x3D; \&quot;api_key_secret\&quot;;      std::chrono::milliseconds timestamp &#x3D; std::chrono::duration_cast&lt; std::chrono::milliseconds &gt;(             std::chrono::system_clock::now().time_since_epoch()     );      uuid_t uuid;     uuid_string_t nonce;     uuid_generate(uuid);     uuid_unparse_lower(uuid, nonce);      std::string x_auth &#x3D; \&quot;BITSTAMP \&quot; + api_key;     std::string x_auth_nonce &#x3D; nonce;     std::string x_auth_timestamp &#x3D; std::to_string(timestamp.count());     std::string x_auth_version &#x3D; \&quot;v2\&quot;;     std::string content_type &#x3D; \&quot;application/x-www-form-urlencoded\&quot;;     std::string payload &#x3D; url_encode(\&quot;{offset:1}\&quot;);      std::string http_method &#x3D; \&quot;POST\&quot;;     std::string url_host &#x3D; \&quot;www.bitstamp.net\&quot;;     std::string url_path &#x3D; \&quot;/api/v2/user_transactions/\&quot;;     std::string url_query &#x3D; \&quot;\&quot;;      std::string data_to_sign &#x3D; \&quot;\&quot;;     data_to_sign.append(x_auth);     data_to_sign.append(http_method);     data_to_sign.append(url_host);     data_to_sign.append(url_path);     data_to_sign.append(url_query);     data_to_sign.append(content_type);     data_to_sign.append(x_auth_nonce);     data_to_sign.append(x_auth_timestamp);     data_to_sign.append(x_auth_version);     data_to_sign.append(payload);      // calculate hmac signature     unsigned char* result;     unsigned int len &#x3D; 20;     result &#x3D; (unsigned char*)malloc(sizeof(char) * len);      HMAC_CTX ctx;     HMAC_CTX_init(&amp;ctx);      HMAC_Init_ex(&amp;ctx, api_secret.c_str(), api_secret.length(), EVP_sha256(), NULL);     HMAC_Update(&amp;ctx, (unsigned char*)data_to_sign.c_str(), data_to_sign.length());     HMAC_Final(&amp;ctx, result, &amp;len);     HMAC_CTX_cleanup(&amp;ctx);      std::string x_auth_signature &#x3D; b2a_hex( (char *)result, 32 );     free(result);      // send request     CURL *curl;     CURLcode res;     std::string read_buffer;      curl &#x3D; curl_easy_init();      if(curl) {          struct curl_slist *headers &#x3D; NULL;         headers &#x3D; curl_slist_append(headers, (\&quot;X-Auth: \&quot; + x_auth).c_str());         headers &#x3D; curl_slist_append(headers, (\&quot;X-Auth-Signature: \&quot; + x_auth_signature).c_str());         headers &#x3D; curl_slist_append(headers, (\&quot;X-Auth-Nonce: \&quot; + x_auth_nonce).c_str());         headers &#x3D; curl_slist_append(headers, (\&quot;X-Auth-Timestamp: \&quot; + x_auth_timestamp).c_str());         headers &#x3D; curl_slist_append(headers, (\&quot;X-Auth-Version: \&quot; + x_auth_version).c_str());         headers &#x3D; curl_slist_append(headers, (\&quot;Content-Type: \&quot; + content_type).c_str());          std::string url &#x3D; \&quot;https://\&quot; + url_host + url_path + url_query;          curl_easy_setopt(curl, CURLOPT_URL, url.c_str());         curl_easy_setopt(curl, CURLOPT_POSTFIELDS, payload.c_str());         curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);         curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_call_back);         curl_easy_setopt(curl, CURLOPT_WRITEDATA, &amp;read_buffer);          res &#x3D; curl_easy_perform(curl);          if(res !&#x3D; CURLE_OK) {             std::cout &lt;&lt; \&quot;curl_easy_perform() failed: \&quot; &lt;&lt; curl_easy_strerror(res) &lt;&lt; std::endl;         }          std::cout &lt;&lt; \&quot;curl_easy_perform() response: \&quot; &lt;&lt; read_buffer &lt;&lt; std::endl;          curl_easy_cleanup(curl);      }      return 0;  }   &#x60;&#x60;&#x60;  &lt;/div&gt;  # Changelog  ### 2023-10-12 * New API changes due to compliance with Travel Rule requirements:   * Travel Rule endpoints: https://www.bitstamp.net/api/#tag/Travel-rule-public   * Changes to all crypto withdrawals to provide optional Travel Rule data (this data will become mandatory in the near future which will be a breaking change!). * All endpoints for creating new orders have an optional **client_order_id field**. If submitted, up until now client_order_id had to be unique. We are deprecating the checking of duplicate **client_order_id** and will allow duplicates beginning November 2023. If you currently rely on us checking for duplicates and us rejecting those, this change may cause you to submit multiple orders so please make the necessary changes to not rely on that check. * New API endpoints that enable you to access full Earn (Staking and Lending) functionality.  ### 2023-09-29 * Added **revoke_all_api_keys** as a kill switch functionality to terminate all API connectivity:   * &#x60;POST /api/v2/revoke_all_api_keys/&#x60;  ### 2023-09-25 * Updated GTD order description by noting that the orders expire at midnight:   * &#x60;POST /api/v2/buy/{market_symbol}/&#x60;   * &#x60;POST /api/v2/sell/{market_symbol}/&#x60;  ### 2023-09-22 * Extended error responses for &#x60;/api/v2/cancel_order&#x60;:   * &#x60;POST /api/v2/cancel_order/&#x60;  ### 2023-08-31 * Added market property with the goal of deprecating **currency_pair** long term:   * &#x60;GET /api/v2/fees/trading/&#x60; * Added datetime and type properties to order status endpoint:   * &#x60;GET /api/v2/order_status/&#x60;  ### 2023-07-05 * Introduced a new side field (0 - buy; 1 - sell) to all Ticker endpoints:   * &#x60;GET /api/v2/ticker/&#x60;   * &#x60;GET /api/v2/ticker/{currency_pair}/&#x60;   * &#x60;GET /api/v2/ticker_hour/&#x60;  ### 2023-06-29 * Updated **destination_tag** field description for Ripple IOU address endpoint:   * &#x60;POST /api/v2/ripple_address/&#x60;  ### 2023-04-07 * Introduced a new Currencies endpoint:   * &#x60;GET /api/v2/currencies/&#x60;: Get listed currencies info. .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var BitstampPublicApi = require('index'); // See note below*.
* var xxxSvc = new BitstampPublicApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new BitstampPublicApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new BitstampPublicApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new BitstampPublicApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v2
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountBalancesResponse model constructor.
     * @property {module:model/AccountBalancesResponse}
     */
    AccountBalancesResponse,

    /**
     * The BankWithdrawalStatusRequest model constructor.
     * @property {module:model/BankWithdrawalStatusRequest}
     */
    BankWithdrawalStatusRequest,

    /**
     * The BankWithdrawalStatusResponse model constructor.
     * @property {module:model/BankWithdrawalStatusResponse}
     */
    BankWithdrawalStatusResponse,

    /**
     * The BuyInstantOrderRequest model constructor.
     * @property {module:model/BuyInstantOrderRequest}
     */
    BuyInstantOrderRequest,

    /**
     * The BuySellLimitOrderRequest model constructor.
     * @property {module:model/BuySellLimitOrderRequest}
     */
    BuySellLimitOrderRequest,

    /**
     * The BuySellMarketOrderRequest model constructor.
     * @property {module:model/BuySellMarketOrderRequest}
     */
    BuySellMarketOrderRequest,

    /**
     * The BuySellOrderResponse model constructor.
     * @property {module:model/BuySellOrderResponse}
     */
    BuySellOrderResponse,

    /**
     * The CancelAllOrdersResponse model constructor.
     * @property {module:model/CancelAllOrdersResponse}
     */
    CancelAllOrdersResponse,

    /**
     * The CancelBankOrCryptoWithdrawalRequest model constructor.
     * @property {module:model/CancelBankOrCryptoWithdrawalRequest}
     */
    CancelBankOrCryptoWithdrawalRequest,

    /**
     * The CancelBankWithdrawalResponse model constructor.
     * @property {module:model/CancelBankWithdrawalResponse}
     */
    CancelBankWithdrawalResponse,

    /**
     * The CancelOrder200Response model constructor.
     * @property {module:model/CancelOrder200Response}
     */
    CancelOrder200Response,

    /**
     * The CancelOrderRequest model constructor.
     * @property {module:model/CancelOrderRequest}
     */
    CancelOrderRequest,

    /**
     * The CancelOrderResponse model constructor.
     * @property {module:model/CancelOrderResponse}
     */
    CancelOrderResponse,

    /**
     * The CancelWithdrawal200Response model constructor.
     * @property {module:model/CancelWithdrawal200Response}
     */
    CancelWithdrawal200Response,

    /**
     * The ContactSchema model constructor.
     * @property {module:model/ContactSchema}
     */
    ContactSchema,

    /**
     * The CorporateInfo model constructor.
     * @property {module:model/CorporateInfo}
     */
    CorporateInfo,

    /**
     * The CryptoTransaction model constructor.
     * @property {module:model/CryptoTransaction}
     */
    CryptoTransaction,

    /**
     * The CryptoTransactionsRequest model constructor.
     * @property {module:model/CryptoTransactionsRequest}
     */
    CryptoTransactionsRequest,

    /**
     * The CryptoTransactionsResponse model constructor.
     * @property {module:model/CryptoTransactionsResponse}
     */
    CryptoTransactionsResponse,

    /**
     * The CryptoWithdrawalRequest model constructor.
     * @property {module:model/CryptoWithdrawalRequest}
     */
    CryptoWithdrawalRequest,

    /**
     * The CryptoWithdrawalResponse model constructor.
     * @property {module:model/CryptoWithdrawalResponse}
     */
    CryptoWithdrawalResponse,

    /**
     * The CurrencySchema model constructor.
     * @property {module:model/CurrencySchema}
     */
    CurrencySchema,

    /**
     * The DepositAddressRequest model constructor.
     * @property {module:model/DepositAddressRequest}
     */
    DepositAddressRequest,

    /**
     * The DepositAddressResponse model constructor.
     * @property {module:model/DepositAddressResponse}
     */
    DepositAddressResponse,

    /**
     * The EarnSubscriptionSchema model constructor.
     * @property {module:model/EarnSubscriptionSchema}
     */
    EarnSubscriptionSchema,

    /**
     * The EarnSubscriptionSettingSchema model constructor.
     * @property {module:model/EarnSubscriptionSettingSchema}
     */
    EarnSubscriptionSettingSchema,

    /**
     * The EarnSubscriptionsSchema model constructor.
     * @property {module:model/EarnSubscriptionsSchema}
     */
    EarnSubscriptionsSchema,

    /**
     * The EarnTransactionSchema model constructor.
     * @property {module:model/EarnTransactionSchema}
     */
    EarnTransactionSchema,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The ErrorSchema model constructor.
     * @property {module:model/ErrorSchema}
     */
    ErrorSchema,

    /**
     * The EurUsdConversionRateResponse model constructor.
     * @property {module:model/EurUsdConversionRateResponse}
     */
    EurUsdConversionRateResponse,

    /**
     * The Fee model constructor.
     * @property {module:model/Fee}
     */
    Fee,

    /**
     * The FeeTradingResponse model constructor.
     * @property {module:model/FeeTradingResponse}
     */
    FeeTradingResponse,

    /**
     * The FeeWithdrawalRequest model constructor.
     * @property {module:model/FeeWithdrawalRequest}
     */
    FeeWithdrawalRequest,

    /**
     * The FeeWithdrawalResponse model constructor.
     * @property {module:model/FeeWithdrawalResponse}
     */
    FeeWithdrawalResponse,

    /**
     * The GetCryptoUserTransactions200Response model constructor.
     * @property {module:model/GetCryptoUserTransactions200Response}
     */
    GetCryptoUserTransactions200Response,

    /**
     * The GetFiatWithdrawalStatus200Response model constructor.
     * @property {module:model/GetFiatWithdrawalStatus200Response}
     */
    GetFiatWithdrawalStatus200Response,

    /**
     * The GetLiquidationAddressTransactions200Response model constructor.
     * @property {module:model/GetLiquidationAddressTransactions200Response}
     */
    GetLiquidationAddressTransactions200Response,

    /**
     * The GetOHLCData200Response model constructor.
     * @property {module:model/GetOHLCData200Response}
     */
    GetOHLCData200Response,

    /**
     * The GetOrderBook200Response model constructor.
     * @property {module:model/GetOrderBook200Response}
     */
    GetOrderBook200Response,

    /**
     * The GetOrderStatus200Response model constructor.
     * @property {module:model/GetOrderStatus200Response}
     */
    GetOrderStatus200Response,

    /**
     * The GetRippleIOUDepositAddress200Response model constructor.
     * @property {module:model/GetRippleIOUDepositAddress200Response}
     */
    GetRippleIOUDepositAddress200Response,

    /**
     * The GetUnconfirmedBTCDeposits200Response model constructor.
     * @property {module:model/GetUnconfirmedBTCDeposits200Response}
     */
    GetUnconfirmedBTCDeposits200Response,

    /**
     * The GetUserTransactions200Response model constructor.
     * @property {module:model/GetUserTransactions200Response}
     */
    GetUserTransactions200Response,

    /**
     * The GetWithdrawalRequests200Response model constructor.
     * @property {module:model/GetWithdrawalRequests200Response}
     */
    GetWithdrawalRequests200Response,

    /**
     * The InstantConvertAddressInfoRequest model constructor.
     * @property {module:model/InstantConvertAddressInfoRequest}
     */
    InstantConvertAddressInfoRequest,

    /**
     * The InstantConvertAddressInfoResponse model constructor.
     * @property {module:model/InstantConvertAddressInfoResponse}
     */
    InstantConvertAddressInfoResponse,

    /**
     * The NewInstantConvertAddressRequest model constructor.
     * @property {module:model/NewInstantConvertAddressRequest}
     */
    NewInstantConvertAddressRequest,

    /**
     * The NewInstantConvertAddressResponse model constructor.
     * @property {module:model/NewInstantConvertAddressResponse}
     */
    NewInstantConvertAddressResponse,

    /**
     * The OHLCData model constructor.
     * @property {module:model/OHLCData}
     */
    OHLCData,

    /**
     * The OHLCDataResponseSchema model constructor.
     * @property {module:model/OHLCDataResponseSchema}
     */
    OHLCDataResponseSchema,

    /**
     * The OpenBankWithdrawalRequest model constructor.
     * @property {module:model/OpenBankWithdrawalRequest}
     */
    OpenBankWithdrawalRequest,

    /**
     * The OpenBankWithdrawalResponse model constructor.
     * @property {module:model/OpenBankWithdrawalResponse}
     */
    OpenBankWithdrawalResponse,

    /**
     * The OpenInstantBuyOrder200Response model constructor.
     * @property {module:model/OpenInstantBuyOrder200Response}
     */
    OpenInstantBuyOrder200Response,

    /**
     * The OpenOrdersAllResponse model constructor.
     * @property {module:model/OpenOrdersAllResponse}
     */
    OpenOrdersAllResponse,

    /**
     * The OpenOrdersPairResponse model constructor.
     * @property {module:model/OpenOrdersPairResponse}
     */
    OpenOrdersPairResponse,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderBookResponse model constructor.
     * @property {module:model/OrderBookResponse}
     */
    OrderBookResponse,

    /**
     * The OrderStatusRequest model constructor.
     * @property {module:model/OrderStatusRequest}
     */
    OrderStatusRequest,

    /**
     * The OrderStatusResponse model constructor.
     * @property {module:model/OrderStatusResponse}
     */
    OrderStatusResponse,

    /**
     * The OrderTransaction model constructor.
     * @property {module:model/OrderTransaction}
     */
    OrderTransaction,

    /**
     * The PaginationSchema model constructor.
     * @property {module:model/PaginationSchema}
     */
    PaginationSchema,

    /**
     * The RequestCryptoWithdrawal200Response model constructor.
     * @property {module:model/RequestCryptoWithdrawal200Response}
     */
    RequestCryptoWithdrawal200Response,

    /**
     * The RequestFiatWithdrawal200Response model constructor.
     * @property {module:model/RequestFiatWithdrawal200Response}
     */
    RequestFiatWithdrawal200Response,

    /**
     * The RequestNewLiquidationAddress200Response model constructor.
     * @property {module:model/RequestNewLiquidationAddress200Response}
     */
    RequestNewLiquidationAddress200Response,

    /**
     * The RequestRippleIOUWithdrawal200Response model constructor.
     * @property {module:model/RequestRippleIOUWithdrawal200Response}
     */
    RequestRippleIOUWithdrawal200Response,

    /**
     * The RetailInfo model constructor.
     * @property {module:model/RetailInfo}
     */
    RetailInfo,

    /**
     * The RevokedAPIKeySchema model constructor.
     * @property {module:model/RevokedAPIKeySchema}
     */
    RevokedAPIKeySchema,

    /**
     * The RippleIOUDepositAddressResponse model constructor.
     * @property {module:model/RippleIOUDepositAddressResponse}
     */
    RippleIOUDepositAddressResponse,

    /**
     * The RippleIOUWithdrawalRequest model constructor.
     * @property {module:model/RippleIOUWithdrawalRequest}
     */
    RippleIOUWithdrawalRequest,

    /**
     * The RippleIOUWithdrawalResponse model constructor.
     * @property {module:model/RippleIOUWithdrawalResponse}
     */
    RippleIOUWithdrawalResponse,

    /**
     * The SellInstantOrderRequest model constructor.
     * @property {module:model/SellInstantOrderRequest}
     */
    SellInstantOrderRequest,

    /**
     * The SimpleErrorResponse model constructor.
     * @property {module:model/SimpleErrorResponse}
     */
    SimpleErrorResponse,

    /**
     * The TickerHourResponse model constructor.
     * @property {module:model/TickerHourResponse}
     */
    TickerHourResponse,

    /**
     * The TickerResponse model constructor.
     * @property {module:model/TickerResponse}
     */
    TickerResponse,

    /**
     * The TickerWithPairResponse model constructor.
     * @property {module:model/TickerWithPairResponse}
     */
    TickerWithPairResponse,

    /**
     * The Trade model constructor.
     * @property {module:model/Trade}
     */
    Trade,

    /**
     * The TradingPair model constructor.
     * @property {module:model/TradingPair}
     */
    TradingPair,

    /**
     * The TradingPairsInfoResponse model constructor.
     * @property {module:model/TradingPairsInfoResponse}
     */
    TradingPairsInfoResponse,

    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction,

    /**
     * The TransactionsResponse model constructor.
     * @property {module:model/TransactionsResponse}
     */
    TransactionsResponse,

    /**
     * The TransferFromMainToSub200Response model constructor.
     * @property {module:model/TransferFromMainToSub200Response}
     */
    TransferFromMainToSub200Response,

    /**
     * The TransferToFromMainRequest model constructor.
     * @property {module:model/TransferToFromMainRequest}
     */
    TransferToFromMainRequest,

    /**
     * The TransferToFromMainResponse model constructor.
     * @property {module:model/TransferToFromMainResponse}
     */
    TransferToFromMainResponse,

    /**
     * The UserTransactionsRequest model constructor.
     * @property {module:model/UserTransactionsRequest}
     */
    UserTransactionsRequest,

    /**
     * The UserTransactionsResponse model constructor.
     * @property {module:model/UserTransactionsResponse}
     */
    UserTransactionsResponse,

    /**
     * The VaspList200Response model constructor.
     * @property {module:model/VaspList200Response}
     */
    VaspList200Response,

    /**
     * The VaspSchema model constructor.
     * @property {module:model/VaspSchema}
     */
    VaspSchema,

    /**
     * The WebsocketsTokenResponse model constructor.
     * @property {module:model/WebsocketsTokenResponse}
     */
    WebsocketsTokenResponse,

    /**
     * The WithdrawalRequestsRequest model constructor.
     * @property {module:model/WithdrawalRequestsRequest}
     */
    WithdrawalRequestsRequest,

    /**
     * The WithdrawalRequestsResponse model constructor.
     * @property {module:model/WithdrawalRequestsResponse}
     */
    WithdrawalRequestsResponse,

    /**
    * The AccountBalancesApi service constructor.
    * @property {module:api/AccountBalancesApi}
    */
    AccountBalancesApi,

    /**
    * The DepositsApi service constructor.
    * @property {module:api/DepositsApi}
    */
    DepositsApi,

    /**
    * The EarnApi service constructor.
    * @property {module:api/EarnApi}
    */
    EarnApi,

    /**
    * The FeesApi service constructor.
    * @property {module:api/FeesApi}
    */
    FeesApi,

    /**
    * The InstantConvertApi service constructor.
    * @property {module:api/InstantConvertApi}
    */
    InstantConvertApi,

    /**
    * The MarketInfoApi service constructor.
    * @property {module:api/MarketInfoApi}
    */
    MarketInfoApi,

    /**
    * The OrderBookApi service constructor.
    * @property {module:api/OrderBookApi}
    */
    OrderBookApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi,

    /**
    * The SecurityApi service constructor.
    * @property {module:api/SecurityApi}
    */
    SecurityApi,

    /**
    * The SubAccountApi service constructor.
    * @property {module:api/SubAccountApi}
    */
    SubAccountApi,

    /**
    * The TickersApi service constructor.
    * @property {module:api/TickersApi}
    */
    TickersApi,

    /**
    * The TransactionsPrivateApi service constructor.
    * @property {module:api/TransactionsPrivateApi}
    */
    TransactionsPrivateApi,

    /**
    * The TransactionsPublicApi service constructor.
    * @property {module:api/TransactionsPublicApi}
    */
    TransactionsPublicApi,

    /**
    * The TravelRulePrivateApi service constructor.
    * @property {module:api/TravelRulePrivateApi}
    */
    TravelRulePrivateApi,

    /**
    * The TravelRulePublicApi service constructor.
    * @property {module:api/TravelRulePublicApi}
    */
    TravelRulePublicApi,

    /**
    * The WebsocketApi service constructor.
    * @property {module:api/WebsocketApi}
    */
    WebsocketApi,

    /**
    * The WithdrawalsApi service constructor.
    * @property {module:api/WithdrawalsApi}
    */
    WithdrawalsApi
};
