const { Router } = require("express");

const { CommentsController } = require("../controllers/comments.controller");
const router = Router();

router.get("/:postsid", CommentsController.getcomments);
router.post("/:postsid", CommentsController.postcomments);

module.exports = router;