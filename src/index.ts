import { User } from './models/User';

const user = new User({ name: 'Yomar', age: 37 });
console.log(user);

user.set({ name: 'Carlos', age: 35 });

user.on('change', () => {
  console.log('Create User');
});

user.on('change', () => {
  console.log('Save User');
});

user.trigger('change');
