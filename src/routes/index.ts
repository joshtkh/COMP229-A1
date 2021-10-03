import express from "express";
const router = express.Router();

// Print to the console to let dev know the app is running.
console.log("Application started.");

/* GET all needed pages */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('projects', { title: 'Projects' });
});

router.get('/services', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('services', { title: 'Services' });
});

router.get('/contact', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('contact', { title: 'Contact' });
});

export default router;