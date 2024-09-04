import path from 'node:path';

export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');


// process.cwd() - повертає абсолютний шлях до проекту

// export const PATH_DB = path.resolve('src', 'db', 'db.json') 
// це другий спосіб отримати абсолютний шлях до файлу