#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>


// Set these to run example.
#define FIREBASE_HOST "joao-e0c75.firebaseio.com"
#define FIREBASE_AUTH "YQO4u3dec4TJ77NKImwekW3w4OiUPvMxC7gUOGk0"
#define WIFI_SSID "Joao10Mariano"
#define WIFI_PASSWORD "mariano75"

#define LAMP_PIN D2
#define LAMP_PIN1 D1
#define LAMP_PIN2 D3
#define LAMP_PIN3 D5


void setupWifi(){
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
}



void setup() {

   pinMode(LAMP_PIN, OUTPUT);
  //digitalWrite(LAMP_PIN, LOW); 

   pinMode(LAMP_PIN1, OUTPUT);
  //digitalWrite(LAMP_PIN1, LOW); 

  pinMode(LAMP_PIN2, OUTPUT);
 // digitalWrite(LAMP_PIN2, LOW);

  pinMode(LAMP_PIN3, OUTPUT);
 // digitalWrite(LAMP_PIN3, LOW);

   Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Serial.begin(9600);
   
  setupWifi();  

    
}

void loop() { 
 

  // Verifica o valor da lampada no firebase 
  bool lampValue = Firebase.getBool("lamp");
  digitalWrite(LAMP_PIN, lampValue ? HIGH : LOW);

  bool lampValue1 = Firebase.getBool("lamp1");
  digitalWrite(LAMP_PIN1, lampValue1 ? HIGH : LOW); 

  
  bool lampValue2 = Firebase.getBool("lamp2");
  digitalWrite(LAMP_PIN2, lampValue2 ? HIGH : LOW); 

   
  bool lampValue3 = Firebase.getBool("lamp3");
  digitalWrite(LAMP_PIN3, lampValue3 ? HIGH : LOW);
  
  delay(100);
}
