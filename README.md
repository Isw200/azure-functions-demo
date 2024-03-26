# Azure Functions CRUD Operations Demo

This repository contains a demo for performing CRUD (Create, Read, Update, Delete) operations using Azure Functions.

## Overview

The project includes four Azure Functions:

- `getExample`: Retrieves data from a database using a GET request.
- `createExample`: Creates new data in a database using a POST request.
- `updateExample`: Updates existing data in a database using a PUT request.
- `deleteExample`: Deletes data from a database using a DELETE request.

Each function simulates a different CRUD operation.

## Setup

1. Clone this repository.
2. Navigate to the project directory.
3. Install the required dependencies with `npm install`.
4. Start the Azure Functions runtime with `func start`.

## Usage

You can trigger each function by sending a request to its corresponding endpoint. For example, to trigger the `getExample` function, you would send a GET request to `http://localhost:7071/api/getExample`.

## Blog Post

For a detailed explanation of the code and how it works, check out the accompanying blog post: [Your Blog URL Here]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
