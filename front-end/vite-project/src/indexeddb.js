// /frontend/js/indexeddb.js

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('UVA-SOCA-DB', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('articles')) {
        const articleStore = db.createObjectStore('articles', { keyPath: 'id', autoIncrement: true });
        articleStore.createIndex('title', 'title', { unique: false });
        articleStore.createIndex('publishedAt', 'publishedAt', { unique: false });
        articleStore.createIndex('author', 'author', { unique: false });
      }

      if (!db.objectStoreNames.contains('paragraphs')) {
        const paragraphStore = db.createObjectStore('paragraphs', { keyPath: 'id', autoIncrement: true });
        paragraphStore.createIndex('articleId', 'articleId', { unique: false });
      }

      if (!db.objectStoreNames.contains('events')) {
        const eventStore = db.createObjectStore('events', { keyPath: 'id', autoIncrement: true });
      }

      if (!db.objectStoreNames.contains('executives')) {
        const executiveStore = db.createObjectStore('executives', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
}

function addArticle(article) {
  initDB().then((db) => {
    const transaction = db.transaction(['articles'], 'readwrite');
    const store = transaction.objectStore('articles');
    store.add(article);
  });
}

function getArticles() {
  return new Promise((resolve, reject) => {
    initDB().then((db) => {
      const transaction = db.transaction(['articles'], 'readonly');
      const store = transaction.objectStore('articles');
      const request = store.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(event.target.errorCode);
      };
    });
  });
}

function addParagraph(paragraph) {
  initDB().then((db) => {
    const transaction = db.transaction(['paragraphs'], 'readwrite');
    const store = transaction.objectStore('paragraphs');
    store.add(paragraph);
  });
}

function getParagraphs(articleId) {
  return new Promise((resolve, reject) => {
    initDB().then((db) => {
      const transaction = db.transaction(['paragraphs'], 'readonly');
      const store = transaction.objectStore('paragraphs');
      const index = store.index('articleId');
      const request = index.getAll(articleId);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(event.target.errorCode);
      };
    });
  });
}

function addEvent(event) {
  initDB().then((db) => {
    const transaction = db.transaction(['events'], 'readwrite');
    const store = transaction.objectStore('events');
    store.add(event);
  });
}

function getEvents() {
  return new Promise((resolve, reject) => {
    initDB().then((db) => {
      const transaction = db.transaction(['events'], 'readonly');
      const store = transaction.objectStore('events');
      const request = store.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(event.target.errorCode);
      };
    });
  });
}

function addExecutive(executive) {
  initDB().then((db) => {
    const transaction = db.transaction(['executives'], 'readwrite');
    const store = transaction.objectStore('executives');
    store.add(executive);
  });
}

function getExecutives() {
  return new Promise((resolve, reject) => {
    initDB().then((db) => {
      const transaction = db.transaction(['executives'], 'readonly');
      const store = transaction.objectStore('executives');
      const request = store.getAll();

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(event.target.errorCode);
      };
    });
  });
}
