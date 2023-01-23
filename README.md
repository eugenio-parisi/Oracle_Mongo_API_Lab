# Oracle_Mongo_API_Lab
<H2>***WIP WIP WIP WIP***</H2>
Ripreso da (e quindi i credits spettano a):<br>
  Unlock the power of your application using Oracle Database API for MongoDB<br>
  https://luca-bindi.medium.com/unlock-the-power-of-your-application-using-oracle-database-api-for-mongodb-b7932356bac9<br>
<br>
Nota per me stesso: ho ancora questa eccezione:<br>
<pre>
[oracle@json21c Oracle_Mongo_API_Lab]$ node server.js
/home/oracle/Oracle_Mongo_API_Lab/node_modules/whatwg-url/lib/encoding.js:3
const utf8Encoder = new TextEncoder();
                    ^

ReferenceError: TextEncoder is not defined
    at Object.<anonymous> (/home/oracle/Oracle_Mongo_API_Lab/node_modules/whatwg-url/lib/encoding.js:3:21)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (/home/oracle/Oracle_Mongo_API_Lab/node_modules/whatwg-url/lib/url-state-machine.js:5:34)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
</pre>
il file `encoding.js` incluso in questa cartella (che contiene in testa `const { TextEncoder, TextDecoder } = require("util");` in piu' rispetto all'originale) sovrascritto a quello generato da `npm install` la risolve:
<pre>
[oracle@json21c Oracle_Mongo_API_Lab]$ cp encoding.js /home/oracle/Oracle_Mongo_API_Lab/node_modules/whatwg-url/lib/encoding.js
</pre>
ma il punto è che probabilmente la versione di `node` che sto usando e' piu' vecchia di quella usata da Luca e va aggiornata; ricordarsi di farlo prima di fondere le parti liquibase, redaction etc.etc.


