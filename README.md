Zadanie referencyjne – Front-end Developer

Prosimy stworzyć aplikację “invoice generator” za pomocą Angular v.7+, która będzie się składać z 2 stron:
1 strona:
Formularz z listą towarów. Lista nie jest ograniczona ilością, można dodać dowolną ilość pozycji i usuwać
dowolny wiersz w dowolnym czasie. Jedna pozycja to:
- Name - pole wymagane, minimalna ilość znaków to 3, maksymalna ilość znaków to 30. Pole
przyjmuje dowolne znaki.
- Count - pole wymagane, minimum 1, maksimum 100. Pole przyjmuje tylko liczby całkowite.
- Price - pole wymagane, minimum 1, maksimum 1000000. Pole przyjmuje tylko liczby całkowite.
Na dole musi się znajdować zawsze aktywny przycisk “Submit”, który po kliknięciu:
- w przypadku gdy formularz zawiera błędy – wyświetli je
- w przypadku pustego formularza – pokaże komunikat ”Please add items”
- w przypadku gdy formularz ma przynajmniej 1 pozycję bez błędów – przekieruje do strony 2

Prosimy, aby druga strona składała się z dwóch części:
- informacja o firmie z pliku company.json, proszę nie importować pliku bezpośrednio do projektu,
a załadować go tak, aby była to odpowiedź z backendu. Telefony wyświetlić oddzielone przecinkami.
- lista wszystkich pozycji z pierwszej strony i na dole - suma wszystkich towarów pomnożona przez ich
ilość.
2 strona jest zawsze widoczna w menu. Jeśli otworzymy 2 stronę bezpośrednio to zamiast listy towarów musi
wyświetlić się komunikat ”No items”
Aplikacja nie musi mieć błędów w konsoli. Prosim, aby aplikacja była napisana według dobrych praktyk.
Wygląd aplikacji nie ma znaczenia, główne żeby działała według wymogów.
