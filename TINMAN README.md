
## Change proxy setting
## 2 Changes currently needed
### First change / create proxy configuration.

**src/proxy.conf.json**
```
{
  "/api/coreapi": {
    "target": "https://crm.koneqt.com",
    "secure": false,
    "logLevel": "debug"
  }
}


/*
URL that contains "/api/coreapi" will be swaped
Use this config if you want to test angular app with local server.
{
  "/koneqtv2-tinman/web": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug"
  }
}
*/
```


Also, change api url from environment.
Environment.ts file will be
### Change / Create api url from environment.

**src/environments/environment.ts**
```
export const environment = {
  production: false,
  apiEndPoint: 'http://localhost:4200',
  liveURL: 'http://angular.koneqt.com',
  documentURL: 'http://crm.koneqt.com/dta/dms/'
  // Change this url if you want to test with local server
  // apiEndPoint: 'http://localhost:4200/koneqtv2-core/web'
};
```

**src/environments/environment.prod.ts**
```
export const environment = {
  production: true,
  apiEndPoint: 'https://crm.koneqt.com',
  liveURL: 'http://angular.koneqt.com',
  documentURL: 'http://crm.koneqt.com/dta/dms/'
};
```

## Deployment

### 1. Build production

To build Angular production app, run `ng build`.
It will generate app in `dist/koneqt` folder.

### 2. Add rewrite rule for Angular routing

Detailed [Guide](https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml)

Apache: add a rewrite rule to the `.htaccess` file.

```
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# If the requested resource doesn't exist, use index.html
RewriteRule ^ /index.html
```

Examples [here](https://angular.io/guide/deployment#fallback-configuration-examples)

### 3. Copy app to sever
