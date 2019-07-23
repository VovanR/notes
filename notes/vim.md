# VIM

----

- See: [Official site](https://www.vim.org/)
- See: [Official repository](https://github.com/vim/vim)
- See: [Vim Cheat Sheet](https://vim.rtorr.com/)
- See: [Vim documentation](http://vimdoc.sourceforge.net/htmldoc/)
- See: [Vimways 2018](https://vimways.org/2018/)

`V` — Выделение строки

`Ctrl + v` — Вертикальное выделение

`Ctrl + v` + `I` — Писать сразу на несколько строк

`<<` `>>` — Двигать строку

`J` — Склеить со следующей строкой

`y` — Копировать выделенное

`yy` `Y` — Копировать строку

`x` `X` — Вырезать (`Del`, `Backspace`)

`:%y+` — Копировать все содержимое файла


`d` — Удалить

`dd` — Вырезать строку

`D` — Вырезать до конца строки

`"_dd` — Удалить и не заносить в буфер обмена (black hole)

`d4w` — Удалить 4 слова

`dfe` — Удалить до символа "e" (включительно)

`Ctrl + &` — Удалить пробелы в строке


`:co30` — Копировать строку на 30 строку

`:co+0` `:co-` — Копировать строку на следующую/предыдущую строку

`:co+4` `:co-4` — Копировать строку через строку

`:m23` — Переместить строку на 23 строку

`:m+` `:m-2` — Переместить строку на следующую/предыдущую строку

`p` `P` — Вставить строку

`o` `O` — Новая строка

`ZZ` — Записать и выйти


`.` — Повторить последнее действие



`i` — Редактирование на позиции курсора

`I` — Редактирование в начале строки

`a` — Редактирование после позиции курсора

`A` — Редактирование в конце строки

`s` — Удаляет выделенное или под курсором и переходит в режим редактирования

`S` — Редактирование строки


`:e` — Перечитать файл

`=` `==` — Расставить отступы, отформатировать код

`:retab` — Конвертировать табы в пробелы

`cc` || `S` — Изменить строку

`C` — Изменить от позиции курсора до конца строки

`r` `a` — Заменить символ на "a" и вернуться в визуальный режим

`R` — Аналог `Insert` на клавиатуре



## Case

`~` — Изменить регистр символов `Case` → `cASE`

`gU` — uppercase

`gu` — lowercase

`gUU` `guu` — Всю строку



## Undo/Redo

`u` — Отмена

`Ctrl + r` — Восстановление



## Свернуть блок кода (code folding)

`zc` `zC` `zo` `zO` `za` `zA` — Свернуть/Развернуть код

`zv` — Раскрыть текущую строку

`zM` `zR` — Свернуть/Развернуть весь код

`zm` — Fold more `foldlevel++`

`zr` — Fold less `foldlevel--`

`zx` — Обновить свернутые блоки



`Ctrl + z` — Свернуть vim

`fg %1` `%` — Развернуть vim


`Ctrl + a` — Увеличить число на 1

`Ctrl + x` — Уменьшить число на 1



## Text objects

`operator` + `[i]nside of [a]round` + `text object`

**Text objects**
- `p` — paragraph
- `w` — word
- `s` — sentence
- `[` `(` `{` `<` — block
- `'` `"` `\`` — quoted
- `b` — block in `[(`
- `B` — block in `[{`
- `t` — XML tag block

`ciw` — Изменить слово под курсором

`ci` + `'` `"` `{` `(` — Изменить содержимое между этими символами

`di(` — Удалить содержимое скобок



## Типографика

Список символов `:h digraph-table`  
Первый столбец — символ, который хотим получить  
Второй столбец ― вводится через `Ctrl + k`  
Четвертый столбец ― вводится через `Ctrl + v`  


В режиме редактирования

Через `Ctrl + k`:

`-1` = `‐` Hyphens

`-2` = `−` Minus sign

`-3` = `―` Horizontal bar

`Space + Space` = ` ` Non Breaking Space `&nbsp;`

`>>` = `»`

`<<` = `«`

`->` or `>-` = `→`

`<-` or `-<` = `←`



## Калькулятор

В режиме редактирования активируем калькулятор `Ctrl + r + =` вводим выражение, жмём `Enter`

`Ctrl + r` `=128/2` `Enter` — Получим результат вычисления



## Выравнивание текста

`:center [width]`

`:right [width]`

`:left`



## Макрос

`qq` — Начало записи макроса на символ "q"

`q` — Конец записи

`@q` — Воспроизведение макроса под символом "q"

`@@` — Воспроизведение предыдущего воспроизведенного макроса



## Bookmarks

`mq` — Закладка на символ "q"

`'q` — Перейти к закладке "q"



## Перемещение по файлу

`6` + `h` `j` `k` `l` — Переместиться на 6 символов


`32G` || `32gg` — Перейти к строке 32

`G` `]]` — Самая последняя строка

`gg` `[[` — Самая первая строка


`gd` — will take you to the local declaration

`gD` — will take you to the global declaration


`zz` — Центрирование строки с курсором

`zt` — Вверху

`zb` — Внизу


`Ctrl + e` — Прокрутить страницу на 1 пункт

`Ctrl + f` — Page Down

`Ctrl + b` — Page Up

`Ctrl + d` — Прокрутить полстраницы вниз

`Ctrl + u` — Прокрутить полстраницы вверх

`b` `w` — Начало слова

`e` — Конец слова

`$` — Конец строки

`0` — Начало строки

`^` — Первый символ строки

`fN` `FN` — Перейти к символу "N"

`{` — Начало параграфа

`}` — Конец параграфа

`[ + z` — Начало скобок

`] + z` — Конец скобок


`[(` `[{` `[<` — Предыдущая скобка

`])` `]}` `]>` — Следующая скобка

`[m` `[M` — Начало и конец предыдущего метода


`Ctrl + o` — Вернуться к предыдущему месту редактирования

`Ctrl + i` — Вернуться к следующему месту редактирования


`gf` — Перейти к файлу, под курсором (например `const a = require('so[vim cursor is here]me-file.js');`)



## Панели

`Ctrl + w` + `h` `j` `k` `l` — Перейти в панель

`Ctrl + w` + `s` — Вертикально

`Ctrl + w` + `v` — Горизонтально

`Ctrl + w` + `r` — Поменять местами панели Swap top/bottom or left/right split

`Ctrl + w` + `o` — Развернуть окно

`Ctrl + w` + `_` — развернуть текущее

`Ctrl + w` + `|` — развернуть вертикально

`Ctrl + w` + `=` — вернуть на место

`Ctrl + w` + `3` + `+` `-` — Изменить вертикальный размер панели на 3 строки

`:res +3` — Увеличить вертикальный размер панели на 3 строки

`:res -3` — Уменьшить вертикальный размер панели на 3 строки

`:vertical resize +3` — Увеличить горизонтальный размер панели на 3 строки

`:vertical resize -3` — Уменьшить горизонтальный размер панели на 3 строки

`z20` + `Enter` — Высота панели 20 строк


## Табы

`gt` `gT` `Ctrl + PgDn` `Ctrl + PgUp` — Переключать табы

`:tabs` — Список табов и буферов в них

`:tabe` — Новый таб

`:tabc` — Закрыть таб



## Буфер

`:buffers` || `:ls` || `:files` ― Список буферов

`:buffer 1` || `:b 1` || `1` + `Ctrl + 6` ― Открыть буфер по номеру

`:buffer README.md` || `:b README.md` ― Открыть буфер по имени

`:b#` || `Ctrl + 6` — Переключиться на предыдущий буфер

`:bw` — Like `:bdelete`, but really delete the buffer

`:bd` — Unload buffer [N] (default: current buffer) and delete it from the buffer list. If the buffer was changed, this fails, unless when [!] is specified, in which case changes are lost. The file remains unaffected


`set incsearch`  
`set smartcase`  
`/\<step\>` — поиск слова "step". Так отмечаются начало и конец слова



## Encoding

`:e ++enc=cp1251` — Перечитать файл в кодировке `cp1251`



## File format

`:e ++ff=dos` — Перечитать файл с окончанием строк `CRLF`

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

`Shift` + \` — Меняет регистр букв

`:s/Lol/ROFL/gc` — Найти и заменить

`:1,23s/Lol/ROFL/gc` — Найти и заменить в строках с 1 по 23

`:%s/Lol/ROFL/c` — Найти и заменить во всем файле

Замена того, что искали  
`/foo` — Например искали по файлу слово `"foo"`  
`:s//bar` — Заменит все `"foo"` на `"bar"`  

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

`:g/<search_here>/d` — Удалить все строки, содержащие слово

`:v/<search_here>/d` — Удалить все строки, не содержащие слово



## RegExp

- See: [vimregex.com](http://vimregex.com/)

###  Range of Operation, Line Addressing and Marks

`number` — an absolute line number

`.` — the current line

`$` — the last line in the file

`%` — the whole file. The same as `1,$`

`'t` — position of mark "t"

`/pattern[/]` — the next line where text "pattern" matches.

`?pattern[?]` — the previous line where text "pattern" matches

`\/` — the next line where the previously used search pattern matches

`\?` — the previous line where the previously used search pattern matches

`\&` — the next line where the previously used substitute pattern matches



## Plugins

### `vim-signify`

`\` + `gj` — Следующее изменение

`\` + `gk` — Предыдущее изменение

`\` + `gh` — Подсветить измененные строки

`\` + `gt` — Убрать подсветку



### `nerdtree`

`R` — Обновить список файлов



### `vim-jsdoc`

`Ctrl + l` — Вставить JSDoc



### `ctrlp.vim`

`Ctrl + p` — Перейти к файлу



### `bufexplorer`

`\` + `bs` — Сплит окна по вертикали



## Как узнать какой плагин тормозит вим

- See: http://stackoverflow.com/a/12216578

```
:profile start profile.log
:profile func *
:profile file *
" At this point do slow actions
:profile pause
:noautocmd qall!
```


## Debug log

```shell
export NVIM_PYTHON_LOG_FILE=/tmp/log
export NVIM_PYTHON_LOG_LEVEL=DEBUG
nvim
less /tmp/log_{PID}
```


## Check Health of Neovim

Информация о состоянии
```
:checkhealth
```


## `vimdiff`

- See: http://vimdoc.sourceforge.net/htmldoc/diff.html

```shell
vimdiff file1 file2 [file3 [file4]]
```

Аналогично
```shell
vim -d file1 file2 [file3 [file4]]
```

### Навигация

`]c` — Следующее различие

`[c` — Предыдущее различие


### Редактирование

`do` — (Diff Obtain) Принять изменение в текущий файл

`dp` — (Diff Put) Отправить изменение в другой файл

`:diffupdate` — Обновить файлы

`ZQ` — Выйти без принятия изменений



## Копирование по SSH

- See: https://superuser.com/a/326882
- See: [Clipboard over SSH with Vim](https://defuse.ca/blog/clipboard-over-ssh-with-vim.html)

```shell
ssh -Y myserver
```

Добавить в конфиг `~/.ssh/config`
```
Host myserver
    ForwardX11 yes
    ForwardX11Trusted yes
```


## Чтобы файл открывался с нужным синтаксисом

Например файлы конфига без расширения.  
В конец файла добавляют строку:
```
# vim: syntax=config
```
