<img src="./logo.png" width="420" height="420">
# Flujos
A general database independent model CRUD library

Any database, only one way.

Now you can perform any action platform and database independently.

Flujos is the middle in between you and your database engine.

# Install
To add to your project, using <a href="https://npmjs.org/" target="_blank">NPM</a>, just open a terminal/batch and:

<code>
  $ npm install flujos --save
</code>
<br>
Or, with <a href="https://yarnpkg.com/" target="_blank">Yarn</a>:

<code>
  $ yarn add flujos
</code>
<br>
After, in your code, simply add a database engine to get started with a particular database.

# Adding a database engine

In your backend, just require the library and the database engine, then, create an object.

<code>
  const <var>Flujos</var> = require('flujos');
  const <var>FlujosPouchDBEngine</var> = require('flujos-pouchdb-engine');

  var users = new Flujos('users', FlujosPouchDBEngine, {sync: true});
</code>

# Docs
There are no documentation yet, you can just, get started by get a deep look into the library to see all methods available.

# Help, please!

Help needed!

Please, consider to help to create the docs and dbengines, to get started, take a look on the <a href="https://github.com/kenliten/flujos-db-engine-template">boilerplate</a>.
