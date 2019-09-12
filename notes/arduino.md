# Arduino

----

- See: https://www.arduino.cc/reference/en/
- See: [Заметки Ардуинщика](https://www.youtube.com/channel/UC4axiS76D784-ofoTdo5zOA/videos)
- See: [Уроки Arduino #6 - отработка нажатия кнопки при помощи флажков](https://www.youtube.com/watch?v=sLRjMJv1SSs)


## `Serial.println()`

- See: https://www.arduino.cc/reference/en/language/functions/communication/serial/println/

```ino
void setup() {
  Serial.begin(9600); // For debugging
}

void loop() {
  Serial.println("Button pressed");
}
```

## I2C bus devices port address scanner

- See: https://playground.arduino.cc/Main/I2cScanner/
- See: https://gist.github.com/VovanR/48163f521102ce3861223bf1f9987714
