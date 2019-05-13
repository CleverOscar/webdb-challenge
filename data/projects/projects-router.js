const router = require('express').Router();

const Projects = require('./projects-model');

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(500).json({ message: 'We ran into an error retrieving the projects' });
    });
});

router.get('/:id', (req, res) => {
  Projects.findById(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: 'We ran into an error retrieving the projects' });
    });
});

router.post('/', (req, res) => {
    Projects.add(req.body)
      .then(project => {
        res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error adding the project' });
      });
  });

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
      .then(project => {
        res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error updating the project' });
      });
});

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
      .then(project => {
        res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json({ message: 'We ran into an error deleting the project' });
      });
});

router.get('/:id/actions', (req, res) => {
  Projects.findWithActions(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
