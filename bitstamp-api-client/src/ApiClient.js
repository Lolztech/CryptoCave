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


import superagent from "superagent";
import querystring from "querystring";

/**
* @module ApiClient
* @version v2
*/

/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
class ApiClient {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * Overrides the default value set in spec file if present
     * @param {String} basePath
     */
    constructor(basePath = 'https://www.bitstamp.net') {
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://www.bitstamp.net
         */
        this.basePath = basePath.replace(/\/+$/, '');

        /**
         * The authentication methods to be included for all API calls.
         * @type {Array.<String>}
         */
        this.authentications = {
            'x_auth': {type: 'apiKey', 'in': 'header', name: 'X-Auth'},
            'x_auth_nonce': {type: 'apiKey', 'in': 'header', name: 'X-Auth-Nonce'},
            'x_auth_signature': {type: 'apiKey', 'in': 'header', name: 'X-Auth-Signature'},
            'x_auth_subaccount_id': {type: 'apiKey', 'in': 'header', name: 'X-Auth-Subaccount-Id'},
            'x_auth_timestamp': {type: 'apiKey', 'in': 'header', name: 'X-Auth-Timestamp'},
            'x_auth_version': {type: 'apiKey', 'in': 'header', name: 'X-Auth-Version'},
            'x_content_type': {type: 'apiKey', 'in': 'header', name: 'Content-Type'}
        }

        /**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
        this.defaultHeaders = {
            'User-Agent': 'OpenAPI-Generator/v2/Javascript'
        };

        /**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
        this.timeout = 60000;

        /**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
        this.cache = true;

        /**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
        this.enableCookies = false;

        /*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
        if (typeof window === 'undefined') {
          this.agent = new superagent.agent();
        }

        /*
         * Allow user to override superagent agent
         */
         this.requestAgent = null;

        /*
         * Allow user to add superagent plugins
         */
        this.plugins = null;

    }

    /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */
    paramToString(param) {
        if (param == undefined || param == null) {
            return '';
        }
        if (param instanceof Date) {
            return param.toJSON();
        }
        if (ApiClient.canBeJsonified(param)) {
            return JSON.stringify(param);
        }

        return param.toString();
    }

    /**
    * Returns a boolean indicating if the parameter could be JSON.stringified
    * @param param The actual parameter
    * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
    */
    static canBeJsonified(str) {
        if (typeof str !== 'string' && typeof str !== 'object') return false;
        try {
            const type = str.toString();
            return type === '[object Object]'
                || type === '[object Array]';
        } catch (err) {
            return false;
        }
    };

   /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    * NOTE: query parameters are not handled here.
    * @param {String} path The path to append to the base URL.
    * @param {Object} pathParams The parameter values to append.
    * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
    * @returns {String} The encoded path with parameter values substituted.
    */
    buildUrl(path, pathParams, apiBasePath) {
        if (!path.match(/^\//)) {
            path = '/' + path;
        }

        var url = this.basePath + path;

        // use API (operation, path) base path if defined
        if (apiBasePath !== null && apiBasePath !== undefined) {
            url = apiBasePath + path;
        }

        url = url.replace(/\{([\w-\.#]+)\}/g, (fullMatch, key) => {
            var value;
            if (pathParams.hasOwnProperty(key)) {
                value = this.paramToString(pathParams[key]);
            } else {
                value = fullMatch;
            }

            return encodeURIComponent(value);
        });

        return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
    isJsonMime(contentType) {
        return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
    jsonPreferredMime(contentTypes) {
        for (var i = 0; i < contentTypes.length; i++) {
            if (this.isJsonMime(contentTypes[i])) {
                return contentTypes[i];
            }
        }

        return contentTypes[0];
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
    isFileParam(param) {
        // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
        if (typeof require === 'function') {
            let fs;
            try {
                fs = require('fs');
            } catch (err) {}
            if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
                return true;
            }
        }

        // Buffer in Node.js
        if (typeof Buffer === 'function' && param instanceof Buffer) {
            return true;
        }

        // Blob in browser
        if (typeof Blob === 'function' && param instanceof Blob) {
            return true;
        }

        // File in browser (it seems File object is also instance of Blob, but keep this for safe)
        if (typeof File === 'function' && param instanceof File) {
            return true;
        }

        return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
    normalizeParams(params) {
        var newParams = {};
        for (var key in params) {
            if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
                var value = params[key];
                if (this.isFileParam(value) || Array.isArray(value)) {
                    newParams[key] = value;
                } else {
                    newParams[key] = this.paramToString(value);
                }
            }
        }

        return newParams;
    }

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
    buildCollectionParam(param, collectionFormat) {
        if (param == null) {
            return null;
        }
        switch (collectionFormat) {
            case 'csv':
                return param.map(this.paramToString, this).join(',');
            case 'ssv':
                return param.map(this.paramToString, this).join(' ');
            case 'tsv':
                return param.map(this.paramToString, this).join('\t');
            case 'pipes':
                return param.map(this.paramToString, this).join('|');
            case 'multi':
                //return the array directly as SuperAgent will handle it as expected
                return param.map(this.paramToString, this);
            case 'passthrough':
                return param;
            default:
                throw new Error('Unknown collection format: ' + collectionFormat);
        }
    }

    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    */
    applyAuthToRequest(request, authNames) {
        authNames.forEach((authName) => {
            var auth = this.authentications[authName];
            switch (auth.type) {
                case 'basic':
                    if (auth.username || auth.password) {
                        request.auth(auth.username || '', auth.password || '');
                    }

                    break;
                case 'bearer':
                    if (auth.accessToken) {
                        var localVarBearerToken = typeof auth.accessToken === 'function'
                          ? auth.accessToken()
                          : auth.accessToken
                        request.set({'Authorization': 'Bearer ' + localVarBearerToken});
                    }

                    break;
                case 'apiKey':
                    if (auth.apiKey) {
                        var data = {};
                        if (auth.apiKeyPrefix) {
                            data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
                        } else {
                            data[auth.name] = auth.apiKey;
                        }

                        if (auth['in'] === 'header') {
                            request.set(data);
                        } else {
                            request.query(data);
                        }
                    }

                    break;
                case 'oauth2':
                    if (auth.accessToken) {
                        request.set({'Authorization': 'Bearer ' + auth.accessToken});
                    }

                    break;
                default:
                    throw new Error('Unknown authentication type: ' + auth.type);
            }
        });
    }

   /**
    * Deserializes an HTTP response body into a value of the specified type.
    * @param {Object} response A SuperAgent response object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns A value of the specified type.
    */
    deserialize(response, returnType) {
        if (response == null || returnType == null || response.status == 204) {
            return null;
        }

        // Rely on SuperAgent for parsing response body.
        // See http://visionmedia.github.io/superagent/#parsing-response-bodies
        var data = response.body;
        if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
            // SuperAgent does not always produce a body; use the unparsed response as a fallback
            data = response.text;
        }

        return ApiClient.convertToType(data, returnType);
    }

   /**
    * Callback function to receive the result of the operation.
    * @callback module:ApiClient~callApiCallback
    * @param {String} error Error message, if any.
    * @param data The data returned by the service call.
    * @param {String} response The complete HTTP response.
    */

   /**
    * Invokes the REST service using the supplied settings and parameters.
    * @param {String} path The base URL to invoke.
    * @param {String} httpMethod The HTTP method to use.
    * @param {Object.<String, String>} pathParams A map of path parameters and their values.
    * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
    * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
    * @param {Object.<String, Object>} formParams A map of form parameters and their values.
    * @param {Object} bodyParam The value to pass as the request body.
    * @param {Array.<String>} authNames An array of authentication type names.
    * @param {Array.<String>} contentTypes An array of request MIME types.
    * @param {Array.<String>} accepts An array of acceptable response MIME types.
    * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
    * constructor for a complex type.
    * @param {String} apiBasePath base path defined in the operation/path level to override the default one
    * @param {module:ApiClient~callApiCallback} callback The callback function.
    * @returns {Object} The SuperAgent request object.
    */
    callApi(path, httpMethod, pathParams,
        queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts,
        returnType, apiBasePath, callback) {

        var url = this.buildUrl(path, pathParams, apiBasePath);
        var request = superagent(httpMethod, url);

        if (this.plugins !== null) {
            for (var index in this.plugins) {
                if (this.plugins.hasOwnProperty(index)) {
                    request.use(this.plugins[index])
                }
            }
        }

        // apply authentications
        this.applyAuthToRequest(request, authNames);

        // set query parameters
        if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
            queryParams['_'] = new Date().getTime();
        }

        request.query(this.normalizeParams(queryParams));

        // set header parameters
        request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

        // set requestAgent if it is set by user
        if (this.requestAgent) {
          request.agent(this.requestAgent);
        }

        // set request timeout
        request.timeout(this.timeout);

        var contentType = this.jsonPreferredMime(contentTypes);
        if (contentType) {
            // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
            if(contentType != 'multipart/form-data') {
                request.type(contentType);
            }
        }

        if (contentType === 'application/x-www-form-urlencoded') {
            request.send(querystring.stringify(this.normalizeParams(formParams)));
        } else if (contentType == 'multipart/form-data') {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
                if (_formParams.hasOwnProperty(key)) {
                    let _formParamsValue = _formParams[key];
                    if (this.isFileParam(_formParamsValue)) {
                        // file field
                        request.attach(key, _formParamsValue);
                    } else if (Array.isArray(_formParamsValue) && _formParamsValue.length
                        && this.isFileParam(_formParamsValue[0])) {
                        // multiple files
                        _formParamsValue.forEach(file => request.attach(key, file));
                    } else {
                        request.field(key, _formParamsValue);
                    }
                }
            }
        } else if (bodyParam !== null && bodyParam !== undefined) {
            if (!request.header['Content-Type']) {
                request.type('application/json');
            }
            request.send(bodyParam);
        }

        var accept = this.jsonPreferredMime(accepts);
        if (accept) {
            request.accept(accept);
        }

        if (returnType === 'Blob') {
          request.responseType('blob');
        } else if (returnType === 'String') {
          request.responseType('text');
        }

        // Attach previously saved cookies, if enabled
        if (this.enableCookies){
            if (typeof window === 'undefined') {
                this.agent._attachCookies(request);
            }
            else {
                request.withCredentials();
            }
        }

        request.end((error, response) => {
            if (callback) {
                var data = null;
                if (!error) {
                    try {
                        data = this.deserialize(response, returnType);
                        if (this.enableCookies && typeof window === 'undefined'){
                            this.agent._saveCookies(response);
                        }
                    } catch (err) {
                        error = err;
                    }
                }

                callback(error, data, response);
            }
        });

        return request;
    }

    /**
    * Parses an ISO-8601 string representation or epoch representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
    static parseDate(str) {
        if (isNaN(str)) {
            return new Date(str.replace(/(\d)(T)(\d)/i, '$1 $3'));
        }
        return new Date(+str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
    static convertToType(data, type) {
        if (data === null || data === undefined)
            return data

        switch (type) {
            case 'Boolean':
                return Boolean(data);
            case 'Integer':
                return parseInt(data, 10);
            case 'Number':
                return parseFloat(data);
            case 'String':
                return String(data);
            case 'Date':
                return ApiClient.parseDate(String(data));
            case 'Blob':
                return data;
            default:
                if (type === Object) {
                    // generic object, return directly
                    return data;
                } else if (typeof type.constructFromObject === 'function') {
                    // for model type like User and enum class
                    return type.constructFromObject(data);
                } else if (Array.isArray(type)) {
                    // for array type like: ['String']
                    var itemType = type[0];

                    return data.map((item) => {
                        return ApiClient.convertToType(item, itemType);
                    });
                } else if (typeof type === 'object') {
                    // for plain object type like: {'String': 'Integer'}
                    var keyType, valueType;
                    for (var k in type) {
                        if (type.hasOwnProperty(k)) {
                            keyType = k;
                            valueType = type[k];
                            break;
                        }
                    }

                    var result = {};
                    for (var k in data) {
                        if (data.hasOwnProperty(k)) {
                            var key = ApiClient.convertToType(k, keyType);
                            var value = ApiClient.convertToType(data[k], valueType);
                            result[key] = value;
                        }
                    }

                    return result;
                } else {
                    // for unknown type, return the data directly
                    return data;
                }
        }
    }

  /**
    * Gets an array of host settings
    * @returns An array of host settings
    */
    hostSettings() {
        return [
            {
              'url': "https://www.bitstamp.net",
              'description': "Production server",
            }
      ];
    }

    getBasePathFromSettings(index, variables={}) {
        var servers = this.hostSettings();

        // check array index out of bound
        if (index < 0 || index >= servers.length) {
            throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
        }

        var server = servers[index];
        var url = server['url'];

        // go through variable and assign a value
        for (var variable_name in server['variables']) {
            if (variable_name in variables) {
                let variable = server['variables'][variable_name];
                if ( !('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name]) ) {
                    url = url.replace("{" + variable_name + "}", variables[variable_name]);
                } else {
                    throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
                }
            } else {
                // use default value
                url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value'])
            }
        }
        return url;
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
    static constructFromObject(data, obj, itemType) {
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                if (data.hasOwnProperty(i))
                    obj[i] = ApiClient.convertToType(data[i], itemType);
            }
        } else {
            for (var k in data) {
                if (data.hasOwnProperty(k))
                    obj[k] = ApiClient.convertToType(data[k], itemType);
            }
        }
    };
}

/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */
ApiClient.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',

    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',

    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',

    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',

    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
};

/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
export default ApiClient;
