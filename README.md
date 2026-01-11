# Daily Grind Server

## Description

A simple Express.js server that serves static HTML pages for a café website. This project demonstrates fundamental concepts of building a web server with Node.js and Express, including routing, static file serving, and proper path handling for cross-platform compatibility.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Path Module** - Cross-platform file path handling
- **Nodemon** - Development tool for automatic server restart

## <a name="features"></a> Features

**Static File Serving** - Serves HTML files from the public directory  
**Route Handlers** - Custom routes for home and contact pages  
**Cross-Platform Compatibility** - Uses path module for reliable file paths  
**Auto-Reload Development** - Nodemon automatically restarts server on changes  
**Clean Code Structure** - Organized and maintainable codebase  

**In Progress:**

- [ ] Additional pages (menu, about, etc.)
- [ ] API endpoints for dynamic content

## <a name="nextsteps"></a>Future Features

- **Form Handling** - Process contact form submissions
- **Database Integration** - Store and retrieve café menu items
- **API Endpoints** - RESTful API for menu and orders
- **User Authentication** - Customer accounts and order history
- **Admin Dashboard** - Manage menu items and orders
- **Email Notifications** - Contact form and order confirmations
- **Payment Integration** - Online ordering system
- **Mobile Responsive Design** - Enhanced mobile experience

## <a name="author"></a>About The Author

**[Clarence Franklin](https://github.com/cfra8189)**

## Learning Reflections

**1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?**

`res.send()` sends data directly like strings, HTML, or JSON objects. I use it when I'm generating content on the fly or sending simple responses. `res.sendFile()` sends an entire file from disk like HTML files, images, or PDFs. I use it when I have pre-made files to serve.

**2. Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?**

The path module is necessary because different operating systems use different path separators - Windows uses backslashes and Mac/Linux use forward slashes. Relative paths are also unreliable since they depend on where Node.js started from, and they can create security issues. The path module fixes this by using `__dirname` to get the absolute path and `path.join()` to combine paths properly for any OS.

**3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?**

First, I'd create menu.html in my public folder. Then I'd add a route in server.js using `app.get('/menu', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'menu.html')); });`. Nodemon would auto-restart the server, and I'd visit `http://localhost:3000/menu` to see the page.

## Lab 2 Reflections

**1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?**

Re-formatting the data gives me control over my API's structure. If the external API changes, my client code doesn't break. It also improves security by not exposing unnecessary data, improves performance with smaller payloads, and makes the API simpler for clients since they only get what they need.

**2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?**

Generic error messages are better for security - detailed errors can expose file paths, API keys, or system vulnerabilities. They also improve user experience since technical stack traces confuse end users. Plus, I stay in control of the error format and don't leak information about my backend architecture.

**3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?**

I'd modify the route to accept a query parameter and pass it to the external API. I'd use req.query.language to get the language from the request, default to English if not provided, and add it to the API URL like ?language=${language}. Then clients could call /api/fun-fact?language=de to get a fact in German.

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone [your-repository-url]
   ```

2. Navigate to project directory:

   ```bash
   cd daily-grind-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server with nodemon:

   ```bash
   nodemon server.js
   ```

   Or with regular Node:

   ```bash
   node server.js
   ```

5. View in browser at `http://localhost:3000`

## Available Routes

- `GET /` - Home page (index.html)
- `GET /contact` - Contact page (contact.html)

## Troubleshooting

**Port already in use:**
If you see an error that port 3000 is already in use:

1. Find the process using port 3000:
   ```bash
   netstat -ano | findstr :3000
   ```

2. Kill the process (replace PID_NUMBER with the actual process ID):
   ```bash
   taskkill //F //PID PID_NUMBER
   ```

3. Restart your server

## Project Structure

```
daily-grind-server/
├── public/
│   ├── index.html
│   └── contact.html
├── server.js
├── package.json
└── README.md
```

## Works Cited:

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Path Module](https://nodejs.org/api/path.html)
- [Nodemon Documentation](https://nodemon.io/)
- [MDN Web Docs - Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)