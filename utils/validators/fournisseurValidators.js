const { check} = require('express-validator');
const validatorMiddleware=require('../../middlewares/validatorMiddleware.js');

exports.getfournisseurValidator=[
    check('id').isMongoId().withMessage('Invalid fournisseur id format'),
    validatorMiddleware,
];

exports.createfournisseurValidator=[
    check('nom_fournisseur').notEmpty().withMessage('nom_fournisseur required'),
    check('num_tel').notEmpty().withMessage('num_tel required'),
    check('email').notEmpty().withMessage('email required').isEmail().withMessage('invalid Email'),
    check('adresse').optional()
    ,
    validatorMiddleware,
];

exports.updatefournisseurValidator=[
    check('id').isMongoId().withMessage('Invalid fournisseur id format'),
    validatorMiddleware,
];

exports.deletefournisseurValidator=[
    check('id').isMongoId().withMessage('Invalid fournisseur id format'),
    validatorMiddleware,
];
