const newUsers = require('../controllers/user.controller');
const upload = require('../middleware/upload');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: user's email.
 *           example: sonpham130998@gmail.com
 *         fullName:
 *           type: string
 *           description: The user's full name.
 *           example: Phạm Xuân Sơn
 *         gender:
 *           type: string
 *           description: The user's gender.
 *           example: male
 *         age:
 *           type: number
 *           description: The user's age.
 *           example: 23
 *         address:
 *           type: string
 *           description: The user's address.
 *           example: 24b, street 10, district 2
 *         phone:
 *           type: string
 *           description: The user's phone.
 *           example: +84768680628
 *         profileImg:
 *           type: string
 *           description: The user's link of image.
 *           example: http://localhost:5000/public/dcffaa94-04c7-47c7-9d65-05ca35a51376-images.png
 *         
 */

module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    //Create a new User

/**
* @swagger
* /signup:
*   post:
*     summary: register user.
*     requestBody:
*       required: true
*       content:
*         multipart/form-data:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*                 description: user's email.
*                 example: sonpham130998@gmail.com
*               fullName:
*                  type: string
*                  description: The user's full name.
*                  example: Phạm Xuân Sơn
*               gender:
*                  type: string
*                  description: The user's gender.
*                  example: male
*               age:
*                  type: number
*                  description: The user's age.
*                  example: 23
*               address:
*                  type: string
*                  description: The user's address.
*                  example: 24b, street 10, district 2
*               phone:
*                  type: string
*                  description: The user's phone.
*                  example: +84768680628
*               profileImg:
*                  type: string
*                  description: The user's link of image.
*                  example: http://localhost:5000/public/dcffaa94-04c7-47c7-9d65-05ca35a51376-images.png
*     responses:
*       200:
*         description: Created
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: object
*                   properties:
*                     email:
*                       type: string
*                       description: user's email.
*                       example: sonpham130998@gmail.com
*                     fullName:
*                       type: string
*                       description: The user's full name.
*                       example: Phạm Xuân Sơn
*                     gender:
*                       type: string
*                       description: The user's gender.
*                       example: male
*                     age:
*                       type: number
*                       description: The user's age.
*                       example: 23
*                     address:
*                       type: string
*                       description: The user's address.
*                       example: 24b, street 10, district 2
*                     phone:
*                       type: string
*                       description: The user's phone.
*                       example: +84768680628
*                     profileImg:
*                       type: string
*                       description: The user's link of image.
*                       example: http://localhost:5000/public/dcffaa94-04c7-47c7-9d65-05ca35a51376-images.png
*/

    app.post('/signup', upload.single('profileImg'), newUsers.signUp);
    //Get all users

/**
 * @swagger
 * /getusers:
 *   get:
 *     summary: Retrieve a list of registered users.
 *     description: Retrieve a list of registered users form MongoDB.
 *     responses:
 *       200:
 *         description: A list of registered users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       email:
 *                         type: string
 *                         description: user's email.
 *                         example: sonpham130998@gmail.com
 *                       fullName:
 *                         type: string
 *                         description: The user's full name.
 *                         example: Phạm Xuân Sơn
 *                       gender:
 *                         type: string
 *                         description: The user's gender.
 *                         example: male
 *                       age:
 *                         type: number
 *                         description: The user's age.
 *                         example: 23
 *                       address:
 *                         type: string
 *                         description: The user's address.
 *                         example: 24b, street 10, district 2
 *                       phone:
 *                         type: string
 *                         description: The user's phone.
 *                         example: +84768680628
 *                       profileImg:
 *                         type: string
 *                         description: The user's link of image.
 *                         example: http://localhost:5000/public/dcffaa94-04c7-47c7-9d65-05ca35a51376-images.png
 */
    app.get('/getusers', newUsers.getAll);
}