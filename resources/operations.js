const operations = [
        {
            "Name": "Hypotenuse berechnen",
            "Beschreibung": "Anhand von Ankathete und Gegenkathete die Länge der Hypotenuse berechnen.",
            "ParameterNamen":["Ankathete","Gegenkathete"],
            "Regel": "sqrt (Ankathete^2 + Gegenkathete^2)"
        },
        {
            "Name": "Ganzzahligen Rest ausgeben",
            "Beschreibung": "Ausgehend von einer Zahl wird der ganzzahlige Rest einer Division berechnet.",
            "ParameterNamen":["Zahl","Divisor"],
            "Regel": "Zahl%Divisor"
        },
        {
            "Name": "Kreisumfang berechnen",
            "Beschreibung": "Mit dem Durchmesser eines Kreises kann hier der Umfang berechnet werden.",
            "ParameterNamen":["Durchmesser"],
            "Regel": "Durchmesser*3.1415"
        },
        {
            "Name": "Kompliziertere Regel",
            "Beschreibung": "Beispiel mit mehr Parametern und Operatoren.",
            "ParameterNamen":["a","b","c","d","e"],
            "Regel": "a+b(c^d)/e"
        }
    ]

module.exports = operations;