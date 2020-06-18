 # Youtube Player  
Link:  
https://hhh1361.github.io/drawing-app/
---

### Technologies:  
JS, React, Redux, Bootstrap.

---
### Description:  
Application to drow with text commands.

 ---

Условие: 
1.	Задачу необходимо решить на JavaScript.  
2.	Ваш код JavaScript должен соответствовать требованиям последней спецификации ES2018 
3.	Применение React или Vue категорически приветствуется! 
4.	Поле для рисования должно быть выполнено в виде HTML-страницы (располагайте HTML элементы в соответствии с логикой вашего приложения), не используйте элемент <canvas> и его API 
5.	Убедитесь, что программа закончена и покрыта тестами! 
 
Задача: 
 
Ваша задача - написать простую программу для рисования, исполняющую последовательность команд. Используйте следующие команды: 
 
C w h  
L x1 y1 x2 y2 
R x1 y1 x2 y2 
B x y c 
 
Canvas: создать canvas шириной w и высотой h. 
Line: проложить линию от (x1,y1) до (x2,y2), используя для рисования псевдографический символ “x”. Поддерживаются только горизонтальные и вертикальные линии.  
Rectangle: создать прямоугольник с верхним левым углом в точке (x1,y1), нижним правым углом в точке (x2,y2). Вертикальные и горизонтальные линии должны быть отрисованы псевдографическими символами “x”.  
Bucket Fill: залить всю область (x,y) цветом ("colour", c), аналогично тому, как работает инструмент “Заливка” в графических редакторах 
Важно: рисовать можно только при условии, что создан canvas! 
 
Пример команд:  
C 20 4  
L 1 2 6 2  
L 6 3 6 4  
R 16 1 20 3  
B 10 3 o   
