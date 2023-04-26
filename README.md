React апликацијата треба да биде онаа која ќе ги прави соодветните барања кон вашето API. Внимавајте да избегнете CORS error.
Оваа апликација треба да има сличен изглед како апликацијата од аудиториски вежби, односно:
- На почетната страна се прикажани сите книги (може да се видат на патека / и /books)
o За секоја книга овозможено е копче Edit, Delete, Mark As Taken
o На клик на копчињата Edit/ Delete се прави повик кон API и соодветно да се измени/ избрише книгата
o На клик на копчето Mark As Taken, потребно е да се направи повик кон API и соодветно да се намали бројот на availableCopies
o Дополнително има едно копче Add a new book, со кое се овозможува додавање на нова книга
- На друга страна се прикажани сите категории (може да се видат на патека /categories)
- Постои header дел кој всушност е мени за навигација
За React апликацијата, освен рутирање, потребно е барем еднаш да искористите Hook, на пример useState. Дополнително, за прикажувањето на книгите треба да се имплементира пагинација, т.ш. по 5 книги ќе се прикажуваат на секоја страна.
