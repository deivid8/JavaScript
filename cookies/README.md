## Basic Usage

Create a cookie, valid across the entire site:

```javascript
Cookies.set('name', 'value')
```

Create a cookie that expires 7 days from now, valid across the entire site:

```javascript
Cookies.set('name', 'value', { expires: 7 })
```

Create an expiring cookie, valid to the path of the current page:

```javascript
Cookies.set('name', 'value', { expires: 7, path: '' })
```

Read cookie:

```javascript
Cookies.get('name') // => 'value'
Cookies.get('nothing') // => undefined
```

Read all visible cookies:

```javascript
Cookies.get() // => { name: 'value' }
```

_Note: It is not possible to read a particular cookie by passing one of the cookie attributes (which may or may not
have been used when writing the cookie in question):_

```javascript
Cookies.get('foo', { domain: 'sub.example.com' }) // `domain` won't have any effect...!
```

The cookie with the name `foo` will only be available on `.get()` if it's visible from where the
code is called; the domain and/or path attribute will not have an effect when reading.

Delete cookie:

```javascript
Cookies.remove('name')
```

Delete a cookie valid to the path of the current page:

```javascript
Cookies.set('name', 'value', { path: '' })
Cookies.remove('name') // fail!
Cookies.remove('name', { path: '' }) // removed!
```

_IMPORTANT! When deleting a cookie and you're not relying on the [default attributes](#cookie-attributes), you must pass the exact same path and domain attributes that were used to set the cookie:_

```javascript
Cookies.remove('name', { path: '', domain: '.yourdomain.com' })
```

_Note: Removing a nonexistent cookie neither raises any exception nor returns any value._
