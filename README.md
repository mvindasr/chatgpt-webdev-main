# ChatGPT API WebDev Project

---

Includes a basic reproduction of chatgpt bot for generating responses and a playground to test prompts. Also an app called **_Cooking Masters_** is contained in the project which uses the chatgpt api to generate recipes and cooking steps based on user input.

---

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/mvindasr/chatgpt-webdev-main.git
```

2. Navigate to the project directory

```bash
cd chatgpt-webdev-main
```

3. Install all dependencies for each subproject

```bash
npm install
```

4. Setup .env file

Create a `.env` file in the `root` of the project. You can do it by copying the `.env.example` file.

```bash
cp ./.env.example ./.env
```

> The command assumes an unix environment where the `cp` command is available.

Once you have the `.env` file, add the chatgpt api token to enable prompts requests:

```env
    API_KEY='your token'
```

## Usage

Once you have set up the project and installed the dependencies, go to samples folder and run the server:

```bash
npm start
```

This command will start the development server at http://localhost:3000/. You can try /chat and /playground here. Also you can try CookingMasters app by running it in another port with Go Live feature in VSCode or any other option you prefer while server is running.

## Screenshots

### Cooking Masters

![alt text](<Screenshot 2024-11-28 at 11.17.08 AM.png>)
![alt text](<Screenshot 2024-11-28 at 11.17.55 AM.png>)
![alt text](<Screenshot 2024-11-28 at 11.19.30 AM.png>)

# ChatGPT bot

![alt text](<Screenshot 2024-11-28 at 11.47.38 AM.png>)
