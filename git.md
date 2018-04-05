# Git

----

- See: https://github.com/Imangazaliev/git-tips
- See: https://githowto.com/ru/amending_commits

## Удачное ветвление git-flow
See: http://habrahabr.ru/post/106912/



## Влить изменения в форк из оригинального репозитория (Syncing a fork)
- See: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/
- See: https://help.github.com/articles/syncing-a-fork

Добавляем оригинальный проект как удаленный `remote`, названный `upstream`
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
Это синхронизирует мастер с `upstream` репой, без потери локальных изменений.
```
git rebase upstream/master
```
или
```
git merge upstream/master
```

Если при ребэйзе пришли конфликты, решаем их и продолжаем коммандой
```
git rebase --continue
```

Отправляем изменения
```
git push --force
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



## Настройка
```shell
git config --global user.name "Your Name"
git config --global user.email "your_email@whatever.com"
```

Unix/Mac:
```shell
git config --global core.autocrlf input
git config --global core.safecrlf true
```

Windows:
```shell
git config --global core.autocrlf true
git config --global core.safecrlf true
```

Global Ignore
```shell
git config --global core.excludesfile ~/.gitignore_global
```

## Создание проекта
```shell
mkdir hello
cd hello
touch hello.html
git init
git add hello.html
git commit -m "First Commit"
```
Если вы опустите метку `-m` из командной строки, git перенесет вас в редактор<br>
по вашему выбору. Редактор выбирается из следующего списка (в порядке приоритета)
- переменная среды `GIT_EDITOR`
- параметр конфигурации `core.editor`
- переменная среды `VISUAL`
- переменная среды `EDITOR`

## git tag (тэг, тег)
Добавить тэг
```shell
git tag v0.1.0
```
Показать тэги
```shell
git tag
```
Перейти к тэгу
```shell
git checkout v0.1.0
```
Перейти к предыдущему тэгу
```shell
git checkout v0.1.0^
```
Удаление тэга
```shell
git tag -d v0.1.0
git push origin :refs/tags/v0.1.0
```

## Отмена локальных изменений (до индексации)
```shell
git checkout hello.html
```

## Отмена коммитов
Отменить последний коммит. При этом появится новый отменяющий коммит.
Сообщение такого будет `Revert "<reverted_commit_message>"\n\nThis reverts commmit <hash>`
```shell
git revert HEAD --no-edit
```
Отменить последний коммит. При этом изменения из коммита появятся в индексе
```shell
git reset --soft HEAD^
```

## Изменение предыдущего коммита
```shell
git commit --amend
```

Не открывать редактор сообщения коммита
```shell
git commit --amend --no-edit
```


## Перемещение файлов
```shell
git mv hello.html lib/
```

## Перебазирование `rebase`
```shell
git checkout style
git rebase master
```
Не используйте перебазирование:
1. Если ветка является публичной и расшаренной. Переписывание общих веток будет мешать работе других членов команды.
2. Когда важна точная история коммитов ветки (так как команда `rebase` переписывает историю коммитов).

`rebase` для кратковременных, локальных веток, а слияние для веток в публичном репозитории.

## Что такое `origin`
```shell
git remote
git remote show origin
```

## Удалённые ветки
Локальные ветки
```shell
git branch
```
Все ветки
```shell
git branch -a
```

## Если удалённая ветка всё ещё отображается в `git branch -a`
```shell
git remote prune origin
```
Показать какие ветки пропадут
```shell
git remote prune origin --dry-run
```


## Извлечение изменений из удаленной репы
```shell
git fetch
```

## Слияние извлечённых изменений
```shell
git merge origin/master
```

## Извлечение и слияние изменений
```shell
git pull
```
эквивалентно двум коммандам
```shell
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


## Конфликт двух ключей (когда два аккаунта на битбакет)
```
git pull
    conq: repository access denied.
    fatal: Could not read from remote repository.

    Please make sure you have the correct access rights
    and the repository exists.
```
Убеждаемся, что выбран не тот ключ
```
ssh -vT git@bitbucket.org
```
Добавляем конфиг `~/.ssh/config`
```
Host workid
 HostName bitbucket.org
 IdentityFile ~/.ssh/work
Host personalid
 HostName bitbucket.org
 IdentityFile ~/.ssh/personal
```
Теперь в директории проекта правим в файле `.git/config`
```diff
[remote "origin"]
-	url = git@bitbucket.org:foo/bar.git
+	url = git@workid:foo/bar.git
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

## Переименовали репу на гитхабе — переименуем её и на компе
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



## Patch
```
git diff > patch.patch
git apply ./patch.patch
```



## Сравнить измененный файл с веткой 'master'
```
git diff master~20:project/file.js project/file.js
```

## Показать изменения добавленного в коммит файла
```
git diff --cached <file_path>
```



## Восстановить файл, удаленный в каком-то коммите. Откатить изменения файла, сделанные в каком-то коммите
```shell
git log --stat <file_path>
```
Смотрим хэш коммита, в котором удален файл `81fce3a`. Добавляем `~1`
```shell
git checkout 81fce3a~1 <file_path>
```
или
```shell
git checkout d67577f^ -- <file_path>
```



## log строки файла
```shell
git log -L 1,1:<file_path>
```



## Посмотреть файл из другой ветки
```shell
git show <some-branch-name>:<file_path>
```



## Чтобы не было коммитов о мерже, когда пришли изменения
> Merge branch 'feature/foo' into develop

```shell
git pull --rebase
```



## Частичый коммит
Можно коммитить часть изменений файла
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
git reset <some_start_point_hash>
```

Взять три последних коммита и слить их в один большой коммит
```shell
git reset --soft <some_start_point_hash>
```

Отменить последний коммит. При этом изменения из коммита появятся в индексе
```shell
git reset --soft HEAD^
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


## Замержить изменения из мастера, не переключаясь из текущей ветки
Например, находимся в `feature/readme`
```shell
git fetch origin master:master
git merge --no-ff master
```


## Скопировать изменения из другой ветки, не занося изменения в коммит
```shell
git checkout fix/typo ./
```


## Посмотреть дифф одного коммита
```shell
git log -p <hash> -1
```
или
```shell
git show <hash>
```



## Отменить rebase
- See: http://stackoverflow.com/a/135614

Смотрим последний коммит перед началом `rebase`
```
git reflog
```
В примере ниже это `HEAD@{5}`
```
95a7f9da HEAD@{0}: rebase finished: returning to refs/heads/dev/modal
95a7f9da HEAD@{1}: rebase: Fix modal component types
9f1342a4 HEAD@{2}: rebase: Refactoring with new modal component
57a5576d HEAD@{3}: rebase: Add modal component
f36d45a5 HEAD@{4}: pull --rebase upstream master: checkout f36d4sa54566sd464s8186d5143fad615423fs15
a26459f6 HEAD@{5}: checkout: moving from master to dev/modal
```
Отменяем ребейз
```
git reset --hard HEAD@{5}
```
Можно посмотреть лог коммита, к которому мы возвращаемся `git log HEAD@{5}`



## Изменить сообщение коммита
```
git rebase -i <hash>
```



## Удалить коммит через интерактивный ребейз
```shell
git rebase -i HEAD~3
```
В открывшемся редакторе в первом столбце помечаем что нужно сделать



## Удалить файл из коммита
```shell
git log --stat
  commit cc98ddd
git rebase -i HEAD~3
  replace `pick` with `edit` before cc98ddd
  exit `:wq`
  remove from commit and ammend commit
git commit --amend -v
git rebase --continue
git push --force
```



## Игнорировать внесённые изменения
- See: http://stackoverflow.com/a/3320183
```shell
git update-index --assume-unchanged ./index.js
```
Перестать игнорировать:
```shell
git update-index --no-assume-unchanged ./index.js
```



## Переименовать ветку (изменить название ветки)
```shell
git branch -m old_branch new_branch
git push origin :old_branch
git push --set-upstream origin new_branch
```


## Запушить ветку не переходя на неё
Например: мы сейчас на ветке `master`, надо запушить изменения ветки `dev`, но не переходя на неё
```shell
git push origin dev:dev
```


## git stash

### Как пользоваться
Изменили файл. Надо переключиться на другую ветку, но работу над файлом не закончили.  
Для этого сохраняем текущие изменения в `stash`, потом их можно будет восстановить:  

Сохранить изменения
```shell
git stash
```

Восстановить изменения
```shell
git stash pop
```

Список сохранённых изменений
```shell
git stash list
```

Удалить
```shell
git stash drop stash@{3}
```

Применить изменения, не удаляя из списка
```shell
git stash apply
```

Можно пользоваться индексом, например надо восстановить `stash@{3}`  
Чем больше индекс, тем старее. Последний добавленный `stash` имеет индекс `stash@{0}`
```shell
git stash apply stash@{3}
```

Список изменённых файлов
```shell
git stash show stash@{0}
```
Показать изменения в файлах (diff)
```shell
git stash show stash@{0} -p
```

Применить изменения из одного файла в стэше
```shell
git checkout stash@{0} -- ./src/index.js
```

Отличия в `stash` от текущего состояния
```shell
git diff stash@{0} HEAD
```
Показать только имена файлов
```shell
git diff --name-only stash@{0} HEAD
```



## Фича от фичи
See: https://github.com/VovanR/test-rebase/wiki  
Бывает начинаешь фичу (**feature-2**), в которой нужны изменения из параллельно разрабатываемой фичи (**feature-1**).
Подводный камни: если в **feature-1** удалить коммит через `rebase`, то, после мержа **feature-1** и ребейза **feature-2**, коммит может остаться в истории.



## Удалить remove untracked files
```shell
git clean -f
```

Удалить файлы и директории
```shell
git clean -fd
```

Удалить `ignored` файлы
```shell
git clean -fX
```

Удалить `ignored` и `untracked` файлы
```shell
git clean -fX
```

Показать список файлов, которые будут удалены
```shell
git clean -n
git clean --dry-run
```


## git bisect. Поиск коммита, в котором был поломан функционал
Начинаем поиск
```shell
git bisect start
```
Помечаем, что в текущем месте проблема присутствует
```shell
git bisect bad
```
Помечаем коммит, в котором всё работало
```shell
git bisect good cc98ddd
```
Теперь смотрим наш функционал, если он сломан, выполняем `git bisect bad`, если исправен `git bisect good`

В конце концов мы доберёмся до коммита, в котором было поломано:
```shell
git bisect good
  d28c20f is the first bad commit
```
Смотрим что там было сделано
```shell
git show d28c20f
```
Заканчиваем поиск
```shell
git bisect reset
```
