# VIM

----

`V` — Выделение строки

`Ctrl + v` — Вертикальное выделение

`Ctrl + v` + `I` — Писать сразу на несколько строк

`<<` `>>` — Двигать строку

`J` — Склеить со след строкой

`y` — Копировать

`yy` `Y` — Копировать строку

`x` `X` — Вырезать


`d` — Удалить

`dd` — Вырезать строку

`D` — Вырезать до конца строки

`"_dd` — Удалить и не заносить в буфер обмена (black hole)

`d4w` — Удалить 4 слова

`dfe` — Удалить до символа 'e' (включительно)


`:co30` — Копировать строку на 30 строку

`:m23` — Переместить строку на 23 строку

`p` `P` — Вставить строку

`o` `O` — Новая строка

`Ctrl + p` — Перейти к файлу

`ZZ` — Записать и выйти



`u` — Отмена

`Ctrl + r` — Восстановление



`i` — Редактирование на позиции курсора

`I` — Редактирование в начале строки

`a` — Редактирование после позиции курсора

`A` — Редактирование в конце строки

`s` — Удаляет выделенное или под курсором и переходит в режим редактирования

`S` — Редактирование строки


`:e` — Перечитать файл

`zc` `zo` — Свернуть/Развернуть код

`z` + `M` `R` — Свернуть/Развернуть весь код

`=` `==` — Расставить отступы

`:retab` — Конвертировать табы в пробелы

`ciw` — Изменить слово под курсором

`ci` + `'` `"` `{` `(` — Изменить содержимое между этими символами

`cc` || `S` — Изменить строку

`C` — Изменить от позиции курсора до конца строки

`r` `a` — Заменить символ на 'a' и вернуться в визуальный режим

`R` — Аналог Insert на клавиатуре

`Ctrl + z` — Свернуть vim

`fg %1` || `%` — Развернуть vim



## Макрос

`qq` — Начало записи макроса на символ 'q'

`q` — Конец записи

`@q` — Воспроизведение макроса под символом 'q'



## Bookmarks

`mq` — Закладка на символ 'q'

`'q` — Перейти к закладке 'q'



## Перемещение по файлу

`6` + `h` `j` `k` `l` — Переместиться на 6 символов


`32G` — Перейти к строке 32

`G` — Самая последняя строка

`gg` — Самая первая строка


`zz` — Центрирование строки с курсором

`zt` — Вверху

`zb` — Внизу


`Ctrl + e` — Прокрутить страницу на 1 пункт

`Ctrl + f` — Page Down

`Ctrl + b` — Page Up


`b` `w` — Начало слова

`e`	— Конец слова

`$` — Конец строки

`0` — Начало строки

`^` — Первый символ строки

`fN` `FN` — Перейти к символу 'N'

`{` — Начало параграфа

`}` — Конец параграфа

`[ + z` — Начало скобок

`] + z` — Конец скобок


`Ctrl + o` — Вернуться к предыдущему месту редактирования



## Панели

`Ctrl + w` + `h` `j` `k` `l` — Перейти в панель


`\` + `bs` — Сплит окна по вертикали

`Ctrl + w` + `s` — Вертикально

`Ctrl + w` + `v` — Горизонтально

`Ctrl + w` + `r` — Поменять местами панели Swap top/bottom or left/right split

`Ctrl + w` + `o` — Развернуть окно

`Ctrl + w` + `_` — развернуть текущее

`Ctrl + w` + `|` — развернуть вертикально

`Ctrl + w` + `=` — вернуть на место



## Табы

`gt` `gT` `Ctrl + PgDn` `Ctrl + PgUp` — Переключать табы

`:tabs` — Список табов и буферов в них

`:tabe` — Новый таб

`:tabc` — Закрыть таб



## Буфер

`:b#` — Переключиться на предыдущий файл

`:bw` — Like |:bdelete|, but really delete the buffer.

`:bd` — Unload buffer [N] (default: current buffer) and delete it from the buffer list. If the buffer was changed, this fails, unless when [!] is specified, in which case changes are lost. The file remains unaffected.


`set incsearch`
`set smartcase`
`/\<step\>` — поиск слова step. Так отмечаются начало и конец слова



## Encoding
`:e ++enc=cp1251` — Перечитать файл в кодировке cp1251



## Fileformat

`:e ++ff=dos` — Перечитать файл с окончанием строк CRLF

`:e ++enc=cp1251 ++ff=dos`



`:au filetypedetect BufNewfile *.html setf htmldjango`

`:au filetypedetect BufRead *.html setf htmldjango`



## Поиск

`/` — Поиск по файлу

`/\C` — Case sensitive поиск

`:cw` — Показать окно результата поиска


`*` — Найти слово на котором фокус

`#` — Найти слово назад


`:vimgrep /lol/gj ./**/*.js` — Поиск текста по проекту



## Поиск и замена

`Shift` + ` — Меняет регистр букв

`:s/Lol/ROFL/gc` — Найти и заменить

`:1,23s/Lol/ROFL/gc` — Найти и заменить в строках с 1 по 23

`:%s/Lol/ROFL/c` — Найти и заменить во всем файле

`:s/\([A-Za-z]\+\)$/\1 {^M}/` — Найти и заменить
- записать в переменную — `\(lol\)`
- количество вхождений тоже со слешем — `\+` `\.` `\*`
- использовать переменную — `\1`
- перевод строки — `Ctrl + v + Enter` — получается `^M`

`:range s[ubstitute]/pattern/string/cgiI` — For each line in the range replace a match of the pattern with the string where:
- `c` — Confirm each substitution
- `g` — Replace all occurrences in the line (without g — only first).
- `i` — Ignore case for the pattern.
- `I` — Don't ignore case for the pattern.



## RegExp

See: [vimregex.com](http://vimregex.com/)



###  Range of Operation, Line Addressing and Marks

`number` — an absolute line number

`.` — the current line

`$` — the last line in the file

`%` — the whole file. The same as 1,$

`'t` — position of mark "t"

`/pattern[/]` — the next line where text "pattern" matches.

`?pattern[?]` — the previous line where text "pattern" matches

`\/` — the next line where the previously used search pattern matches

`\?` — the previous line where the previously used search pattern matches

`\&` — the next line where the previously used substitute pattern matches



## Plugins

### vim-signify

`\` + `gj` — Следующее изменение

`\` + `gk` — Предыдущее изменение

`\` + `gh` — Подсветить измененные строки

`\` + `gt` — Убрать подсветку



### nerdtree

`R` — Nerdtree Обновить список файлов



### vim-jsdoc

`Ctrl + l` — Вставить jsDoc



## Как узнать какой плагин тормозит вим
See: http://stackoverflow.com/a/12216578
```
:profile start profile.log
:profile func *
:profile file *
" At this point do slow actions
:profile pause
:noautocmd qall!
```
