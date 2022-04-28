# Tmux

----


## Control

`C-b` — Control mode

`C-b` + `t` — Show clock

`S` + `mouse selection` — Text selection

`C-b` + `~` — Show Tmux messages which shown on bottom bar

`C-S-f` — Find text on the screen

`C-S-b` — Backward find text on the screen



## Sessions

`tmux new -s myname` — Create new session with name `"myname"`

`tmux attach` `tmux a` `tmux at` — Attach to latest active session

`tmux a -t myname` — Attach to session with name `"myname"`

`tmux ls` — List of active sessions

`tmux kill-session -t myname` — Close sessions with name `"myname"`

`C-b` + `$` — Rename session

`C-b` + `s` — List of active sessions

`C-b` + `(` — Switch to previous session

`C-b` + `)` — Switch to next session

`C-b` + `L` — Last (previous opened) session

`C-b` + `d` — Detach from session



### Windows (Tabs)

`C-b` + `>` — Window context menu

`C-b` + `c` — Create new window

`C-b` + `,` — Rename window

`C-b` + `.` — Move window

`C-b` + `f` — Find window by name

`C-b` + `&` — Kill window

`C-b` + `n` — Switch to next window

`C-b` + `p` — Switch to previous window

`C-b` + `w` — List of active sessions with their windows and panes

`C-b` + `:swap-window -t 3` — Move window to position "3"



### Panes (Splits)

`C-b` + `<` — Pane context menu

`C-b` + `"` — Split horizontal

`C-b` + `%` — Split vertical

`C-b` + `o` — Switch to next pane

`C-b` + `Up` `Down` — Switch between panes

`C-b` + `C-Up` `C-Down` — Resize panes by 1 line

`C-b` + `A-Up` `A-Down` — Resize panes by 5 lines

`C-b` + `{` `}` — Swap the panes

`C-b` + `q` — Show pane numbers. When the pane numbers is shown you can press pane number on keyboard and it makes that pane active

`C-b` + `x` — Close active pane

`C-b` + `m` || `Right Click` — Mark the pane:
> `-m` and `-M` are used to set and clear the marked pane.  
  There is one marked pane at a time, setting a new marked pane clears the last.  
  The marked pane is the default target for `-s` to `join-pane`, `swap-pane` and `swap-window`.

`C-b` + `:join-pane -s :3` — Move pane with number "3" to new pane of active window

`C-b` + `:join-pane -t :2` — Move active pane to window number "2"



### Sessions list controls

`C-b` + `s` — Open session list control panel

`t` — Mark session (tag session)

`:kill-session` — Kill marked sessions



## Preferences (settings)

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
