module.exports = {
  name: 'ng-rxjs-forms',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-rxjs-forms',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
