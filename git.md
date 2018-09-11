# Git

----

- See: https://github.com/Imangazaliev/git-tips
- See: https://githowto.com/ru/amending_commits
- See: [Удачное ветвление git-flow](https://habr.com/post/106912/)



## Влить изменения в форк из оригинального репозитория (Syncing a fork)

- See: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/
- See: https://help.github.com/articles/syncing-a-fork

Добавляем оригинальный проект как удаленный `remote`, названный `upstream`
```shell
git remote add --track master upstream https://github.com/bevis-ui/docs.git
```

Получить изменения из репозитория `upstream`.

Коммиты в `master` хранятся в локальной ветке `upstream/master`
```shell
git fetch upstream
```

Переходим в мастер
```shell
git checkout master
```

Мержим изменения из `upstream/master`в локальный `master`.

Это синхронизирует мастер с `upstream` репой, без потери локальных изменений.
```shell
git rebase upstream/master
```
или
```shell
git merge upstream/master
```

Если при ребейзе пришли конфликты, решаем их и продолжаем командой
```shell
git rebase --continue
```

Отправляем изменения
```shell
git push --force
```



## Configuring a remote for a fork

- See: https://help.github.com/articles/configuring-a-remote-for-a-fork
- See: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/

Список удаленных реп нашего форка
```shell
git remote -v
```

Получаем новый удаленный `upstream` репозиторий, который будем синхронизованный с нашим
```shell
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```



## Принятие пулреквеста

Fetch and Merge (скачать и слить)

Основной метод вливания изменений. Он требует добавления `remote`,  
ведущего к репозиторию человека, отправившего пулреквест,  
скачивания изменений с этого репозитория, объединения нужной ветви,  
исправления конфликтов и выгрузки обновлённой ветви обратно в исходный репозиторий:
```shell
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
Если вы опустите метку `-m` из командной строки, git перенесет вас в редактор
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

Запушить тэг
```shell
git push origin v0.1.0
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



## В какой тэг входит коммит

```shell
git describe
    v1.2.0-8-g0b83ff8
```

```shell
git describe --contains cc98ddd
    1.1.0^2~2^2
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

эквивалентно двум командам
```shell
git fetch
git merge origin/master
```



## Генерация нового ключа

- See: https://help.github.com/articles/error-permission-denied-publickey

```shell
ssh-keygen -f ~/.ssh/username -C "username"
```

Посмотреть подключенный SSH ключ
```shell
ssh-add -l
	The agent has no identities.
```

Если пусто, добавим
```shell
ssh-add ~/.ssh/username
	Identity added: /home/username/.ssh/username (/home/username/.ssh/username)
```

Проверка используемого по умолчанию ключа
```shell
ssh-add -l
	2048 flaksjfnlausernvenwajflkavnhriauhkajdf username (RSA)
```

Проверка, что мы подключаемся к нужному серверу
```shell
ssh -vT git@bitbucket.org
```

Выкладываем репу на Гитхаб
```shell
git push -u origin --all
```



## Конфликт двух ключей (когда два аккаунта на Битбакет)

```shell
git pull
    conq: repository access denied.
    fatal: Could not read from remote repository.

    Please make sure you have the correct access rights
    and the repository exists.
```

Убеждаемся, что выбран не тот ключ
```shell
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



## Генерация нового `GPG` ключа

- See: https://help.github.com/articles/generating-a-new-gpg-key/
- See: https://help.github.com/articles/adding-a-new-gpg-key-to-your-github-account/#adding-a-gpg-key
- See: https://help.github.com/articles/signing-commits-using-gpg/

Список существующих ключей
```shell
gpg --list-secret-keys --keyid-format LONG
```

Создаем
```shell
gpg --full-gen-key
  RSA and RSA
  4096
  key does not expire
```

Добавить ключ в гит
```shell
git config --global user.signingkey "1234567890123456"
```

Подписывать ключом все коммиты
```shell
git config --global commit.gpgSign true
```

Подписывать коммиты вручную
```shell
git commit -S -m "your commit message"
```

Добавление в баш профиль
```shell
echo "export GPG_TTY=$(tty)" >> ~/.bashlocal
```



## WARNING: gnome-keyring

- See: http://hongouru.blogspot.ru/2012/07/solved-warning-gnome-keyring-couldnt.html

```
WARNING: gnome-keyring:: couldn't connect to: /tmp/keyring-b31scS/pkcs11: No such file or directory
```

```shell
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

```shell
git config --local core.fileMode false
```



## Git init

Создать ветку разработки
```shell
git checkout -b develop
```

Отправить ветку разработки на сервер
```shell
git push origin develop
```

Создать ветку фичи от ветки разработки
```shell
git checkout -b feature/sprite-speed develop
```

Когда разработка фичи закончена — переходит в ветку разработки
```shell
git checkout develop
```

Мержим с сохранением истории ветки фичи
```shell
git merge --no-ff feature/sprite-speed
```

Удаляем ветку фичи
```shell
git branch -d feature/sprite-speed
```

Отправляем изменения на сервер
```shell
git push origin develop
```

Удаляем ветку фичи на сервере
```shell
git push origin :feature/sprite-speed
```



## Меняем удаленную репу

```shell
git remote add origin <ssh://url>
```



## Переименовали репу на Гитхабе — переименуем её и на компе

```shell
git remote set-url origin <new_url>
```



## Добавление модуля

```shell
git submodule add https://github.com/gilsondev/searchtasks.vim.git vim/bundle/searchtasks.vim
git submodule update --init --recursive
git submodule foreach git pull
```



## Сбор мусора

```shell
git gc
```

Если выдает ошибку https://stackoverflow.com/questions/37145151/how-to-handle-git-gc-fatal-bad-object-refs-remotes-origin-head-error-failed-to
```
fatal: bad object refs/remotes/origin/HEAD
error: failed to run repack
```

Запустить
```shell
git remote set-head origin --auto
```



## Patch

```shell
git diff > patch.patch
git apply ./patch.patch
```



## Сравнить измененный файл с веткой 'master'

```shell
git diff master~20:project/file.js project/file.js
```



## Показать изменения добавленного в коммит файла

```shell
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

`Merge branch 'feature/foo' into develop`

```shell
git pull --rebase
```



## Частичный коммит

Можно коммитить часть изменений файла
```shell
git add -p <file_path>
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



## Клонировать репозиторий с конкретной веткой

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



## Отменить `rebase`

- See: http://stackoverflow.com/a/135614

Смотрим последний коммит перед началом `rebase`
```shell
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
```shell
git reset --hard HEAD@{5}
```
Можно посмотреть лог коммита, к которому мы возвращаемся `git log HEAD@{5}`



## Посмотреть изменения, добавленные через `git commit --amend`

Если отменил некоторые изменения с помощью `git commit --amend`, но надо посмотреть что там было
```shell
git reflog -p
```



## Изменить сообщение коммита

```shell
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



## `git stash`

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


### Ключи

- `git stash --keep-index` — скрывает только непроиндексированные изменения в отслеживаемых файлах
- `git stash` — скрывает все изменения в отслеживаемых файлах 
- `git stash --include-untracked` — скрывает неотслеживаемые и отслеживаемые файлы
- `git stash --all` — скрывает игнорируемые, неотслеживаемые и отслеживаемые файлы



## Фича от фичи

- See: https://github.com/VovanR/test-rebase/wiki  

Бывает начинаешь фичу (**feature-2**), в которой нужны изменения из параллельно разрабатываемой фичи (**feature-1**).

Подводный камни: если в **feature-1** удалить коммит через `rebase`, то, после мержа **feature-1** и ребейза **feature-2**, коммит может остаться в истории.



## Удалить remove `untracked` files

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



## `git bisect`. Поиск коммита, в котором был поломан функционал

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



## `git worktree`

- See: https://git-scm.com/docs/git-worktree
- See: https://stacktoheap.com/blog/2016/01/19/using-multiple-worktrees-with-git/

Например необходимо срочно сделать фикс, но не хочется останавливать работу в текущей ветке
```shell
git worktree add -b emergency-fix ../temp master
cd ../temp
# make some fixes
git commit -am "Fix some problem"
git push
cd -
rm -rf ../temp
git worktree prune
```

Показать список созданных
```shell
git worktree list
```



## `git-filter-branch` - Rewrite branches

- See: https://help.github.com/articles/removing-sensitive-data-from-a-repository/
- See: https://git-scm.com/docs/git-filter-branch

```shell
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA' \
--prune-empty --tag-name-filter cat -- --all
```


### `BFG`

- See: https://rtyley.github.io/bfg-repo-cleaner/

```shell
bfg --delete-files assets/fonts/helvetica.otf
```

```shell
bfg --replace-text passwords.txt
```



## `git push --force-with-lease`

- See: https://developer.atlassian.com/blog/2015/04/force-with-lease/
- See: [Опасность `git push --force` и полезность `git push --force-with-lease`](https://urvanov.ru/2017/09/19/%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C-git-push-force-%D0%B8-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D1%81%D1%82%D1%8C-git-push-force-with-lease/)

В отличие от `git push --force`, сначала проверяет актуальность локального `ref`

```shell
git push --force-with-lease
```

Если выдало ошибку
```
error: failed to push some refs to '/tmp/repo'
```

Подтягиваем изменения
```shell
git fetch
```

И повторяем
```shell
git push --force-with-lease
```



## `git-cherry-pick`

- See: https://git-scm.com/docs/git-cherry-pick
- See: http://think-like-a-git.net/sections/rebase-from-the-ground-up/cherry-picking-explained.html

```shell
git checkout -b new-release-branch
git cherry-pick <commit-1> <commit-4> <commit-15>
```
