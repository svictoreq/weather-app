# Tarea de entrenamiento de React por Victor Requena.
Este es el proyecto final del entrenamiento de React, una aplicación que muestra el clima de la ciudad buscada en un rango de 5 días.

El enlace en donde se encuentra la aplicación es el siguiente:
https://sancrisoft-weather-app.firebaseapp.com
La aplicación que se encuentra alojada en Firebase, es la versión mejorada.

## Descripción.
La aplicación fue construida en dos versiones: La más similar a la original, y la mejorada. La diferencia entre ambas versiones, es que la original muestra el tiempo en horario local, y la mejorada, muestra el tiempo en la zona horaria de la ciudad seleccionada.

## ¿Por qué la versión mejorada?
Como se especifica en la descripción de la aplicación, esta misma cuenta con una versión mejorada. Esta versión fue creada debido a un error en la aplicación original; pues esta muestra los días del forecast en horario local, pero esto representa un problema al buscar el clima en ciudades donde la diferencia horaria es significantemente grande. Por ejemplo, el huso horario en Venezuela es -04:00 GMT, y en Melbourne - Australia, el huso horario es: +11:00 GTM. Lo que esto nos indica, es que tenemos una diferencia de 15 horas con Melbourne - Australia. Esto representa un problema, porque el servidor entrega en la respuesta del request, un `unix timestamp` con un momento exacto en horario UTC (que podría ser considerado 0 GTM), y este `timestamp` es llevado a una hora local con `new Date(<timestamp> * 1000);`, pero cuando se realiza una búsqueda de una ciudad como Melbourne, muestra un tiempo de un día de retraso al tiempo real, ya que muestra la hora en tiempo local. Por esta razón, se creó una versión que en vez de mostrar los días en tiempo local, los muestra en el tiempo de la ciudad buscada.

La versión mejorada se encuentra en el branch `improved-version`.

## Tiempo de construcción.
El tiempo aproximado de construcción de la aplicación, fue de 16 horas.

## Autor
2018 - Victor Requena
