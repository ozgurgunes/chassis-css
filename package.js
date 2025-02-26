// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'chassis-css',
  summary: 'A CSS framework which synchronizes with Figma components by using design tokens.',
  version: '0.1.0',
  git: 'https://github.com/ozgurgunes/chassis-css.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/chassis.css',
    'dist/js/chassis.js'
  ], 'client')
})
