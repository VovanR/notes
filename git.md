# Git

----

## Удачное ветвление git-flow
See: http://habrahabr.ru/post/106912/



## Влить изменения в форк из оригинального репозитория (Syncing a fork)
- See: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/
- See: https://help.github.com/articles/syncing-a-fork

Добавляем оригинальный проект как удаленный 'remote', названный 'upstream'
```
git remote add --track master upstream https://github.com/bevis-ui/docs.git
```

Получить изменения из репозитория `upstream`.
Коммиты в `master` хранятся в локальной ветке `upstream/master`
```
git fetch upstream
```

Переходим в мастер
```
git checkout master
```

Мержим изменения из `upstream/master`в локальный `master`.
Это синхронизирует мастер с upstream репой, без потери локальных изменений.
```
git rebase upstream/master
```
или
```
git merge upstream/master
```



## Configuring a remote for a fork
- See: https://help.github.com/articles/configuring-a-remote-for-a-fork
- See: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/

Список удаленных реп нашего форка
```
git remote -v
```

Получаем новый удаленный `upstream` репозиторий, который будем синхронизованный с нашим
```
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```



## Принятие пулл реквеста
Fetch and Merge (скачать и слить)

Основной метод вливания изменений. Он требует добавления `remote`,
ведущего к репозиторию человека, отправившего пулл реквест,
скачивания изменений с этого репозитория, объединения нужной ветви,
исправления конфликтов и выгрузки обновлённой ветви обратно в исходный репозиторий:
```
git checkout master
git remote add username git://github.com/username/Spoon-Knife.git
git fetch username
git merge username/feature
git push origin master
```



## Git How-To
See: http://githowto.com/ru/amending_commits

### Настройка
```
git config --global user.name "Your Name"
git config --global user.email "your_email@whatever.com"
```

Unix/Mac:
```
git config --global core.autocrlf input
git config --global core.safecrlf true
```

Windows:
```
git config --global core.autocrlf true
git config --global core.safecrlf true
```

Global Ignore
```
git config --global core.excludesfile ~/.gitignore_global
```

### Создание проекта
```
mkdir hello
cd hello
touch hello.html
git init
git add hello.html
git commit -m "First Commit"
```
Если вы опустите метку `-m` из командной строки, git перенесет вас в редактор
по вашему выбору. Редактор выбирается из следующего списка (в порядке приоритета)
- переменная среды `GIT_EDITOR`
- параметр конфигурации `core.editor`
- переменная среды `VISUAL`
- переменная среды `EDITOR`

### Создание тегов версий
```
git tag v1
git tag
```
```
git checkout v1^
```
Вернуться к предшествующей версии

### Отмена локальных изменений (до индексации)
```
git checkout hello.html
```

### Отмена коммитов
```
git revert HEAD --no-edit
```

### Удаление тега
```
git tag -d foo
```

### Изменение предыдущего коммита
```
git commit --amend
```

### Перемещение файлов
```
git mv hello.html lib/
```

### Перебазирование `rebase`
```
git checkout style
git rebase master
```
Не используйте перебазирование:
1. Если ветка является публичной и расшаренной. Переписывание общих веток будет мешать работе других членов команды.
2. Когда важна точная история коммитов ветки (так как команда `rebase` переписывает историю коммитов).

`rebase` для кратковременных, локальных веток, а слияние для веток в публичном репозитории.

### Что такое `origin`
```
git remote
git remote show origin
```

### Удаленные ветки
```
git branch
```
Покажет только локальные ветки
```
git branch -a
```
Выведет все ветки

### Извлечение изменений из удаленной репы
```
git fetch
```

### Слияние извлеченных изменений
```
git merge origin/master
```

### Извлечение и слияние изменений
```
git pull
```
эквивалентно двум коммандам
```
git fetch
git merge origin/master
```



## Генерация нового ключа
See: https://help.github.com/articles/error-permission-denied-publickey
```
ssh-keygen -f ~/.ssh/username -C "username"
```

Посмотреть подключенный ssh ключ
```
ssh-add -l
	The agent has no identities.
```

Если пусто, добавим
```
ssh-add ~/.ssh/username
	Identity added: /home/username/.ssh/username (/home/username/.ssh/username)
```

Проверка используемого по-умолчанию ключа
```
ssh-add -l
	2048 flaksjfnlausernvenwajflkavnhriauhkajdf username (RSA)
```

Проверка, что мы подключаемся к нужному серверу
```
ssh -vT git@bitbucket.org
```

Выкладываем репу на хаб
```
git push -u origin --all
```



## WARNING: gnome-keyring
See: http://hongouru.blogspot.ru/2012/07/solved-warning-gnome-keyring-couldnt.html
```
WARNING: gnome-keyring:: couldn't connect to: /tmp/keyring-b31scS/pkcs11: No such file or directory
```

```
sudo vim /etc/xdg/autostart/gnome-keyring-pkcs11.desktop
```

Добавить `XFCE;` в настройку `OnlyShowIn`
```
[Desktop Entry]
Type=Application
Name=Certificate and Key Storage
Comment=GNOME Keyring: PKCS#11 Component
Exec=/usr/bin/gnome-keyring-daemon --start --components=pkcs11
OnlyShowIn=GNOME;Unity;XFCE;
```



## Чтобы в гит не попадали изменения прав доступа на файлы
```
git config --local core.fileMode false
```



## Git init

Создать ветку разработки
```
git checkout -b develop
```

Отправить ветку разработки на сервер
```
git push origin develop
```

Создать ветку фичи от ветки разработки
```
git checkout -b feature/sprite-speed develop
```

Когда разработка фичи закончена — переходит в ветку разработки
```
git checkout develop
```

Мержим с сохранением истории ветки фичи
```
git merge --no-ff feature/sprite-speed
```

Удаляем ветку фичи
```
git branch -d feature/sprite-speed
```

Отправляем изменения на сервер
```
git push origin develop
```

Удаляем ветку фичи на сервере
```
git push origin :feature/sprite-speed
```



## Меняем удаленную репу
```
git remote add origin <ssh://url>
```

## Переименовали репу на гитхабе — переименуем ее и на компе
```
git remote set-url origin <new_url>
```



## Добавление модуля
```
git submodule add https://github.com/gilsondev/searchtasks.vim.git vim/bundle/searchtasks.vim
git submodule update --init --recursive
git submodule foreach git pull
```



## Сбор мусора
```
git gc
```



## Если удаленная ветка все еще отображается в `git branch -a`
```
git remote prune origin
```



## Patch
```
git diff > patch
git apply ./patch
```



## Сравнить измененный файл с веткой 'master'
```
git diff master~20:project/file.js project/file.js
```

## Показать изменения добавленного в коммит файла
```
git diff --cached <file_path>
```



## Восстановить файл, удаленный в каком-то коммите
```
ghists
```
Смотрим хэш коммита, в котором удален файл `81fce3a`. Добавляем `~1`
```
git checkout 81fce3a~1 <file_path>
```
или
```
git checkout d67577f^ -- <file_path>
```



## log строки файла
```
git log -L 1,1:<file_path>
```



## Посмотреть файл из другой ветки
```
git show <some-branch-name>:<file_path>
```



## Изменить сообщение коммита
```
git rebase -i <hash>
```



## Чтобы небыло дурацких коммитов о мерже, когда пришли изменения
> Merge branch 'feature/foo' into develop

```shell
git pull --rebase
```



## Частичый коммит
```shell
git add -p <file_path>
```



## В какой тэг входит коммит
```shell
git describe
    v1.2.0-8-g0b83ff8
```
```shell
git describe --contains cc98ddd
    1.1.0^2~2^2
```



## Сброс изменений
Отменить все внесённые изменения и начать работу с чистого листа (самый частый случай)
```shell
git reset --hard HEAD
git reset --hard <hash>
```

Отредактировать изменения и/или закоммитить файлы в другом порядке
```shell
git reset {{some-start-point-hash}}
```

Взять три последних коммита и слить их в один большой коммит
```shell
git reset --soft {{some-start-point-hash}}
```

Отмена проиндексированных изменений (перед коммитом)
```shell
git reset HEAD <file_path>
```

Откатить все изменения и удалить новые файлы
```shell
git reset --hard
git clean -df
```



## Игнорирование пробелов
Чтобы в диффах не видеть изменения табуляции и прочего

Пример команды: `git diff -w` или `git blame -w`

Git будет просто игнорировать все изменения, связанные с пробельными символами
(пробел, табуляция и другие)



## Склонировать репу с конкретной веткой
```shell
git clone -b develop git@github.com:VovanR/notes.git
```
