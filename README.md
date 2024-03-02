![Screenshot](https://i.imgur.com/2Hwk4I0.png)

[StrawberryLinks](https://www.strawberrylinks.com/) is an easy-to-use URL shortener service that allows users to create 
shortened versions of long URLs. This application helps to make long and unruly URLS 
more manageable and easier to share. 

## Features

- URL Shortening: Easily create shortened versions of long URLs.
- Custom Short Links: Registered users can customize the shortened URL to make it more memorable.
- Manage Short URLs: Access the account dashboard to view, edit, or delete created short URLs.
- Performance Tracking: Monitor the performance and engagement of your short URLs.

## Getting Started

![Screenshot](https://i.imgur.com/U41XRwa.png)

You can visit https://www.strawberrylinks.com/ for a live deployment of the application.

To run the application locally, you can use the following steps:

## Installation and Execution

1. Clone the repository locally for copy of source code.

`$ git clone https://github.com/josephdominguez/strawberrylinks`

This repository is a monorepo where the frontend is located in the `client` directory and the backend is 
located in the `server` directory.

2. Ensure you have Node.js and npm installed on your system. Install the project dependencies for both frontend and backend separately.

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

3. To run the application for development, you can use the following commands:

#### Frontend

```bash
cd client
npm run dev
```

#### Backend

```bash
cd server
npm run dev
```

4. To build the application for production, you can use the following commands:

#### Frontend

```bash
cd client
npm run build
```

#### Backend

```bash
cd server
npm run start
```

## Technologies Used

- Frontend: Vue.js (HTML, CSS, TypeScript)
- Backend: Node.js, Express
- Database: PostgreSQL
- CI/CD: Jenkins, Docker, Nginx, DigitalOcean

## Contributing

Contributions to the StrawberryLinks project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
