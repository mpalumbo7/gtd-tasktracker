import Task from '../models/Task.model';

export function getTasks(req, res) {
    Task.find().sort('-dateCreated').exec((err, docs) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(docs);
    });
}

export function getTask(req, res) {
    Task.findOne({_id: req.params.id}).exec((err, doc) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(doc);
    });
}

export function addTask(req, res) {
    // Check for required fields
    if (!req.body.task.title || !req.body.post.status || !req.body.post.dateCreated) {
        res.status(403).end();
    }

    const newDoc = new Task(req.body.task);

    newDoc.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(saved);
    });
}

export function deleteTask(req, res) {
    Task.findOne({_id: req.params.id}).exec((err, doc) => {
        if (err) {
            res.status(500).send(err);
        }

        doc.remove(() => {
            res.status(200).end();
        });
    });
}
