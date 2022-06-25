import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/arffdev/arffdev.github.io.git',
  user: {
   name: 'Coby Arff',
   email: 'arffdevelopment@gmail.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);