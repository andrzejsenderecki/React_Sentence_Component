# React_Sentence_Component

https://andrzejsenderecki.github.io/React_Sentence_Component/

Install: npm install<br>
Start: npm start<br>
Tests: npm test<br>

Testy JEST/ENZYME: sentence/src/components/Sentence/sentence.component.spec.js

Komponent Sentence służy to wyświetlania podanych przez props.sentences zdań, po kolei, w dwóch rzędach, litera po literze. Posiada dwa warianty wyświetlania sentencji które można przełączać za pomocą przycisków.

Pierwszy wariant wyświetla dwa rzędy z sentencjami, przy czym pierwszy rząd wyświetla pierwszą sentencję z tablicy, a drugi wyświetla pozostałe sentencje począwszy od drugiej. Kiedy komponent dojdzie do końca tablicy na ekranie pozostaje wyświetlona ostatnia sentencja.

Drugi wariant wyświetla dwa rzędy z sentencjami, przy czym pierwszy rząd wyświetla pierwszą sentencję z tablicy, a drugi wyświetla pozostałe sentencje począwszy od drugiej. Kiedy komponent dojdzie do ostatniej sentencji, wówczas zaczyna wyświetlać od początku sentencje w drugim rzędzie.

W obu przypadkach drugi rząd wyświetla sentencje w taki sposób, że kiedy dana sentencja wyświetlona jest w całości to znika i na jej miejsce litera po literze pojawia się kolejna.

Przyciski pozwalają na wybór pomiędzy pierwszym, a drugim wariantem wyświetlania sentencji.

Główny komponent Sentence:
- przyjmuje przez props.sentences tablicę z sentencjami

- przyjmuje przez props.time czas dla interwału wyświetlającego kolejne litery sentencji

- renderuje następujące komponenty:
	- 3 x komponent <Paragraph /> w tym:
		- 2 x komponent reprezentujący rzędy z sentencjami. Komponent pierwszy przyjmuje przez props.sentenceA pierwszą sentencję z tablicy. Komponent drugi przyjmuje przez props.sentenceB pozostałe sentencje z tablicy. Propsy te przekazane są ze state.sentenceA i state.sentenceB komponentu Sentence.
		- 1 x komponent wyświetlający informację który wariant komponentu jest renderowany. Komponent przyjmuje przez  props.variant odpowiedni wariant. Informacja ta pobrana jest ze state.option komponentu Sentence.
  
  - 2 x komponent <Button /> który przyjmuje przez props.text tekst który będzie wyświetlony na przycisku oraz props.changeOption w którym przyjmuje od rodzica, czyli komponentu Sentence metodę changeOption.
  
- komponent przechowuje stan który zawiera:
	- tablica z sentencjami: sentences
	- pierwsza sentencja z tablicy: sentenceA
	- pozostałe sentencje z tablicy: sentenceB
	- wariant wyświetlania komponentu: option
  
- komponent posiada metodę componentDidMount któr uruchamia metodę startInterval

- komponent posiada metodę componentWillUnmount która czyści interwał
  
- komponent posiada metodę startInterval która:
	- wskazuje czas w którym będą pojawiały się kolejne znaki sentencji w rzędach
	- wstawia kolejne znaki do state.sentenceA i state.sentenceB
	- ustala który rząd będzie renderowany
  
- komponent posiada metodę changeOption która:
	- resetuje interwał
	- resetuje state.sentenceA i state.sentenceB
	- ustawia nową wartość state.option
	- uruchamia metodę startInterval
