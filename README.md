# CodeCrack

## Architecture Of The Application

![Example Image](images/Architecture.png)

## Running the Application Locally

Clone the Project
```
git clone https://github.com/ShauryaSood2003/CodeCrack
```
Run to Install Dependencies
```
cd frontEnd
npm install
```
```
cd backend
npm install
```
```
cd workers
npm install
```
```
cd websocket
npm install
```

## Run prisma using Docker 
Important
- Replace the **.env.example** file with **.env** file inside the backend folder
```
docker run -e POSTGRES_PASSWORD="password" -d -p 5432:5432 postgres
```
```
npx prisma migrate dev --name prisma_schema
```
> You can also use prisma cloud provider just replace the url link in **.env** file 
> [Neon](https://neon.tech/) 
> [Avion](https://www.avion.io/)

## Run Redis Locally
- Redis Queue
```
docker run --name my-queue -d -p 6379:6379 redis
```
- Redis PubSub
```
docker run -d --name my-pubsub -p 6381:6379 redis
```

## Contributing

We welcome contributions from everyone! Whether you're a beginner or an expert, we appreciate any help in improving this project. Here are some ways you can contribute:

1. **Reporting Bugs**: If you find any bugs or issues, please open an issue on GitHub. Provide as much detail as possible, including steps to reproduce the problem and any relevant screenshots or log messages.

2. **Feature Requests**: Have an idea for a new feature? Open an issue and describe your idea. We love to hear how we can make the project better.

3. **Code Contributions**: If you want to contribute code, fork the repository, make your changes, and open a pull request. Make sure to follow the coding standards and include tests for any new functionality.

4. **Documentation**: Help us improve our documentation. If you find something unclear or missing, feel free to submit updates.


### How to Contribute

1. Fork the repository:
    ```bash
    git clone https://github.com/ShauryaSood2003/CodeCrack
    ```
3. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b my-new-feature
    ```
4. Make your changes.
5. Commit your changes:
    ```bash
    git commit -am 'Add some feature'
    ```
6. Push to the branch:
    ```bash
    git push origin my-new-feature
    ```
7. Open a pull request.
