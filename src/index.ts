import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Karina', age: 22 });

const root = document.getElementById('root');

if (!root) throw new Error('Parent not found');

const userEdit = new UserEdit(root, user);

userEdit.render();
console.log(userEdit);
