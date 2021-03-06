'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');
var reportControllers = require('./controllers/report.js');

// Create our express app
var app = express();

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/events', eventControllers.listEvents);
app.get('/events/new', eventControllers.newEvent);
app.post('/events/new', eventControllers.saveEvent);
app.get('/report', reportControllers.showReport);
app.get('/report/:id', reportControllers.showReport);
app.get('/events/:id', eventControllers.eventDetail);
app.get('/api/events', eventControllers.api);
app.post('/events/:id', eventControllers.rsvp);


app.get(/^\/events\/[0-9]+$/, eventControllers.eventDetail);


module.exports = app;