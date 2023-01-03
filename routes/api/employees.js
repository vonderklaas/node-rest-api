const express = require('express');
const router = express.Router();

const { ROLES_LIST } = require('../../config/rolesList');
const { verifyRoles } = require('../../middleware/verifyRoles');

const {
  getAllEmployees,
  getEmployee,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../../controllers/employeesController');

router.get('/', getAllEmployees);
router.get('/:id', getEmployee);

router.post(
  '/',
  verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
  createNewEmployee
);
router.put(
  '/',
  verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
  updateEmployee
);
router.delete('/', verifyRoles(ROLES_LIST.Admin), deleteEmployee);

module.exports = router;
