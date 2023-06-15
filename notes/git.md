# Git

----

- See: [Think Like (a) Git](http://think-like-a-git.net/)
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

List of remote repositories of our fork
```shell
git remote -v
```

Get actual remote `upstream` repository which will be synchronized with our
```shell
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```



## Accept an pull-request

Fetch and Merge  

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



## Git config. Git settings

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

## Git config for subdirectories
- See: https://stackoverflow.com/a/48088291/1284255

For example if I place all my personal repositories `~/projects/vovanr/` I need to set my personal email for commits.
I can create `~/projects/vovanr/.gitconfig_include` file with content:
```gitconfig
[user]
	email = mail@example.com
```
and include it in global Git config file `~/.gitconfig`:
```gitconfig
[includeIf "gitdir:~/projects/vovanr/"]
    path = ~/projects/vovanr/.gitconfig_include
```

## Create a new project

```shell
mkdir hello
cd hello
touch hello.html
git init
git add hello.html
git commit -m "First Commit"
```

If you omit an `-m` from command, Git will open your default editor to fill an commit message.
Editor will be chosen by this list (sorted by priority):

- environment variable `GIT_EDITOR`
- git config parameter `core.editor`
- environment variable `VISUAL`
- environment variable `EDITOR`



## git tag

Create new tag
```shell
git tag v0.1.0
```

Push tag to remote
```shell
git push origin v0.1.0
```

Show tags
```shell
git tag
```

Checkout to tag
```shell
git checkout v0.1.0
```

Checkout to previous tag
```shell
git checkout v0.1.0^
```

Remove tag. Delete tag
```shell
git tag -d v0.1.0
git push origin :refs/tags/v0.1.0
```

Remove all remote tags
```shell
git tag -l | xargs -n 1 git push --delete origin
```

Remove all local tags
```shell
git tag | xargs git tag -d
```



## Show which tag contains current commit

```shell
git describe
    v1.2.0-8-g0b83ff8
```

```shell
git describe --contains cc98ddd
    1.1.0^2~2^2
```

If you see error message - it means that last tag is before this commit
```
fatal: cannot describe 'cc98ddd'
```

Run
```shell
git fetch --tags
```



## Cancel local changes (before index)

```shell
git checkout hello.html
```



## Cancel commit.

Cancel last commit. In this case new cancellation commit will be created.  
Commit message will be `Revert "<reverted_commit_message>"\n\nThis reverts commmit <hash>`
```shell
git revert HEAD --no-edit
```

Cancel last commit. In this case all commit changes will appear in index
```shell
git reset --soft HEAD^
```



## Show commit message of canceled commit

```shell
git reflog
```

Find needed hash. For example:
```
34215450 HEAD@{2}: commit: Fix `FormControl`
```

And show
```shell
git show 34215450
```



## Change previous commit

```shell
git commit --amend
```

Without opening an commit message editor
```shell
git commit --amend --no-edit
```



## Edit commit author email

```shell
git commit --amend --author="Foo Bar <mail@example.com>"
```



## Move files

```shell
git mv hello.html lib/
```



## Rebase `rebase`

```shell
git checkout style
git rebase master
```

Не используйте перебазирование:
1. Если ветка является публичной и расшаренной. Переписывание общих веток будет мешать работе других членов команды.
2. Когда важна точная история коммитов ветки (так как команда `rebase` переписывает историю коммитов).

`rebase` для кратковременных, локальных веток, а слияние для веток в публичном репозитории.



## Rebase branch on tag

- See: https://stackoverflow.com/a/39768253/1284255
- See: https://git-scm.com/docs/git-rebase

We need to move `topic` branch to tag `v2`.  
Current state:
```nohighlight
          o---o  topic
         /
    o---o---o---o  master (origin/master)
            ^ v2
```

Run command:
```shell
git switch topic
git rebase --onto=v2 origin/master
```

Result state:
```nohighlight
              o---o  topic
             /
    o---o---o---o  master (origin/master)
            ^ v2
```



## What is `origin`?

```shell
git remote
git remote show origin
```



## Remote branches

Local branches
```shell
git branch
```

All branches (local and remote)
```shell
git branch -a
```



## If removed branch still show in `git branch -a`

```shell
git remote prune origin
```

Show list of branches will updated
```shell
git remote prune origin --dry-run
```



## Update list of all branches

```shell
git remote update origin --prune
```


## Remove all merged branches

- See: https://stackoverflow.com/questions/6127328/how-do-i-delete-all-git-branches-which-have-been-merged

Show merged branches to "main" branch
```shell
git branch --merged main
```

```shell
git branch --merged master | grep -E -v "(master|main)" | xargs git branch -d
```



## Get changes from remote

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



## Show log of some branch

```shell
git log master..<branch_name>
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



## Add an module

```shell
git submodule add https://github.com/gilsondev/searchtasks.vim.git vim/bundle/searchtasks.vim
git submodule update --init --recursive
git submodule foreach git pull
```



## Garbage collection

```shell
git gc
```

If it fails with this error ([See](https://stackoverflow.com/questions/37145151/how-to-handle-git-gc-fatal-bad-object-refs-remotes-origin-head-error-failed-to)):
```
fatal: bad object refs/remotes/origin/HEAD
error: failed to run repack
```

Run this command and repeat `git gc`
```shell
git remote set-head origin --auto
```



## Patch

```shell
git diff > patch.patch
git apply ./patch.patch
```



## Compare edited file with same on branch `master`

```shell
git diff master~20:project/file.js project/file.js
```


## Compare tags
- See: https://stackoverflow.com/a/53282352/1284255

```shell
git difftool tags/<tag_1> tags/<tag_2>
```
Compare specific files in tags:
```shell
git difftool tags/<tag_1>:<file_path> tags/<tag_2>:<file_path>
```


## Показать изменения добавленного в коммит файла

```shell
git diff --cached <file_path>
```



## Показать изменения файлов, игнорируя конец строки

- See: https://stackoverflow.com/questions/1889559/git-diff-to-ignore-m<Paste>

```shell
git diff --ignore-space-at-eol
git diff --ignore-space-change
git diff --ignore-all-space
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



## Log file line. log строки файла

```shell
git log -L 1,1:<file_path>
```



# Show me diffs all commits that changed a code fragment

- See: https://twitter.com/listochkin/status/1255049626174001152

```shell
git log -U0 -S “my code fragment" path/to/file
```



## Show file from another branch. Посмотреть файл из другой ветки

```shell
git show <some-branch-name>:<file_path>
```


## Copy file from another branch

```shell
git show <some-branch-name>:<file_path> > <file_name>
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



## Clone repository specific branch

```shell
git clone -b develop git@github.com:VovanR/notes.git
```


## Clone repository not deep. Shallow clone

- See: https://linuxhint.com/git-shallow-clone-and-clone-depth/

```shell
git clone --depth=1 git@github.com:VovanR/notes.git
```

## Clone repository specific tag

```shell
git clone git@github.com:VovanR/notes.git --branch=v1.1.3 --depth=1
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



## Изменить сообщение коммита. Rename commit. Change commit message

```shell
git rebase -i <hash>~1
```

Change `pick` to `reword`. Save and close editor. Will be opened new editor with commit message. Change it and save.

Git rebase first commit
```shell
git rebase -i --root
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

Но лучше:

- See: https://stackoverflow.com/a/43535767/1284255

```shell
git update-index --skip-worktree <file>
git update-index --no-skip-worktree <file>
```



## Переименовать ветку (изменить название). Rename branch

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

### Usage

Edit file. Now if you need to switch current branch but current work is not completed.  
You can save current changes to `stash`, then you can restore saved changes:  

Save changes to stash
```shell
git stash
```

Load changes from stash
```shell
git stash pop
```

List
```shell
git stash list
```

Delete stash item
```shell
git stash drop stash@{3}
```

Apply last stash changes without delete it from stash
```shell
git stash apply
```

You can use index, for example when you need to apply `stash@{3}`  
Greater index means oldest changes. Last `stash` have index `stash@{0}`
```shell
git stash apply stash@{3}
```

List of changed files in stash
```shell
git stash show stash@{0}
```

Show full diff of changed files in stash (diff)
```shell
git stash show stash@{0} -p
```

Apply changes from one file from stash
```shell
git checkout stash@{0} -- ./src/index.js
```

Get patch of single file from stash
```shell
git diff HEAD..stash@{0} ./package.json > pkg.patch
```

Diff with current state
```shell
git diff stash@{0}
```

Diff with current HEAD
```shell
git diff stash@{0} HEAD
```

Show only chanted file names
```shell
git diff --name-only stash@{0} HEAD
```


### Command keys

- `git stash --keep-index` — save only not staged changes
- `git stash` — save all changes
- `git stash --include-untracked` — save all tracked and untracked files
- `git stash --all` — save all ignored, tracked and untracked files


### `git stash pop` conflict sides

If you have conflicts after stash pop, in diff tool sides means:

|left|center|right|
|---|---|---|
|remote|merge|local|
|from stash pop|result|current local state|

## Feature from feature

- See: https://github.com/VovanR/test-rebase/wiki  

Бывает начинаешь фичу (**feature-2**), в которой нужны изменения из параллельно разрабатываемой фичи (**feature-1**).

Подводный камни: если в **feature-1** удалить коммит через `rebase`, то, после мержа **feature-1** и ребейза **feature-2**, коммит может остаться в истории.



## Remove `untracked` files

```shell
git clean -f
```

Remove files and directories
```shell
git clean -fd
```

Remove `ignored` files
```shell
git clean -fX
```

Remove `ignored` and `untracked` files
```shell
git clean -fX
```

Show list of files that will be deleted
```shell
git clean -n
git clean --dry-run
```



## `git bisect`. Find commit contains broken functionality

Start search
```shell
git bisect start
```

Mark that problem exists in current commit
```shell
git bisect bad
```

Mark that no problems in current commit
```shell
git bisect good cc98ddd
```

Now look on our functionality. If it broken do `git bisect bad`, if works fine do `git bisect good`

Finally we find an commit which contains our bug:
```shell
git bisect good
  d28c20f is the first bad commit
```

Look what this commit contains
```shell
git show d28c20f
```

End of our search
```shell
git bisect reset
```



## `git worktree`

- See: https://git-scm.com/docs/git-worktree
- See: https://stacktoheap.com/blog/2016/01/19/using-multiple-worktrees-with-git/

If you need to make hot-fix for example, but you don't need to stop work in current branch
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

Show list of created
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

It checks actuality of local `ref` before.

```shell
git push --force-with-lease
```

If throws an error
```
error: failed to push some refs to '/tmp/repo'
```

Get remote changes
```shell
git fetch
```

And repeat
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



## Count of commits per developer

- See: https://git-scm.com/docs/git-shortlog
- See: https://vovanr.com/posts/git-mailmap/

```shell
git shortlog -s -n -e
```

If one developer committed with different emails or usernames this command outputs:
```
10 Foo Bar <foo.bar@gmail.com>
3 Foo Bar <foo.bar@ya.ru>
4 Foo B. Bar <foo.bar@example.com>
1 Foobar <foo.bar@baz.com>
```

Join developer data by linking developer data.  
Create `.mailmap` file in repository directory with mappings.  
For example we need to join developer data from output above to: `Foo Bar <foo.bar@gmail.com>`.

Steps to join data:
1. Update username for email `<foo.bar@example.com>` and `<foo.bar@baz.com>` to `Foo Bar`.
2. Join emails `<foo.bar@ya.ru>`, `<foo.bar@example.com>` and `<foo.bar@baz.com>` to `<foo.bar@gmail.com>`.

File `.mailmap` will looks like:
```
Foo Bar <foo.bar@example.com>
Foo Bar <foo.bar@baz.com>
<foo.bar@gmail.com> <foo.bar@ya.ru>
<foo.bar@gmail.com> <foo.bar@example.com>
<foo.bar@gmail.com> <foo.bar@baz.com>
```

Now output will be right:
```
18 Foo Bar <foo.bar@gmail.com>
```

You can leave comments in this file (it can be helpful for a lot of users):
```
# See: https://git-scm.com/docs/git-shortlog#_mapping_authors
# git shortlog -s -n -e

# Foo Bar
Foo Bar <foo.bar@example.com>

# Baz Qux
Baz Qux <baz.qux@example.com>
<baz.qux@example.com> <baz@example.com>
<baz.qux@example.com> <baz.q@example.com>
```



## `mgitstatus`

- See: https://github.com/fboender/multi-git-status

Show all repositories status in current directory



## `git standup`

- See: https://github.com/kamranahmedse/git-standup

Show my commits for last work week

```shell
git standup -d 5
```



## Pull Git-repositories recursive

- See: https://stackoverflow.com/questions/3497123/run-git-pull-over-all-subdirectories

```shell
ls | xargs -I{} git -C {} pull
```



## git-describe

- See: https://git-scm.com/docs/git-describe

Show current last tag

```shell
git describe --tags
```



## Log removed file

```shell
git log --all --full-history  -- src/components/shared/Select/index.jsx
```
