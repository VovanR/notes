# Notes

[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

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

[travis-url]: https://travis-ci.org/VovanR/notes
[travis-image]: https://img.shields.io/travis/VovanR/notes.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/notes
[depstat-image]: https://david-dm.org/VovanR/notes.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/notes
[depstat-dev-image]: https://david-dm.org/VovanR/notes/dev-status.svg?style=flat-square
