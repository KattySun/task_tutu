# task_tutu

**Решение каждой задачи вынесено в отдельный файл js. Нумерация задач введена сквозная, поэтому для удобства ниже дано краткое описание задач. В некоторых задачах также приведены пояснен
Для просмотра результатов необходимо открыть index.html в браузере (все результаты выводятся в консоль).**

**Задача №1**
Написать функцию dscount, которая подсчитывает количество идущих подряд символов s1 и s2 в строке, без учёта регистра.

**Задача №2**
Реализовать функцию checkSyntax(string), проверяющую на синтаксическую верность последовательность скобок. Задача не сводится к простой проверке сбалансированности скобок. Нужно еще учитывать их последовательность (вложенность).

**Задача №3**
*Есть 2 сковороды для оладьев, каждая из которых вмещает ровно по 1 блинчику за 1 раз.
*Есть 3 панкейка (блинчика), которые надо пожарить.
*За 1 минуту жарится 1 сторона блинчика.
*Блинчики надо обжарить с 2х сторон.
Итерацией считать процесс жарки 1й стороны 2х блинчиков на 2х сковородах. Сколько нужно времени (итераций) при оптимальном распределении чтобы пожарить 3 панкейка?

**Решение:**
Итерации:
1. Обжариваем 1-ый и 2-ой блины на  2-х сковородках с одной стороны - 1 минута;
2. 1 блин откаладываем в сторону, на его место кладем 3-ий блин, а 2-ой переворачиваем и жарим с другой стороны - 1 минута;
3. Когда блин 2 готов, убираем его со сковородки. На его место возвращаем 1-ый блин и жарим с необжаренной стороны. 3-ий блин переворачиваем и жарим совместно с 1-м - 1 минута.

Таким образом, в общей сумме затратится 3 минуты на обжарку всех блинов.

**Задача №4**
Посмотрите на код:
```javascript
function func(s, a, b) {

    if (s.match(/^$/)) {
        return -1;
    }

    var i = s.length -1;
    var aIndex =     -1;
    var bIndex =     -1;

    while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
        if (s.substring(i, i +1) == a) {
            aIndex = i;
        }
        if (s.substring(i, i +1) == b) {
            bIndex = i;
        }
        i = i - 1;
    }

    if (aIndex != -1) {
        if (bIndex == -1) {
            return aIndex;
        }
        else {
            return Math.max(aIndex, bIndex);
        }
    }

    if (bIndex != -1) {
        return bIndex;
    }
    else {
        return -1;
    }
}
```
Что можно улучшить? Как бы вы его переписали?

**Пояснение по решению:**
Тут реализуется поиск позиции символа в строке, который расположен дальше (a или b в строке s). Новая реализация функции - newFunc.

**Задача №5**

```javascript
function drawRating(vote) {
    if (vote >= 0 && vote <= 20) {
        return '★☆☆☆☆';
    }
    else if (vote > 20 && vote <= 40) {
        return '★★☆☆☆';
    }
    else if (vote > 40 && vote <= 60) {
        return '★★★☆☆';
    }
    else if (vote > 60 && vote <= 80) {
        return '★★★★☆';
    }
    else if (vote > 80 && vote <= 100) {
        return '★★★★★';
    }
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
```

Что можно улучшить? Как бы вы переписали функцию drawRating при условии что на вход функции drawRating должна приходить переменная vote, содержащая значение от 0 до 100.

**Пояснение по решению:**
Новая реализация функции - newDrawRating.

**Задача №6**

Реализуйте функцию parseUrl(string), которая будет парсить URL строку и возвращать объект с распарсенными данными.
