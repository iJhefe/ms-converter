## ioredis-aux

###### A helper package for operations with Redis
------------



###### Add to your project
`npm i ioredis-aux`

`yarn add ioredis-aux`

------------

##### Examples
###### Code scope
```typescript
import IoredisAux from "./main";

const ioredis = new IoredisAux({
    host: "127.0.0.1",
    port: 6379,
    keyPrefix: "EX_",
});

interface Entity {
    id: number;
    username: string;
}

const KEY = "EXAMPLE";

const objectExample: Entity = { id: 1, username: "Jeffyter" };

const createFn = id => () => {
    return { id: id, username: 'User ' + id }
}
```

**saveOrUpdate**
```typescript
// Will compare if exists a object with id "objectExample.id"
// If this exists, will update for new object example, else will create add the object
// to "table" array
 const memoized = await ioredis.saveOrUpdate<Entity>(KEY, objectExample, {
	id: objectExample.id,
});
```

**find**
```typescript
// Will find a entity where id = 1
 const searchOne = await ioredis.find<Entity>(KEY, {
 	where: {
    		id: 1,
   	},
});
// Will find a entity where id = 1 OR username is "other"
const searchTwo = await ioredis.find<Entity>(KEY, {
	where: {
    	id: 1,
    	username: 'other'
   	},
	operator: 'OR'
});

// Available operators: "AND" | "OR" | "NOT" | "NOT_AND" | "NOT_OR"
// Default operator: "AND"
```

**findOrCreate**
```typescript
// Will search user where id = 2
// If not exists, will execute a function what create a userId 2 in the memory
// The "createFn" is usually a database function
const userId2 = await ioredis.findOrCreate(KEY, { where: { id: 2 } }, createFn(2))
```

**findOne**
```typescript
// Will try find the entity with "id" 1
const searchThree = await ioredis.findOne<Entity>(KEY, 1);

// Will find where username !== 'other'
const searchFour = await ioredis.findOne<Entity>(KEY, { 
	where: {
		username: 'other' ,
	} ,
	operator: 'NOT',
});
```

**delete**
```typescript
// Will delete where id = 1
const deleted = await ioredis.delete<Entity>(KEY, 1)

// with where options
const deletedTwo = await redis.delete<Entity>(KEY, {
	where: {
		username: 'Jeffyter',
	},
})
```
------------


##### Available Functions
1. saveOrUpdate
2. find
3. findOrCreate
4. findOne
5. delete
