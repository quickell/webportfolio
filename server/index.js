const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "media-src": ["'self'", "data:", "blob:"],
      "default-src": ["'self'"],
      "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      "style-src": ["'self'", "'unsafe-inline'"],
    },
  },
}));
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build in production
if (!isDevelopment) {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Serve static files from public folder in development
if (isDevelopment) {
  app.use('/videos', express.static(path.join(__dirname, '../client/public/videos')));
  app.use('/images', express.static(path.join(__dirname, '../client/public/images')));
  app.use('/manifest.json', express.static(path.join(__dirname, '../client/public/manifest.json')));
  app.use('/favicon.ico', express.static(path.join(__dirname, '../client/public/favicon.ico')));
}

// Routes
// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Here you can add validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Send to Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/mldwelon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      })
    });
    
    if (formspreeResponse.ok) {
      res.json({ success: true, message: 'Message sent successfully' });
    } else {
      res.status(500).json({ error: 'Failed to send message' });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Catch all handler for React app
app.get('*', (req, res) => {
  if (isDevelopment) {
    // In development, let React dev server handle the routing
    res.status(404).json({ message: 'Route not found' });
  } else {
    // In production, serve the React build
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${isDevelopment ? 'Development' : 'Production'}`);
});
