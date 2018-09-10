# todo-fancy
Portofolio Project

# User

## User attributes
* id (Number)
* email (String)
* password (String)
* loginType (String)
* createdAt (Date)
* updatedAt (Date)

## Sign up with new user info
----
* URL

  /users/signup

* Method

  POST

* Input example
  ```
  {
    email: 'johndoe@mail.com',
    password: '123',
  }
  ```

* Output example
  ```
  {
    message: 'sign up successfully',
    user: {
      id: 1,
      email: 'johndoe@mail.com',
      password: '123',
      loginType: 'app',
      createAt: '08-09-2018 13:53:21',
      updatedAt: '08-09-2018 13:53:21'
    }
  }
  ```

## Sign in while get an access token based on credentials
----
* URL

  /users/signin

* Method

  POST

* Input example
  ```
  {
    email: 'johndoe@mail.com',
    password: '123'
  }
  ```

* Output example
  ```
  {
    message: 'sign in successfully',
    token: 'ada231hasjdhash141jhasjdhjashd'
  }
  ```

# Todo

## Todo attributes
* name
* description
* status
* dueDate
* createdAt
* updatedAt

## Todo Collection

### Create new todo
----
* URL

  /todos

* Method

  POST

* Input example
  ```
  {
    name: 'do something',
    description: 'something',
    dueDate: '10-09-2018 13:53:21'
  }
  ```

* Output example
  ```
  {
    message: 'success create new todo',
    todo: {
      name: 'do something',
      description: 'something',
      dueDate: '10-09-2018 13:53:21',
      status: false,
      createdAt: '09-09-2018 13:53:21',
      updatedAt: '09-09-2018 13:53:21'
    }
  }
  ```

### List Todo
----
* URL

  /todos/:userId

* Method

  GET

* Output example

  ```
  [
    {
      name: 'do something',
      description: 'something',
      dueDate: '10-09-2018 13:53:21',
      status: false,
      createdAt: '09-09-2018 13:53:21',
      updatedAt: '09-09-2018 13:53:21'
    }
  ]
  ```

### Todo Detail
----
* URL

  /todos/:todoId

* Method

  GET

* Output example
  ```
  {
    email: 'johndoe@mail.com',
    loginType: 'app',
    todos: [
      {
        name: 'do something',
        description: 'something',
        dueDate: '10-09-2018 13:53:21',
        status: false,
        createdAt: '09-09-2018 13:53:21',
        updatedAt: '09-09-2018 13:53:21'
      }
    ]
  }
  ```


### Update Todo
----
* URL

  /todos

* Method

  PUT

* Input example
  ```
  todo: {
    name: 'learn something today',
    description: 'something',
    dueDate: '11-09-2018 13:53:21'
  }
  ```

* Output example
  ```
  todo: {
    name: 'learn something today',
    description: 'something',
    dueDate: '10-09-2018 13:53:21',
    status: false,
    createdAt: '09-09-2018 13:53:21',
    updatedAt: '10-09-2018 13:53:21'
  }
  ```

### Finish Todo
----
* URL

  /todos/:todoId/finish

* Method

  PUT

* Output example
  ```
  {
    message: 'success finish todo'
  }
  ```

### Delete Todo
* URL

  /todos/:id

* Method

  DELETE

* Output example
  ```
  {
    message: 'delete todo successfully'
  }
  ```
