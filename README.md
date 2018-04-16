# Notes
> My notes

## Add new note
1. add `foo.md`
   <pre lang="md"><code>
   # Foo
  
   ----
  
   - See: https://www.postgresql.org/
  
   ## Install
   ```shell
   sudo apt-get install postgresql postgresql-contrib libpq5 libpq-dev pgadmin3
   ```
   </code></pre>

1. append `Foo` to [`NOTES`](index.jsx#L5)

## Edit `gh-pages`
```shell
git clone git@github.com:VovanR/notes.git
cd notes
npm i
npm start
```
Open [http://localhost:8080/](http://localhost:8080/)
