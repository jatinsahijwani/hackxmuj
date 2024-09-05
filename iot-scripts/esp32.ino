#include<ArduinoJson.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <SoftwareSerial.h>

// Replace with your network credentials
const char* ssid = "realme C53";
const char* password = "9413730075";

// Create an instance of the server
AsyncWebServer server(80);


// Variable to store the latest sensor data
int value = 0;
int ldrPin = 15;
void setup() {
 // Initialize serial communication for debugging
 Serial.begin(115200);
 pinMode(ldrPin,INPUT);
 // Connect to Wi-Fi
 WiFi.begin(ssid, password);
 while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
 }

WiFi.mode(WIFI_STA);

 Serial.println("Connected to WiFi");
 Serial.println(WiFi.localIP());

 // Route for root / web page
server.on("/smart-band", HTTP_GET, [](AsyncWebServerRequest *request){
    Serial.println("Arrived request");
    StaticJsonDocument<200> jsonDoc;
    jsonDoc["value"] = value;
    String jsonData;
    serializeJson(jsonDoc, jsonData);
    AsyncResponseStream *response = request->beginResponseStream("application/json");
    response->addHeader("Access-Control-Allow-Origin", "*"); 
    response->print(jsonData);
    request->send(response);
});

server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    Serial.println("Arrived request");
    StaticJsonDocument<200> jsonDoc;
    jsonDoc["ABCD"] = "ABCD";
    String jsonData;
    serializeJson(jsonDoc, jsonData);
    AsyncResponseStream *response = request->beginResponseStream("application/json");
    response->addHeader("Access-Control-Allow-Origin", "*"); 
    response->print(jsonData);
    request->send(response);
});

 // Start the server
 server.begin();
}


void loop() {
value = digitalRead(ldrPin);
delay(1000); 
}