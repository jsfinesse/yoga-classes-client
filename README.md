# Yoga Classes Admission Form - Frontend

This repository contains the frontend code for the Yoga Classes Admission Form application.

To get to the backend repo, [click here](https://github.com/jsfinesse/yoga-classes-backend)

## Overview

The Yoga Classes Admission Form is a simple web application built using Next.js, React, and Axios. It allows users to submit their details for enrollment in yoga classes.

## Features

-   User-friendly form for entering personal details and selecting a preferred class slot.
-   Integration with a backend API for handling user enrollment.

## Getting Started

Follow these steps to run the frontend locally:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/yoga-classes-frontend.git

    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd yoga-classes-frontend
    ```

3. **Install the Dependencies:**

    ```bash
     npm install
    ```

4. **Start the Development Server:**

    ```bash
    npm run dev
    ```

    The frontend should now be running on [localhost:3000](http://localhost:3000).

## Dockerized Deployment

**Prerequisites:**

-   Docker installed on your machine

**Build and Run the Docker Image:**

1. Build

```bash
docker build -t yoga-classes-frontend .
```

2. Run

```bash
docker run -p 3000:3000 yoga-classes-frontend
```

## Dependencies

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   Axios

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
