# Tmux

----

`tmux new -s myname` — Создать новую сессию с именем `"myname"`

`tmux attach` `tmux a` `tmux at` — Подключиться к последней активной сессии

`tmux a -t myname` — Подключиться к сессии с именем `"myname"`

`tmux ls` — Список активных сессий

`tmux kill-session -t myname` — Закрыть сессию `"myname"`



## Управление

`C-b` — Переход к режиму управления

`C-b` + `t` — Время

`S` + `выделение` — Выделение

`C-b` + `~` — Показать список сообщений, которые тмукс писал в нижнем баре



## Сессии Sessions

`C-b` + `$` — Переименовать сессию

`C-b` + `s` — Список активных сессий

`C-b` + `(` — Предыдущая сессия

`C-b` + `)` — Следующая сессия

`C-b` + `L` — Последняя (предыдущая открытая) сессия

`C-b` + `d` — Отключиться (detach) от окна



### Окна Windows (Tabs)

`C-b` + `c` — Создать новое окно

`C-b` + `,` — Переименовать окно

`C-b` + `.` — Переместить окно

`C-b` + `f` — Поиск окна

`C-b` + `&` — Закрыть окно

`C-b` + `n` — Переключиться на следующее окно

`C-b` + `p` — Переключиться на предыдущее окно

`C-b` + `w` — Список активных окон сессии

`C-b` + `:swap-window -t 3` — Переместить окно на номер "3"



### Панели Panes (Splits)

`C-b` + `"` — Разделить горизонтально

`C-b` + `%` — Разделить вертикально

`C-b` + `o` — Переключаться к следующей панели

`C-b` + `Up` `Down` — Переключиться между панелями

`C-b` + `C-Up` `C-Down` — Изменить размеры панелей на 1 строку

`C-b` + `A-Up` `A-Down` — Изменить размеры панелей на 5 строк

`C-b` + `{` `}` — Поменять местами панели

`C-b` + `q` — Показывает номера панелей. Пока показываются номера можно переключиться на нужную панель, нажав соответствующую цифру на клавиатуре

`C-b` + `x` — Закрыть активную панель

`C-b` + `m` || `Right Click` — Пометить панель:
> `-m` and `-M` are used to set and clear the marked pane.  
  There is one marked pane at a time, setting a new marked pane clears the last.  
  The marked pane is the default target for `-s` to `join-pane`, `swap-pane` and `swap-window`.

`C-b` + `:join-pane -s :3` — Переместить окно с номером "3" в новую панель активного окна

`C-b` + `:join-pane -t :2` — Переместить активную панель в новую панель окна номер "2"



### Управление в окне списка сессий

`C-b` + `s` — Открыть окно управления сессиями

`t` — Выделить сессию (tag session)

`:kill-session` — закроет выделенные сессии



## Настройки

`set -g prefix C-a`
— Sets the key combination for the Prefix key.

`set -sg escape-time n`
— Sets the amount of time (in milliseconds) tmux waits for a keystroke after
  pressing `Prefix`.

`source-file [file]`
— Loads a configuration file. Use this to reload the existing configuration
  or bring in additional configuration options later.

`bind C-a send-prefix`
— Configures tmux to send the prefix when pressing the
  `Prefix` combination twice consecutively.

`bind-key [key] [command]`
— Creates a key binding that executes the specified
  command. Can be shortened to bind

`bind-key -r [key] [command]`
— Creates a key binding that is repeatable, meaning you
  only need to press the PREFIX key once, and you can press
  the assigned key repeatedly afterwards. This is useful
  for commands where you want to cycle through elements
  or resize panes. Can be shortened to bind .

`unbind-key [key]`
— Removes a defined key binding so it can be bound to a
  different command. Can be shortened to unbind .

`display-message or display`
— Displays the given text in the status message.

`set-window-option [option] [value]`
— Sets options for windows, such as activity notifications,
  cursor movement, or other elements related to windows
  and panes.

`set -a`
— Appends values onto existing options rather than
  replacing the option’s value.
