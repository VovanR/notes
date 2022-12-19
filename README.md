# Notes

<img align="right" width="120" height="120"
     src="./logo.svg" alt="Notes logo">

[![Build Status][build-image]][build-url]

> My notes

Demo: https://vovanr.github.io/notes

## Add new note
1. add `notes/foo.md`
   <pre lang="md"><code>
   # Foo
  
   ----
  
   - See: https://www.postgresql.org/
  
   ## Install
   ```shell
   sudo apt-get install postgresql postgresql-contrib libpq5 libpq-dev pgadmin3
   ```
   </code></pre>

1. append `Foo` to [`NOTES`](https://github.com/VovanR/notes/blob/master/app/js/constants.js#L2)

## Edit `gh-pages`
```shell
git clone git@github.com:VovanR/notes.git
cd notes
npm install
npm start
```
Open [http://localhost:8080/](http://localhost:8080/)

[build-url]: https://github.com/VovanR/notes/actions/workflows/node.js.yml
[build-image]: https://img.shields.io/github/actions/workflow/status/vovanr/notes/node.js.yml?branch=master&style=flat-square
