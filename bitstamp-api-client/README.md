# bitstamp_public_api

BitstampPublicApi - JavaScript client for bitstamp_public_api
# What is API?
Bitstamp application programming interface (API) allows our clients to access and control their accounts, using custom
written software.

# Response codes
Response code is a key that can be appended to an API response as **response_code** (string). Additionally, also
explanation may or may not be included as the **response_explanation** (string) key, which defines further explanation
to what has gone wrong when processing a request.

Below is the list of all available response codes and it's explanations:
| response_code | response_explanation (optional) |
| ----------- | ----------- |
| 400.001 | Unknown validation error. |
| 400.002 | Request rejected due to exceeded rate limit. |
| 400.003 | Trading for provided market is disabled. |
| 400.004 | POST parameter(s) is missing from request. |
| 400.005 | POST parameter(s) is missing from request: amount. |
| 400.006 | POST parameter(s) is missing from request: price. |
| 400.007 | POST parameter(s) is malformed. |
| 400.008 | POST parameter(s) is malformed: client_order_id. |
| 400.009 | Insufficient balance for provided user. |
| 400.010 | POST parameter(s) is malformed: offset. |
| 400.011 | POST parameter(s) is malformed: limit. |
| 400.012 | POST parameter(s) is malformed: sort. |
| 400.013 | POST parameter(s) is malformed: since_timestamp. |
| 400.014 | POST parameter(s) is missing from request: order_id. |
| 400.015 | POST parameter(s) is missing from request: client_order_id. |
| 400.016 | POST parameter(s) is malformed: order_id. |
| 400.017 | POST parameter(s) is malformed: client_cancel_id. |
| 400.018 | GET parameters not allowed for this request. |
| 400.019 | Provided client_order_id already exists. |
| 400.020 | Provided order size is lower than minimum order value. |
| 400.021 | Provided price is out of range. |
| 400.022 | POST parameter(s) is missing from request: expire_time. |
| 400.023 | POST parameter(s) is malformed: expire_time. |
| 400.024 | Only one of optional parameters can be set. |
| 400.025 | Both limit_price and any optional parameter cannot be set. |
| 400.026 | POST parameter(s) is malformed: amount. |
| 400.027 | Sell if executed price must be higher than buy price. |
| 400.028 | Buy if executed price must be lower than sell price. |
| 400.029 | 'stop_order_id' is None. |
| 400.030 | 'stop_order_price' is None. |
| 400.031 | 'expire_time' is None. |
| 400.032 | 'expire_time' must be set in future date. |
| 400.033 | 'expire_time' must be None. |
| 400.034 | POST parameter(s) is malformed: until_timestamp. |
| 400.035 | POST parameter(s) is missing from request: id. |
| 400.036 | POST parameter(s) is malformed: id. |
| 400.037 | Provided order size is too large. |
| 400.038 | Provided order amount is too large. |
| 400.039 | Provided order size is higher than maximum order value. |
| 400.040 | Provided leverage differs from ones on open orders. |
| 400.041 | POST parameter(s) is malformed: price. |
| 400.042 | Position management mode already active |
| 400.043 | No positions present |
| 400.044 | POST parameter(s) is malformed: leverage. |
| 400.045 | Open orders present. |
| 400.046 | Provided order amount is too low. |
| 403.001 | User verification failed. |
| 403.002 | Trading is not allowed on lending account. |
| 403.003 | Trading is not allowed on collateral account. |
| 403.004 | Trading is blocked for user. |
| 403.005 | Action not allowed at cross margin mode. |
| 404.001 | Unknown not found error. |
| 404.002 | Order not found for corresponding request. |
| 404.003 | Currency pair not found for corresponding request. |
| 404.004 | Trade account not found for provided API key. |
| 404.005 | Order book not found. |
| 404.006 | Currency not found for corresponding request. |
| 404.007 | Market not found for corresponding request. |
| 405.001 | GET method not allowed. |
| 410.001 | Requested endpoint is deprecated. |
| 500.001 | Unknown server error. |
| 500.002 | One of Bitstamp internal services failed to process request. |
| 500.003 | Unknown error while processing order. |
| 500.004 | No sell orders for provided market. |
| 500.005 | No buy orders for provided market. |
| 500.006 | Cash sell order types are currently disabled. |
| 500.007 | Error while serializing data. |
| 500.008 | Margin option for provided market is disabled. |
| 500.009 | Order book is currently unavailable. |
| 500.010 | Instant trading for provided market is disabled. |
| 500.011 | Market trading for provided market is disabled. |
| 500.012 | Matching blocked for this order book. |
| 500.013 | Unknown matching engine error. |
| 500.014 | Cash order for provided market is disabled. |
| 500.015 | Cannot place order. There are currently no orders for provided market. |
| 500.016 | Timeout on matching engine. |
| 500.017 | Order rejected by matching engine. |
| 500.018 | No orders for provided market. |
| 500.019 | Error at canceling orders |
| 500.020 | Pre reserved orders present |
| 500.021 | Post reserved orders present |
| 500.022 | More than one position present |
| 500.023 | Position management order not filled |

# Request limits
As standard, all clients can make 400 requests per second. There is a default limit threshold of 10,000 requests per 10
minutes in place. The rate limits mentioned above can be increased upon request and the client entering a bespoke
agreement with Bitstamp. For real time data please refer to the
[**websocket API**](https://www.bitstamp.net/websocket/v2/).

## Commercial Use of Bitstamp's Exchange Data
Companies seeking to utilize Bitstamp's exchange data for their own commercial purposes are directed to contact
partners@bitstamp.net to receive and sign a commercial use Data License Agreement.

Bitstamp allows the incorporation and redistribution of our exchange data for commercial purposes.
This includes the right to create ratios, calculations, new original works, statistics, and similar, based on the
exchange data.

# Authentication

All private API calls require authentication. For a successful authentication you need to provide the following
authorization headers in your request:

## Possible authentication errors
<table>
<thead><th>Code</th><th>Reason</th><th>Action</th></thead>
<tbody>
<tr><td><strong>API0001</strong></td><td>API key not found</td><td>Check your API key value.</td></tr>
<tr><td><strong>API0002</strong></td><td>IP address not allowed</td><td>This IP address has no permission to use this API key.</td></tr>
<tr><td><strong>API0003</strong></td><td>No permission found</td><td>API key doesn't have permission for calling this api endpoint.</td></tr>
<tr><td><strong>API0004</strong></td><td>Invalid nonce</td><td>Check your nonce value. It must be different than last nonce used in the last 150 seconds.</td></tr>
<tr><td><strong>API0005</strong></td><td>Invalid signature</td><td>Posted signature doesn't match with ours.</td></tr>
<tr><td><strong>API0006</strong></td><td>Your account is frozen</td><td>Contact support to unfreeze your account.</td></tr>
<tr><td><strong>API0008</strong></td><td>Authentication failed</td><td>Can't find customer with selected API key.</td></tr>
<tr><td><strong>API0009</strong></td><td>Please update your profile with your FATCA information, before using API.</td><td>Check that you filled out the FATCA information form on your account.</td></tr>
<tr><td><strong>API0010</strong></td><td>Invalid version</td><td>Check that you send \"v2\" in the version authorization header.</td></tr>
<tr><td><strong>API0011</strong></td><td>Wrong API key format</td><td>Check that your API key string is correct.</td></tr>
<tr><td><strong>API0012</strong></td><td>X-Auth header is required</td><td>X-Auth header is probably missing in your request.</td></tr>
<tr><td><strong>API0013</strong></td><td>X-Auth-Signature header is required</td><td>X-Auth-Signature header is probably missing in your request.</td></tr>
<tr><td><strong>API0014</strong></td><td>X-Auth-Nonce header is required</td><td>X-Auth-Nonce header is probably missing in your request.</td></tr>
<tr><td><strong>API0015</strong></td><td>X-Auth-Timestamp header is required</td><td>X-Auth-Timestamp header is probably missing in your request.</td></tr>
<tr><td><strong>API0016</strong></td><td>X-Auth-Version header is required</td><td>X-Auth-Version header is probably missing in your request.</td></tr>
<tr><td><strong>API0017</strong></td><td>X-Auth-Timestamp header is out of boundaries</td><td>Timestamp you added in the header is either too old or too new. Check that timestamp is within 150 second timeframe.</td></tr>
<tr><td><strong>API0018</strong></td><td>X-Auth-Timestamp header is invalid</td><td>Check the format of X-Auth-Timestamp header.</td></tr>
<tr><td><strong>API0019</strong></td><td>Content-Type header is not accepted</td><td>Please specify the correct content type.</td></tr>
<tr><td><strong>API0020</strong></td><td>Content-Type header should not be present</td><td>Please make sure you're not sending any body in the request.</td></tr>
<tr><td><strong>API0021</strong></td><td>Please make sure url query string is not too long</td><td>Please make sure the total length of the url does not exceed 2000 characters.</td></tr>
</tbody>
</table>
<SecurityDefinitions />

## Authentication examples
**Note:** if the request body is empty, the Content-Type header has to be removed both from the headers and from the
signature

<div class=\"api__code mb48\">
    <div class=\"api__code-header\">
        <span>Python</span>
        <span class=\"icon icon--code\"></span>
    </div>

```python
import hashlib
import hmac
import time
import requests
import uuid
import sys
from urllib.parse import urlencode

api_key = 'api_key'
API_SECRET = b'api_key_secret'

timestamp = str(int(round(time.time() * 1000)))
nonce = str(uuid.uuid4())
content_type = 'application/x-www-form-urlencoded'
payload = {'offset': '1'}

payload_string = urlencode(payload)

# '' (empty string) in message represents any query parameters or an empty string in case there are none
message = 'BITSTAMP ' + api_key + \\
    'POST' + \\
    'www.bitstamp.net' + \\
    '/api/v2/user_transactions/' + \\
    '' + \\
    content_type + \\
    nonce + \\
    timestamp + \\
    'v2' + \\
    payload_string
message = message.encode('utf-8')
signature = hmac.new(API_SECRET, msg=message, digestmod=hashlib.sha256).hexdigest()
headers = {
    'X-Auth': 'BITSTAMP ' + api_key,
    'X-Auth-Signature': signature,
    'X-Auth-Nonce': nonce,
    'X-Auth-Timestamp': timestamp,
    'X-Auth-Version': 'v2',
    'Content-Type': content_type
}
r = requests.post(
    'https://www.bitstamp.net/api/v2/user_transactions/',
    headers=headers,
    data=payload_string
    )
if not r.status_code == 200:
    raise Exception('Status code not 200')

string_to_sign = (nonce + timestamp + r.headers.get('Content-Type')).encode('utf-8') + r.content
signature_check = hmac.new(API_SECRET, msg=string_to_sign, digestmod=hashlib.sha256).hexdigest()
if not r.headers.get('X-Server-Auth-Signature') == signature_check:
    raise Exception('Signatures do not match')

print(r.content)


```

</div>
<div class=\"api__code mb48\">
    <div class=\"api__code-header\">
        <span>Java</span>
        <span class=\"icon icon--code\"></span>
    </div>

```java
package com.example.AuthenticationExample;

import org.apache.commons.codec.binary.Hex;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.UUID;

public class Authentication {
    public static void main(String[] args) {
        String apiKey = String.format(\"%s %s\", \"BITSTAMP\", \"api_key\");
        String apiKeySecret = \"api_key_secret\";
        String httpVerb = \"POST\";
        String urlHost = \"www.bitstamp.net\";
        String urlPath = \"/api/v2/user_transactions/\";
        String urlQuery = \"\";
        String timestamp = String.valueOf(System.currentTimeMillis());
        String nonce = UUID.randomUUID().toString();
        String contentType = \"application/x-www-form-urlencoded\";
        String version = \"v2\";
        String payloadString = \"offset=1\";
        String signature = apiKey +
            httpVerb +
            urlHost +
            urlPath +
            urlQuery +
            contentType +
            nonce +
            timestamp +
            version +
            payloadString;

        try {
            SecretKeySpec secretKey = new SecretKeySpec(apiKeySecret.getBytes(), \"HmacSHA256\");
            Mac mac = Mac.getInstance(\"HmacSHA256\");
            mac.init(secretKey);
            byte[] rawHmac = mac.doFinal(signature.getBytes());
            signature = new String(Hex.encodeHex(rawHmac)).toUpperCase();

            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(\"https://www.bitstamp.net/api/v2/user_transactions/\"))
                .POST(HttpRequest.BodyPublishers.ofString(payloadString))
                .setHeader(\"X-Auth\", apiKey)
                .setHeader(\"X-Auth-Signature\", signature)
                .setHeader(\"X-Auth-Nonce\", nonce)
                .setHeader(\"X-Auth-Timestamp\", timestamp)
                .setHeader(\"X-Auth-Version\", version)
                .setHeader(\"Content-Type\", contentType)
                .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() != 200) {
                throw new RuntimeException(\"Status code not 200\");
            }

            String serverSignature = response.headers().map().get(\"x-server-auth-signature\").get(0);
            String responseContentType = response.headers().map().get(\"Content-Type\").get(0);
            String stringToSign = nonce + timestamp + responseContentType + response.body();

            mac.init(secretKey);
            byte[] rawHmacServerCheck = mac.doFinal(stringToSign.getBytes());
            String newSignature = new String(Hex.encodeHex(rawHmacServerCheck));

            if (!newSignature.equals(serverSignature)) {
                throw new RuntimeException(\"Signatures do not match\");
            }

            System.out.println(response.body());

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}


```

</div>
<div class=\"api__code mb48\">
    <div class=\"api__code-header\">
        <span>C++</span>
        <span class=\"icon icon--code\"></span>
    </div>

```cpp
#include <curl/curl.h>
#include <openssl/hmac.h>
#include <uuid/uuid.h>

#include <iostream>
#include <string>
#include <chrono>
#include <iomanip>

static size_t write_call_back(void *contents, size_t size, size_t nmemb, void *userp)
{
    ((std::string*)userp)->append((char*)contents, size * nmemb);
    return size * nmemb;
}

std::string b2a_hex(char *byte_arr, int n)
{
    const static std::string hex_codes = \"0123456789abcdef\";
    std::string hex_string;
    for ( int i = 0; i < n ; ++i ) {
        unsigned char bin_value = byte_arr[i];
        hex_string += hex_codes[( bin_value >> 4 ) & 0x0F];
        hex_string += hex_codes[bin_value & 0x0F];
    }
    return hex_string;
}

std::string url_encode(std::string data)
{
    std::string res = data;
    CURL *curl = curl_easy_init();

    if(curl) {
        char *output = curl_easy_escape(curl, data.c_str(), data.length());
        if(output) {
            res = output;
            curl_free(output);
        }
    }

    return res;
}


int main() {

    const std::string api_key = \"api_key\";
    const std::string api_secret = \"api_key_secret\";

    std::chrono::milliseconds timestamp = std::chrono::duration_cast< std::chrono::milliseconds >(
            std::chrono::system_clock::now().time_since_epoch()
    );

    uuid_t uuid;
    uuid_string_t nonce;
    uuid_generate(uuid);
    uuid_unparse_lower(uuid, nonce);

    std::string x_auth = \"BITSTAMP \" + api_key;
    std::string x_auth_nonce = nonce;
    std::string x_auth_timestamp = std::to_string(timestamp.count());
    std::string x_auth_version = \"v2\";
    std::string content_type = \"application/x-www-form-urlencoded\";
    std::string payload = url_encode(\"{offset:1}\");

    std::string http_method = \"POST\";
    std::string url_host = \"www.bitstamp.net\";
    std::string url_path = \"/api/v2/user_transactions/\";
    std::string url_query = \"\";

    std::string data_to_sign = \"\";
    data_to_sign.append(x_auth);
    data_to_sign.append(http_method);
    data_to_sign.append(url_host);
    data_to_sign.append(url_path);
    data_to_sign.append(url_query);
    data_to_sign.append(content_type);
    data_to_sign.append(x_auth_nonce);
    data_to_sign.append(x_auth_timestamp);
    data_to_sign.append(x_auth_version);
    data_to_sign.append(payload);

    // calculate hmac signature
    unsigned char* result;
    unsigned int len = 20;
    result = (unsigned char*)malloc(sizeof(char) * len);

    HMAC_CTX ctx;
    HMAC_CTX_init(&ctx);

    HMAC_Init_ex(&ctx, api_secret.c_str(), api_secret.length(), EVP_sha256(), NULL);
    HMAC_Update(&ctx, (unsigned char*)data_to_sign.c_str(), data_to_sign.length());
    HMAC_Final(&ctx, result, &len);
    HMAC_CTX_cleanup(&ctx);

    std::string x_auth_signature = b2a_hex( (char *)result, 32 );
    free(result);

    // send request
    CURL *curl;
    CURLcode res;
    std::string read_buffer;

    curl = curl_easy_init();

    if(curl) {

        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, (\"X-Auth: \" + x_auth).c_str());
        headers = curl_slist_append(headers, (\"X-Auth-Signature: \" + x_auth_signature).c_str());
        headers = curl_slist_append(headers, (\"X-Auth-Nonce: \" + x_auth_nonce).c_str());
        headers = curl_slist_append(headers, (\"X-Auth-Timestamp: \" + x_auth_timestamp).c_str());
        headers = curl_slist_append(headers, (\"X-Auth-Version: \" + x_auth_version).c_str());
        headers = curl_slist_append(headers, (\"Content-Type: \" + content_type).c_str());

        std::string url = \"https://\" + url_host + url_path + url_query;

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, payload.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_call_back);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &read_buffer);

        res = curl_easy_perform(curl);

        if(res != CURLE_OK) {
            std::cout << \"curl_easy_perform() failed: \" << curl_easy_strerror(res) << std::endl;
        }

        std::cout << \"curl_easy_perform() response: \" << read_buffer << std::endl;

        curl_easy_cleanup(curl);

    }

    return 0;

}


```

</div>

# Changelog

### 2023-10-12
* New API changes due to compliance with Travel Rule requirements:
  * Travel Rule endpoints: https://www.bitstamp.net/api/#tag/Travel-rule-public
  * Changes to all crypto withdrawals to provide optional Travel Rule data (this data will become mandatory in the near future which will be a breaking change!).
* All endpoints for creating new orders have an optional **client_order_id field**. If submitted, up until now client_order_id had to be unique. We are deprecating the checking of duplicate **client_order_id** and will allow duplicates beginning November 2023. If you currently rely on us checking for duplicates and us rejecting those, this change may cause you to submit multiple orders so please make the necessary changes to not rely on that check.
* New API endpoints that enable you to access full Earn (Staking and Lending) functionality.

### 2023-09-29
* Added **revoke_all_api_keys** as a kill switch functionality to terminate all API connectivity:
  * `POST /api/v2/revoke_all_api_keys/`

### 2023-09-25
* Updated GTD order description by noting that the orders expire at midnight:
  * `POST /api/v2/buy/{market_symbol}/`
  * `POST /api/v2/sell/{market_symbol}/`

### 2023-09-22
* Extended error responses for `/api/v2/cancel_order`:
  * `POST /api/v2/cancel_order/`

### 2023-08-31
* Added market property with the goal of deprecating **currency_pair** long term:
  * `GET /api/v2/fees/trading/`
* Added datetime and type properties to order status endpoint:
  * `GET /api/v2/order_status/`

### 2023-07-05
* Introduced a new side field (0 - buy; 1 - sell) to all Ticker endpoints:
  * `GET /api/v2/ticker/`
  * `GET /api/v2/ticker/{currency_pair}/`
  * `GET /api/v2/ticker_hour/`

### 2023-06-29
* Updated **destination_tag** field description for Ripple IOU address endpoint:
  * `POST /api/v2/ripple_address/`

### 2023-04-07
* Introduced a new Currencies endpoint:
  * `GET /api/v2/currencies/`: Get listed currencies info.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v2
- Package version: v2
- Generator version: 7.4.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install bitstamp_public_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your bitstamp_public_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BitstampPublicApi = require('bitstamp_public_api');


var api = new BitstampPublicApi.AccountBalancesApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccountBalances(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.bitstamp.net*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BitstampPublicApi.AccountBalancesApi* | [**getAccountBalances**](docs/AccountBalancesApi.md#getAccountBalances) | **POST** /api/v2/account_balances/ | Account balances
*BitstampPublicApi.AccountBalancesApi* | [**getAccountBalancesForCurrency**](docs/AccountBalancesApi.md#getAccountBalancesForCurrency) | **POST** /api/v2/account_balances/{currency}/ | Account balance for currency
*BitstampPublicApi.DepositsApi* | [**getCryptoDepositAddress**](docs/DepositsApi.md#getCryptoDepositAddress) | **POST** /api/v2/{currency}_address/ | Crypto deposit address
*BitstampPublicApi.DepositsApi* | [**getRippleIOUDepositAddress**](docs/DepositsApi.md#getRippleIOUDepositAddress) | **POST** /api/v2/ripple_address/ | Ripple IOU deposit address
*BitstampPublicApi.DepositsApi* | [**getUnconfirmedBTCDeposits**](docs/DepositsApi.md#getUnconfirmedBTCDeposits) | **POST** /api/v2/btc_unconfirmed/ | Unconfirmed bitcoin deposits
*BitstampPublicApi.EarnApi* | [**earnSubscribe**](docs/EarnApi.md#earnSubscribe) | **POST** /api/v2/earn/subscribe/ | Subscribe to earn
*BitstampPublicApi.EarnApi* | [**earnSubscriptions**](docs/EarnApi.md#earnSubscriptions) | **GET** /api/v2/earn/subscriptions/ | Get earn subscriptions
*BitstampPublicApi.EarnApi* | [**earnSubscriptionsSetting**](docs/EarnApi.md#earnSubscriptionsSetting) | **POST** /api/v2/earn/subscriptions/setting/ | Manage subscription settings
*BitstampPublicApi.EarnApi* | [**earnTransactions**](docs/EarnApi.md#earnTransactions) | **GET** /api/v2/earn/transactions/ | Get earn transactions
*BitstampPublicApi.EarnApi* | [**earnUnsubscribe**](docs/EarnApi.md#earnUnsubscribe) | **POST** /api/v2/earn/unsubscribe/ | Unsubscribe from earn
*BitstampPublicApi.FeesApi* | [**getAllTradingFees**](docs/FeesApi.md#getAllTradingFees) | **POST** /api/v2/fees/trading/ | Trading fees
*BitstampPublicApi.FeesApi* | [**getAllWithdrawalFees**](docs/FeesApi.md#getAllWithdrawalFees) | **POST** /api/v2/fees/withdrawal/ | Withdrawal fees
*BitstampPublicApi.FeesApi* | [**getTradingFeesForCurrency**](docs/FeesApi.md#getTradingFeesForCurrency) | **POST** /api/v2/fees/trading/{market_symbol}/ | Trading fee for market
*BitstampPublicApi.FeesApi* | [**getWithdrawalFeeForCurrency**](docs/FeesApi.md#getWithdrawalFeeForCurrency) | **POST** /api/v2/fees/withdrawal/{currency}/ | Withdrawal fee for currency
*BitstampPublicApi.InstantConvertApi* | [**getLiquidationAddressTransactions**](docs/InstantConvertApi.md#getLiquidationAddressTransactions) | **POST** /api/v2/instant_convert_address/info/ | Instant convert address
*BitstampPublicApi.InstantConvertApi* | [**requestNewLiquidationAddress**](docs/InstantConvertApi.md#requestNewLiquidationAddress) | **POST** /api/v2/instant_convert_address/new/ | New instant convert address
*BitstampPublicApi.MarketInfoApi* | [**getEURUSDConversionRate**](docs/MarketInfoApi.md#getEURUSDConversionRate) | **GET** /api/v2/eur_usd/ | EUR/USD conversion rate
*BitstampPublicApi.MarketInfoApi* | [**getOHLCData**](docs/MarketInfoApi.md#getOHLCData) | **GET** /api/v2/ohlc/{market_symbol}/ | OHLC data
*BitstampPublicApi.MarketInfoApi* | [**getTradingPairsInfo**](docs/MarketInfoApi.md#getTradingPairsInfo) | **GET** /api/v2/trading-pairs-info/ | Trading pairs info
*BitstampPublicApi.OrderBookApi* | [**getOrderBook**](docs/OrderBookApi.md#getOrderBook) | **GET** /api/v2/order_book/{market_symbol}/ | Order book
*BitstampPublicApi.OrdersApi* | [**cancelAllOrders**](docs/OrdersApi.md#cancelAllOrders) | **POST** /api/v2/cancel_all_orders/ | Cancel all orders
*BitstampPublicApi.OrdersApi* | [**cancelOrder**](docs/OrdersApi.md#cancelOrder) | **POST** /api/v2/cancel_order/ | Cancel order
*BitstampPublicApi.OrdersApi* | [**cancelOrdersForMarket**](docs/OrdersApi.md#cancelOrdersForMarket) | **POST** /api/v2/cancel_all_orders/{market_symbol}/ | Cancel all orders for market
*BitstampPublicApi.OrdersApi* | [**getAllOpenOrders**](docs/OrdersApi.md#getAllOpenOrders) | **POST** /api/v2/open_orders/ | Open orders
*BitstampPublicApi.OrdersApi* | [**getOpenOrdersForMarket**](docs/OrdersApi.md#getOpenOrdersForMarket) | **POST** /api/v2/open_orders/{market_symbol}/ | Open orders for market
*BitstampPublicApi.OrdersApi* | [**getOrderStatus**](docs/OrdersApi.md#getOrderStatus) | **POST** /api/v2/order_status/ | Order status
*BitstampPublicApi.OrdersApi* | [**getUserTradingMarkets**](docs/OrdersApi.md#getUserTradingMarkets) | **GET** /api/v2/my_markets/ | Trading markets
*BitstampPublicApi.OrdersApi* | [**openInstantBuyOrder**](docs/OrdersApi.md#openInstantBuyOrder) | **POST** /api/v2/buy/instant/{market_symbol}/ | Buy instant order
*BitstampPublicApi.OrdersApi* | [**openInstantSellOrder**](docs/OrdersApi.md#openInstantSellOrder) | **POST** /api/v2/sell/instant/{market_symbol}/ | Sell instant order
*BitstampPublicApi.OrdersApi* | [**openLimitBuyOrder**](docs/OrdersApi.md#openLimitBuyOrder) | **POST** /api/v2/buy/{market_symbol}/ | Buy limit order
*BitstampPublicApi.OrdersApi* | [**openLimitSellOrder**](docs/OrdersApi.md#openLimitSellOrder) | **POST** /api/v2/sell/{market_symbol}/ | Sell limit order
*BitstampPublicApi.OrdersApi* | [**openMarketBuyOrder**](docs/OrdersApi.md#openMarketBuyOrder) | **POST** /api/v2/buy/market/{market_symbol}/ | Buy market order
*BitstampPublicApi.OrdersApi* | [**openMarketSellOrder**](docs/OrdersApi.md#openMarketSellOrder) | **POST** /api/v2/sell/market/{market_symbol}/ | Sell market order
*BitstampPublicApi.SecurityApi* | [**revokeAllAPIKeys**](docs/SecurityApi.md#revokeAllAPIKeys) | **POST** /api/v2/revoke_all_api_keys/ | Revoke all API access
*BitstampPublicApi.SubAccountApi* | [**transferFromMainToSub**](docs/SubAccountApi.md#transferFromMainToSub) | **POST** /api/v2/transfer-from-main/ | Transfer balance from Main to Sub Account
*BitstampPublicApi.SubAccountApi* | [**transferFromSubToMain**](docs/SubAccountApi.md#transferFromSubToMain) | **POST** /api/v2/transfer-to-main/ | Transfer balance from Sub to Main account
*BitstampPublicApi.TickersApi* | [**getCurrencies**](docs/TickersApi.md#getCurrencies) | **GET** /api/v2/currencies/ | Currencies
*BitstampPublicApi.TickersApi* | [**getCurrencyPairTickers**](docs/TickersApi.md#getCurrencyPairTickers) | **GET** /api/v2/ticker/ | All currency pairs tickers
*BitstampPublicApi.TickersApi* | [**getHourlyCurrencyPairTicker**](docs/TickersApi.md#getHourlyCurrencyPairTicker) | **GET** /api/v2/ticker_hour/{market_symbol}/ | Hourly  ticker
*BitstampPublicApi.TickersApi* | [**getMarketTicker**](docs/TickersApi.md#getMarketTicker) | **GET** /api/v2/ticker/{market_symbol}/ | Market ticker
*BitstampPublicApi.TransactionsPrivateApi* | [**getCryptoUserTransactions**](docs/TransactionsPrivateApi.md#getCryptoUserTransactions) | **POST** /api/v2/crypto-transactions/ | Crypto transactions
*BitstampPublicApi.TransactionsPrivateApi* | [**getUserTransactions**](docs/TransactionsPrivateApi.md#getUserTransactions) | **POST** /api/v2/user_transactions/ | User transactions
*BitstampPublicApi.TransactionsPrivateApi* | [**getUserTransactionsForMarket**](docs/TransactionsPrivateApi.md#getUserTransactionsForMarket) | **POST** /api/v2/user_transactions/{market_symbol}/ | User transactions for market
*BitstampPublicApi.TransactionsPublicApi* | [**getTransactions**](docs/TransactionsPublicApi.md#getTransactions) | **GET** /api/v2/transactions/{market_symbol}/ | Transactions
*BitstampPublicApi.TravelRulePrivateApi* | [**createContact**](docs/TravelRulePrivateApi.md#createContact) | **POST** /api/v2/travel_rule/contacts/ | Create contact
*BitstampPublicApi.TravelRulePrivateApi* | [**getAllContacts**](docs/TravelRulePrivateApi.md#getAllContacts) | **GET** /api/v2/travel_rule/contacts/ | Get all contacts
*BitstampPublicApi.TravelRulePrivateApi* | [**getContact**](docs/TravelRulePrivateApi.md#getContact) | **GET** /api/v2/travel_rule/contacts/{contact_uuid}/ | Get contact
*BitstampPublicApi.TravelRulePublicApi* | [**vaspList**](docs/TravelRulePublicApi.md#vaspList) | **GET** /api/v2/travel_rule/vasps/ | VASP list
*BitstampPublicApi.WebsocketApi* | [**getWebsocketToken**](docs/WebsocketApi.md#getWebsocketToken) | **POST** /api/v2/websockets_token/ | Websockets token
*BitstampPublicApi.WithdrawalsApi* | [**cancelWithdrawal**](docs/WithdrawalsApi.md#cancelWithdrawal) | **POST** /api/v2/withdrawal/cancel/ | Cancel bank or crypto withdrawal
*BitstampPublicApi.WithdrawalsApi* | [**getFiatWithdrawalStatus**](docs/WithdrawalsApi.md#getFiatWithdrawalStatus) | **POST** /api/v2/withdrawal/status/ | Fiat withdrawal status
*BitstampPublicApi.WithdrawalsApi* | [**getWithdrawalRequests**](docs/WithdrawalsApi.md#getWithdrawalRequests) | **POST** /api/v2/withdrawal-requests/ | Withdrawal requests
*BitstampPublicApi.WithdrawalsApi* | [**requestCryptoWithdrawal**](docs/WithdrawalsApi.md#requestCryptoWithdrawal) | **POST** /api/v2/{currency}_withdrawal/ | Crypto withdrawal
*BitstampPublicApi.WithdrawalsApi* | [**requestFiatWithdrawal**](docs/WithdrawalsApi.md#requestFiatWithdrawal) | **POST** /api/v2/withdrawal/open/ | Open bank withdrawal
*BitstampPublicApi.WithdrawalsApi* | [**requestRippleIOUWithdrawal**](docs/WithdrawalsApi.md#requestRippleIOUWithdrawal) | **POST** /api/v2/ripple_withdrawal/ | Ripple IOU withdrawal


## Documentation for Models

 - [BitstampPublicApi.AccountBalancesResponse](docs/AccountBalancesResponse.md)
 - [BitstampPublicApi.BankWithdrawalStatusRequest](docs/BankWithdrawalStatusRequest.md)
 - [BitstampPublicApi.BankWithdrawalStatusResponse](docs/BankWithdrawalStatusResponse.md)
 - [BitstampPublicApi.BuyInstantOrderRequest](docs/BuyInstantOrderRequest.md)
 - [BitstampPublicApi.BuySellLimitOrderRequest](docs/BuySellLimitOrderRequest.md)
 - [BitstampPublicApi.BuySellMarketOrderRequest](docs/BuySellMarketOrderRequest.md)
 - [BitstampPublicApi.BuySellOrderResponse](docs/BuySellOrderResponse.md)
 - [BitstampPublicApi.CancelAllOrdersResponse](docs/CancelAllOrdersResponse.md)
 - [BitstampPublicApi.CancelBankOrCryptoWithdrawalRequest](docs/CancelBankOrCryptoWithdrawalRequest.md)
 - [BitstampPublicApi.CancelBankWithdrawalResponse](docs/CancelBankWithdrawalResponse.md)
 - [BitstampPublicApi.CancelOrder200Response](docs/CancelOrder200Response.md)
 - [BitstampPublicApi.CancelOrderRequest](docs/CancelOrderRequest.md)
 - [BitstampPublicApi.CancelOrderResponse](docs/CancelOrderResponse.md)
 - [BitstampPublicApi.CancelWithdrawal200Response](docs/CancelWithdrawal200Response.md)
 - [BitstampPublicApi.ContactSchema](docs/ContactSchema.md)
 - [BitstampPublicApi.CorporateInfo](docs/CorporateInfo.md)
 - [BitstampPublicApi.CryptoTransaction](docs/CryptoTransaction.md)
 - [BitstampPublicApi.CryptoTransactionsRequest](docs/CryptoTransactionsRequest.md)
 - [BitstampPublicApi.CryptoTransactionsResponse](docs/CryptoTransactionsResponse.md)
 - [BitstampPublicApi.CryptoWithdrawalRequest](docs/CryptoWithdrawalRequest.md)
 - [BitstampPublicApi.CryptoWithdrawalResponse](docs/CryptoWithdrawalResponse.md)
 - [BitstampPublicApi.CurrencySchema](docs/CurrencySchema.md)
 - [BitstampPublicApi.DepositAddressRequest](docs/DepositAddressRequest.md)
 - [BitstampPublicApi.DepositAddressResponse](docs/DepositAddressResponse.md)
 - [BitstampPublicApi.EarnSubscriptionSchema](docs/EarnSubscriptionSchema.md)
 - [BitstampPublicApi.EarnSubscriptionSettingSchema](docs/EarnSubscriptionSettingSchema.md)
 - [BitstampPublicApi.EarnSubscriptionsSchema](docs/EarnSubscriptionsSchema.md)
 - [BitstampPublicApi.EarnTransactionSchema](docs/EarnTransactionSchema.md)
 - [BitstampPublicApi.ErrorResponse](docs/ErrorResponse.md)
 - [BitstampPublicApi.ErrorSchema](docs/ErrorSchema.md)
 - [BitstampPublicApi.EurUsdConversionRateResponse](docs/EurUsdConversionRateResponse.md)
 - [BitstampPublicApi.Fee](docs/Fee.md)
 - [BitstampPublicApi.FeeTradingResponse](docs/FeeTradingResponse.md)
 - [BitstampPublicApi.FeeWithdrawalRequest](docs/FeeWithdrawalRequest.md)
 - [BitstampPublicApi.FeeWithdrawalResponse](docs/FeeWithdrawalResponse.md)
 - [BitstampPublicApi.GetCryptoUserTransactions200Response](docs/GetCryptoUserTransactions200Response.md)
 - [BitstampPublicApi.GetFiatWithdrawalStatus200Response](docs/GetFiatWithdrawalStatus200Response.md)
 - [BitstampPublicApi.GetLiquidationAddressTransactions200Response](docs/GetLiquidationAddressTransactions200Response.md)
 - [BitstampPublicApi.GetOHLCData200Response](docs/GetOHLCData200Response.md)
 - [BitstampPublicApi.GetOrderBook200Response](docs/GetOrderBook200Response.md)
 - [BitstampPublicApi.GetOrderStatus200Response](docs/GetOrderStatus200Response.md)
 - [BitstampPublicApi.GetRippleIOUDepositAddress200Response](docs/GetRippleIOUDepositAddress200Response.md)
 - [BitstampPublicApi.GetUnconfirmedBTCDeposits200Response](docs/GetUnconfirmedBTCDeposits200Response.md)
 - [BitstampPublicApi.GetUserTransactions200Response](docs/GetUserTransactions200Response.md)
 - [BitstampPublicApi.GetWithdrawalRequests200Response](docs/GetWithdrawalRequests200Response.md)
 - [BitstampPublicApi.InstantConvertAddressInfoRequest](docs/InstantConvertAddressInfoRequest.md)
 - [BitstampPublicApi.InstantConvertAddressInfoResponse](docs/InstantConvertAddressInfoResponse.md)
 - [BitstampPublicApi.NewInstantConvertAddressRequest](docs/NewInstantConvertAddressRequest.md)
 - [BitstampPublicApi.NewInstantConvertAddressResponse](docs/NewInstantConvertAddressResponse.md)
 - [BitstampPublicApi.OHLCData](docs/OHLCData.md)
 - [BitstampPublicApi.OHLCDataResponseSchema](docs/OHLCDataResponseSchema.md)
 - [BitstampPublicApi.OpenBankWithdrawalRequest](docs/OpenBankWithdrawalRequest.md)
 - [BitstampPublicApi.OpenBankWithdrawalResponse](docs/OpenBankWithdrawalResponse.md)
 - [BitstampPublicApi.OpenInstantBuyOrder200Response](docs/OpenInstantBuyOrder200Response.md)
 - [BitstampPublicApi.OpenOrdersAllResponse](docs/OpenOrdersAllResponse.md)
 - [BitstampPublicApi.OpenOrdersPairResponse](docs/OpenOrdersPairResponse.md)
 - [BitstampPublicApi.Order](docs/Order.md)
 - [BitstampPublicApi.OrderBookResponse](docs/OrderBookResponse.md)
 - [BitstampPublicApi.OrderStatusRequest](docs/OrderStatusRequest.md)
 - [BitstampPublicApi.OrderStatusResponse](docs/OrderStatusResponse.md)
 - [BitstampPublicApi.OrderTransaction](docs/OrderTransaction.md)
 - [BitstampPublicApi.PaginationSchema](docs/PaginationSchema.md)
 - [BitstampPublicApi.RequestCryptoWithdrawal200Response](docs/RequestCryptoWithdrawal200Response.md)
 - [BitstampPublicApi.RequestFiatWithdrawal200Response](docs/RequestFiatWithdrawal200Response.md)
 - [BitstampPublicApi.RequestNewLiquidationAddress200Response](docs/RequestNewLiquidationAddress200Response.md)
 - [BitstampPublicApi.RequestRippleIOUWithdrawal200Response](docs/RequestRippleIOUWithdrawal200Response.md)
 - [BitstampPublicApi.RetailInfo](docs/RetailInfo.md)
 - [BitstampPublicApi.RevokedAPIKeySchema](docs/RevokedAPIKeySchema.md)
 - [BitstampPublicApi.RippleIOUDepositAddressResponse](docs/RippleIOUDepositAddressResponse.md)
 - [BitstampPublicApi.RippleIOUWithdrawalRequest](docs/RippleIOUWithdrawalRequest.md)
 - [BitstampPublicApi.RippleIOUWithdrawalResponse](docs/RippleIOUWithdrawalResponse.md)
 - [BitstampPublicApi.SellInstantOrderRequest](docs/SellInstantOrderRequest.md)
 - [BitstampPublicApi.SimpleErrorResponse](docs/SimpleErrorResponse.md)
 - [BitstampPublicApi.TickerHourResponse](docs/TickerHourResponse.md)
 - [BitstampPublicApi.TickerResponse](docs/TickerResponse.md)
 - [BitstampPublicApi.TickerWithPairResponse](docs/TickerWithPairResponse.md)
 - [BitstampPublicApi.Trade](docs/Trade.md)
 - [BitstampPublicApi.TradingPair](docs/TradingPair.md)
 - [BitstampPublicApi.TradingPairsInfoResponse](docs/TradingPairsInfoResponse.md)
 - [BitstampPublicApi.Transaction](docs/Transaction.md)
 - [BitstampPublicApi.TransactionsResponse](docs/TransactionsResponse.md)
 - [BitstampPublicApi.TransferFromMainToSub200Response](docs/TransferFromMainToSub200Response.md)
 - [BitstampPublicApi.TransferToFromMainRequest](docs/TransferToFromMainRequest.md)
 - [BitstampPublicApi.TransferToFromMainResponse](docs/TransferToFromMainResponse.md)
 - [BitstampPublicApi.UserTransactionsRequest](docs/UserTransactionsRequest.md)
 - [BitstampPublicApi.UserTransactionsResponse](docs/UserTransactionsResponse.md)
 - [BitstampPublicApi.VaspList200Response](docs/VaspList200Response.md)
 - [BitstampPublicApi.VaspSchema](docs/VaspSchema.md)
 - [BitstampPublicApi.WebsocketsTokenResponse](docs/WebsocketsTokenResponse.md)
 - [BitstampPublicApi.WithdrawalRequestsRequest](docs/WithdrawalRequestsRequest.md)
 - [BitstampPublicApi.WithdrawalRequestsResponse](docs/WithdrawalRequestsResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### x_auth


- **Type**: API key
- **API key parameter name**: X-Auth
- **Location**: HTTP header

### x_auth_nonce


- **Type**: API key
- **API key parameter name**: X-Auth-Nonce
- **Location**: HTTP header

### x_auth_signature


- **Type**: API key
- **API key parameter name**: X-Auth-Signature
- **Location**: HTTP header

### x_auth_subaccount_id


- **Type**: API key
- **API key parameter name**: X-Auth-Subaccount-Id
- **Location**: HTTP header

### x_auth_timestamp


- **Type**: API key
- **API key parameter name**: X-Auth-Timestamp
- **Location**: HTTP header

### x_auth_version


- **Type**: API key
- **API key parameter name**: X-Auth-Version
- **Location**: HTTP header

### x_content_type


- **Type**: API key
- **API key parameter name**: Content-Type
- **Location**: HTTP header

